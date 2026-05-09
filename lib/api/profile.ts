export type Profile = {
  name: string;
  tagline: string;
  phone: string;
  whatsapp: string;
  whatsappMessage: string;
  yearsExperience: number;
  satisfiedCustomers: number;
  heroBg: string;
  about: {
    headline: string;
    paragraphs: string[];
  };
  nav: {
    works: string;
    about: string;
    contact: string;
  };
};

export async function getProfile(): Promise<Profile> {
  return {
    name: "Subash D.",
    tagline: "Master Craftsmanship in Interlock Paving",
    phone: "tel:+918281174323",
    whatsapp: "https://wa.me/918281174323",
    whatsappMessage: "Hi Subash, I'm interested in your interlock paving services.",
    yearsExperience: 15,
    satisfiedCustomers: 100,
    heroBg: "/assets/images/1.webp",
    about: {
      headline: "PROFESSIONAL SOLUTIONS FOR YOUR OUTDOOR SPACES",
      paragraphs: [
        "With over 15 years of experience laying interlock across Kerala, I bring precision and artistry to every project — from residential courtyards in Thrissur to commercial complexes in Ernakulam.",
        "My deep understanding of Kerala's monsoon climate means every surface I create is engineered to endure. Precision cutting, expert drainage planning, and an eye for geometric beauty define my craft.",
      ],
    },
    nav: {
      works: "Works",
      about: "About",
      contact: "Contact",
    },
  };
}
