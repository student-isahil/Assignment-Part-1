'use client'

import { useEffect, useState } from "react"
import Hero from "@/components/Hero"
import Features from "@/components/Features"
import NewsletterForm from "@/components/NewsletterForm"
import ContactForm from "@/components/ContactForm"
import Loader from "@/components/Loader" 
import Section from "@/components/Section"
import ImageShowcase from "@/components/Imageshow"
import FAQ from "@/components/FAQ"

export default function HomePage() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000) 
    return () => clearTimeout(timer)
  }, [])

  if (loading) return <Loader /> 

  return (
    <main className="w-full overflow-x-hidden">
      <Hero />
      <Section />
      <Features />
      <NewsletterForm />
      <ImageShowcase />
      <FAQ />
      <ContactForm />
    </main>
  )
}
