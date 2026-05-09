export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  location: string;
  imageSrc?: string;
};

export async function getTestimonials(): Promise<Testimonial[]> {
  return [
    {
      id: "1",
      quote:
        "ഇവരുടെ ഇൻറർലോക്ക് വർക്ക് വളരെ neat ആയും സമയത്ത് പൂർത്തിയാക്കിയും തന്നു. വീട്ടിന്റെ പുറംഭാഗം മുഴുവൻ ഒരു premium look കിട്ടി. ജോലിയുടെ finishing കണ്ടപ്പോൾ വളരെ സന്തോഷമായി.",
      author: "Ben Joseph",
      location: "",
      imageSrc: "/assets/users/user1.webp",
    },
    {
      id: "2",
      quote:
        "Work തുടങ്ങിയത് മുതൽ അവസാനിപ്പിക്കുന്നത് വരെ നല്ല professionalism ഉണ്ടായിരുന്നു. Material qualityയും work perfectionഉം വളരെ മികച്ചതാണ്. തീർച്ചയായും recommend ചെയ്യും.",
      author: "Sunil P",
      location: "",
      imageSrc: "/assets/users/user3.webp",
    },
    {
      id: "3",
      quote:
        "ചെറിയ സ്ഥലമെങ്കിലും വളരെ നല്ല ഡിസൈനിൽ interlock ഇട്ട് കൊടുത്തു. മഴ വന്നാലും വെള്ളം കെട്ടിനിൽക്കാത്ത രീതിയിൽ work ചെയ്തു. Responsible ആയ ആളാണ്.",
      author: "Teny Jose Sebastian",
      location: "",
      imageSrc: "/assets/users/user2.webp",
    },
  ];
}
