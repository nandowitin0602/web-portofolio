import { useState, useEffect } from "react";

const Navbar = () => {
	const [active, setActive] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 150) {
				setActive(true);
			} else {
				setActive(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className="navbar py-7 flex items-center justify-between">
			<div className="logo">
				<h1 className="text-3xl font-bold bg-white text-black rounded-md py-1 px-5 md:px-0 md:bg-transparent md:text-white">Portofolio</h1>
			</div>
			<ul className={`menu flex items-center sm:gap-10 gap-4 fixed left-1/2 -translate-x-1/2
			md:static md:translate-x-0 md:opacity-100 bg-white/30 backdrop-blur-md 
			md:p-0 p-4 rounded-br-2xl rounded-bl-2xl md:bg-transparent transition-all md:transition-none z-40
			${active ? "top-0 opacity-100" : "-top-20 opacity-0"}`}>
				<li><a href="#beranda" className="sm:text-lg text-base font-medium hover:text-orange-600 hover:scale-105 inline-block transition-all duration-300 ease-in-out">Beranda</a></li>
				<li><a href="#tentang" className="sm:text-lg text-base font-medium hover:text-orange-600 hover:scale-105 inline-block transition-all duration-300 ease-in-out">Tentang</a></li>
				<li><a href="#proyek" className="sm:text-lg text-base font-medium hover:text-orange-600 hover:scale-105 inline-block transition-all duration-300 ease-in-out">Proyek</a></li>
				<li><a href="#kontak" className="sm:text-lg text-base font-medium hover:text-orange-50 hover:scale-105 inline-block transition-all duration-300 ease-in-out bg-orange-600 p-2 rounded-md">Kontak</a></li>
			</ul>
		</div>
	);
};

export default Navbar;