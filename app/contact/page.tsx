"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background dark:bg-gray-900">
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/" 
            className="text-primary hover:text-primary/90 mb-8 inline-block"
          >
            ← Back to Home
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold mb-8">Contact Us</h1>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
                <p className="text-muted-foreground">
                  Have questions about our PDF summarization service? We&apos;re here to help!
                </p>
              </div>

              <div>
                <h3 className="font-medium mb-2">Email</h3>
                <p className="text-muted-foreground">support@shortpdf.com</p>
              </div>

              <div>
                <h3 className="font-medium mb-2">Address</h3>
                <p className="text-muted-foreground">
                  123 PDF Street<br />
                  Document City, DC 12345<br />
                  United States
                </p>
              </div>

              <div>
                <h3 className="font-medium mb-2">Business Hours</h3>
                <p className="text-muted-foreground">
                  Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                  Saturday - Sunday: Closed
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 rounded-md border bg-background"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 rounded-md border bg-background"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2 rounded-md border bg-background"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 rounded-md border bg-background min-h-[150px]"
                  required
                ></textarea>
              </div>

              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
} 