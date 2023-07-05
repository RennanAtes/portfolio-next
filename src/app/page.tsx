"use client"
import Apresentacao from "@/components/Apresentacao";
import Filterbuttons from "@/components/FilterButtons";


export default function Home() {
  return (
    <main className="container">
      <Apresentacao />
      <Filterbuttons />  
    </main>
  )
}
