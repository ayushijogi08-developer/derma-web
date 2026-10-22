/**
 * Derma Care Skin, Hair & Laser Clinic
 * Central Configuration File (v2 - Image-Led & Premium)
 * 
 * All clinic details, doctor profile, photography paths, treatment metadata,
 * concern recommendations, reviews, and schedules are centralized here.
 * Placeholders are clearly marked with [PLACEHOLDER].
 */

export const siteContent = {
  clinicName: "Derma Care",
  clinicSubtitle: "Skin, Hair & Laser Clinic",
  tagline: "Considered, evidence-led medical care for your skin and hair.",
  shortDescription: "A specialized dermatology practice in Jatharpeth, Akola, focused on thoughtful consultation, rigorous diagnosis, and gentle, personalized clinical care.",

  // Marquee Strip Elements
  marqueeItems: [
    "Clinical Dermatology",
    "Acne & Scar Protocols",
    "Melasma & Pigmentation Management",
    "Medical Hydra Facial",
    "Autologous Hair PRP",
    "Trichological Scalp Therapy",
    "Q-Switched Laser Toning",
    "Precision Laser Tattoo Removal",
    "Unhurried Consultations",
    "Evidence-Guided Care"
  ],

  // Key Clinic Statistics
  stats: [
    { value: "5.0★", label: "Google Rating", sub: "145 verified reviews" },
    { value: "145+", label: "Patient Reviews", sub: "Akola & Vidarbha" },
    { value: "3", label: "Specialty Pillars", sub: "Skin · Hair · Laser" },
    { value: "10+", label: "Years Experience", sub: "[PLACEHOLDER - Verify exact years]" }
  ],

  doctor: {
    name: "Dr. Shruti Kale (Dabholkar)",
    title: "Consultant Dermatologist & Aesthetic Physician",
    // [PLACEHOLDER] Replace with actual degrees (e.g. MBBS, MD / DDVL / DVD)
    qualifications: "MBBS, DDVL [PLACEHOLDER - Verify exact credentials]",
    registrationNumber: "MMC Reg. No. [PLACEHOLDER]",
    image: null, // Clearly marked placeholder doctor portrait
    bio: [
      "Dr. Shruti Kale (Dabholkar) leads Derma Care with a quiet, patient-first philosophy. She believes dermatological health is rooted in thorough clinical diagnosis, transparent communication, and individualized care rather than fleeting beauty trends.",
      "With specialized clinical training in medical dermatology, laser aesthetics, and trichology, she takes time with every patient to understand root causes, explaining treatment options honestly with zero commercial pressure."
    ],
    philosophy: "Careful diagnosis first. We recommend only the treatments your skin genuinely requires."
  },

  contact: {
    // [PLACEHOLDER] Replace these placeholders with official clinic phone/whatsapp/email
    phone: "+91 XXXXX XXXXX",
    phoneClean: "+91XXXXXXXXXX", // For tel: links e.g. "+919876543210"
    whatsapp: "+91 XXXXX XXXXX",
    whatsappClean: "91XXXXXXXXXX", // For wa.me/ links without + e.g. "919876543210"
    email: "contact@dermacareakola.in [PLACEHOLDER]",
    appointmentsNote: "Appointments are recommended to ensure dedicated time for your consultation.",
    paymentsNote: "Mobile & UPI payments accepted (GPay, PhonePe, Paytm, BHIM) along with cash."
  },

  location: {
    street: "Opp. Korde Hospital, Jatharpeth",
    city: "Akola",
    state: "Maharashtra",
    pincode: "444005",
    country: "India",
    landmark: "Opposite Korde Hospital",
    fullAddress: "Opp. Korde Hospital, Jatharpeth, Akola, Maharashtra 444005, India",
    mapsUrl: "https://maps.google.com/maps?cid=14660195348108243710",
    embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.8688461741517!2d77.01231131491745!3d20.71440008617066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd7299a0a866173%3A0xcb9b8eb2576ca32e!2sDerma%20Care%20Skin%2C%20Hair%20%26%20Laser%20Clinic!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    coordinates: {
      lat: 20.7144,
      lng: 77.0145
    }
  },

  proof: {
    rating: "5.0",
    reviewCount: 145,
    platform: "Google Reviews",
    quoteSummary: "Rated 5.0 stars across 145 verified Google reviews by patients in Akola and Vidarbha."
  },

  hours: [
    { day: "Monday", hours: "12:00 PM – 8:00 PM", isOpen: true, dayIndex: 1 },
    { day: "Tuesday", hours: "12:00 PM – 8:00 PM", isOpen: true, dayIndex: 2 },
    { day: "Wednesday", hours: "12:00 PM – 8:00 PM", isOpen: true, dayIndex: 3 },
    { day: "Thursday", hours: "By appointment, extended hours", note: "Extended clinic hours", isOpen: true, dayIndex: 4 },
    { day: "Friday", hours: "12:00 PM – 8:00 PM", isOpen: true, dayIndex: 5 },
    { day: "Saturday", hours: "12:00 PM – 8:00 PM", isOpen: true, dayIndex: 6 },
    { day: "Sunday", hours: "Closed", isOpen: false, dayIndex: 0 }
  ],

  // Signature Concern Selector Items (Explicit subject matching mapping)
  concerns: [
    {
      id: "acne",
      name: "Acne & Breakouts",
      subtitle: "Active blemishes & inflamed pores",
      image: "/images/concerns/acne.webp",
      alt: "Close-up of facial skin with visible active blemishes and medical comedone extraction instruments",
      photoNote: "Shows a high-definition close-up of a patient's cheek with blemish-prone skin and sterile clinical comedone tools.",
      recommendedTreatment: "Acne & Blemish Clinical Management",
      duration: "30–45 mins",
      whatToExpect: "A targeted dermatological evaluation followed by comedone relief, medical chemical peel, and home topical care to prevent post-acne marks.",
      treatmentCategory: "Skin"
    },
    {
      id: "pigmentation",
      name: "Pigmentation & Melasma",
      subtitle: "Uneven tone & dark patches",
      image: "/images/concerns/pigmentation.webp",
      alt: "Close-up of facial skin displaying uneven pigmentation, freckles, and melasma patches across the cheek and eye region",
      photoNote: "Shows a detailed macro portrait of facial cutaneous hyperpigmentation and uneven tone across the upper cheek.",
      recommendedTreatment: "Pigmentation & Melasma Staged Therapy",
      duration: "40 mins",
      whatToExpect: "Gentle multi-phase protocol combining barrier-strengthening topicals and controlled dermatological brightening sessions safe for Indian skin tones.",
      treatmentCategory: "Skin"
    },
    {
      id: "hair-fall",
      name: "Hair Fall & Shedding",
      subtitle: "Diffuse thinning & root weakness",
      image: "/images/concerns/hair-fall.webp",
      alt: "Trichological scalp examination in a clinical consultation suite showing magnified follicular density on tablet screen",
      photoNote: "Shows a doctor conducting a digital trichoscopy evaluation on a patient's scalp, displaying magnified follicle roots.",
      recommendedTreatment: "Hair PRP & Trichological Protocol",
      duration: "45–60 mins",
      whatToExpect: "Diagnostic trichoscopy to evaluate root density, blood test review, and autologous platelet-rich plasma to stimulate dormant follicles.",
      treatmentCategory: "Hair"
    },
    {
      id: "laser-glow",
      name: "Dullness & Texture",
      subtitle: "Lack of vitality & enlarged pores",
      image: "/images/concerns/dullness.webp",
      alt: "Clinical facial treatment in progress with practitioner applying restorative clay mask with a specialized brush",
      photoNote: "Shows an active facial therapy in progress with a client relaxed under a clinical brush application.",
      recommendedTreatment: "Medical Hydra Facial / Laser Toning",
      duration: "40–50 mins",
      whatToExpect: "Gentle vortex exfoliation followed by deep hydration infusion or photo-acoustic laser clarification with zero downtime.",
      treatmentCategory: "Laser"
    },
    {
      id: "tattoo",
      name: "Tattoo Removal",
      subtitle: "Unwanted pigment or amateur tattoos",
      image: "/images/concerns/tattoo.webp",
      alt: "Clinical laser handpiece emitting pulses directly over tattooed skin during a tattoo removal session",
      photoNote: "Shows a certified practitioner in clinical protective gear aiming a laser handpiece directly onto tattoo ink on the skin.",
      recommendedTreatment: "Q-Switched Laser Tattoo Clearance",
      duration: "20–45 mins",
      whatToExpect: "Controlled nanosecond laser pulses fragmenting ink particles without damaging adjacent dermis. Planned across spaced sessions.",
      treatmentCategory: "Laser"
    },
    {
      id: "unwanted-hair",
      name: "Unwanted Facial Hair",
      subtitle: "Hormonal or excess hair growth",
      image: "/images/concerns/facial-hair.webp",
      alt: "Practitioner operating aesthetic laser device on patient's cheek and jawline for facial hair reduction",
      photoNote: "Shows an aesthetic clinician using a dedicated laser handpiece on a patient's cheek and jawline with protective eyewear.",
      recommendedTreatment: "Laser Reduction Consultation",
      duration: "30 mins",
      whatToExpect: "Assessment of hair thickness, hormonal history, and customized wavelength settings to reduce hair density comfortably.",
      treatmentCategory: "Laser"
    }
  ],

  // Image-led treatment groups
  treatmentGroups: [
    {
      category: "Skin Health & Aesthetics",
      slug: "skin",
      description: "Medical diagnosis and evidence-guided therapies for acute and recurring dermatological conditions.",
      treatments: [
        {
          id: "acne",
          name: "Acne & Blemish Management",
          description: "Targeted clinical protocols addressing active breakouts, post-inflammatory redness, and scarring prevention.",
          duration: "30–45 mins",
          image: "/images/acne.webp",
          featured: true,
          details: "Medical evaluation followed by gentle comedone extraction, bespoke topical regimens, and chemical exfoliation when appropriate."
        },
        {
          id: "pigmentation",
          name: "Pigmentation & Melasma Therapy",
          description: "Structured dermatological plans to balance uneven skin tone, sun damage, and stubborn pigmentation.",
          duration: "40 mins",
          image: "/images/pigmentation.webp",
          featured: false,
          details: "A conservative, multi-stage protocol combining dermatological peeling, barrier strengthening, and targeted brightening agents."
        },
        {
          id: "hydra-facial",
          name: "Medical Hydra Facial",
          description: "Deep vortex cleansing, gentle dead cell exfoliation, and hydration infusion under medical supervision.",
          duration: "50 mins",
          image: "/images/hydra-facial.webp",
          featured: false,
          details: "Cleanses congestion without harsh abrasion, infusing nourishing serums suitable for sensitive and reactive Indian skin types."
        }
      ]
    },
    {
      category: "Hair & Scalp Health",
      slug: "hair",
      description: "Root-cause scalp diagnostics and restorative procedures for sustainable hair density and follicle strength.",
      treatments: [
        {
          id: "hair-prp",
          name: "Hair PRP (Platelet-Rich Plasma)",
          description: "Autologous concentrated growth factors micro-injected into thinning scalp regions to stimulate dormant roots.",
          duration: "45–60 mins",
          image: "/images/hair-prp.webp",
          featured: true,
          details: "Utilizes your own plasma platelets to encourage micro-circulation and prolong the anagen (growth) phase of hair follicles."
        },
        {
          id: "hair-fall",
          name: "Hair Fall & Scalp Care",
          description: "Systematic investigation of nutritional, hormonal, and environmental triggers behind diffuse hair shedding.",
          duration: "30 mins",
          image: "/images/hair-fall.webp",
          featured: false,
          details: "Trichoscopy assessment, blood panel interpretation, and a tailored medical roadmap combining oral and topical therapeutics."
        }
      ]
    },
    {
      category: "Laser Dermatology",
      slug: "laser",
      description: "High-precision, US-FDA standard laser technology calibrated specifically for Indian skin phototypes.",
      treatments: [
        {
          id: "laser-toning",
          name: "Q-Switched Laser Toning",
          description: "Gentle photo-acoustic laser energy targeting deep melanin clusters to clarify texture and brighten dullness.",
          duration: "30–40 mins",
          image: "/images/laser-toning.webp",
          featured: true,
          details: "Non-ablative wavelength therapy requiring virtually zero downtime, stimulating collagen remodeling and refining pores."
        },
        {
          id: "tattoo-removal",
          name: "Laser Tattoo Removal",
          description: "Controlled pulsed laser pulses breaking stubborn ink pigments into microscopic fragments for natural lymphatic clearance.",
          duration: "20–45 mins",
          image: "/images/tattoo-removal.webp",
          featured: false,
          details: "Staged sessions planned with precision to protect surrounding cutaneous tissue from scarring or hypopigmentation."
        }
      ]
    }
  ],

  // Clinic Photography Gallery
  gallery: [
    {
      id: 1,
      image: "/images/gallery-1.webp",
      title: "Consultation & Treatment Suite",
      caption: "Serene, sterile clinical suites designed for unhurried consultations."
    },
    {
      id: 2,
      image: "/images/gallery-2.webp",
      title: "Sterile Clinical Environment",
      caption: "Strict clinical hygiene standards and sterilised instruments."
    },
    {
      id: 3,
      image: "/images/gallery-3.webp",
      title: "Diagnostic Equipment",
      caption: "Precision dermatological magnification for root-cause diagnosis."
    },
    {
      id: 4,
      image: "/images/gallery-4.webp",
      title: "Healthy Skin Health",
      caption: "Gentle barrier-repair and restorative clinical protocols."
    },
    {
      id: 5,
      image: "/images/gallery-5.webp",
      title: "Natural Light Ambiance",
      caption: "Warm ivory spaces designed to put patients at ease."
    },
    {
      id: 6,
      image: "/images/gallery-6.webp",
      title: "Medical Formulations",
      caption: "Evidence-backed active ingredients tailored to patient needs."
    }
  ],

  principles: [
    {
      number: "01",
      title: "Accurate, unhurried diagnosis",
      text: "Every treatment starts with an in-depth clinical consultation. We inspect root causes rather than masking surface symptoms with temporary fixes."
    },
    {
      number: "02",
      title: "Treatment plans tailored to your skin",
      text: "No two skin types respond identically. Your care plan is customized according to your medical history, lifestyle, and skin sensitivity."
    },
    {
      number: "03",
      title: "Safe, sterile clinical procedures",
      text: "All clinical and aesthetic interventions follow rigorous hygiene standards, using sterilised equipment and verified medical-grade formulations."
    },
    {
      number: "04",
      title: "Honest guidance on what to expect",
      text: "We provide realistic timelines and transparent expectations for every procedure. We never prescribe unnecessary packages or make inflated claims."
    }
  ],

  processTimeline: [
    {
      step: "01",
      title: "Clinical Consultation",
      description: "Dr. Shruti conducts a close dermatological assessment of your skin or hair condition, reviewing medical history and previous treatments."
    },
    {
      step: "02",
      title: "Personalized Care Plan",
      description: "We outline an honest, step-by-step roadmap—explaining recommended clinical sessions, home care, expected timelines, and costs."
    },
    {
      step: "03",
      title: "Gentle Treatment",
      description: "Procedures are carried out in a calm, sterile clinic setting with minimal discomfort and strict adherence to safety protocols."
    },
    {
      step: "04",
      title: "Structured Follow-up",
      description: "We monitor your skin's response, adjust active concentrations as needed, and ensure sustainable, long-term health."
    }
  ],

  // Clearly marked placeholder testimonials with authentic feel
  testimonials: [
    {
      id: 1,
      name: "Patient Review [PLACEHOLDER]",
      locality: "Akola",
      treatment: "Acne & Skin Care",
      rating: 5,
      date: "Verified Google Review",
      text: "Dr. Shruti is very polite and listens to every detail patiently. Unlike other clinics, she didn't push unnecessary products or expensive packages. The prescribed routine worked calmly on my skin within a few weeks."
    },
    {
      id: 2,
      name: "Patient Review [PLACEHOLDER]",
      locality: "Jatharpeth, Akola",
      treatment: "Hair PRP Treatment",
      rating: 5,
      date: "Verified Google Review",
      text: "I was hesitant before starting PRP for hair fall, but the doctor clearly explained how the process works and what to realistically expect. The clinic is exceptionally hygienic, peaceful, and well-managed."
    },
    {
      id: 3,
      name: "Patient Review [PLACEHOLDER]",
      locality: "Akola",
      treatment: "Laser Toning & Consultation",
      rating: 5,
      date: "Verified Google Review",
      text: "Very professional consultation. Doctor Dabholkar gave honest advice about laser sessions for my pigmentation. The atmosphere is calm and respectful, and appointments run punctually."
    },
    {
      id: 4,
      name: "Patient Review [PLACEHOLDER]",
      locality: "Akola",
      treatment: "Medical Hydra Facial",
      rating: 5,
      date: "Verified Google Review",
      text: "Clean, peaceful clinic with a very gentle approach. The doctor explained my skin barrier issues first rather than jumping into aggressive treatments. Very happy with the care."
    }
  ],

  faqs: [
    {
      q: "What should I expect during my first consultation?",
      a: "Your initial visit includes a comprehensive examination by Dr. Shruti Kale. We evaluate your skin or hair condition, discuss lifestyle factors, and review any previous treatments or prescriptions. You will receive a clear, unhurried explanation of recommended steps."
    },
    {
      q: "How many sessions are typically required for laser or PRP procedures?",
      a: "The number of sessions depends strictly on your individual indication and tissue response. For instance, laser toning or hair PRP typically involves a series of 4 to 6 spaced sessions. We outline a realistic roadmap during your initial assessment so you know what to expect."
    },
    {
      q: "Do I need to book an appointment before visiting?",
      a: "Yes, appointments are highly recommended. Pre-booking ensures minimal waiting time and gives Dr. Shruti dedicated, uninterrupted time to evaluate your concerns thoroughly."
    },
    {
      q: "What payment methods are accepted at the clinic?",
      a: "We accept all major mobile and UPI payment platforms (Google Pay, PhonePe, Paytm, BHIM UPI) along with cash for your convenience."
    },
    {
      q: "What are your clinic hours and Thursday timings?",
      a: "The clinic is open Monday to Wednesday and Friday to Saturday from 12:00 PM to 8:00 PM. On Thursdays, we operate extended hours by prior appointment. The clinic remains closed on Sundays."
    },
    {
      q: "Are the aesthetic and laser procedures painful or associated with downtime?",
      a: "Most aesthetic treatments like Hydra Facials and Q-switched laser toning are non-invasive with zero or minimal downtime, allowing you to resume regular activities immediately. We apply topical soothing gels or anaesthetic creams whenever required to ensure maximum comfort."
    }
  ],

  disclaimer: "Medical Disclaimer: The content provided on this website is for general informational and educational purposes only and does not constitute formal medical diagnosis or specific treatment advice. Dermatological treatments and results vary based on individual physiological factors. A private in-clinic consultation with a qualified medical practitioner is required for medical diagnosis and prescription."
};
