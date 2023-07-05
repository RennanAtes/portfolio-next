"use client"
import { styled } from 'styled-components'

export default function Header(){

    const TagHeader = styled.header`
        width: 100%;
        height: 80px;
        align-items: center;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid gray;
    `





    return (
        <TagHeader className='container'>
            <div className=''>Logo</div>
            <div>
                <ul className='flex gap-5'>
                    <li className='hover:text-cyan-400'>Inicio</li>
                    <li className='hover:text-cyan-400'>Sobre mim</li>
                    <li className='hover:text-cyan-400'>Projetos</li>
                </ul>
            </div>
        </TagHeader>
    )
}