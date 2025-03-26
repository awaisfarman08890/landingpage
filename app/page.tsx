"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";

import {
  CheckCircle2,
  CreditCard,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import Payment from "@/components/payment";

export default function PaymentLandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme } = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 17;
  const videoRef = useRef<HTMLVideoElement>(null);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Handle mobile menu toggle
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Add theme class to body
  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
  }, [theme]);

  // Handle slider navigation
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  // Auto-advance slider
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-background dark:bg-gray-900">
      {/* Header with Menu and Dark/Light Toggle */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:bg-gray-900/95">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Link href="#" className="flex items-center gap-2 font-semibold">
              <CreditCard className="h-6 w-6" />
              <span>ShortPDF</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Home
            </Link>
            <Link
              href="/privacy-policy"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Privacy Policy
            </Link>

            <Link
              href="/contact-us"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
            <Link
              href="#payment"
              className="hidden md:inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Buy Now
            </Link>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 top-16 z-50 bg-black text-black md:hidden">
            <div className="container p-6 bg-white">
              <nav className="flex flex-col gap-6">
                <Link
                  href="#features"
                  className="text-lg font-medium text-black hover:text-primary"
                  onClick={toggleMobileMenu}
                >
                  Home
                </Link>
                <Link
                  href="/privacy-policy"
                  className="text-lg font-medium text-black hover:text-primary"
                  onClick={toggleMobileMenu}
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/contact-us"
                  className="text-lg font-medium text-black hover:text-primary"
                  onClick={toggleMobileMenu}
                >
                  Contact
                </Link>
                <div className="flex justify-center">
                  <Link
                    href="/privacy-policy"
                    className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    onClick={toggleMobileMenu}
                  >
                   <Payment />
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Video Section */}
        <section
          id="video"
          className="w-full py-8 sm:py-12 md:py-24 lg:py-32 bg-muted/30 dark:bg-gray-800/30"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary/10 text-primary px-3 py-1 text-sm">
                    AI PDF Summarizer SAAS Template
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl/tight dark:text-white">
                    Convert PDFs into clear, concise summaries
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground text-base sm:text-lg md:text-xl dark:text-gray-300">
                    Upload the PDF, and I&apos;ll provide a simple, clear, and
                    easy-to-read summary for you.
                  </p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm sm:text-base">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>
                      Generate clear, beautiful summaries from your PDFs
                      instantly.
                    </span>
                  </li>
                  <li className="flex items-center gap-2 text-sm sm:text-base">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Quick & Clear PDF Summaries</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm sm:text-base">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Simplify Your PDFs</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm sm:text-base">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Fully Responsive</span>
                  </li>
                </ul>
                <div className="pt-4">
                  
                    <div>
                    <Payment />

                    </div>
                
                </div>
                {/* page method */}
              </div>
              <div className="flex items-center justify-center rounded-lg overflow-hidden bg-muted shadow-lg min-h-[300px]">
                <div className="relative w-full aspect-video group bg-gray-200 dark:bg-gray-800">
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover cursor-pointer rounded-lg"
                    controls={false}
                    autoPlay
                    muted
                    loop
                    playsInline
                    src="/video.mp4"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (videoRef.current) {
                        videoRef.current.muted = !videoRef.current.muted;
                      }
                    }}
                  >
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/10 pointer-events-none"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    {videoRef.current?.paused && (
                    <Button
                      variant="outline"
                      size="icon"
                        className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-background/80 text-primary hover:bg-background/90 shadow-lg"
                        onClick={(e) => {
                          e.stopPropagation();
                          videoRef.current?.play();
                        }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                          className="h-5 w-5 sm:h-6 sm:w-6"
                      >
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                      <span className="sr-only">Play Video</span>
                    </Button>
                    )}
                  </div>
                  {!videoRef.current?.paused && (
                    <div className="absolute inset-0 flex items-center justify-center gap-2 bg-background/80 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-fit h-fit m-auto">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-10 w-10 sm:h-12 sm:w-12"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (videoRef.current) {
                            videoRef.current.muted = !videoRef.current.muted;
                          }
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-3 w-3 sm:h-4 sm:w-4"
                        >
                          {videoRef.current?.muted ? (
                            <path d="M11 5L6 9H2v6h4l5 4V5z" />
                          ) : (
                            <path d="M11 5L6 9H2v6h4l5 4V5z" />
                          )}
                        </svg>
                        <span className="sr-only">Toggle sound</span>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Image Slider Section */}
        <section id="gallery" className="w-full py-8 sm:py-12 md:py-24 lg:py-32 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col space-y-4 mb-8 sm:mb-10 text-gray-700 dark:text-gray-300 p-2 sm:p-4 md:p-8">
              <div className="flex flex-col items-center justify-center space-y-2 mb-8 sm:mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter md:text-5xl/tight text-black dark:text-white">Features</h2>
                <p className="max-w-[900px] text-muted-foreground text-sm sm:text-base md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-300 text-center">Sommaire - Complete AI SaaS Template for AI-Powered PDF Summarization</p>
  </div>

              <div className="space-y-6 sm:space-y-8 max-w-4xl mx-auto">
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white">✅ Document Processing Capabilities</h3>
                  <p className="dark:text-gray-300 text-sm sm:text-base md:text-lg">✅ Complete PDF parsing and text extraction implementation <br />✅ OpenAI GPT-4 integration and Gemini AI Flash for high-quality summarization <br />✅ Emoji-enhanced output generation and beautiful Instagram-like summary reels <br />✅ Scalable handling of documents up to 25MB</p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white">User-Facing Features</h3>
                  <p className="dark:text-gray-300 text-sm sm:text-base md:text-lg">✅ Beautiful, interactive summary viewer with custom animations <br />✅ Progress tracking implementation <br />✅ Complete dashboard for summary management <br />✅ Responsive design patterns for all device sizes <br />✅ Real-time notification system <br />✅ Ability to delete summaries</p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white">Full-Stack Technical Implementation</h3>
                  <p className="dark:text-gray-300 text-sm sm:text-base md:text-lg">✅ Next.js 15 App Router architecture with server components <br />✅ Latest React 19 hooks and features <br />✅ Clerk authentication integration with multiple sign-in methods <br />✅ Production-ready OpenAI API and Gemini AI API implementation <br />✅ Langchain document processing setup <br />✅ NeonDB PostgreSQL database schema and queries <br />✅ UploadThing integration for secure file handling <br />✅ Learn to interact using T3 Chat AI</p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white">Additional Features</h3>
                  <p className="dark:text-gray-300 text-sm sm:text-base md:text-lg">✅ Responsive design patterns for all device sizes <br />✅ Real-time notification system <br />✅ Ability to delete summaries</p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white">Complete Stripe Payment System</h3>
                  <p className="dark:text-gray-300 text-sm sm:text-base md:text-lg">✅ Multiple subscription tier implementation <br />✅ Server-side checkout flow <br />✅ Webhook handling for payment events <br />✅ Customer portal integration <br />✅ Subscription management dashboard <br />✅ Usage tracking and limitations</p>
