import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Award, Clock, GraduationCap, Target, Lightbulb, TrendingUp } from "lucide-react"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-primary text-primary-foreground py-20 lg:py-32 overflow-hidden">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl animate-fade-in will-animate">
              <Badge className="mb-4 bg-secondary text-secondary-foreground">Admissions Open for 2026-27</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">
                Empowering Young Minds for a Brighter Future
              </h1>
              <p className="text-lg lg:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                Premier coaching center for Classes 6-10 & PUC (PCMB). Expert faculty, proven results, personalized
                attention.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" variant="secondary" className="smooth-hover">
                  <Link href="/contact">Enroll Now</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 smooth-hover"
                >
                  <a href="tel:8618336739">Call: +91 8618336739</a>
                </Button>
              </div>
            </div>
          </div>
          {/* Decorative background pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-10 right-10 w-64 h-64 bg-primary-foreground rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center animate-fade-in will-animate delay-100">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm lg:text-base text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center animate-fade-in will-animate delay-200">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm lg:text-base text-muted-foreground">Top Scores</div>
              </div>
              <div className="text-center animate-fade-in will-animate delay-300">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">10</div>
                <div className="text-sm lg:text-base text-muted-foreground">Batch Size</div>
              </div>
              <div className="text-center animate-fade-in will-animate delay-400">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">2021</div>
                <div className="text-sm lg:text-base text-muted-foreground">Established</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12 animate-fade-in will-animate">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Why Choose Banashree Tutorials?</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                We provide comprehensive education that goes beyond textbooks, nurturing students to achieve excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="smooth-hover hover:shadow-lg hover:-translate-y-1 will-animate">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 text-primary w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Expert Faculty</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Experienced teachers with 5+ years in education, dedicated to student success.
                  </p>
                </CardContent>
              </Card>

              <Card className="smooth-hover hover:shadow-lg hover:-translate-y-1 will-animate">
                <CardContent className="pt-6">
                  <div className="bg-secondary/10 text-secondary w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Small Batches</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Average batch size of 10 students ensures personalized attention and better learning.
                  </p>
                </CardContent>
              </Card>

              <Card className="smooth-hover hover:shadow-lg hover:-translate-y-1 will-animate">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 text-primary w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Lightbulb className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Concept-Based Learning</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Focus on understanding fundamentals with exam-oriented preparation strategies.
                  </p>
                </CardContent>
              </Card>

              <Card className="smooth-hover hover:shadow-lg hover:-translate-y-1 will-animate">
                <CardContent className="pt-6">
                  <div className="bg-secondary/10 text-secondary w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Students consistently score above 98% in board exams with our guidance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Courses Overview */}
        <section className="py-16 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12 animate-fade-in will-animate">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Courses</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Comprehensive coaching for CBSE, ICSE, and State Board students.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-2 hover:border-primary smooth-hover hover:shadow-lg will-animate animate-slide-in-left">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-lg">
                      <BookOpen className="h-8 w-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">Classes 6 to 10</h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        All subjects including Mathematics, Science, English, Social Studies, and more.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="secondary">CBSE</Badge>
                        <Badge variant="secondary">ICSE</Badge>
                        <Badge variant="secondary">State Board</Badge>
                      </div>
                      <Button asChild className="smooth-hover">
                        <Link href="/courses">View Details</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary smooth-hover hover:shadow-lg will-animate animate-slide-in-right">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/10 text-secondary p-3 rounded-lg">
                      <Award className="h-8 w-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">PUC (PCMB)</h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        Specialized coaching for Physics, Chemistry, Mathematics, and Biology.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="secondary">Physics</Badge>
                        <Badge variant="secondary">Chemistry</Badge>
                        <Badge variant="secondary">Maths</Badge>
                        <Badge variant="secondary">Biology</Badge>
                      </div>
                      <Button asChild className="smooth-hover">
                        <Link href="/courses">View Details</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Teaching Approach */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in-left will-animate">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">Our Teaching Approach</h2>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  We believe in holistic education that combines concept clarity, regular practice, and personal
                  mentoring to help students excel.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 smooth-hover hover:translate-x-2">
                    <div className="bg-primary/10 text-primary p-2 rounded-lg">
                      <Target className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Concept-Based Learning</h4>
                      <p className="text-sm text-muted-foreground">
                        Strong foundation through clear explanations and interactive teaching methods.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 smooth-hover hover:translate-x-2">
                    <div className="bg-secondary/10 text-secondary p-2 rounded-lg">
                      <BookOpen className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Exam-Oriented Preparation</h4>
                      <p className="text-sm text-muted-foreground">
                        Regular tests, assignments, and mock exams to ensure exam readiness.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 smooth-hover hover:translate-x-2">
                    <div className="bg-primary/10 text-primary p-2 rounded-lg">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Personal Mentoring</h4>
                      <p className="text-sm text-muted-foreground">
                        Individual attention to address specific doubts and learning needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 lg:p-12 animate-slide-in-right will-animate">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 smooth-hover hover:translate-x-2">
                    <Clock className="h-8 w-8 text-primary" />
                    <div>
                      <h4 className="font-semibold text-lg">Flexible Timings</h4>
                      <p className="text-sm text-muted-foreground">Online and offline classes available</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 smooth-hover hover:translate-x-2">
                    <Users className="h-8 w-8 text-secondary" />
                    <div>
                      <h4 className="font-semibold text-lg">Small Batch Size</h4>
                      <p className="text-sm text-muted-foreground">Maximum 10 students per batch</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 smooth-hover hover:translate-x-2">
                    <Award className="h-8 w-8 text-primary" />
                    <div>
                      <h4 className="font-semibold text-lg">Track Record</h4>
                      <p className="text-sm text-muted-foreground">98%+ scores in board exams</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8 text-center animate-fade-in will-animate">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">Ready to Excel in Your Studies?</h2>
            <p className="text-lg lg:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Join hundreds of successful students who have achieved their academic goals with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="smooth-hover">
                <Link href="/contact">Enroll Now</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 smooth-hover"
              >
                <Link href="/courses">Explore Courses</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
