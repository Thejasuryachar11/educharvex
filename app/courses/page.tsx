import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/FloatingButtons"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, FlaskConical, Calculator, Dna, Globe, Languages, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function CoursesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">Our Courses</h1>
            <p className="text-lg lg:text-xl text-primary-foreground/90 max-w-3xl">
              Comprehensive coaching programs designed to help students excel in their academic journey.
            </p>
          </div>
        </section>

        {/* Boards Supported */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">We Support All Major Boards</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="secondary" className="text-base px-6 py-2">
                  CBSE
                </Badge>
                <Badge variant="secondary" className="text-base px-6 py-2">
                  ICSE
                </Badge>
                <Badge variant="secondary" className="text-base px-6 py-2">
                  State Board
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Classes 6-10 */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Classes 6 to 10</h2>
              <p className="text-muted-foreground text-lg max-w-3xl">
                Complete subject coverage for middle and high school students with a focus on building strong
                fundamentals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <div className="bg-primary/10 text-primary w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                    <Calculator className="h-6 w-6" />
                  </div>
                  <CardTitle>Mathematics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    Comprehensive coverage of algebra, geometry, trigonometry, and more with problem-solving techniques.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Concept clarity through examples</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Regular practice worksheets</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Board exam pattern questions</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="bg-secondary/10 text-secondary w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                    <FlaskConical className="h-6 w-6" />
                  </div>
                  <CardTitle>Science</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    Physics, Chemistry, and Biology topics covered with practical examples and experiments.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Theory with practical applications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Diagram-based learning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Numerical problem solving</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="bg-primary/10 text-primary w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                    <Languages className="h-6 w-6" />
                  </div>
                  <CardTitle>English</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    Grammar, literature, writing skills, and comprehension for excellent communication.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Grammar and vocabulary building</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Creative writing practice</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Literature analysis</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="bg-secondary/10 text-secondary w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                    <Globe className="h-6 w-6" />
                  </div>
                  <CardTitle>Social Studies</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    History, Geography, Civics, and Economics made interesting with real-world connections.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Map work and chart preparation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Timeline-based history learning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Current affairs integration</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="bg-primary/10 text-primary w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <CardTitle>Additional Subjects</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    Support for board-specific additional subjects as per student requirements.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Hindi/Kannada languages</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Computer science basics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Other electives</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* PUC Courses */}
        <section className="py-16 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">PUC (PCMB)</h2>
              <p className="text-muted-foreground text-lg max-w-3xl">
                Specialized coaching for Pre-University students preparing for competitive exams and board examinations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="bg-primary/10 text-primary w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                    <FlaskConical className="h-6 w-6" />
                  </div>
                  <CardTitle>Physics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    Complete coverage of mechanics, thermodynamics, electromagnetism, optics, and modern physics.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Conceptual understanding with derivations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Numerical problem-solving techniques</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>JEE/NEET level preparation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="bg-secondary/10 text-secondary w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                    <FlaskConical className="h-6 w-6" />
                  </div>
                  <CardTitle>Chemistry</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    Physical, Organic, and Inorganic Chemistry with reaction mechanisms and practical applications.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Reaction mechanisms and equations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Organic chemistry naming and structures</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Chemical equilibrium and kinetics</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="bg-primary/10 text-primary w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                    <Calculator className="h-6 w-6" />
                  </div>
                  <CardTitle>Mathematics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    Advanced mathematics including calculus, algebra, vectors, and probability for competitive exams.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Differential and integral calculus</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Vectors and 3D geometry</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Complex problems and shortcuts</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="bg-secondary/10 text-secondary w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                    <Dna className="h-6 w-6" />
                  </div>
                  <CardTitle>Biology</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    Botany and Zoology with focus on diagrams, classifications, and NEET preparation.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Detailed diagram practice</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Classification and taxonomy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Human physiology and genetics</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">Ready to Start Your Learning Journey?</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Enroll now and get personalized attention from expert faculty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Enroll Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="tel:8618336739">Call: +91 8618336739</a>
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
