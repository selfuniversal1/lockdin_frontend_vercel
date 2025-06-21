"use client"

import { useState, createContext } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Menu, X, Phone, MapPin, Clock, Instagram, Facebook, Linkedin, Sun, Moon } from "lucide-react"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

// Theme Context
const ThemeContext = createContext({
  isDark: true,
  toggleTheme: () => {},
})

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(true)

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  const services = [
    {
      name: "Classic Cut",
      description: "Traditional barbering with modern precision",
      price: "$45",
      duration: "45 min",
    },
    {
      name: "Beard Trim & Shape",
      description: "Expert beard sculpting and maintenance",
      price: "$35",
      duration: "30 min",
    },
    {
      name: "Hot Towel Shave",
      description: "Luxurious traditional straight razor shave",
      price: "$55",
      duration: "60 min",
    },
    {
      name: "The Full Service",
      description: "Cut, beard trim, hot towel shave & styling",
      price: "$85",
      duration: "90 min",
    },
  ]

  const barbers = [
    {
      name: "Superior Allah",
      specialty: "Master Barber",
      experience: "Expert Grooming",
      image: "/placeholder.svg?height=200&width=200&text=Superior+Allah",
    },
    {
      name: "Sherman Earl",
      specialty: "Master Barber",
      experience: "Expert Grooming",
      image: "/placeholder.svg?height=200&width=200&text=Sherman+Earl",
    },
  ]

  const themeClasses = {
    bg: isDark ? "bg-black" : "bg-white",
    text: isDark ? "text-white" : "text-black",
    textSecondary: isDark ? "text-gray-400" : "text-gray-600",
    textMuted: isDark ? "text-gray-500" : "text-gray-500",
    cardBg: isDark ? "bg-gray-900" : "bg-gray-100",
    cardBgAlt: isDark ? "bg-black" : "bg-white",
    border: isDark ? "border-gray-800" : "border-gray-200",
    headerBg: isDark ? "bg-black/95" : "bg-white/95",
    sectionBg: isDark ? "bg-gray-900" : "bg-gray-50",
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <div className={`min-h-screen ${themeClasses.bg} ${themeClasses.text} ${inter.className}`}>
        {/* Header */}
        <header
          className={`sticky top-0 z-50 ${themeClasses.headerBg} backdrop-blur-sm border-b ${themeClasses.border}`}
        >
          <div className="flex items-center justify-between p-4">
            <Link href="/" className="flex items-center">
              <div className="relative w-16 h-16">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TGD%20Logos%20combined-yKw3sdJ4w8BdiVClt4B43rAfPZ9goP.png"
                  alt="The Grooming District Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <div className="flex items-center space-x-2">
              <button
                onClick={toggleTheme}
                className={`p-2 ${themeClasses.text} hover:text-yellow-500 transition-colors`}
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 ${themeClasses.text} hover:text-yellow-500 transition-colors`}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className={`absolute top-full left-0 right-0 ${themeClasses.bg} border-b ${themeClasses.border}`}>
              <nav className="flex flex-col p-4 space-y-4">
                <Link href="#home" className="text-yellow-500 font-semibold">
                  Home
                </Link>
                <Link href="#services" className={`${themeClasses.text} hover:text-yellow-500 transition-colors`}>
                  Services
                </Link>
                <Link href="#about" className={`${themeClasses.text} hover:text-yellow-500 transition-colors`}>
                  About
                </Link>
                <Link href="#gallery" className={`${themeClasses.text} hover:text-yellow-500 transition-colors`}>
                  Gallery
                </Link>
                <Link href="#faq" className={`${themeClasses.text} hover:text-yellow-500 transition-colors`}>
                  FAQ
                </Link>
                <Link href="#contact" className={`${themeClasses.text} hover:text-yellow-500 transition-colors`}>
                  Contact
                </Link>
                <Link href="https://lockdin.app" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-yellow-500 text-black hover:bg-yellow-600 mt-2 font-semibold">Book Now</Button>
                </Link>
              </nav>
            </div>
          )}
        </header>

        {/* Hero Section */}
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80 z-10" />
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Tp5iNmTaboQlOe8DRwYRptGaeykLou.png"
            alt="The Grooming District - Barbershop Tools"
            fill
            className="object-cover"
            priority
          />
          <div className="relative z-20 text-center px-4 max-w-md">
            <h1 className="text-3xl font-bold mb-4 leading-tight tracking-wide text-white">
              Elevate Your Style at <span className="text-yellow-500">CHARLOTTE'S FINEST</span>
              <br />
              <span className="text-yellow-500">GROOMING EXPERIENCE</span>
            </h1>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed italic">
              Experience unparalleled grooming services for men, women, and children in the heart of Charlotte, NC. More
              than a cut — it's a culture.
            </p>

            {/* Flexible Appointment Times */}
            <div className="flex items-center justify-center mb-8 text-yellow-500">
              <Clock className="h-4 w-4 mr-2" />
              <span className="text-sm">Flexible Appointment Times</span>
            </div>

            <div className="space-y-4">
              <Link href="https://lockdin.app" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="w-full bg-yellow-500 text-black hover:bg-yellow-600 font-semibold">
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Quick Info */}
        <section className={`${themeClasses.sectionBg} py-6`}>
          <div className="px-4 grid grid-cols-3 gap-4 text-center">
            <div className="flex flex-col items-center">
              <Clock className="h-6 w-6 text-yellow-500 mb-2" />
              <p className={`text-xs ${themeClasses.textSecondary}`}>Open Daily</p>
              <p className={`text-sm font-semibold ${themeClasses.text}`}>See Hours</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="h-6 w-6 text-yellow-500 mb-2" />
              <p className={`text-xs ${themeClasses.textSecondary}`}>Location</p>
              <p className={`text-sm font-semibold ${themeClasses.text}`}>Charlotte</p>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="h-6 w-6 text-yellow-500 mb-2" />
              <p className={`text-xs ${themeClasses.textSecondary}`}>Call Us</p>
              <p className={`text-sm font-semibold ${themeClasses.text}`}>(704) 710-8494</p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-16 px-4">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-12">
              <h2 className={`text-3xl font-bold mb-4 tracking-wide ${themeClasses.text}`}>Our Services</h2>
              <p className={themeClasses.textSecondary}>Premium grooming services tailored to perfection</p>
            </div>

            <div className="space-y-4">
              {services.map((service, index) => (
                <Card key={index} className={`${themeClasses.cardBg} ${themeClasses.border}`}>
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className={`${themeClasses.text} text-lg`}>{service.name}</CardTitle>
                        <CardDescription className={`${themeClasses.textSecondary} text-sm mt-1`}>
                          {service.description}
                        </CardDescription>
                      </div>
                      <Badge variant="secondary" className="bg-yellow-500 text-black font-semibold">
                        {service.price}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex justify-between items-center">
                      <span className={`text-sm ${themeClasses.textMuted}`}>{service.duration}</span>
                      <Link href="https://lockdin.app" target="_blank" rel="noopener noreferrer">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
                        >
                          Book Now
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section id="about" className={`py-16 px-4 ${themeClasses.sectionBg}`}>
          <div className="max-w-md mx-auto">
            <div className="text-center mb-12">
              <h2 className={`text-3xl font-bold mb-4 tracking-wide ${themeClasses.text}`}>Master Barbers</h2>
              <p className={themeClasses.textSecondary}>Meet our skilled craftsmen</p>
            </div>

            <div className="space-y-6">
              {barbers.map((barber, index) => (
                <Card key={index} className={`${themeClasses.cardBgAlt} ${themeClasses.border}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden">
                        <Image
                          src={barber.image || "/placeholder.svg"}
                          alt={barber.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className={`font-semibold ${themeClasses.text}`}>{barber.name}</h3>
                        <p className="text-yellow-500 text-sm">{barber.specialty}</p>
                        <p className={`${themeClasses.textMuted} text-xs`}>{barber.experience} experience</p>
                      </div>
                      <Link href="https://lockdin.app" target="_blank" rel="noopener noreferrer">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
                        >
                          Book
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-16 px-4">
          <div className="max-w-md mx-auto text-center">
            <h2 className={`text-3xl font-bold mb-6 tracking-wide ${themeClasses.text}`}>Gallery</h2>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=150&width=150&text=Cut+1"
                  alt="Haircut Example 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=150&width=150&text=Cut+2"
                  alt="Haircut Example 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=150&width=150&text=Cut+3"
                  alt="Haircut Example 3"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=150&width=150&text=Cut+4"
                  alt="Haircut Example 4"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className={`py-16 px-4 ${themeClasses.sectionBg}`}>
          <div className="max-w-md mx-auto">
            <div className="text-center mb-12">
              <h2 className={`text-3xl font-bold mb-4 tracking-wide ${themeClasses.text}`}>FAQ</h2>
              <p className={themeClasses.textSecondary}>Frequently asked questions</p>
            </div>

            <div className="space-y-4">
              <Card className={`${themeClasses.cardBgAlt} ${themeClasses.border}`}>
                <CardHeader>
                  <CardTitle className={`${themeClasses.text} text-lg`}>Do you accept walk-ins?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={themeClasses.textSecondary}>
                    Yes, we accept walk-ins, but appointments are recommended to ensure availability.
                  </p>
                </CardContent>
              </Card>

              <Card className={`${themeClasses.cardBgAlt} ${themeClasses.border}`}>
                <CardHeader>
                  <CardTitle className={`${themeClasses.text} text-lg`}>What forms of payment do you accept?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={themeClasses.textSecondary}>
                    We accept credit cards, debit cards, invoices and digital payments including Apple Pay and Google
                    Pay.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16 px-4">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-12">
              <h2 className={`text-3xl font-bold mb-4 tracking-wide ${themeClasses.text}`}>Visit Us</h2>
              <p className={themeClasses.textSecondary}>Located in Charlotte</p>
            </div>

            <Card className={`${themeClasses.cardBg} ${themeClasses.border} mb-6`}>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-yellow-500 mt-0.5" />
                    <div>
                      <p className={`font-semibold ${themeClasses.text}`}>Address</p>
                      <p className={`${themeClasses.textSecondary} text-sm`}>
                        1251 Arrow Pine Drive
                        <br />
                        Suite B211, Charlotte, North Carolina 28273
                      </p>
                    </div>
                  </div>

                  <Separator className={isDark ? "bg-gray-800" : "bg-gray-200"} />

                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-yellow-500 mt-0.5" />
                    <div>
                      <p className={`font-semibold ${themeClasses.text}`}>Hours</p>
                      <div className={`${themeClasses.textSecondary} text-sm space-y-1`}>
                        <p>Mon-Thurs: 3:30 PM - 7:30 PM</p>
                        <p>Fri: 9:00 AM - 7:00 PM</p>
                        <p>Sat: 8:00 AM - 4:00 PM</p>
                      </div>
                    </div>
                  </div>

                  <Separator className={isDark ? "bg-gray-800" : "bg-gray-200"} />

                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-yellow-500 mt-0.5" />
                    <div>
                      <p className={`font-semibold ${themeClasses.text}`}>Contact</p>
                      <p className={`${themeClasses.textSecondary} text-sm`}>(704) 710-8494</p>
                      <p className={`${themeClasses.textSecondary} text-sm`}>info@thegroomingdistrct.com</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Google Map */}
            <div className="mb-6 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52563.89445734089!2d-80.9736!3d35.1127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88569c8a1a1a1a1a%3A0x1a1a1a1a1a1a1a1a!2sSteele%20Creek%2C%20Charlotte%2C%20NC!5e0!3m2!1sen!2sus!4v1234567890123"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={`${themeClasses.bg} border-t ${themeClasses.border} py-8 px-4`}>
          <div className="max-w-md mx-auto text-center">
            <div className="relative w-20 h-20 mx-auto mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TGD%20Logos%20combined-yKw3sdJ4w8BdiVClt4B43rAfPZ9goP.png"
                alt="The Grooming District Logo"
                fill
                className="object-contain"
              />
            </div>

            <p className="text-yellow-400 font-bold text-lg mb-2">The Grooming District</p>
            <p className={`${themeClasses.textMuted} text-sm mb-4`}>More than a cut — it's a culture</p>

            <div className="flex justify-center space-x-3 mb-4">
              <Link href="#" className={`${themeClasses.textSecondary} hover:text-yellow-500 transition-colors`}>
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className={`${themeClasses.textSecondary} hover:text-yellow-500 transition-colors`}>
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className={`${themeClasses.textSecondary} hover:text-yellow-500 transition-colors`}>
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </Link>
              <Link href="#" className={`${themeClasses.textSecondary} hover:text-yellow-500 transition-colors`}>
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>

            <div>
              <p className={`${themeClasses.textMuted} text-xs`}>© 2024 The Grooming District. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </ThemeContext.Provider>
  )
}
