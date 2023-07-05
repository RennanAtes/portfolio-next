import styled from 'styled-components';
import Image from 'next/image';
import CardProjects from './CardProject';

interface Projeto {
  id: number;
  nome: string;
  link: string;
  imagem: string;
  titulo: string;
  descricao: string;
  tecnologias: any;
}

interface ProjetosProps {
  projetos: Projeto[];
}

const SectionProjetos = styled.section`
  background-color: #f2f2f2;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextMyProjetos = styled.h1`
  font-size: 25px;
  padding: 5px;
`;


export default function Projetos(props: ProjetosProps) {
  return (
    <SectionProjetos>
      <div className="p-5">
        <TextMyProjetos>Meus Projetos</TextMyProjetos>
      </div>
      <div className="p-10">
        <ol>
          <li className="flex flex-row flex-wrap gap-5 justify-center">
            {props.projetos.map((projeto) => (<CardProjects key={projeto.id} 
            id={projeto.id}
            nome = {projeto.nome}
            link = {projeto.link}
            imagem = {projeto.imagem}
            titulo = {projeto.titulo}
            descricao = {projeto.descricao}
            tecnologias = {projeto.tecnologias}
            />) )}
            
          </li>
        </ol>
      </div>
    </SectionProjetos>
  );
}
