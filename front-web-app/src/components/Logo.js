import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex h-16 items-center justify-between bg-white shadow-md">
      <div className="mx-auto">
        <Image src="/Logo 1.svg" alt="Logo" width={100} height={100} />
      </div>
    </div>
  );
}
