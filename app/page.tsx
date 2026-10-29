import Preloader from "@/components/home/Preloader";
import Hero from "@/components/home/Hero";
import Ticker from "@/components/home/Ticker";
import Manifesto from "@/components/home/Manifesto";
import RouteStoryboard from "@/components/home/RouteStoryboard";
import ShiftChapter from "@/components/home/ShiftChapter";
import Blueprint from "@/components/home/Blueprint";
import Numbers from "@/components/home/Numbers";
import Team from "@/components/home/Team";
import Credentials from "@/components/home/Credentials";
export default function Home() {
  return (<><Preloader /><Hero /><Ticker /><Manifesto /><RouteStoryboard /><ShiftChapter /><Blueprint /><Numbers /><Team /><Credentials /></>);
}
