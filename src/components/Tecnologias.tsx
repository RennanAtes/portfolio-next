"use client"
import { styled } from "styled-components"

interface TecnologiasProps{
    tecnologias: any;
}

const DivTecnologias = styled.div`
    margin-top: 0.2rem;
`


const SpanTecnologias = styled.span`
    gap: 5px;
    display: inline-flex;
    margin: 0.3rem;
    border: 1px solid white;
    color: black;
    background-color: #eeeee4;
    border-radius: 0.3rem;
    padding: 0.1rem;
    width: 5rem;
    text-align: center;
    justify-content: center;
`



export default function Tecnologias(props:TecnologiasProps){


    return(
        <DivTecnologias >
            {props.tecnologias.map((tecnologia:any) => (
                <SpanTecnologias key={tecnologia}>{tecnologia}</SpanTecnologias>                    
            ))}
        </DivTecnologias>
    )
}