</div>

                <div className="space-y-3 sm:space-y-4">
                  <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white">What You&apos;ll Learn From This Codebase</h2>
                  <p className="font-medium dark:text-gray-300 text-sm sm:text-base md:text-lg">✅ <span className="font-bold">AI Integration:</span> How to effectively integrate and prompt OpenAI&apos;s models <br />✅ <span className="font-bold">Document Processing:</span> Techniques for handling and processing PDF documents <br />✅ <span className="font-bold">Authentication:</span> Implementing secure, multi-provider authentication <br />✅ <span className="font-bold">Database Design:</span> Structuring data for a document processing application <br />✅ <span className="font-bold">Entire Stripe Course:</span> A complete course on implementing Stripe in a SaaS application <br />✅ <span className="font-bold">Modern Frontend:</span> Building beautiful UIs with React, Tailwind, and ShadCN <br />✅ <span className="font-bold">Performance Optimization:</span> Techniques for optimizing AI-heavy applications</p>
                </div>
              </div>
            </div>

            <div className="relative mx-auto max-w-5xl">
              <div className="overflow-hidden rounded-lg bg-white dark:bg-gray-800">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {Array.from({ length: totalSlides }).map((_, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <Dialog>
                        <DialogTrigger asChild>
                          <div 
                            className="cursor-pointer flex items-center justify-center"
                            onClick={() => setSelectedImage(index)}
                          >
                            <Image
                              src={`/${index + 1}.png`}
                        alt={`Gallery image ${index + 1}`}
                              width={1200}
                              height={800}
                              className="w-full h-auto max-h-[400px] sm:max-h-[500px] md:max-h-[600px] object-contain"
                            />
                          </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-[95vw] sm:max-w-4xl p-0 bg-transparent border-none">
                          <Image
                            src={`/${selectedImage! + 1}.png`}
                            alt={`Gallery image ${selectedImage! + 1}`}
                            width={1600}
                            height={1200}
                            className="w-full h-auto max-h-[80vh] object-contain"
                          />
                        </DialogContent>
                      </Dialog>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevSlide}
                  className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                >
                  <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="sr-only">Previous slide</span>
                </Button>

                <div className="flex items-center gap-1 sm:gap-2">
                  {Array.from({ length: totalSlides }).map((_, index) => (
                        <Button
                          key={index}
                          variant="ghost"
                          size="sm"
                      className={`h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full p-0 ${
                        currentSlide === index
                          ? "bg-neutral-900 dark:bg-white"
                          : "bg-neutral-300 dark:bg-gray-600"
                      }`}
                      onClick={() => setCurrentSlide(index)}
                        >
                          <span className="sr-only">
                        Go to slide {index + 1}
                          </span>
                        </Button>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextSlide}
                  className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                >
                  <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="sr-only">Next slide</span>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}


      </main>
      <footer className="border-t bg-primary/5 dark:bg-primary/10">
        <div className="container flex h-16 items-center justify-center px-4 md:px-6">
          <p className="text-sm text-muted-foreground">All rights reserved ShortPDF.</p>
        </div>
      </footer>
    </div>
  );
}