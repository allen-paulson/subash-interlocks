import Header from "@/components/widgets/header";
import Banner from "@/components/widgets/banner";
import ProjectsSlider from "@/components/widgets/projects-slider";
import About from "@/components/widgets/about";
import Services from "@/components/widgets/services";
import Testimonials from "@/components/widgets/testimonials";
import Contact from "@/components/widgets/contact";

import { getProfile } from "@/lib/api/profile";
import { getWorksMainProjects } from "@/lib/api/projects";
import { getServices } from "@/lib/api/services";
import { getTestimonials } from "@/lib/api/testimonials";

export default async function Page() {
  const [profile, projects, services, testimonials] = await Promise.all([
    getProfile(),
    getWorksMainProjects(),
    getServices(),
    getTestimonials(),
  ]);

  return (
    <main className="pb-20 sm:pb-0">
      <Header profile={profile} />
      <Banner />
      <ProjectsSlider projects={projects} />
      <About profile={profile} />
      <Services services={services} />
      <Testimonials testimonials={testimonials} />
      <Contact profile={profile} />
    </main>
  );
}
