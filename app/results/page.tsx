import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import FloatingButtons from "@/components/FloatingButtons"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, TrendingUp, Award, Star } from "lucide-react"

export default function ResultsPage() {
  const achievements = [
    { percentage: "98.5%", name: "Priya Sharma", class: "Class 10 CBSE", year: "2024" },
    { percentage: "98.2%", name: "Rahul Kumar", class: "Class 10 ICSE", year: "2024" },
    { percentage: "97.8%", name: "Ananya Reddy", class: "Class 10 State Board", year: "2024" },
    { percentage: "96.5%", name: "Arjun Patel", class: "PUC 2nd Year", year: "2024" },
    { percentage: "95.8%", name: "Sneha Iyer", class: "Class 10 CBSE", year: "2023" },
    { percentage: "95.2%", name: "Karthik Rao", class: "Class 10 State Board", year: "2023" },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">Our Results & Achievements</h1>
            <p className="text-lg lg:text-xl text-primary-foreground/90 max-w-3xl">
              Celebrating the success of our students who have excelled in their academic pursuits.
            </p>
          </div>
        </section>

        {/* Stats Highlights */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="bg-primary/10 text-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trophy className="h-8 w-8" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">98%+</div>
                  <p className="text-muted-foreground">Top Scores Achieved</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="bg-secondary/10 text-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8" />
                  </div>
                  <div className="text-4xl font-bold text-secondary mb-2">100%</div>
                  <p className="text-muted-foreground">Pass Percentage</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="bg-primary/10 text-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <p className="text-muted-foreground">Students Mentored</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="bg-secondary/10 text-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8" />
                  </div>
                  <div className="text-4xl font-bold text-secondary mb-2">95%+</div>
                  <p className="text-muted-foreground">Average Score</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Top Performers */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Top Performers</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Congratulations to our star students who have achieved exceptional results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {achievements.map((student, index) => (
                <Card key={index} className="border-2 hover:border-primary transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                        {student.year}
                      </div>
                      <Badge variant="secondary">{student.percentage}</Badge>
                    </div>
                    <h3 className="text-xl font-bold mb-1">{student.name}</h3>
                    <p className="text-muted-foreground text-sm">{student.class}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Success Stories</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Real stories from students who transformed their academic performance.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/10 text-primary w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Trophy className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">From 75% to 98%</h3>
                      <p className="text-sm text-muted-foreground">Priya Sharma - Class 10 CBSE</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    "When I joined Banashree Tutorials in Class 9, I was struggling with Mathematics and Science. The
                    personalized attention and concept-based teaching helped me not just pass, but excel with 98.5% in
                    my board exams!"
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-secondary/10 text-secondary w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">PUC Success Story</h3>
                      <p className="text-sm text-muted-foreground">Arjun Patel - PUC 2nd Year</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    "The Physics and Chemistry coaching at Banashree Tutorials was exceptional. The faculty's approach
                    to problem-solving and regular mock tests prepared me perfectly for both board exams and competitive
                    entrance tests."
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/10 text-primary w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Star className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">ICSE Board Topper</h3>
                      <p className="text-sm text-muted-foreground">Rahul Kumar - Class 10 ICSE</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    "Small batch sizes mean every doubt gets cleared immediately. The regular assignments and tests kept
                    me prepared throughout the year. Thank you to the entire team for helping me score 98.2%!"
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-secondary/10 text-secondary w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">State Board Excellence</h3>
                      <p className="text-sm text-muted-foreground">Ananya Reddy - Class 10 State Board</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    "I was worried about State Board exams, but the teachers here explained every concept so clearly.
                    The personal mentoring sessions helped me overcome my weaknesses and achieve 97.8%."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Achievement Banner */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground border-0">
              <CardContent className="p-8 lg:p-12 text-center">
                <Trophy className="h-16 w-16 mx-auto mb-6 opacity-90" />
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Join Our Success Story</h2>
                <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                  Be part of a community of achievers. Let us help you reach your academic goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-md bg-primary-foreground text-primary px-8 py-3 text-sm font-medium hover:bg-primary-foreground/90 transition-colors"
                  >
                    Enroll Now
                  </a>
                  <a
                    href="tel:8618336739"
                    className="inline-flex items-center justify-center rounded-md border-2 border-primary-foreground text-primary-foreground px-8 py-3 text-sm font-medium hover:bg-primary-foreground/10 transition-colors"
                  >
                    Call: +91 8618336739
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
