import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Student - Class 10 CBSE",
      content:
        "The teachers at Banashree Tutorials are amazing! They explain every concept so clearly and are always available to clear doubts. I improved my Mathematics score from 75% to 98%!",
      rating: 5,
    },
    {
      name: "Rajesh Kumar",
      role: "Parent",
      content:
        "My son has been attending classes here for 2 years now. The personalized attention and small batch sizes have made a huge difference in his academic performance. Highly recommended!",
      rating: 5,
    },
    {
      name: "Ananya Reddy",
      role: "Student - Class 10 State Board",
      content:
        "I was struggling with Science subjects, but the concept-based teaching approach helped me understand everything clearly. Scored 97.8% in my board exams!",
      rating: 5,
    },
    {
      name: "Meena Iyer",
      role: "Parent",
      content:
        "The faculty is very experienced and supportive. They provide regular updates on my daughter's progress. The online classes during the pandemic were well-organized and effective.",
      rating: 5,
    },
    {
      name: "Arjun Patel",
      role: "Student - PUC 2nd Year",
      content:
        "The Physics and Chemistry coaching is excellent. The teachers use practical examples to explain complex concepts, making it easy to understand and remember.",
      rating: 5,
    },
    {
      name: "Suresh Rao",
      role: "Parent",
      content:
        "Worth every penny! My daughter improved significantly after joining. The teachers genuinely care about students' success and go the extra mile to help them.",
      rating: 5,
    },
    {
      name: "Rahul Kumar",
      role: "Student - Class 10 ICSE",
      content:
        "Small batch sizes mean every student gets individual attention. The regular tests and assignments kept me prepared throughout the year. Scored 98.2%!",
      rating: 5,
    },
    {
      name: "Lakshmi Narayan",
      role: "Parent",
      content:
        "My son was weak in Mathematics, but within 6 months at Banashree Tutorials, he became confident and started enjoying the subject. Thank you to all the teachers!",
      rating: 5,
    },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">What Our Students & Parents Say</h1>
            <p className="text-lg lg:text-xl text-primary-foreground/90 max-w-3xl">
              Read testimonials from our satisfied students and parents who have experienced our quality education.
            </p>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-primary/10 text-primary p-2 rounded-lg flex-shrink-0">
                        <Quote className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex gap-1 mb-2">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <span key={i} className="text-secondary">
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4">"{testimonial.content}"</p>
                    <div className="border-t border-border pt-4">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">Ready to Join Our Success Community?</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Experience the same quality education that has helped hundreds of students achieve their academic goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-8 py-3 text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Enroll Now
              </a>
              <a
                href="tel:8618336739"
                className="inline-flex items-center justify-center rounded-md border border-input bg-background text-foreground px-8 py-3 text-sm font-medium hover:bg-muted transition-colors"
              >
                Call: +91 8618336739
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
