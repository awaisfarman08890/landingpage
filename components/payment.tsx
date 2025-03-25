"use client"

import { useEffect } from "react";

declare global {
    interface Window {
        Paddle: {
            setup: (config: { token: string; environment: string; headers?: Record<string, string> }) => void;
            Checkout: {
                open: (options: {
                    items: Array<{ priceId: string; quantity: number }>;
                    settings: { displayMode: string; theme: string; successUrl: string };
                }) => void;
            };
        };
    }
}

export default function Payment() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://cdn.paddle.com/paddle/v2/paddle.js";
        script.async = true;
        script.onload = () => {
            const token = process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN;
            if (!token) {
                console.error("Paddle client token is missing");
                return;
            }
            window.Paddle.setup({
                token,
                environment: "sandbox",
                headers: {
                    "paddle-clienttoken": token
                }
            });
        };
        document.body.appendChild(script);
    }, []);

    const handleCheckout = () => {
        if (!window.Paddle) return alert("Paddle not initialized");
        window.Paddle.Checkout.open({
            items: [
                {
                    priceId: "pri_01jq4pew9y3g54mmphq953zafp",
                    quantity: 1,
                }
            ],
            settings: {
                displayMode: "overlay",
                theme: "light",
                successUrl: "https://localhost:3000/success",
            }
        });
    }

    return (
        <button 
            onClick={handleCheckout}
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 sm:px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
            Buy Now
        </button>
    )
}
