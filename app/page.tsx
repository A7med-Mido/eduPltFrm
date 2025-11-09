"use client"
import AboutSection from "@/components/sections/AboutSection"
import FooterSection from "@/components/sections/FooterSection"
import HeroSection from "@/components/sections/HeroSection"
import LatestCoursesSection from "@/components/sections/LatestCoursesSection"


export default function Home() {


  return (
    <div className="w-screen flex flex-col justify-center items-center">
      <HeroSection />
      <LatestCoursesSection />
      <AboutSection />
      <FooterSection />
    </div>
  )
}
