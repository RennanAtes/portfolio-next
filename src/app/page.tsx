"use client"
import Apresentacao from "@/components/Apresentacao";
import Filterbuttons from "@/components/FilterButtons";
import Projetos from "@/components/Projetos";
import Header from "@/components/header";

const projetos = [
  { id: 1, nome: 'smartwash', link: 'https://www.smartwash.app.br/', imagem: 'https://www.smartwash.app.br/static/images/banner-apre.webp', titulo: 'SmartWash', descricao: 'Projeto de sistema de lava car dsa dasdasdasdasdasdasdasdasdasdasdasdasdas', tecnologias: ['Django','HTML','CSS','JS','Bootstrap','SQL'] },
  { id: 2, nome: 'smartwash2', link: 'https://www.smartwash.app.br/', imagem: 'https://www.smartwash.app.br/static/images/banner-apre.webp', titulo: 'WebSite 2', descricao: 'Descrição do WebSite 2', tecnologias: ['Django','HTML','CSS'] },
  { id: 3, nome: 'smartwash3', link: 'https://www.smartwash.app.br/', imagem: 'https://www.smartwash.app.br/static/images/banner-apre.webp', titulo: 'WebSite 2', descricao: 'Descrição do WebSite 2', tecnologias: ['Django','HTML','CSS'] },
  { id: 4, nome: 'smartwash4', link: 'https://www.smartwash.app.br/', imagem: 'https://www.smartwash.app.br/static/images/banner-apre.webp', titulo: 'WebSite 2', descricao: 'Descrição do WebSite 2', tecnologias: ['Django','HTML','CSS'] },
  { id: 5, nome: 'smartwash4', link: 'https://www.smartwash.app.br/', imagem: 'https://www.smartwash.app.br/static/images/banner-apre.webp', titulo: 'WebSite 2', descricao: 'Descrição do WebSite 2', tecnologias: ['Django','HTML','CSS'] },
];





export default function Home() {
  return (
    <main className="container-fluid extended-container">
      <Header />
      <Apresentacao />
      <Filterbuttons />
      <Projetos projetos={projetos}   />  
    </main>
  )
}
