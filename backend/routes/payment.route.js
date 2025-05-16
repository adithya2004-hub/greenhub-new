import express from 'express';
import Order from '../models/order.model.js';
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();
router.post('/create-cod', protectRoute,async (req, res) => {
  const { userId, products, totalAmount, shippingAddress } = req.body;

  try {
    const newOrder = new Order({
      user: userId,
      products,
      totalAmount,
      shippingAddress,
      razorpaySessionId: null, // Not used for COD
      paymentMethod: 'COD',
      status: 'Pending',
    });

    await newOrder.save();
    res.json({ success: true, orderId: newOrder._id });
  } catch (error) {
    console.error("COD Order creation error:", error);
    res.status(500).json({ success: false, message: "Failed to create order" });
  }
});
