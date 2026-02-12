"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { BookOpen, Send } from "lucide-react"

export default function MaterialsPage() {
  const [formData, setFormData] = useState({
    studentName: "",
    class: "",
    subject: "",
    topic: "",
    board: "",
    phone: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Create WhatsApp message with student details
    const message = `📚 *Study Material Request*

👤 *Student Name:* ${formData.studentName}
📖 *Class:* ${formData.class}
📚 *Board:* ${formData.board}
📝 *Subject:* ${formData.subject}
📌 *Topic:* ${formData.topic}
📞 *Phone:* ${formData.phone}

I would like to request study materials for the above details. Thank you!`

    // Encode message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message)
    const whatsappNumber = "918548906373" // Without + sign for WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

    // Open WhatsApp in new tab
    window.open(whatsappURL, "_blank")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-accent/5 to-background">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-4 opacity-0 animate-[fadeIn_0.6s_ease-out_forwards]">
            <div className="flex justify-center mb-6">
              <div className="bg-primary/10 p-4 rounded-full">
                <BookOpen className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Request Study <span className="text-primary">Materials</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get comprehensive notes and study materials for your classes. Fill in your details below and we'll send
              you the materials via WhatsApp instantly!
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 -mt-8">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto opacity-0 animate-[fadeIn_0.8s_ease-out_0.2s_forwards]">
            <Card className="border-2 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Request Study Materials</CardTitle>
                <CardDescription>Fill in your details and we'll send you the materials via WhatsApp</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="studentName">Student Name *</Label>
                      <Input
                        id="studentName"
                        name="studentName"
                        placeholder="Enter your name"
                        value={formData.studentName}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Enter your phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="class">Class *</Label>
                      <Input
                        id="class"
                        name="class"
                        placeholder="e.g., 10th, PUC 1st Year"
                        value={formData.class}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="board">Board *</Label>
                      <select
                        id="board"
                        name="board"
                        value={formData.board}
                        onChange={handleChange}
                        required
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <option value="">Select Board</option>
                        <option value="CBSE">CBSE</option>
                        <option value="ICSE">ICSE</option>
                        <option value="State Board">State Board</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="e.g., Physics, Mathematics, Chemistry"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="topic">Topic/Chapter *</Label>
                    <Textarea
                      id="topic"
                      name="topic"
                      placeholder="Enter the specific topic or chapter you need notes for"
                      value={formData.topic}
                      onChange={handleChange}
                      rows={4}
                      required
                      className="resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full group">
                    <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    Send Request via WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Info Card */}
            <Card className="mt-6 border-primary/20 bg-primary/5">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground">What You'll Get</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>✓ Comprehensive notes for your requested topic</li>
                      <li>✓ Important formulas and concepts</li>
                      <li>✓ Practice questions and solved examples</li>
                      <li>✓ Quick response via WhatsApp</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
