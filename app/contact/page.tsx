import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { EnquiryForm } from "@/components/enquiry-form"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Toaster } from "@/components/ui/toaster"

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">Contact Us</h1>
            <p className="text-lg lg:text-xl text-primary-foreground/90 max-w-3xl">
              Get in touch with us for admissions, enquiries, or any questions about our courses.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  Have questions about our courses or admissions? We're here to help! Reach out to us through any of the
                  following channels.
                </p>

                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 text-primary p-3 rounded-lg">
                          <Phone className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Phone</h3>
                          <a
                            href="tel:8618336739"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            +91 8618336739
                          </a>
                          <p className="text-sm text-muted-foreground mt-1">Mon-Sat, 9:00 AM - 7:00 PM</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-secondary/10 text-secondary p-3 rounded-lg">
                          <Mail className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Email</h3>
                          <a
                            href="mailto:info@banashreetutorials.com"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            info@banashreetutorials.com
                          </a>
                          <p className="text-sm text-muted-foreground mt-1">We'll respond within 24 hours</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 text-primary p-3 rounded-lg">
                          <MapPin className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Address</h3>
                          <p className="text-muted-foreground">
                            87, 15th A Cross Rd, Muthyala Nagar
                            <br />
                            BNS Layout, Mathikere
                            <br />
                            Bengaluru, Karnataka 560054
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-secondary/10 text-secondary p-3 rounded-lg">
                          <Clock className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Office Hours</h3>
                          <p className="text-muted-foreground">
                            Monday - Saturday: 9:00 AM - 7:00 PM
                            <br />
                            Sunday: Closed
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Enquiry Form */}
              <div>
                <EnquiryForm />
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Find Us Here</h2>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243.28066787088842!2d77.5479015!3d13.0363168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d430589fb69%3A0x6804a0219e8ed728!2s87%2C%2015th%20A%20Cross%20Rd%2C%20Muthyala%20Nagar%2C%20BNS%20Layout%2C%20Mathikere%2C%20Bengaluru%2C%20Karnataka%20560054!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Banashree Tutorials Location"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <Toaster />
    </>
  )
}
