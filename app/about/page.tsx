import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/FloatingButtons"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Target, Heart, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">About Banashree Tutorials</h1>
            <p className="text-lg lg:text-xl text-primary-foreground/90 max-w-3xl">
              Empowering young minds since 2021 with quality education and personalized attention.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Story</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-4">
                <p>
                  Founded in 2021, Banashree Tutorials was established with a clear vision: to provide high-quality,
                  personalized education that empowers students to achieve their academic dreams. What started as a
                  small coaching center has grown into a trusted institution known for excellence in education.
                </p>
                <p>
                  Our journey has been marked by the success of our students, many of whom have scored above 98% in
                  their board examinations. We take pride in our teaching methodology that focuses on conceptual
                  clarity, regular practice, and personal mentoring.
                </p>
                <p>
                  Today, we serve students from Classes 6 to 10 and PUC across CBSE, ICSE, and State Board curricula,
                  offering both online and offline classes to meet diverse learning needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Core Values</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                The principles that guide everything we do.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="bg-primary/10 text-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Striving for the highest standards in education and student outcomes.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="bg-secondary/10 text-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Dedication</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Committed to each student's success and academic growth.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="bg-primary/10 text-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Focus</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Concentrated approach to concept clarity and exam preparation.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="bg-secondary/10 text-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Community</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Building a supportive learning environment for all students.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Faculty */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Faculty</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Experienced educators dedicated to your success.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-8 lg:p-12">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-3">Experienced & Qualified</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Our faculty members bring more than 5 years of teaching experience, combining subject expertise
                        with a passion for education. They are well-versed in CBSE, ICSE, and State Board curricula.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">Student-Centric Approach</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Each teacher focuses on understanding individual learning styles and adapting teaching methods
                        to suit student needs. With small batch sizes, every student receives personalized attention.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">Proven Track Record</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Our faculty has consistently helped students achieve exceptional results, with many scoring
                        above 98% in board examinations and gaining admission to top colleges.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
