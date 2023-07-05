import styled from 'styled-components';
import Image from 'next/image';
import Tecnologias from './Tecnologias';


const CardProject = styled.div`
  position: relative;
  background-color: gray;
  width: 420px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  overflow: hidden;
  transition: 0.3s;

  &:hover {
    &::before {
      transform: scale(1.2);
    }
  }

  &:hover::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(2px);
    transition: 1s;
  }
`;

const CardContentTitle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.3);
  color: #fff;
  transform: translateY(-100%);
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${CardProject}:hover & {
    transform: translateY(0);
  }
`;

const CardContentDescription = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.3);
  color: #fff;
  transform: translateY(100%);
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${CardProject}:hover & {
    transform: translateY(0);
  }
`;

const CardTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
  background-color: white;
  color: black;
  border: 2px solid white;
  padding: 0.5rem;
  border-radius: 0.5rem;
`;

const CardDescription = styled.p`
  font-size: 14px;
  text-align: center;
`;


interface CardProjectsProps{
    id: number;
    nome: string;
    link: string;
    imagem: string;
    titulo: string;
    descricao: string;
    tecnologias: any;
}
const CardImage = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;


export default function CardProjects(props: CardProjectsProps){
    return (
        <div>
            <CardProject key={props.id}>
            <CardImage>
              <Image priority={true} width={400} height={420} src={props.imagem} alt={props.titulo} />
            </CardImage>
            <a href='https://www.google.com'>
            <CardContentTitle>
               
                <CardTitle>{props.titulo}</CardTitle>
                
            </CardContentTitle>
            
            <CardContentDescription>
                <CardDescription>{props.descricao}</CardDescription>
                <Tecnologias tecnologias={props.tecnologias} />
            </CardContentDescription>
            </a>
            </CardProject>
        </div>
    )
}