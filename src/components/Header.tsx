import Link from "next/link";
import Logo from "./Logo";
import { Button } from "./ui/button";

const pages = [
  {
    to: "cabins",
  },
  {
    to: "about",
  },
  {
    to: "account",
    title: "guest area",
  },
];

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto flex justify-between items-center gap-4">
        <Logo />
        <nav>
          <ul className="flex items-center md:gap-4">
            {pages.map(({ to, title }, i) => (
              <li key={i}>
                <Button asChild variant={"link"} size={"lg"}>
                  <Link
                    href={to}
                    className={`capitalize md:text-xl max-md:p-2 ${
                      i === pages.length - 1 ? "pe-0" : ""
                    }`}
                  >
                    {title || to}
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
