const Footer = () => {
    return (
        <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
            <h1 className="text-2xl font-bold">Portofolio</h1>
            <div className="flex gap-7">
                <a href="#beranda" className="hover:text-orange-600 hover:scale-105 transition-all duration-300 ease-in-out">Beranda</a>
                <a href="#tentang" className="hover:text-orange-600 hover:scale-105 transition-all duration-300 ease-in-out">Tentang</a>
                <a href="#proyek" className="hover:text-orange-600 hover:scale-105 transition-all duration-300 ease-in-out">Proyek</a>
            </div>
            <div className="flex items-center gap-3">
                <a href="#">
                    <i className="ri-github-fill ri-2x hover:text-orange-600 transition-colors"></i>
                </a>
                <a href="#">
                    <i className="ri-linkedin-fill ri-2x hover:text-orange-600 transition-colors"></i>
                </a>
                <a href="#">
                    <i className="ri-instagram-fill ri-2x hover:text-orange-600 transition-colors"></i>
                </a>
            </div>
        </div>
    )
}

export default Footer