import express from "express";
import Razorpay from "razorpay";
import crypto from "crypto";
const router = express.Router();

router.post("/order", async (req, res) => {
  try {
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const options = {
      amount: req.body.amount, // Amount in paise
      currency: req.body.currency,
      receipt: req.body.receipt,
    };
    const order = await razorpay.orders.create(options);

    if (!order) {
      return res.status(500).send("Error in generating order ID");
    }
    res.json(order);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
});

router.post("/payment-success", (req, res) => {
  const { orderId, paymentId, signature } = req.body;

  const body = `${orderId}|${paymentId}`;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(body)
    .digest("hex");

  if (expectedSignature === signature) {
    res.status(200).json({ success: true, message: "Payment verified successfully" });
  } else {
    res.status(400).json({ success: false, message: "Invalid signature" });
  }
});

export default router;
