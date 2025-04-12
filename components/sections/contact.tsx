"use client"

import type React from "react"
import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { z } from "zod"

import { useLanguage } from "@/components/language/language-provider"
import { contactInfo } from "@/data/contact"
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  CheckCircle,
  AlertCircle,
  Loader2,
  Calendar,
  Clock,
  MessageSquare,
} from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

// Validación del formulario
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

type FormData = z.infer<typeof formSchema>

export function Contact() {
  const { language } = useLanguage()
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })

  const iconMap = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
    send: Send,
    phone: Phone,
  }

  const socialLinks = [
    { icon: "github", url: contactInfo.socialLinks.github, label: "GitHub" },
    { icon: "linkedin", url: contactInfo.socialLinks.linkedin, label: "LinkedIn" },
    { icon: "twitter", url: contactInfo.socialLinks.twitter, label: "Twitter" },
    { icon: "send", url: contactInfo.socialLinks.send, label: "Telegram" },
    { icon: "phone", url: contactInfo.socialLinks.phone, label: "WhatsApp" },
  ]

  const validateField = (name: keyof FormData, value: string) => {
    try {
      const fieldSchema = formSchema.shape[name]
      fieldSchema.parse(value)
      setErrors((prev) => ({ ...prev, [name]: undefined }))
      return true
    } catch (error) {
      if (error instanceof z.ZodError) {
        const message = error.errors[0]?.message || `Invalid ${name}`
        setErrors((prev) => ({ ...prev, [name]: message }))
        return false
      }
      return false
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    validateField(name as keyof FormData, value)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validar todos los campos
    let isValid = true
    Object.entries(formData).forEach(([key, value]) => {
      const fieldValid = validateField(key as keyof FormData, value)
      if (!fieldValid) isValid = false
    })

    if (!isValid) return

    setIsSubmitting(true)

    // Simular envío de formulario
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitStatus("success")
      // Resetear formulario después de éxito
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
      // Resetear estado después de 5 segundos
      setTimeout(() => {
        setSubmitStatus("idle")
      }, 5000)
    } catch (error) {
      setSubmitStatus("error")
      // Resetear estado después de 5 segundos
      setTimeout(() => {
        setSubmitStatus("idle")
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Animaciones
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="container mx-auto" ref={containerRef}>
      <div className="relative">
        <div className="language-badge">{language.toUpperCase()}</div>
        <h2 className="text-3xl font-bold mb-4 text-center">{language === "en" ? "Contact" : "Contacto"}</h2>

        {/* Descripción */}
        <motion.p
          className="text-center text-muted-foreground max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          {language === "en"
            ? "Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you!"
            : "¿Tienes un proyecto en mente o quieres discutir una posible colaboración? ¡Me encantaría saber de ti!"}
        </motion.p>

        {/* Tarjetas de contacto rápido */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {/* Email */}
          <motion.div
            whileHover={{ y: -10, scale: 1.03 }}
            className="bg-background/50 backdrop-blur-sm border border-primary/20 rounded-xl p-6 text-center"
          >
            <div className="mx-auto w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mb-4">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{language === "en" ? "Email" : "Correo electrónico"}</h3>
            <a href={`mailto:${contactInfo.email.address}`} className="text-primary hover:underline transition-all">
              {contactInfo.email.address}
            </a>
            <p className="text-sm text-muted-foreground mt-2">{contactInfo.email.description[language]}</p>
          </motion.div>

          {/* Teléfono */}
          <motion.div
            whileHover={{ y: -10, scale: 1.03 }}
            className="bg-background/50 backdrop-blur-sm border border-primary/20 rounded-xl p-6 text-center"
          >
            <div className="mx-auto w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mb-4">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{language === "en" ? "Phone" : "Teléfono"}</h3>
            <a
              href={`tel:${contactInfo.phone.number.replace(/\s+/g, "")}`}
              className="text-primary hover:underline transition-all"
            >
              {contactInfo.phone.number}
            </a>
            <p className="text-sm text-muted-foreground mt-2">{contactInfo.phone.description[language]}</p>
          </motion.div>

          {/* Ubicación */}
          <motion.div
            whileHover={{ y: -10, scale: 1.03 }}
            className="bg-background/50 backdrop-blur-sm border border-primary/20 rounded-xl p-6 text-center"
          >
            <div className="mx-auto w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mb-4">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{language === "en" ? "Location" : "Ubicación"}</h3>
            <p className="text-primary">{contactInfo.location.place}</p>
            <p className="text-sm text-muted-foreground mt-2">{contactInfo.location.description[language]}</p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8"
        >
          {/* Formulario de contacto */}
          <motion.div variants={itemVariants} className="lg:col-span-7">
            <Card className="border border-primary/20 bg-background/50 backdrop-blur-sm h-full overflow-hidden">
              {/* Barra superior decorativa */}
              <div className="h-1 bg-gradient-to-r from-primary via-secondary to-primary"></div>

              <CardHeader className="pb-0">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <MessageSquare className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>{contactInfo.sections.form.title[language]}</CardTitle>
                </div>
                <CardDescription>{contactInfo.sections.form.description[language]}</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium flex items-center gap-1">
                        {contactInfo.formLabels.name[language]} <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder={contactInfo.formLabels.placeholders.name[language]}
                        value={formData.name}
                        onChange={handleChange}
                        className={`transition-all duration-300 ${errors.name ? "border-red-500 bg-red-500/5" : "focus:border-primary/50"}`}
                        disabled={isSubmitting}
                      />
                      {errors.name && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-xs mt-1"
                        >
                          {errors.name}
                        </motion.p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium flex items-center gap-1">
                        {contactInfo.formLabels.email[language]} <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder={contactInfo.formLabels.placeholders.email[language]}
                        value={formData.email}
                        onChange={handleChange}
                        className={`transition-all duration-300 ${errors.email ? "border-red-500 bg-red-500/5" : "focus:border-primary/50"}`}
                        disabled={isSubmitting}
                      />
                      {errors.email && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-xs mt-1"
                        >
                          {errors.email}
                        </motion.p>
                      )}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium flex items-center gap-1">
                      {contactInfo.formLabels.subject[language]} <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder={contactInfo.formLabels.placeholders.subject[language]}
                      value={formData.subject}
                      onChange={handleChange}
                      className={`transition-all duration-300 ${errors.subject ? "border-red-500 bg-red-500/5" : "focus:border-primary/50"}`}
                      disabled={isSubmitting}
                    />
                    {errors.subject && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-xs mt-1"
                      >
                        {errors.subject}
                      </motion.p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium flex items-center gap-1">
                      {contactInfo.formLabels.message[language]} <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder={contactInfo.formLabels.placeholders.message[language]}
                      value={formData.message}
                      onChange={handleChange}
                      className={`min-h-[180px] resize-none transition-all duration-300 ${errors.message ? "border-red-500 bg-red-500/5" : "focus:border-primary/50"}`}
                      disabled={isSubmitting}
                    />
                    {errors.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-xs mt-1"
                      >
                        {errors.message}
                      </motion.p>
                    )}
                  </div>

                  <AnimatePresence mode="wait">
                    {submitStatus === "idle" ? (
                      <motion.div
                        key="submit-button"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <Button type="submit" className="w-full group" disabled={isSubmitting} size="lg">
                          {isSubmitting ? (
                            <>
                              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                              {language === "en" ? "Sending..." : "Enviando..."}
                            </>
                          ) : (
                            <>
                              <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                              {contactInfo.formLabels.submit[language]}
                            </>
                          )}
                        </Button>
                      </motion.div>
                    ) : submitStatus === "success" ? (
                      <motion.div
                        key="success-message"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="bg-green-500/10 border border-green-500/30 text-green-500 p-6 rounded-md flex items-center"
                      >
                        <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium mb-1">
                            {language === "en" ? "Message sent successfully!" : "¡Mensaje enviado con éxito!"}
                          </h4>
                          <p className="text-sm">
                            {language === "en"
                              ? "Thank you for reaching out. I'll get back to you as soon as possible."
                              : "Gracias por contactarme. Te responderé lo antes posible."}
                          </p>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="error-message"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="bg-red-500/10 border border-red-500/30 text-red-500 p-6 rounded-md flex items-center"
                      >
                        <AlertCircle className="h-6 w-6 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium mb-1">
                            {language === "en" ? "Error sending message" : "Error al enviar el mensaje"}
                          </h4>
                          <p className="text-sm">
                            {language === "en"
                              ? "There was an error sending your message. Please try again or contact me directly."
                              : "Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo o contáctame directamente."}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Información de contacto */}
          <motion.div variants={itemVariants} className="lg:col-span-5">
            <Card className="border border-primary/20 bg-background/50 backdrop-blur-sm h-full overflow-hidden">
              {/* Barra superior decorativa */}
              <div className="h-1 bg-gradient-to-r from-secondary via-primary to-secondary"></div>

              <CardHeader className="pb-0">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>{contactInfo.sections.info.title[language]}</CardTitle>
                </div>
                <CardDescription>{contactInfo.sections.info.description[language]}</CardDescription>
              </CardHeader>

              <CardContent className="pt-6 space-y-8">
                {/* Disponibilidad */}
                <div className="bg-primary/5 rounded-lg p-4 border border-primary/10">
                  <h3 className="font-medium mb-2 flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    {language === "en" ? "Availability" : "Disponibilidad"}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {language === "en"
                      ? "I'm currently available for freelance work and collaborations. My typical response time is within 24 hours."
                      : "Actualmente estoy disponible para trabajos freelance y colaboraciones. Mi tiempo de respuesta típico es dentro de las 24 horas."}
                  </p>
                </div>

                {/* Redes sociales */}
                <div className="pt-4 border-t border-primary/10">
                  <h3 className="font-medium mb-4">{contactInfo.sections.info.connect[language]}</h3>
                  <div className="flex justify-center gap-4">
                    {socialLinks.map(({ icon, url, label }) => {
                      const Icon = iconMap[icon as keyof typeof iconMap]
                      return (
                        <motion.a
                          key={label}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-background/80 border border-primary/20 p-3 rounded-full hover:bg-primary/10 transition-colors"
                          whileHover={{ y: -5, scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          aria-label={label}
                        >
                          <Icon className="h-5 w-5" />
                        </motion.a>
                      )
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
