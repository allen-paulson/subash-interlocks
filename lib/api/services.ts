export type Service = {
  id: string;
  iconKey: "compass" | "wrench" | "truck";
  title: string;
  description: string;
  imageSrc: string;
};

export async function getServices(): Promise<Service[]> {
  return [
    {
      id: "geometric",
      iconKey: "compass",
      title: "Custom Geometric Designs",
      description:
        "Precise stone cutting for intricate circles, waves, and bespoke patterns that define your outdoor space.",
      imageSrc: "/assets/services/service-1.webp",
    },
    {
      id: "maintenance",
      iconKey: "wrench",
      title: "Maintenance & Re-laying",
      description:
        "Restoring old and uneven interlock surfaces to their original strength, level, and beauty.",
      imageSrc: "/assets/services/service-2.webp",
    },
    {
      id: "driveways",
      iconKey: "truck",
      title: "Heavy-Duty Driveways",
      description:
        "Commercial-grade durability engineered to withstand Kerala's heaviest monsoon rains and vehicle loads.",
      imageSrc: "/assets/services/service-3.webp",
    },
  ];
}
