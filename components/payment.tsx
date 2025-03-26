"use client";

import { useState } from "react";
import { initializePaddle } from "@paddle/paddle-js";

export default function Payment() {
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async () => {
    setIsLoading(true);
    try {
      const paddle = await initializePaddle({
        environment: "sandbox",
        token: process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN || 'test_token'
      });

      if (!paddle) throw new Error("Failed to initialize Paddle");

      await paddle.Checkout.open({
        items: [{ priceId: "pri_01jhh1gaejf66c6v82jft3gjwz", quantity: 1 }],
        settings: {
          displayMode: "overlay",
          theme: "dark",
          successUrl: window.location.origin + "/success",
        },
      });
    } catch (error) {
      console.error("Paddle initialization error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button 
      className="bg-neutral-900 text-white px-5 py-2 rounded-md disabled:opacity-50" 
      onClick={handleCheckout}
      disabled={isLoading}
    >
      {isLoading ? "Loading..." : "Buy now"}
    </button>
  );
}
