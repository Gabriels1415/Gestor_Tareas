import { useState } from "react";
import { useParams } from "react-router-dom";

const Usuario = () => {
    const { nombre } = useParams<{ nombre: string }>();
    
    const hobbies: string[] = [
        "Leer",
        "Jugar videojuegos",
        "Escuchar música",
        "Programar"
    ];

    const [selectedHobbies, setSelectedHobbies] = useState<string[]>([]);

    const handleToggleHobby = (hobby: string) => {
        const isSelected = selectedHobbies.includes(hobby);

        if (isSelected) {
            setSelectedHobbies(
                selectedHobbies.filter((selectedHobby) => selectedHobby !== hobby)
            );
        } else {
            setSelectedHobbies([...selectedHobbies, hobby]);
        }
    };

    const allSelected = selectedHobbies.length === hobbies.length && hobbies.length > 0;

    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] text-white text-center px-6 animate-in fade-in duration-700">
            <h1 className="text-4xl font-medium mb-2 opacity-80 tracking-wide">
                Ruta parametrizada
            </h1>
            
            <h2 className="text-6xl font-bold mb-10 tracking-tight">
                El valor recibido en la URL es: <span className="text-violet-400">{nombre}</span>
            </h2>

            <div className="bg-white/5 backdrop-blur-md p-10 rounded-[40px] border border-white/10 shadow-2xl w-full max-w-2xl">
                <p className="text-2xl font-medium mb-6 text-gray-300">Sus hobbies son:</p>
                
                <div className="flex flex-wrap gap-4 justify-center mt-2">
                    {hobbies.map((hobby) => {
                        const isSelected = selectedHobbies.includes(hobby);
                        return (
                            <div
                                key={hobby}
                                onClick={() => handleToggleHobby(hobby)}
                                className={`
                                    rounded-full px-8 py-3 text-xl font-semibold shadow-lg 
                                    transition-all duration-300 cursor-pointer select-none
                                    ${isSelected 
                                        ? "bg-violet-500 text-white shadow-violet-500/30 scale-105" 
                                        : "bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white/70 hover:text-white"
                                    }
                                `}
                            >
                                {hobby}
                            </div>
                        );
                    })}
                </div>

                <div className="mt-12 pt-8 border-t border-white/10">
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-gray-400 text-lg uppercase tracking-widest">Progreso de Selección</span>
                        <div className="text-4xl font-black text-white">
                            {selectedHobbies.length} <span className="text-xl font-normal text-gray-500">/ {hobbies.length}</span>
                        </div>
                        <p className="text-lg text-gray-400 mt-2 italic">
                            Cantidad de hobbies seleccionados: <span className="font-bold text-white">{selectedHobbies.length}</span>
                        </p>
                    </div>
                </div>

                {allSelected && (
                    <div className="mt-8 p-4 bg-violet-500/20 border border-violet-500/50 rounded-2xl animate-bounce">
                        <p className="text-violet-300 font-bold text-xl">
                         ¡Todos los hobbies fueron seleccionados! 
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Usuario;
