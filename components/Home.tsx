const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center h-[60vh] text-center px-4">
            <h1 className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-violet-500 mb-6 tracking-tight">
                Página de Inicio
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
                Bienvenido a la aplicación de demostración de rutas. Navega para ver el perfil o prueba una ruta dinámica.
            </p>
        </div>
    );
};

export default Home;
