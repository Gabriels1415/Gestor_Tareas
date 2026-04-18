import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Usuario from "./components/Usuario";

function App() {
    return (
        <BrowserRouter>
            <nav className="flex gap-8 p-6 bg-gradient-to-r from-gray-900 to-black text-white justify-center shadow-xl border-b border-white/10">
                <Link to="/" className="text-lg hover:text-violet-400 transition-colors duration-300 font-medium">Inicio</Link>
                <Link to="/profile" className="text-lg hover:text-violet-400 transition-colors duration-300 font-medium">Perfil</Link>
                <Link to="/usuario/gabriel" className="text-lg hover:text-violet-400 transition-colors duration-300 font-medium whitespace-nowrap">Ver Usuario</Link>
            </nav>

            <div className="min-h-screen bg-black text-white relative flex flex-col items-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-violet-900/20 via-black to-black -z-10"></div>

                <div className="w-full max-w-6xl mt-10">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/usuario/:nombre" element={<Usuario />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;