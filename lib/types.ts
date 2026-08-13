export interface Service {
  id: string;
  name: string;
  category: string;
  description: string;
  duration: string;
  priceHint: string;
  icon: string;
}

export interface Doctor {
  name: string;
  specialization: string;
  experience: string;
  qualification: string;
  photoUrl: string;
}

export interface Testimonial {
  name: string;
  text: string;
  treatment: string;
  rating: number;
}

export interface GalleryImage {
  id: string;
  category: string;
  beforeSrc: string;
  afterSrc: string;
  treatment: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  concern: string;
  message: string;
}

export interface BookingData {
  concern: string;
  date: string;
  time: string;
  name: string;
  phone: string;
  email: string;
  message: string;
}

export type GalleryFilter = 'all' | 'acne' | 'pigmentation' | 'anti-aging' | 'hair';

export type BookingStep = 1 | 2 | 3 | 4;
