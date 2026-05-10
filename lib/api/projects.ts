export type Project = {
  id: string;
  src: string;
  alt: string;
};

const imageIds = [
  "2","3","4","5","6","7","9","10","11","12","13","14",
  "15","17","18","19","20","21","22","23","25","26","27","28","29","30",
];

const allProjects: Project[] = imageIds.map((n) => ({
  id: n,
  src: `/assets/images/${n}.webp`,
  alt: `Interlock paving project — design ${n}`,
}));

const worksMainIds = ["works-1", "works-2", "works-3", "works-4", "works-5"];

export async function getWorksMainProjects(): Promise<Project[]> {
  return worksMainIds.map((name) => ({
    id: name,
    src: `/assets/works_main/${name}.webp`,
    alt: `Interlock paving project — ${name.replace(/-/g, " ")}`,
  }));
}

export async function getFeaturedProjects(): Promise<Project[]> {
  return allProjects.slice(0, 12);
}

export async function getAllProjects(): Promise<Project[]> {
  return allProjects;
}
