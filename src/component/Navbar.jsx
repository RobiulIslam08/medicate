import { useState } from "react";

// react icons

import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5"; // Import IoClose
import logo from "../assets/images/logo.png"

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<div className="">
			{/* marque nav  */}
			<div className="flex bg-[#b4f079d2] justify-between items-center">
				<h1
					className="bg-[#e12454] text-white w-20 px-4 py-1 md:py-2 font-semibold"
					style={{ clipPath: "polygon(0 0, 100% 0, 84% 100%, 0% 100%)" }}
				>
					Notice
				</h1>

				<marquee className="">
					This is notice Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Quibusdam est tempora, quae nisi rem quisquam nam nihil ab ducimus adipisci.
				</marquee>
			</div>

			<nav className="flex items-center justify-between w-full relative px-2 mt-2 md:px-7 shadow-md ">
			<div className="flex items-center gap-4">
					{/* logo */}
					<img className="w-[60px] max-w-full"
					src={logo}
					alt="logo"
					
				/>
				<div>
				<h1 className="text-xl md:text-2xl font-semibold text-[#424242]">Bangladeshi Studeo</h1>
				<p className="text-[#424242]">is Trusted Duciment Site.</p>
				</div>
			</div>

				{/* nav menus */}
				<ul className="items-center gap-[20px] text-[1rem] text-[#424242] md:flex hidden font-semibold">
					<li className="hover:border-b-[#e12454] border-b-[2px] border-transparent transition-all duration-500 ease-in-out cursor-pointer hover:text-[#e12454] capitalize">
						home
					</li>
					<li className="hover:border-b-[#e12454] border-b-[2px] border-transparent transition-all duration-500 ease-in-out cursor-pointer hover:text-[#e12454] capitalize">
						about us
					</li>
					<li className="hover:border-b-[#e12454] border-b-[2px] border-transparent transition-all duration-500 ease-in-out cursor-pointer hover:text-[#e12454] capitalize">
						services
					</li>
					<li className="hover:border-b-[#e12454] border-b-[2px] border-transparent transition-all duration-500 ease-in-out cursor-pointer hover:text-[#e12454] capitalize">
						home
					</li>
					<li className="hover:border-b-[#e12454] border-b-[2px] border-transparent transition-all duration-500 ease-in-out cursor-pointer hover:text-[#e12454] capitalize">
						about us
					</li>
					<li className="hover:border-b-[#e12454] border-b-[2px] border-transparent transition-all duration-500 ease-in-out cursor-pointer hover:text-[#e12454] capitalize">
						services
					</li>

				</ul>

				{/* Toggle between menu and close icons */}
				{isMenuOpen ? (
					<IoClose
						className="text-[1.8rem] text-[#424242] cursor-pointer md:hidden flex"
						onClick={() => setIsMenuOpen(false)}
					/>
				) : (
					<CiMenuFries
						className="text-[1.8rem] text-[#424242] cursor-pointer md:hidden flex"
						onClick={() => setIsMenuOpen(true)}
					/>
				)}


				{/* mobile sidebar */}
				<aside
					className={` ${isMenuOpen ? "translate-x-0 opacity-100 z-20" : " opacity-0 z-[-1]"
						} md:hidden bg-[#b8ee83d2] p-4 text-center absolute top-[60px] right-0 w-full sm:w-[300px] rounded-md transition-all duration-300`}
				>


					<ul className="items-center gap-[20px] text-[1rem] text-[#424242] flex flex-col">
						<li className="hover:border-b-[#e12454] border-b-[2px] border-transparent transition-all ease-in-out duration-500 cursor-pointer capitalize">
							home
						</li>
						<li className="hover:border-b-[#e12454] border-b-[2px] border-transparent transition-all ease-in-out duration-500 cursor-pointer capitalize">
							about us
						</li>
						<li className="hover:border-b-[#e12454] border-b-[2px] border-transparent transition-all ease-in-out duration-500 cursor-pointer capitalize">
							services
						</li>
						<li className="hover:border-b-[#e12454] border-b-[2px] border-transparent transition-all ease-in-out duration-500 cursor-pointer capitalize">
							home
						</li>
						<li className="hover:border-b-[#e12454] border-b-[2px] border-transparent transition-all ease-in-out duration-500 cursor-pointer capitalize">
							about us
						</li>
						<li className="hover:border-b-[#e12454] border-b-[2px] border-transparent transition-all ease-in-out duration-500 cursor-pointer capitalize">
							services
						</li>
					</ul>
				</aside>
			</nav>
		</div>
	);
};

export default Navbar;
