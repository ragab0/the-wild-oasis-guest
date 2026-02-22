import { getAllCabins } from "@/services/cabins.service";
import CabinItem from "./CabinItem";

export default async function CabinsList() {
  const { data: cabins, count } = await getAllCabins();
  if (!count) return null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {cabins.map((cabin, i) => (
        <CabinItem cabin={cabin} key={i} />
      ))}
    </div>
  );
}
