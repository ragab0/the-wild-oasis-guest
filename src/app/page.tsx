import Image from "next/image";
import bg from "@/assets/imgs/bg.png";
import Link from "next/link";

export default function Home() {
  return (
    <div className="my-24">
      <Image
        src={bg}
        fill
        placeholder="blur"
        quality={80}
        className="object-cover object-bottom -z-10"
        alt="Mountains and forests with two cabins"
      />
      <div className="text-center">
        <h1 className="text-5xl md:text-8xl text-primary-50 mb-10 tracking-tight font-normal capitalize">
          Welcome to paradise.
        </h1>
        <Link href="/cabins" className="btn-main">
          Explore luxury cabins
        </Link>
      </div>
    </div>
  );
}
