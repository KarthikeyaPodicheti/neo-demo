import { Service, GalleryImage, Doctor, Testimonial } from './types';

export const CLINIC = {
  name: 'Neo Skin Clinic',
  tagline: 'Advanced Skin & Hair Care',
  phone: '+91 8341027761',
  phoneRaw: '8341027761',
  whatsapp: 'https://wa.me/918341027761',
  whatsappMessage: encodeURIComponent("Hi Neo Skin! I'd like to book a consultation."),
  email: 'neoskinclinic@gmail.com',
  address: 'Above DMART, Vanasthalipuram, Hyderabad',
  hours: {
    weekday: '10:00 AM - 8:00 PM',
    sunday: '10:00 AM - 4:00 PM',
  },
  instagram: 'https://www.instagram.com/neoskinclinic_vanasthalipuram/',
  facebook: 'https://www.facebook.com/neoskinindia/',
};

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'hydrafacial',
    name: 'HydraFacial',
    category: 'Face',
    description: 'Deep cleansing, exfoliation, extraction, and hydration in one advanced treatment for instant glow.',
    duration: '45-60 mins',
    priceHint: 'Starting at ₹2,499',
    icon: 'DropHalf',
  },
  {
    id: 'chemical-peel',
    name: 'Chemical Peels',
    category: 'Face',
    description: 'Customized acid solutions to remove dead skin layers, revealing brighter, smoother skin underneath.',
    duration: '30-45 mins',
    priceHint: 'Starting at ₹1,999',
    icon: 'Sparkle',
  },
  {
    id: 'microdermabrasion',
    name: 'Microdermabrasion',
    category: 'Face',
    description: 'Non-invasive exfoliation to reduce fine lines, acne scars, and uneven skin tone.',
    duration: '30-40 mins',
    priceHint: 'Starting at ₹1,499',
    icon: 'CirclesThree',
  },
  {
    id: 'laser-hair-removal',
    name: 'Laser Hair Removal',
    category: 'Laser',
    description: 'Permanent hair reduction using FDA-approved laser technology. Safe for all Indian skin types.',
    duration: '30-60 mins',
    priceHint: 'Starting at ₹3,999',
    icon: 'Flashlight',
  },
  {
    id: 'skin-tightening',
    name: 'Skin Tightening',
    category: 'Laser',
    description: 'Non-surgical radiofrequency treatment to firm sagging skin and boost collagen production.',
    duration: '45-60 mins',
    priceHint: 'Starting at ₹4,999',
    icon: 'ArrowsOut',
  },
  {
    id: 'anti-aging',
    name: 'Anti-Aging Treatments',
    category: 'Face',
    description: 'Advanced protocols combining multiple modalities to reduce fine lines, wrinkles, and restore youthfulness.',
    duration: '60-90 mins',
    priceHint: 'Starting at ₹5,999',
    icon: 'ClockCounterClockwise',
  },
  {
    id: 'acne-treatment',
    name: 'Acne & Pimple Treatment',
    category: 'Face',
    description: 'Medically-supervised acne management combining extractions, peels, and personalized home care.',
    duration: '40-50 mins',
    priceHint: 'Starting at ₹1,999',
    icon: 'Target',
  },
  {
    id: 'pigmentation',
    name: 'Pigmentation Treatment',
    category: 'Face',
    description: 'Targeted protocols for melasma, sun spots, and post-inflammatory hyperpigmentation.',
    duration: '45-60 mins',
    priceHint: 'Starting at ₹2,499',
    icon: 'PaintBrush',
  },
  {
    id: 'scar-treatment',
    name: 'Scar Treatment',
    category: 'Face',
    description: 'Combination approach using microneedling, peels, and laser for acne and surgical scars.',
    duration: '45-60 mins',
    priceHint: 'Starting at ₹2,999',
    icon: 'Waves',
  },
  {
    id: 'hair-transplant',
    name: 'Hair Transplant',
    category: 'Hair',
    description: 'Advanced FUE and FUT techniques for natural-looking, permanent hair restoration.',
    duration: '4-8 hours',
    priceHint: 'Starting at ₹30,000',
    icon: 'Tree',
  },
  {
    id: 'skin-analysis',
    name: 'Skin Analysis',
    category: 'Face',
    description: 'Complimentary advanced skin diagnostic to understand your skin type, concerns, and best treatment path.',
    duration: '20-30 mins',
    priceHint: 'FREE',
    icon: 'MagnifyingGlass',
  },
];

export const HOME_TREATMENTS: { id: string; image: string }[] = [
  { id: 'acne-treatment', image: '/assets/treatments/acne.png' },
  { id: 'pigmentation', image: '/assets/treatments/pigmentation.png' },
  { id: 'anti-aging', image: '/assets/treatments/anti-aging.png' },
  { id: 'laser-hair-removal', image: '/assets/treatments/laser.png' },
  { id: 'hydrafacial', image: '/assets/treatments/hydrafacial.png' },
  { id: 'chemical-peel', image: '/assets/treatments/chemical-peel.png' },
];

