"use client"
import Car from "@/components/car";
import Details from "@/components/details";
import DiscountWeekly from "@/components/discount";
import Fastmarque from "@/components/fastmarque";
import Gadget from "@/components/gadget";
import Men from "@/components/men";
import Popular from "@/components/popular";
import Shoes from "@/components/shoes";
import Sliderelement from "@/components/sliderelement";
import Timeline from "@/components/timeline";


export default function Home() {
  return (
  <div className="bg-bgColor  w-full p-4">
    <Timeline/>
    <Sliderelement/>
    <Fastmarque/>
    <Popular/>
    <DiscountWeekly/>
    <Shoes/>
    <Men/>
    <Gadget/>
    <Car/>
  </div>
  );
}