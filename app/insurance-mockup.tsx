"use client"

//import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Search, PawPrint, Heart, ClipboardPlus } from "lucide-react"

export default function InsuranceMockup() {


  const handleInteraction = (element: string) => {
    const dataLayer = {
      interaction: {
        clickType: "button",
        clickText: element,
        clickSection: element === "Search" ? "header" : "content",
        clickURL: window.location.href,
        search: "",
      },
      page: {
        pageInfo: {
          pageName: document.title,
          pageType: "Insurance Info",
          pageUrl: window.location.href,
          mcode: "insurancePage",
          language: navigator.language,
          primaryCategory: "Insurance",
          subCategory1: "",
          subCategory2: "",
          subCategory3: "",
          brand: "Insurance Corp",
          environment: "production",
          domain: window.location.hostname,
          formName: "",
          formStep: "",
          formSubStep: "",
          formSection: "",
          quoteId: "",
          applicationId: "",
        }
      },
      user: {
        profileInfo: {
          phoneNumber: "",
          membershipType: "",
          membershipTypeId: "",
          loginstatus: "",
        }
      },
      event: "interaction"
    };

    if (typeof window !== "undefined" && window.appEventData) {
      window.appEventData.push(dataLayer)
      console.log("Pushed to appEventData:", dataLayer)  // Optional: Log to verify it's being pushed
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <nav className="bg-primary text-primary-foreground p-4">
        <ul className="flex justify-around">
          {["Insurance Products", "Partners", "Blog", "Compare Insurance"].map((item) => (
            <li key={item}>
              <a
                href="#"
                className="hover:underline"
                onClick={(e) => {
                  e.preventDefault()
                  handleInteraction(item)
                }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Search Section */}
      <section className="p-8 bg-muted">
        <div className="max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search for insurance..."
              className="pl-8"
              onFocus={() => handleInteraction("Search")}
            />
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Pet Insurance", icon: PawPrint },
            { title: "Life Insurance", icon: Heart },
            { title: "Dental Insurance", icon: ClipboardPlus },
          ].map(({ title, icon: Icon }) => (
            <Card key={title} onClick={() => handleInteraction(title)}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon className="mr-2" />
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Protect what matters most with our comprehensive {title.toLowerCase()}.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Button Section */}
      <section className="p-8 text-center">
        <Button onClick={() => handleInteraction("CTA Button")}>Get a Quote Now</Button>
      </section>

      {/* FAQ Section */}
      <section className="p-8 bg-muted">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {[
            "What types of insurance do you offer?",
            "How do I file a claim?",
            "Can I customize my insurance policy?",
            "What factors affect my insurance premium?",
          ].map((question, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger onClick={() => handleInteraction(`FAQ: ${question}`)}>
                {question}
              </AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>



    </div>
  )
}
