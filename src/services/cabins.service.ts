import { notFound } from "next/navigation";
import sBase from "@/lib/supabase";
import { Cabin } from "@/types/cabins";

export async function getCabin(id: number): Promise<Cabin> {
  const { data, error } = await sBase
    .from("cabins")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    return notFound();
  }

  return data;
}

export const getAllCabins = async function (): Promise<{
  data: Cabin[];
  count: number;
}> {
  const { data, error, count } = await sBase
    .from("cabins")
    .select("*", { count: "exact" })
    .order("name");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return { data, count: count || 0 };
};
