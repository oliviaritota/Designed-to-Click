import Image from "next/image";

export function Mark({ className = "size-10" }: { className?: string }) {
  return (
    <span className={`relative block ${className}`} aria-hidden="true">
      <Image
        src="/logo.png"
        alt=""
        width={80}
        height={80}
        className="size-full bg-transparent object-contain"
        priority
        unoptimized
      />
    </span>
  );
}
