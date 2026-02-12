"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

export function EnquiryForm() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const studentName = formData.get("studentName") as string
    const className = formData.get("class") as string
    const board = formData.get("board") as string
    const phone = formData.get("phone") as string
    const subject = formData.get("subject") as string

    const message = `*New Enquiry from Website*

*Student Name:* ${studentName}
*Class:* ${className}
*Board:* ${board.toUpperCase()}
*Phone Number:* ${phone}
${subject ? `*Subject Interested:* ${subject}` : ""}

Looking forward to joining Banashree Tutorials!`

    const whatsappNumber = "918548906373"
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

    toast({
      title: "Redirecting to WhatsApp!",
      description: "We'll get back to you within 24 hours.",
    })

    setTimeout(() => {
      setLoading(false)
      window.open(whatsappURL, "_blank")
      ;(e.target as HTMLFormElement).reset()
    }, 500)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Enquiry Form</CardTitle>
        <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="studentName">Student Name *</Label>
            <Input id="studentName" name="studentName" required placeholder="Enter student's name" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="class">Class *</Label>
              <select
                id="class"
                name="class"
                required
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="">Select Class</option>
                <option value="6">Class 6</option>
                <option value="7">Class 7</option>
                <option value="8">Class 8</option>
                <option value="9">Class 9</option>
                <option value="10">Class 10</option>
                <option value="puc1">PUC 1st Year</option>
                <option value="puc2">PUC 2nd Year</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="board">Board *</Label>
              <select
                id="board"
                name="board"
                required
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="">Select Board</option>
                <option value="cbse">CBSE</option>
                <option value="icse">ICSE</option>
                <option value="state">State Board</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input id="phone" name="phone" type="tel" required placeholder="Enter phone number" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">Subject Interested</Label>
            <Input id="subject" name="subject" placeholder="e.g., Mathematics, Physics, All Subjects" />
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Submitting..." : "Submit Enquiry"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
