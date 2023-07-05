import { useState } from 'react';
import { styled } from 'styled-components';


const DivFilter = styled.div`
height: 90px;
border-bottom: 1px solid;
`;

const UlFilter = styled.ul`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
`;

const LiFilter = styled.li`
display: inline;
margin-inline: 1rem;
`;

const ButtonsFilter = styled.button`
border: 2px solid black;
padding: 10px;
border-radius: 1rem;
overflow: visible;
background-color: transparent;
color: black;
font-size: 14px;


&.bg-black {
  background-color: black;
}

&.text-white {
  color: white;
}

&:hover{
  transition: 0.3s;
  transform: scale(1.1);
  color: white;
  background-color: black;
}

`;






export default function Filterbuttons() {
  const [selecionado, setSelecionado] = useState<number>(1);

  return (
    <DivFilter>
      <UlFilter>
        <LiFilter>
          <ButtonsFilter
            className={selecionado === 1 ? 'bg-black text-white' : ''}
            title="Todos os projetos"
            type="button"
            onClick={() => setSelecionado(1)}
          >
            Todos os projetos
          </ButtonsFilter>
        </LiFilter>
        <LiFilter>
          <ButtonsFilter
            className={selecionado === 2 ? 'bg-black text-white' : ''}
            title="Front-end"
            type="button"
            onClick={() => setSelecionado(2)}
          >
            Front-end
          </ButtonsFilter>
        </LiFilter>
        <LiFilter>
          <ButtonsFilter
            className={selecionado === 3 ? 'bg-black text-white' : ''}
            title="Back-end"
            type="button"
            onClick={() => setSelecionado(3)}
          >
            Back-end
          </ButtonsFilter>
        </LiFilter>
      </UlFilter>
    </DivFilter>
  );
}
