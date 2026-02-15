import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/imgs/logo.png";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image
        src={logo}
        height={60}
        width={60}
        alt="The Wild Oasis Guest logo"
        className="max-md:w-10 max-md:h-10"
      />
      <span className="md:text-xl font-semibold inline-block">
        The Wild Oasis
      </span>
    </Link>
  );
}
