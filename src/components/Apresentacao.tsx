import Image from "next/image";

export default function Apresentacao(){
    return (
        <div className={`
        flex
        flex-col
        justify-center 
        
        `}>
        <div className="p-10 flex justify-center">
          <Image className="rounded-full" height={200} width={200} alt='minha foto' src='https://avatars.githubusercontent.com/u/108353021?v=4'></Image>
        </div>
        <div className="flex flex-col justify-center w-full items-center">
          <h1 className="text-center text-black text-5xl">Olá, eu sou Rennan Augusto</h1>
          <div className="text-center p-5">
            <span className="text-gray-700">Olá eu sou rennan asufsuhbsdu udsufg sdufsdj mnadfn sdjnfjdsn fjiadsnf jidsfndjsnf djfn jdnfds fds afsdfsaf asdfdsfdsf safsdf dsfasdfadsf dsfsadsf sadsad</span>
          </div>
        </div>      
      </div>
    )
}