export const CLINIC_STATS = [
  { value: '11', label: 'Treatments on the schedule' },
  { value: 'Free', label: 'First skin analysis' },
  { value: 'III–VI', label: 'Indian skin types' },
  { value: 'FDA', label: 'Approved devices' },
  { value: 'Hyd', label: 'Vanasthalipuram clinic' },
  { value: 'Appt', label: 'By appointment only' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Ananya K.',
    treatment: 'Acne treatment',
    rating: 5,
    text: 'The first visit was a real skin analysis, not a sales pitch. After three peel sessions my breakouts finally had a plan.',
  },
  {
    name: 'Meera S.',
    treatment: 'HydraFacial',
    rating: 5,
    text: 'Booked after the free analysis. HydraFacial was measured, calm, and the aftercare was written down before I left.',
  },
  {
    name: 'Rohit P.',
    treatment: 'Laser hair removal',
    rating: 5,
    text: 'They set the laser for Indian skin and explained the session count up front. No surprises on the fee schedule.',
  },
];

export const DIFFERENTIATORS = [
  {
    title: 'Expert Dermatologists',
    description: 'Board-certified doctors with years of clinical experience in treating diverse Indian skin concerns.',
  },
  {
    title: 'FDA-Approved Technology',
    description: 'Every device and product used meets international safety and efficacy standards.',
  },
  {
    title: 'Personalized Protocols',
    description: 'No one-size-fits-all. Every treatment plan is built around your unique skin profile.',
  },
  {
    title: 'Visible Results, Honestly',
    description: 'We set realistic expectations and deliver measurable improvements, session by session.',
  },
];

export const DOCTORS: Doctor[] = [
  {
    name: 'Dr. [Name]',
    specialization: 'Clinical Dermatologist',
    experience: '8+ years',
    qualification: 'MD - Dermatology',
    photoUrl: '/images/doctor-placeholder.jpg',
  },
  {
    name: 'Dr. [Name]',
    specialization: 'Cosmetologist',
    experience: '5+ years',
    qualification: 'DDVL, Fellowship in Aesthetic Medicine',
    photoUrl: '/images/doctor-placeholder.jpg',
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 'g1', category: 'acne', beforeSrc: '/assets/gallery/acne-before.png', afterSrc: '/assets/gallery/acne-after.png', treatment: 'Acne Treatment' },
  { id: 'g2', category: 'pigmentation', beforeSrc: '/assets/gallery/pigmentation-before.png', afterSrc: '/assets/gallery/pigmentation-after.png', treatment: 'Pigmentation Treatment' },
  { id: 'g3', category: 'anti-aging', beforeSrc: '/assets/gallery/anti-aging-before.png', afterSrc: '/assets/gallery/anti-aging-after.png', treatment: 'Anti-Aging Protocol' },
  { id: 'g4', category: 'acne', beforeSrc: '/assets/gallery/acne-scar-before.png', afterSrc: '/assets/gallery/acne-scar-after.png', treatment: 'Acne Scar Treatment' },
  { id: 'g5', category: 'hair', beforeSrc: '/assets/gallery/hair-before.png', afterSrc: '/assets/gallery/hair-after.png', treatment: 'Hair Restoration' },
  { id: 'g6', category: 'pigmentation', beforeSrc: '/assets/gallery/melasma-before.png', afterSrc: '/assets/gallery/melasma-after.png', treatment: 'Melasma Treatment' },
];

export const FAQS = [
  { question: 'Is a consultation required before treatment?', answer: 'Yes. Every patient receives a complimentary skin analysis and consultation to determine the best treatment plan for their specific concerns and skin type.' },
  { question: 'Are the treatments safe for Indian skin?', answer: 'Absolutely. All our protocols and laser settings are specifically calibrated for Indian skin types (Fitzpatrick III-VI) to ensure safety and efficacy.' },
  { question: 'How many sessions will I need?', answer: 'This varies by treatment and concern. During your consultation, we will provide a personalized treatment plan with estimated session counts and expected timelines.' },
  { question: 'Is there any downtime?', answer: 'Most treatments have minimal to no downtime. Some procedures like chemical peels may cause mild redness for 1-2 days. We will guide you through post-care for every treatment.' },
  { question: 'Do you offer EMI or payment plans?', answer: 'Yes, we offer flexible payment options including no-cost EMI on select treatments. Please inquire at the clinic for details.' },
];

export const CONCERNS = [
  'Acne / Pimples',
  'Pigmentation / Dark Spots',
  'Aging / Fine Lines',
  'Scarring',
  'Hair Loss / Hair Transplant',
  'Skin Dullness / Glow',
  'Laser Hair Removal',
  'General Skin Checkup',
  'Other',
];
