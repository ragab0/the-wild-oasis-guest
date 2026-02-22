import { getCabin, getAllCabins } from "@/services/cabins.service";
import { EyeOffIcon, MapPinIcon, UsersIcon } from "lucide-react";
import Image from "next/image";

interface params {
  cabinId: string;
}

export async function generateMetadata({ params }: { params: params }) {
  const { cabinId } = await params;
  const { name } = await getCabin(parseInt(cabinId));
  return { title: `Cabin ${name}` };
}

export async function generateStaticParams() {
  const { data: cabins = [] } = await getAllCabins();
  const ids = cabins.map((cabin) => ({ cabinId: String(cabin.id) }));
  return ids;
}

export default async function CabinPage({ params }: { params: params }) {
  const { cabinId } = await params;
  const cabin = await getCabin(parseInt(cabinId));
  const { name, capacity, image, description } = cabin;

  return (
    <div className="container max-w-7xl mx-auto my-8 space-y-24">
      <div className="lg:grid grid-cols-[1.5fr_2fr] gap-[5%] border">
        <div className="relative lg:scale-[1.05] lg:-translate-x-3 max-lg:h-[300px]">
          {image && (
            <Image
              src={image}
              fill
              loading="lazy"
              className="object-cover"
              alt={`Cabin ${name}`}
            />
          )}
        </div>
        <div className="p-5 lg:p-10">
          <h3 className="bg-primary-950 text-accent-100 font-black text-3xl lg:text-7xl lg:translate-x-[-40%] lg:p-4 pb-1">
            Cabin {name}
          </h3>
          <p className="text-lg text-primary-300 mt-5 mb-10">{description}</p>
          <ul className="grid gap-4">
            <li className="flex gap-3 items-center">
              <UsersIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                For up to <span className="font-bold">{capacity}</span> guests
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <MapPinIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                Located in the heart of the{" "}
                <span className="font-bold">Pyramids</span> (Egypt)
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <EyeOffIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                Privacy <span className="font-bold">100%</span> guaranteed
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-5xl font-semibold text-center">
          Reserve today. Pay on arrival.
        </h2>
      </div>
    </div>
  );
}
