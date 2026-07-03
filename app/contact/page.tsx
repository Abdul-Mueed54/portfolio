"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { IconBrandLinkedin, IconBrandGithub } from "@tabler/icons-react"
import Link from "next/link"

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error" | "limited">("idle")

  // Check local storage on mount to see if they've already hit the limit
  useEffect(() => {
    const submitCount = parseInt(localStorage.getItem("contact_submissions") || "0", 10)
    if (submitCount >= 2) {
      setStatus("limited")
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const submitCount = parseInt(localStorage.getItem("contact_submissions") || "0", 10)
    if (submitCount >= 2) {
      setStatus("limited")
      return
    }

    setStatus("submitting")
    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      // Replace with your actual Formspree endpoint
      const response = await fetch("https://formspree.io/f/mjgqpeoa", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setStatus("success")
        // Increment the submission count in the user's browser
        localStorage.setItem("contact_submissions", (submitCount + 1).toString())
        form.reset()
      } else {
        setStatus("error")
      }
    } catch (error) {
      setStatus("error")
    }
  }

  return (
    <main className="max-w-5xl mx-auto p-8 pt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Left Side: Contact Information */}
        <div className="flex flex-col justify-center space-y-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tight mb-4">Let's Connect.</h1>
            <p className="text-muted-foreground text-lg">
              TODO: Will Right Something Special Here
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <IconBrandLinkedin className="w-6 h-6 text-primary" />
              <Link href="https://linkedin.com/in/-mueed" className="text-lg no-underline hover:underline">
              LinkedIn
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <IconBrandGithub className="w-6 h-6 text-primary" />
              <Link href="https://github.com/Abdul-Mueed54" className="text-lg no-underline hover:underline">
                Github
              </Link>
            </div>
          </div>
        </div>

        {/* Right Side: The Form */}
        <Card className="shadow-lg max-h-100 overflow-y-auto custom-scrollbar">
          <CardHeader>
            <CardTitle>Send a Message</CardTitle>
            <CardDescription>
              Fill out the form below and I'll get back to you.
            </CardDescription>
          </CardHeader>
          <CardContent>

            {status === "success" ? (
              <div className="flex flex-col items-center justify-center space-y-4 py-8 text-center">
                <h3 className="text-xl font-semibold text-green-600">Message Sent!</h3>
                <p className="text-muted-foreground">Thank you for reaching out.</p>
                <Button variant="outline" onClick={() => setStatus("idle")}>
                  Send Another Message
                </Button>
              </div>
            ) : status === "limited" ? (
              <div className="flex flex-col items-center justify-center space-y-4 py-8 text-center">
                <h3 className="text-xl font-semibold text-red-600">Bruhh :)</h3>
                <p className="text-muted-foreground">Please Don't Tease me ;)</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="John Doe" required disabled={status === "submitting"} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="john@example.com" required disabled={status === "submitting"} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="I'm interested in working together on..."
                    rows={3}
                    required
                    disabled={status === "submitting"}
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-500">Something went wrong. Please try again or email me directly.</p>
                )}

                <Button type="submit" className="w-full" disabled={status === "submitting"}>
                  {status === "submitting" ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}

          </CardContent>
        </Card>
      </div>
    </main>
  )
}