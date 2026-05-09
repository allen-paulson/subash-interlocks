import { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
};

export default function InfoCard({
  icon,
  title,
  description,
  className,
}: Props) {
  return (
    <div
      className={[
        "flex flex-col gap-4 rounded-sm border border-zinc-200 bg-white p-4",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="flex size-22 items-center justify-center rounded-sm bg-orange-50 text-orange-500">
        {icon}
      </div>
      <div className="flex flex-col gap-3 mt-4 mb-2">
        <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-zinc-950">
          {title}
        </h3>
        <p className="text-base lg:text-xl leading-tight text-zinc-600">
          {description}
        </p>
      </div>
    </div>
  );
}
