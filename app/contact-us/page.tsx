"use client";

export default function ContactUs() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 bg-muted/30 dark:bg-gray-800/30">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get in Touch</h2>
        <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
          Have questions? We&apos;re here to help you.
        </p>
      </div>

      <div className="mx-auto max-w-lg mt-8 space-y-8">
        <div className="space-y-4 text-center">
          <div>
            <h3 className="font-medium">Email</h3>
            <p className="text-muted-foreground">awaisfarman984@gmail.com</p>
          </div>
          <div>
            <h3 className="font-medium">Address</h3>
            <p className="text-muted-foreground">Mumtazabad, Multan City</p>
          </div>
          <div>
            <h3 className="font-medium">Hours</h3>
            <p className="text-muted-foreground">Mon-Fri: 9:00 AM - 6:00 PM EST</p>
          </div>
        </div>

      </div>
    </div>
  </section>
  );
}
