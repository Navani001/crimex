import { auth } from "@/utils";
import { MapBox } from "./screens";
import { Button, Input } from "@heroui/react";
import { redirect } from "next/navigation";

export default async function Home() {
  const data:any=await auth()
  console.log(data.user.role)
    if (!data?.user) {
    redirect("/login");
  }
  return (
    <div>
      <MapBox role={data.user.role} token={data.user.token}/></div>
  );
}
