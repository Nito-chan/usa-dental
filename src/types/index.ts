export interface SiteInfo {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  url: string;
  lang: string;
  themeColor: string;
  logo: string;
  phone: string;
  email: string;
  address: string;
  businessHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  social: Record<string, string>;
  googleMapsEmbedSrc: string;
}

export interface Theme {
  primaryColor: string;
  secondaryColor: string;
  mode: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Nav {
  links: NavLink[];
  cta: { label: string; href: string };
}

export interface HeroTitlePart {
  text: string;
  type: string;
}

export interface HeroStat {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  isDecimal?: boolean;
}

export interface TrustBadge {
  icon: string;
  label: string;
}

export interface Hero {
  title: HeroTitlePart[];
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  stats: HeroStat[];
  trustBadges: TrustBadge[];
}

export interface Service {
  id: string;
  icon: string;
  name: string;
  description: string;
  startingPrice?: string;
  featured?: boolean;
}

export interface BeforeAfterItem {
  id: string;
  label: string;
  imageBefore: string;
  imageAfter: string;
  timeSpent: string;
  service: string;
  review: string;
  author: string;
}

export interface WhyChooseUsItem {
  icon: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: PricingFeature[];
  cta: string;
  featured: boolean;
  badge?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  city: string;
  service: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  isDecimal?: boolean;
}

export interface TeamMember {
  name: string;
  position: string;
  photo: string;
  yearsExperience: number;
  bio: string;
}

export interface ServiceArea {
  center: [number, number];
  zoom: number;
  cities: string[];
  placeholderZip: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Certification {
  name: string;
  icon: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  slug: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  label: string;
}

export interface Footer {
  description: string;
  quickLinks: NavLink[];
  serviceLinks: NavLink[];
  areaLinks: NavLink[];
}

export interface SiteConfig {
  site: SiteInfo;
  theme: Theme;
  nav: Nav;
  hero: Hero;
  services: Service[];
  beforeAfter: BeforeAfterItem[];
  whyChooseUs: WhyChooseUsItem[];
  process: ProcessStep[];
  pricing: PricingPlan[];
  testimonials: Testimonial[];
  stats: StatItem[];
  team: TeamMember[];
  serviceAreas: ServiceArea;
  insurance: string[];
  faq: FAQItem[];
  gallery: GalleryImage[];
  certifications: Certification[];
  blogPosts: BlogPost[];
  footer: {
    description: string;
    quickLinks: NavLink[];
    serviceLinks: NavLink[];
    areaLinks: NavLink[];
  };
  chatbot: {
    name: string;
    greeting: string;
    responses: Record<string, string>;
  };
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
}
