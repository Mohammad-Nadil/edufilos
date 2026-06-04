import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { planCode, madrashaName, email, phone, billingCycle } =
      await request.json();

    let amount = 0;
    const upperPlanCode = (planCode || "STANDARD").toUpperCase();

    if (upperPlanCode === "STANDARD") {
      amount = 4900;
    } else if (upperPlanCode === "PREMIUM") {
      amount = 9999;
    } else if (upperPlanCode === "ENTERPRISE") {
      amount = 14999;
    } else {
      amount = 4900;
    }

    const transactionId = `TXN-${Date.now()}-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;

    const paymentPayload = {
      store_id: process.env.SSLCOMMERZ_STORE_ID,
      store_passwd: process.env.SSLCOMMERZ_STORE_PASSWORD,
      total_amount: amount.toString(),
      currency: "BDT",
      tran_id: transactionId,
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/payment/success?id=${transactionId}`,
      fail_url: `${process.env.NEXT_PUBLIC_APP_URL}/payment/failed?id=${transactionId}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/payment/cancel?id=${transactionId}`,
      // ipn_url: `${process.env.NEXT_PUBLIC_APP_URL}/api/payment/ssl-ipn`,
      shipping_method: "NO",
      product_name: `EduFilos Subscription: ${upperPlanCode}`,
      product_category: "SaaS ERP",
      product_profile: "non-physical-goods",
      cus_name: madrashaName || "Madrasha Admin",
      cus_email: email || "admin@madrasha.com",
      cus_add1: "Dhaka, Bangladesh",
      cus_city: "Dhaka",
      cus_country: "Bangladesh",
      cus_phone: phone || "01700000000",
    };

    const isSandbox = process.env.SSLCOMMERZ_IS_SANDBOX === "true";
    const sslUrl = isSandbox
      ? "https://sandbox.sslcommerz.com/gwprocess/v4/api.php"
      : "https://gwprocess.sslcommerz.com/gwprocess/v4/api.php";
    const formBody = Object.keys(paymentPayload)
      .map(
        (key) =>
          encodeURIComponent(key) +
          "=" +
          encodeURIComponent(paymentPayload[key]),
      )
      .join("&");

    const sslResponse = await fetch(sslUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formBody,
    });

    const sslData = await sslResponse.json();

    if (sslData?.status === "SUCCESS" && sslData?.GatewayPageURL) {
      return NextResponse.json({ url: sslData.GatewayPageURL });
    } else {
      return NextResponse.json(
        { error: sslData?.failedreason || "Initialization failed" },
        { status: 400 },
      );
    }
  } catch (error) {
    console.error("SSLCommerz Init Route API Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
