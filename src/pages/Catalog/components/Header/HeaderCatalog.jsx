import React, { useState } from "react";
import { Badge } from "@/components/ui/badge"
import { AlarmClock, Heart } from "lucide-react";



export default function HeaderCatalog() {
    const [favorite, setFavorite] = useState(false)
 
const horario = true;

    return (
        <div className="relative mb-20">
            <img
                className="w-full h-[300px] object-cover rounded-br-[90px]"
                src="/HeaderCatalog2.jpg"
                alt="Header Catalog"
            />
            <Badge 
            onClick={() => setFavorite(!favorite)}
            className="bg-white absolute top-2 right-2 w-12 h-12"><Heart className={favorite ? "fill-red-600" : "fill-white"} color="red" /></Badge>
            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-64px] w-[75%] h-48 bg-[#F5F7F8] shadow-md flex flex-col items-center justify-center rounded-2xl">
                <img
                    src="/pizzariaZe.jpg"
                    alt="Logotipo"
                    className="w-16 h-16 mb-2 object-contain absolute -top-8 rounded-[50%]"
                />
                <h2 className="text-red-700 font-semibold text-[32px]">Pizzaria Zé</h2>
                <article className="flex items-center flex-col w-full ml-4 gap-2">
                    <Badge className='bg-white gap-2 w-28'><AlarmClock />Horários</Badge>
                    <div>
                        <p className="text-black text-sm">Seg. sex - 09:00 / 18:00</p>
                        <p className="text-black text-sm">Sab. Dom - 09:00 / 13:00</p>
                    </div>
                </article>
                <article>
                {horario ? <Badge className='bg-green-600 text-white'>Aberto</Badge>  : <Badge className='bg-red-600 text-white'>Fechado</Badge>}
                    </article>
            </div>
        </div>
    );
}


