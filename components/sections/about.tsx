"use client"

import { useState, useRef } from "react"
import { useLanguage } from "@/components/language/language-provider"
import { motion, useInView, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { aboutData } from "@/data/about"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Github,
  Linkedin,
  Twitter,
  User,
  BookOpen,
  Briefcase,
  GraduationCap,
  Heart,
  Award,
  MapPin,
  Mail,
  Calendar,
  Languages,
  Download,
} from "lucide-react"

export function About() {
  const { language } = useLanguage()
  const [activeTab, setActiveTab] = useState("bio")
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })

  // Datos para la sección de educación
  const education = [
    {
      degree: {
        en: "Computer Science Degree",
        es: "Licenciatura en Ciencias de la Computación",
      },
      institution: {
        en: "University of Technology",
        es: "Universidad de Tecnología",
      },
      year: "2015 - 2019",
      description: {
        en: "Graduated with honors, specializing in software development and algorithms.",
        es: "Graduado con honores, especializado en desarrollo de software y algoritmos.",
      },
    },
    {
      degree: {
        en: "Master's in Web Technologies",
        es: "Maestría en Tecnologías Web",
      },
      institution: {
        en: "Digital Institute",
        es: "Instituto Digital",
      },
      year: "2020 - 2021",
      description: {
        en: "Advanced studies in modern web frameworks, cloud computing, and UX design.",
        es: "Estudios avanzados en frameworks web modernos, computación en la nube y diseño UX.",
      },
    },
    {
      degree: {
        en: "Full Stack Development Bootcamp",
        es: "Bootcamp de Desarrollo Full Stack",
      },
      institution: {
        en: "Coding Academy",
        es: "Academia de Programación",
      },
      year: "2019",
      description: {
        en: "Intensive 12-week program focused on MERN stack and modern JavaScript.",
        es: "Programa intensivo de 12 semanas enfocado en MERN stack y JavaScript moderno.",
      },
    },
    {
      degree: {
        en: "Cloud Architecture Certification",
        es: "Certificación en Arquitectura en la Nube",
      },
      institution: {
        en: "AWS Training & Certification",
        es: "AWS Formación y Certificación",
      },
      year: "2022",
      description: {
        en: "Specialized training in designing and implementing scalable cloud solutions.",
        es: "Formación especializada en diseño e implementación de soluciones escalables en la nube.",
      },
    },
    {
      degree: {
        en: "UI/UX Design Fundamentals",
        es: "Fundamentos de Diseño UI/UX",
      },
      institution: {
        en: "Design Institute Online",
        es: "Instituto de Diseño Online",
      },
      year: "2021",
      description: {
        en: "Course covering user research, wireframing, prototyping, and usability testing.",
        es: "Curso que cubre investigación de usuarios, wireframing, prototipado y pruebas de usabilidad.",
      },
    },
  ]

  // Datos para la sección de certificaciones
  const certifications = [
    {
      name: {
        en: "AWS Certified Developer",
        es: "Desarrollador Certificado de AWS",
      },
      issuer: "Amazon Web Services",
      year: "2022",
      badge: "/images/aws-badge.png",
    },
    {
      name: {
        en: "Professional React Developer",
        es: "Desarrollador Profesional de React",
      },
      issuer: "Meta",
      year: "2021",
      badge: "/images/react-badge.png",
    },
    {
      name: {
        en: "Full Stack JavaScript Specialist",
        es: "Especialista en JavaScript Full Stack",
      },
      issuer: "JavaScript Foundation",
      year: "2020",
      badge: "/images/js-badge.png",
    },
  ]

  // Iconos para redes sociales
  const socialIcons = {
    github: <Github className="w-5 h-5" />,
    linkedin: <Linkedin className="w-5 h-5" />,
    twitter: <Twitter className="w-5 h-5" />,
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
        <h2 className="text-3xl font-bold mb-8 text-center">{language === "en" ? "About Me" : "Sobre Mí"}</h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Columna izquierda - Perfil */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <div className="sticky top-24 space-y-8">
              {/* Tarjeta de perfil */}
              <div className="rounded-xl overflow-hidden border border-primary/20 bg-background/50 backdrop-blur-sm">
                {/* Banner de perfil */}
                <div className="h-32 bg-gradient-to-r from-primary/30 to-secondary/30 relative">
                  <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
                    <div className="relative">
                      {/* Efecto de brillo detrás de la imagen */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary blur-lg opacity-70 scale-110"></div>

                      {/* Imagen de perfil */}
                      <div className="relative w-32 h-32 rounded-full border-4 border-background overflow-hidden">
                        <Image
                          src={aboutData.image || "/placeholder.svg"}
                          alt={aboutData.name}
                          width={128}
                          height={128}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Información de perfil */}
                <div className="pt-20 p-6 text-center">
                  <h3 className="text-2xl font-bold mb-1">{aboutData.name}</h3>
                  <p className="text-primary mb-4">{aboutData.role[language]}</p>

                  <div className="flex justify-center gap-2 mb-6">
                    <Badge className="bg-primary">{aboutData.englishLevel[language]}</Badge>
                  </div>

                  {/* Ubicación */}
                  <div className="flex items-center justify-center gap-2 text-muted-foreground mb-6">
                    <MapPin className="w-4 h-4" />
                    <span>San José, Costa Rica</span>
                  </div>

                  {/* Redes sociales */}
                  <div className="flex justify-center gap-3 mb-6">
                    {Object.entries(aboutData.socialLinks).map(([platform, url]) => (
                      <motion.a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-background/80 border border-primary/20 p-3 rounded-full hover:bg-primary/10 transition-colors"
                        whileHover={{ y: -5, scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {socialIcons[platform as keyof typeof socialIcons]}
                      </motion.a>
                    ))}
                  </div>

                  {/* Botones de acción */}
                  <div className="flex flex-col gap-3">
                    <Button className="w-full">
                      <Mail className="mr-2 h-4 w-4" />
                      {language === "en" ? "Contact Me" : "Contáctame"}
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Download className="mr-2 h-4 w-4" />
                      {language === "en" ? "Download CV" : "Descargar CV"}
                    </Button>
                  </div>
                </div>
              </div>

              {/* Tarjeta de información rápida */}
              <div className="rounded-xl border border-primary/20 bg-background/50 backdrop-blur-sm p-6 space-y-4">
                <h3 className="text-lg font-semibold border-b border-primary/10 pb-2">
                  {language === "en" ? "Quick Info" : "Información Rápida"}
                </h3>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Briefcase className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {language === "en" ? "Experience" : "Experiencia"}
                      </p>
                      <p className="font-medium">5+ {language === "en" ? "years" : "años"}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Languages className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{language === "en" ? "Languages" : "Idiomas"}</p>
                      <p className="font-medium">{language === "en" ? "English, Spanish" : "Inglés, Español"}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Calendar className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {language === "en" ? "Availability" : "Disponibilidad"}
                      </p>
                      <p className="font-medium">{language === "en" ? "Full-time" : "Tiempo completo"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Columna derecha - Contenido principal */}
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Tabs de navegación */}
            <Tabs defaultValue="bio" value={activeTab} onValueChange={setActiveTab} className="mb-8">
              <TabsList className="grid grid-cols-4 mb-8">
                <TabsTrigger value="bio" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span className="hidden sm:inline">{language === "en" ? "Biography" : "Biografía"}</span>
                </TabsTrigger>
                <TabsTrigger value="education" className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" />
                  <span className="hidden sm:inline">{language === "en" ? "Education" : "Educación"}</span>
                </TabsTrigger>
                <TabsTrigger value="certifications" className="flex items-center gap-2">
                  <Award className="h-4 w-4" />
                  <span className="hidden sm:inline">{language === "en" ? "Certifications" : "Certificaciones"}</span>
                </TabsTrigger>
                <TabsTrigger value="interests" className="flex items-center gap-2">
                  <Heart className="h-4 w-4" />
                  <span className="hidden sm:inline">{language === "en" ? "Interests" : "Intereses"}</span>
                </TabsTrigger>
              </TabsList>

              <AnimatePresence mode="wait">
                <TabsContent value="bio" className="mt-0">
                  <motion.div
                    key="bio"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="rounded-xl border border-primary/20 bg-background/50 backdrop-blur-sm p-6">
                      <h3 className="text-2xl font-bold mb-6 text-primary">
                        {language === "en" ? "My Story" : "Mi Historia"}
                      </h3>

                      <div className="space-y-4 text-muted-foreground">
                        {aboutData.bio[language].map((paragraph, index) => (
                          <p key={index} className="leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>

                      {/* Cita destacada */}
                      <blockquote className="border-l-4 border-primary pl-4 my-6 italic">
                        {language === "en"
                          ? "I believe in creating software that not only works flawlessly but also provides an exceptional user experience."
                          : "Creo en crear software que no solo funcione perfectamente sino que también proporcione una experiencia de usuario excepcional."}
                      </blockquote>

                      {/* Estadísticas personales */}
                      <div className="grid grid-cols-3 gap-4 mt-8">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-primary">5+</div>
                          <div className="text-sm text-muted-foreground">
                            {language === "en" ? "Years Experience" : "Años de Experiencia"}
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-primary">50+</div>
                          <div className="text-sm text-muted-foreground">
                            {language === "en" ? "Projects Completed" : "Proyectos Completados"}
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-primary">15+</div>
                          <div className="text-sm text-muted-foreground">
                            {language === "en" ? "Happy Clients" : "Clientes Satisfechos"}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </TabsContent>

                <TabsContent value="education" className="mt-0">
                  <motion.div
                    key="education"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    variants={containerVariants}
                  >
                    <div className="rounded-xl border border-primary/20 bg-background/50 backdrop-blur-sm p-6">
                      <h3 className="text-2xl font-bold mb-6 text-primary">
                        {language === "en" ? "Education & Training" : "Educación y Formación"}
                      </h3>

                      <div className="space-y-8">
                        {education.map((item, index) => (
                          <motion.div
                            key={index}
                            className="relative pl-8 border-l border-primary/30"
                            variants={itemVariants}
                          >
                            {/* Punto en la línea de tiempo */}
                            <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary"></div>

                            <div className="mb-1 text-sm text-muted-foreground">{item.year}</div>
                            <h4 className="text-lg font-bold">{item.degree[language]}</h4>
                            <div className="text-primary mb-2">{item.institution[language]}</div>
                            <p className="text-muted-foreground">{item.description[language]}</p>
                          </motion.div>
                        ))}
                      </div>

                      {/* Cursos adicionales */}
                      <div className="mt-8">
                        <h4 className="text-lg font-semibold mb-4">
                          {language === "en" ? "Additional Courses & Workshops" : "Cursos y Talleres Adicionales"}
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="border border-primary/20 rounded-lg p-4">
                            <div className="font-medium">
                              {language === "en" ? "Advanced React Patterns" : "Patrones Avanzados de React"}
                            </div>
                            <div className="text-sm text-muted-foreground">Frontend Masters, 2022</div>
                            <div className="text-xs text-muted-foreground mt-1">
                              {language === "en"
                                ? "40 hours of advanced React techniques"
                                : "40 horas de técnicas avanzadas de React"}
                            </div>
                          </div>
                          <div className="border border-primary/20 rounded-lg p-4">
                            <div className="font-medium">
                              {language === "en" ? "Cloud Architecture" : "Arquitectura en la Nube"}
                            </div>
                            <div className="text-sm text-muted-foreground">AWS Training, 2021</div>
                            <div className="text-xs text-muted-foreground mt-1">
                              {language === "en"
                                ? "Certified solutions architect associate"
                                : "Arquitecto de soluciones certificado asociado"}
                            </div>
                          </div>
                          <div className="border border-primary/20 rounded-lg p-4">
                            <div className="font-medium">
                              {language === "en" ? "TypeScript Masterclass" : "Clase Magistral de TypeScript"}
                            </div>
                            <div className="text-sm text-muted-foreground">Udemy, 2022</div>
                            <div className="text-xs text-muted-foreground mt-1">
                              {language === "en" ? "Advanced types and patterns" : "Tipos y patrones avanzados"}
                            </div>
                          </div>
                          <div className="border border-primary/20 rounded-lg p-4">
                            <div className="font-medium">
                              {language === "en" ? "DevOps Essentials" : "Fundamentos de DevOps"}
                            </div>
                            <div className="text-sm text-muted-foreground">LinkedIn Learning, 2023</div>
                            <div className="text-xs text-muted-foreground mt-1">
                              {language === "en" ? "CI/CD, Docker, and Kubernetes" : "CI/CD, Docker y Kubernetes"}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Idiomas */}
                      <div className="mt-8">
                        <h4 className="text-lg font-semibold mb-4">{language === "en" ? "Languages" : "Idiomas"}</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="border border-primary/20 rounded-lg p-4">
                            <div className="font-medium">{language === "en" ? "English" : "Inglés"}</div>
                            <div className="text-sm text-primary">
                              {language === "en" ? "Professional proficiency" : "Dominio profesional"}
                            </div>
                            <div className="w-full bg-muted rounded-full h-2 mt-2">
                              <div className="bg-primary h-2 rounded-full" style={{ width: "95%" }}></div>
                            </div>
                          </div>
                          <div className="border border-primary/20 rounded-lg p-4">
                            <div className="font-medium">{language === "en" ? "Spanish" : "Español"}</div>
                            <div className="text-sm text-primary">
                              {language === "en" ? "Native speaker" : "Hablante nativo"}
                            </div>
                            <div className="w-full bg-muted rounded-full h-2 mt-2">
                              <div className="bg-primary h-2 rounded-full" style={{ width: "100%" }}></div>
                            </div>
                          </div>
                          <div className="border border-primary/20 rounded-lg p-4">
                            <div className="font-medium">{language === "en" ? "Portuguese" : "Portugués"}</div>
                            <div className="text-sm text-primary">
                              {language === "en" ? "Intermediate" : "Intermedio"}
                            </div>
                            <div className="w-full bg-muted rounded-full h-2 mt-2">
                              <div className="bg-primary h-2 rounded-full" style={{ width: "60%" }}></div>
                            </div>
                          </div>
                          <div className="border border-primary/20 rounded-lg p-4">
                            <div className="font-medium">{language === "en" ? "French" : "Francés"}</div>
                            <div className="text-sm text-primary">
                              {language === "en" ? "Basic knowledge" : "Conocimiento básico"}
                            </div>
                            <div className="w-full bg-muted rounded-full h-2 mt-2">
                              <div className="bg-primary h-2 rounded-full" style={{ width: "30%" }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </TabsContent>

                <TabsContent value="certifications" className="mt-0">
                  <motion.div
                    key="certifications"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="rounded-xl border border-primary/20 bg-background/50 backdrop-blur-sm p-6">
                      <h3 className="text-2xl font-bold mb-6 text-primary">
                        {language === "en" ? "Certifications & Achievements" : "Certificaciones y Logros"}
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {certifications.map((cert, index) => (
                          <motion.div
                            key={index}
                            className="border border-primary/20 rounded-xl p-5 flex items-center gap-4 hover:border-primary/40 transition-colors"
                            whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.3)" }}
                          >
                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                              <Award className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-bold">{cert.name[language]}</h4>
                              <div className="text-primary text-sm">{cert.issuer}</div>
                              <div className="text-xs text-muted-foreground mt-1">{cert.year}</div>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Logros adicionales */}
                      <div className="mt-8">
                        <h4 className="text-lg font-semibold mb-4">
                          {language === "en" ? "Additional Achievements" : "Logros Adicionales"}
                        </h4>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                          <li>
                            {language === "en"
                              ? "Speaker at React Conference 2022"
                              : "Ponente en la Conferencia de React 2022"}
                          </li>
                          <li>
                            {language === "en"
                              ? "Top 5% contributor on Stack Overflow for React topics"
                              : "Contribuidor del top 5% en Stack Overflow para temas de React"}
                          </li>
                          <li>
                            {language === "en"
                              ? "Published technical articles on Medium and Dev.to"
                              : "Artículos técnicos publicados en Medium y Dev.to"}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </TabsContent>

                <TabsContent value="interests" className="mt-0">
                  <motion.div
                    key="interests"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="rounded-xl border border-primary/20 bg-background/50 backdrop-blur-sm p-6">
                      <h3 className="text-2xl font-bold mb-6 text-primary">
                        {language === "en" ? "Interests & Hobbies" : "Intereses y Pasatiempos"}
                      </h3>

                      <div className="mb-8">
                        <p className="text-muted-foreground mb-6">
                          {language === "en"
                            ? "Beyond coding, I'm passionate about various activities that keep me inspired and balanced."
                            : "Más allá de la programación, me apasionan varias actividades que me mantienen inspirado y equilibrado."}
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {aboutData.interests[language].map((interest, index) => (
                            <motion.div
                              key={index}
                              className="border border-primary/20 rounded-lg p-4 text-center hover:bg-primary/5 transition-colors"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <Badge variant="outline" className="mb-2">
                                {interest}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Sección de libros favoritos */}
                      <div className="mb-8">
                        <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                          <BookOpen className="w-5 h-5" />
                          {language === "en" ? "Favorite Books" : "Libros Favoritos"}
                        </h4>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="border border-primary/20 rounded-lg p-4">
                            <div className="font-medium">Clean Code</div>
                            <div className="text-sm text-muted-foreground">Robert C. Martin</div>
                          </div>
                          <div className="border border-primary/20 rounded-lg p-4">
                            <div className="font-medium">Eloquent JavaScript</div>
                            <div className="text-sm text-muted-foreground">Marijn Haverbeke</div>
                          </div>
                        </div>
                      </div>

                      {/* Sección de actividades de tiempo libre */}
                      <div>
                        <h4 className="text-lg font-semibold mb-4">
                          {language === "en" ? "In My Free Time" : "En Mi Tiempo Libre"}
                        </h4>

                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                          <li>
                            {language === "en"
                              ? "Contributing to open-source projects"
                              : "Contribuir a proyectos de código abierto"}
                          </li>
                          <li>
                            {language === "en" ? "Hiking and exploring nature" : "Senderismo y explorar la naturaleza"}
                          </li>
                          <li>{language === "en" ? "Photography and digital art" : "Fotografía y arte digital"}</li>
                          <li>
                            {language === "en"
                              ? "Learning new technologies and frameworks"
                              : "Aprender nuevas tecnologías y frameworks"}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </TabsContent>
              </AnimatePresence>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
