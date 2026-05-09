import Image from "next/image";

type AvatarItem = {
  src: string;
  alt: string;
};

type Props = {
  images: AvatarItem[];
  max?: number;
  label?: string;
  size?: number;
};

export default function AvatarGroup({ images, max = 4, label, size = 36 }: Props) {
  const visible = images.slice(0, max);
  const overflow = images.length - max;

  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-zinc-200 bg-white px-3 py-2 shadow-sm">
      <div className="flex items-center">
        {visible.map((img, i) => (
          <div
            key={i}
            className="relative rounded-full ring-2 ring-white overflow-hidden shrink-0"
            style={{
              width: size,
              height: size,
              marginLeft: i === 0 ? 0 : -(size / 3),
              zIndex: visible.length - i,
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
            />
          </div>
        ))}
        {overflow > 0 && (
          <div
            className="relative rounded-full ring-2 ring-white bg-zinc-100 flex items-center justify-center shrink-0"
            style={{
              width: size,
              height: size,
              marginLeft: -(size / 3),
              zIndex: 0,
            }}
          >
            <span className="text-xs font-semibold text-zinc-600">
              +{overflow}
            </span>
          </div>
        )}
      </div>
      {label && (
        <span className="text-sm font-medium text-zinc-700 pr-1">{label}</span>
      )}
    </div>
  );
}
