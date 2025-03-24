import Link from "next/link";

export default function PrivacyPolicy() {
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
          
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold mb-4 text-foreground">1. Information We Collect</h2>
              <p>We collect information that you provide directly to us, including:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>PDF files you upload for summarization</li>
                <li>Account information (email, name) if you create an account</li>
                <li>Payment information when you make a purchase</li>
                <li>Usage data and interaction with our services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-foreground">2. How We Use Your Information</h2>
              <p>We use the collected information to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Provide our PDF summarization services</li>
                <li>Process your payments and maintain your account</li>
                <li>Improve our services and user experience</li>
                <li>Send important updates about our service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-foreground">3. Data Security</h2>
              <p>We implement appropriate security measures to protect your information:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security audits and updates</li>
                <li>Secure access controls and authentication</li>
                <li>Regular backup procedures</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-foreground">4. Data Retention</h2>
              <p>We retain your information for as long as necessary to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Provide our services to you</li>
                <li>Comply with legal obligations</li>
                <li>Resolve disputes</li>
                <li>Enforce our agreements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-foreground">5. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Access your personal information</li>
                <li>Request correction of your data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-foreground">6. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at:</p>
              <p className="mt-2">
                Email: awaisfarman984@gmail.com<br />
                Address: Mumtazabad, Multan City
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-foreground">7. Updates to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. The updated version will be indicated by an updated &ldquo;Last revised&rdquo; date and the updated version will be effective as soon as it is accessible.</p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
