import Image from "next/image";
import about1 from "@/assets/imgs/about-1.jpg";
import about2 from "@/assets/imgs/about-2.jpg";
import Link from "next/link";

export const metadata = {
  title: "About",
};

const articles = [
  {
    heading: "Welcome to The Wild Oasis",
    ps: [
      `Where nature&apos;s beauty and comfortable living blend seamlessly.
            Hidden away in the heart of the Italian Dolomites, this is your
            paradise away from home. But it&apos;s not just about the luxury
            cabins. It&apos;s about the experience of reconnecting with nature
            and enjoying simple pleasures with family.`,
      ,
      `Our 8 luxury cabins provide a cozy base, but the real freedom and
            peace you&apos;ll find in the surrounding mountains. Wander through
            lush forests, breathe in the fresh air, and watch the stars twinkle
            above from the warmth of a campfire or your hot tub.`,
      ,
      `This is where memorable moments are made, surrounded by
            nature&apos;s splendor. It&apos;s a place to slow down, relax, and
            feel the joy of being together in a beautiful setting.`,
    ],
    img: about1,
    imgAlt: "Family sitting around a fire pit in front of cabin",
  },
  {
    heading: "Managed by our family since 1962",
    ps: [
      `Since 1962, The Wild Oasis has been a cherished family-run retreat.
            Started by our grandparents, this haven has been nurtured with love
            and care, passing down through our family as a testament to our
            dedication to creating a warm, welcoming environment.`,
      ,
      `Over the years, we&apos;ve maintained the essence of The Wild Oasis,
            blending the timeless beauty of the mountains with the personal
            touch only a family business can offer. Here, you&apos;re not just a
            guest; you&apos;re part of our extended family. So join us at The
            Wild Oasis soon, where tradition meets tranquility, and every visit
            is like coming home.`,
    ],
    img: about2,
    imgAlt: "Family that manages The Wild Oasis",
    readMorePage: "/cabins",
  },
];

export default function Page() {
  return (
    <div>
      {articles.map(({ heading, ps, img, imgAlt, readMorePage }, i) => (
        <div
          key={i}
          className="flex flex-col-reverse md:grid items-center grid-cols-5 my-16 gap-x-24 gap-y-16 md:gap-y-32 text-lg"
        >
          <div
            className={`col-span-3 ${
              i % 2 === 0 ? "md:order-1" : "md:order-2"
            }`}
          >
            <h2>{heading}</h2>
            <div className="space-y-8">
              {ps.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
            </div>
            {readMorePage && (
              <Link href={readMorePage} className="btn-main mt-8 max-md:w-full">
                Explore our luxury cabins
              </Link>
            )}
          </div>
          <Image
            src={img}
            alt={imgAlt}
            placeholder="blur"
            quality={80}
            className={`col-span-2 block ${
              i % 2 === 0 ? "md:order-2" : "md:order-1"
            }`}
          />
        </div>
      ))}
    </div>
  );
}
