export type ContactInfo = {
  email: {
    address: string // No se traduce el email
    description: {
      en: string
      es: string
    }
  }
  phone: {
    number: string // No se traduce el número
    description: {
      en: string
      es: string
    }
  }
  location: {
    place: string // Se puede traducir el nombre del lugar
    description: {
      en: string
      es: string
    }
  }
  socialLinks: {
    github: string
    linkedin: string
    twitter: string
  }
  formLabels: {
    name: {
      en: string
      es: string
    }
    email: {
      en: string
      es: string
    }
    subject: {
      en: string
      es: string
    }
    message: {
      en: string
      es: string
    }
    submit: {
      en: string
      es: string
    }
    placeholders: {
      name: {
        en: string
        es: string
      }
      email: {
        en: string
        es: string
      }
      subject: {
        en: string
        es: string
      }
      message: {
        en: string
        es: string
      }
    }
  }
  sections: {
    form: {
      title: {
        en: string
        es: string
      }
      description: {
        en: string
        es: string
      }
    }
    info: {
      title: {
        en: string
        es: string
      }
      description: {
        en: string
        es: string
      }
      connect: {
        en: string
        es: string
      }
    }
  }
}

export const contactInfo: ContactInfo = {
  email: {
    address: "josue.araya@example.com",
    description: {
      en: "Feel free to email me anytime!",
      es: "¡No dudes en enviarme un correo en cualquier momento!",
    },
  },
  phone: {
    number: "+1 (123) 456-7890",
    description: {
      en: "Available Monday-Friday, 9AM-5PM",
      es: "Disponible de lunes a viernes, 9AM-5PM",
    },
  },
  location: {
    place: "San José, Costa Rica",
    description: {
      en: "Available for remote work worldwide",
      es: "Disponible para trabajo remoto en todo el mundo",
    },
  },
  socialLinks: {
    github: "https://github.com/username",
    linkedin: "https://linkedin.com/in/username",
    twitter: "https://twitter.com/username",
  },
  formLabels: {
    name: {
      en: "Name",
      es: "Nombre",
    },
    email: {
      en: "Email",
      es: "Correo electrónico",
    },
    subject: {
      en: "Subject",
      es: "Asunto",
    },
    message: {
      en: "Message",
      es: "Mensaje",
    },
    submit: {
      en: "Send Message",
      es: "Enviar Mensaje",
    },
    placeholders: {
      name: {
        en: "Your name",
        es: "Tu nombre",
      },
      email: {
        en: "Your email",
        es: "Tu correo electrónico",
      },
      subject: {
        en: "Subject",
        es: "Asunto",
      },
      message: {
        en: "Your message",
        es: "Tu mensaje",
      },
    },
  },
  sections: {
    form: {
      title: {
        en: "Get In Touch",
        es: "Ponte en Contacto",
      },
      description: {
        en: "Fill out the form and I'll get back to you as soon as possible.",
        es: "Completa el formulario y te responderé lo antes posible.",
      },
    },
    info: {
      title: {
        en: "Contact Information",
        es: "Información de Contacto",
      },
      description: {
        en: "Feel free to reach out through any of these channels.",
        es: "No dudes en contactarme a través de cualquiera de estos canales.",
      },
      connect: {
        en: "Connect with me",
        es: "Conéctate conmigo",
      },
    },
  },
}
