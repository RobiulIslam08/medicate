import { TbExternalLink } from "react-icons/tb";
import services1 from "../assets/images/residence.jpg"
import AOS from 'aos';
import { useEffect } from "react";
import 'aos/dist/aos.css';
const Services = () => {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div className="my-5 md:my-7 lg:my-9">
			<h1 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-center mb-3 lg:mb-6 text-[#222222]"  >Our Services</h1>

			<div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 justify-items-center gap-6 w-[90%] mx-auto">

				<div
					className="w-[95px] md:w-[120px] lg:w-[140px] h-[95px] md:h-[120px] lg:h-[140px]  relative overflow-hidden cursor-pointer rounded-md"
				>

					{/*  image  */}
					<img
						src={services1}
						alt="animated_card"
						className="w-full h-full object-cover scale-[1.1] transition-all duration-700" />

					{/*  text  */}
					<div
						className="absolute top-[50%] transform translate-y-[-50%] transition-all duration-500 w-full h-full left-0 z-20 flex items-center justify-center flex-col">
						<h1 className="text-base font-bold  text-center capitalize text-[#ffffff]">Residense</h1>

						<TbExternalLink className="text-[18px] mt-4 text-[#b4f079d2]" />
					</div>

					{/*  bottom shadow  */}
					<div
						className="w-full opacity-100 z-10 transition-all duration-500 bg-gradient-to-b from-[rgb(0,0,0,0.001)] to-[rgb(0,0,0,0.5)] h-[100%] absolute bottom-0 left-0 right-0">
					</div>
				</div>
				<div
					className="w-[95px] md:w-[120px] lg:w-[140px] h-[95px] md:h-[120px] lg:h-[140px]  relative overflow-hidden cursor-pointer rounded-md"
				>

					{/*  image  */}
					<img
						src={services1}
						alt="animated_card"
						className="w-full h-full object-cover scale-[1.1] transition-all duration-700" />

					{/*  text  */}
					<div
						className="absolute top-[50%] transform translate-y-[-50%] transition-all duration-500 w-full h-full left-0 z-20 flex items-center justify-center flex-col">
						<h1 className="text-base font-bold  text-center capitalize text-[#ffffff]">Residense</h1>

						<TbExternalLink className="text-[18px] mt-4 text-[#b4f079d2]" />
					</div>

					{/*  bottom shadow  */}
					<div
						className="w-full opacity-100 z-10 transition-all duration-500 bg-gradient-to-b from-[rgb(0,0,0,0.001)] to-[rgb(0,0,0,0.5)] h-[100%] absolute bottom-0 left-0 right-0">
					</div>
				</div>
				<div
					className="w-[95px] md:w-[120px] lg:w-[140px] h-[95px] md:h-[120px] lg:h-[140px]  relative overflow-hidden cursor-pointer rounded-md"
				>

					{/*  image  */}
					<img
						src={services1}
						alt="animated_card"
						className="w-full h-full object-cover scale-[1.1] transition-all duration-700" />

					{/*  text  */}
					<div
						className="absolute top-[50%] transform translate-y-[-50%] transition-all duration-500 w-full h-full left-0 z-20 flex items-center justify-center flex-col">
						<h1 className="text-base font-bold  text-center capitalize text-[#ffffff]">Residense</h1>

						<TbExternalLink className="text-[18px] mt-4 text-[#b4f079d2]" />
					</div>

					{/*  bottom shadow  */}
					<div
						className="w-full opacity-100 z-10 transition-all duration-500 bg-gradient-to-b from-[rgb(0,0,0,0.001)] to-[rgb(0,0,0,0.5)] h-[100%] absolute bottom-0 left-0 right-0">
					</div>
				</div>
				<div
					className="w-[95px] md:w-[120px] lg:w-[140px] h-[95px] md:h-[120px] lg:h-[140px]  relative overflow-hidden cursor-pointer rounded-md"
				>

					{/*  image  */}
					<img
						src={services1}
						alt="animated_card"
						className="w-full h-full object-cover scale-[1.1] transition-all duration-700" />

					{/*  text  */}
					<div
						className="absolute top-[50%] transform translate-y-[-50%] transition-all duration-500 w-full h-full left-0 z-20 flex items-center justify-center flex-col">
						<h1 className="text-base font-bold  text-center capitalize text-[#ffffff]">Residense</h1>

						<TbExternalLink className="text-[18px] mt-4 text-[#b4f079d2]" />
					</div>

					{/*  bottom shadow  */}
					<div
						className="w-full opacity-100 z-10 transition-all duration-500 bg-gradient-to-b from-[rgb(0,0,0,0.001)] to-[rgb(0,0,0,0.5)] h-[100%] absolute bottom-0 left-0 right-0">
					</div>
				</div>
				<div
					className="w-[95px] md:w-[120px] lg:w-[140px] h-[95px] md:h-[120px] lg:h-[140px]  relative overflow-hidden cursor-pointer rounded-md"
				>

					{/*  image  */}
					<img
						src={services1}
						alt="animated_card"
						className="w-full h-full object-cover scale-[1.1] transition-all duration-700" />

					{/*  text  */}
					<div
						className="absolute top-[50%] transform translate-y-[-50%] transition-all duration-500 w-full h-full left-0 z-20 flex items-center justify-center flex-col">
						<h1 className="text-base font-bold  text-center capitalize text-[#ffffff]">Residense</h1>

						<TbExternalLink className="text-[18px] mt-4 text-[#b4f079d2]" />
					</div>

					{/*  bottom shadow  */}
					<div
						className="w-full opacity-100 z-10 transition-all duration-500 bg-gradient-to-b from-[rgb(0,0,0,0.001)] to-[rgb(0,0,0,0.5)] h-[100%] absolute bottom-0 left-0 right-0">
					</div>
				</div>
				<div
					className="w-[95px] md:w-[120px] lg:w-[140px] h-[95px] md:h-[120px] lg:h-[140px]  relative overflow-hidden cursor-pointer rounded-md"
				>

					{/*  image  */}
					<img
						src={services1}
						alt="animated_card"
						className="w-full h-full object-cover scale-[1.1] transition-all duration-700" />

					{/*  text  */}
					<div
						className="absolute top-[50%] transform translate-y-[-50%] transition-all duration-500 w-full h-full left-0 z-20 flex items-center justify-center flex-col">
						<h1 className="text-base font-bold  text-center capitalize text-[#ffffff]">Residense</h1>

						<TbExternalLink className="text-[18px] mt-4 text-[#b4f079d2]" />
					</div>

					{/*  bottom shadow  */}
					<div
						className="w-full opacity-100 z-10 transition-all duration-500 bg-gradient-to-b from-[rgb(0,0,0,0.001)] to-[rgb(0,0,0,0.5)] h-[100%] absolute bottom-0 left-0 right-0">
					</div>
				</div>
				<div
					className="w-[95px] md:w-[120px] lg:w-[140px] h-[95px] md:h-[120px] lg:h-[140px]  relative overflow-hidden cursor-pointer rounded-md"
				>

					{/*  image  */}
					<img
						src={services1}
						alt="animated_card"
						className="w-full h-full object-cover scale-[1.1] transition-all duration-700" />

					{/*  text  */}
					<div
						className="absolute top-[50%] transform translate-y-[-50%] transition-all duration-500 w-full h-full left-0 z-20 flex items-center justify-center flex-col">
						<h1 className="text-base font-bold  text-center capitalize text-[#ffffff]">Residense</h1>

						<TbExternalLink className="text-[18px] mt-4 text-[#b4f079d2]" />
					</div>

					{/*  bottom shadow  */}
					<div
						className="w-full opacity-100 z-10 transition-all duration-500 bg-gradient-to-b from-[rgb(0,0,0,0.001)] to-[rgb(0,0,0,0.5)] h-[100%] absolute bottom-0 left-0 right-0">
					</div>
				</div>
				<div
					className="w-[95px] md:w-[120px] lg:w-[140px] h-[95px] md:h-[120px] lg:h-[140px]  relative overflow-hidden cursor-pointer rounded-md"
				>

					{/*  image  */}
					<img
						src={services1}
						alt="animated_card"
						className="w-full h-full object-cover scale-[1.1] transition-all duration-700" />

					{/*  text  */}
					<div
						className="absolute top-[50%] transform translate-y-[-50%] transition-all duration-500 w-full h-full left-0 z-20 flex items-center justify-center flex-col">
						<h1 className="text-base font-bold  text-center capitalize text-[#ffffff]">Residense</h1>

						<TbExternalLink className="text-[18px] mt-4 text-[#b4f079d2]" />
					</div>

					{/*  bottom shadow  */}
					<div
						className="w-full opacity-100 z-10 transition-all duration-500 bg-gradient-to-b from-[rgb(0,0,0,0.001)] to-[rgb(0,0,0,0.5)] h-[100%] absolute bottom-0 left-0 right-0">
					</div>
				</div>
				<div
					className="w-[95px] md:w-[120px] lg:w-[140px] h-[95px] md:h-[120px] lg:h-[140px]  relative overflow-hidden cursor-pointer rounded-md"
				>

					{/*  image  */}
					<img
						src={services1}
						alt="animated_card"
						className="w-full h-full object-cover scale-[1.1] transition-all duration-700" />

					{/*  text  */}
					<div
						className="absolute top-[50%] transform translate-y-[-50%] transition-all duration-500 w-full h-full left-0 z-20 flex items-center justify-center flex-col">
						<h1 className="text-base font-bold  text-center capitalize text-[#ffffff]">Residense</h1>

						<TbExternalLink className="text-[18px] mt-4 text-[#b4f079d2]" />
					</div>

					{/*  bottom shadow  */}
					<div
						className="w-full opacity-100 z-10 transition-all duration-500 bg-gradient-to-b from-[rgb(0,0,0,0.001)] to-[rgb(0,0,0,0.5)] h-[100%] absolute bottom-0 left-0 right-0">
					</div>
				</div>
				<div
					className="w-[95px] md:w-[120px] lg:w-[140px] h-[95px] md:h-[120px] lg:h-[140px]  relative overflow-hidden cursor-pointer rounded-md"
				>

					{/*  image  */}
					<img
						src={services1}
						alt="animated_card"
						className="w-full h-full object-cover scale-[1.1] transition-all duration-700" />

					{/*  text  */}
					<div
						className="absolute top-[50%] transform translate-y-[-50%] transition-all duration-500 w-full h-full left-0 z-20 flex items-center justify-center flex-col">
						<h1 className="text-base font-bold  text-center capitalize text-[#ffffff]">Residense</h1>

						<TbExternalLink className="text-[18px] mt-4 text-[#b4f079d2]" />
					</div>

					{/*  bottom shadow  */}
					<div
						className="w-full opacity-100 z-10 transition-all duration-500 bg-gradient-to-b from-[rgb(0,0,0,0.001)] to-[rgb(0,0,0,0.5)] h-[100%] absolute bottom-0 left-0 right-0">
					</div>
				</div>
				<div
					className="w-[95px] md:w-[120px] lg:w-[140px] h-[95px] md:h-[120px] lg:h-[140px]  relative overflow-hidden cursor-pointer rounded-md"
				>

					{/*  image  */}
					<img
						src={services1}
						alt="animated_card"
						className="w-full h-full object-cover scale-[1.1] transition-all duration-700" />

					{/*  text  */}
					<div
						className="absolute top-[50%] transform translate-y-[-50%] transition-all duration-500 w-full h-full left-0 z-20 flex items-center justify-center flex-col">
						<h1 className="text-base font-bold  text-center capitalize text-[#ffffff]">Residense</h1>

						<TbExternalLink className="text-[18px] mt-4 text-[#b4f079d2]" />
					</div>

					{/*  bottom shadow  */}
					<div
						className="w-full opacity-100 z-10 transition-all duration-500 bg-gradient-to-b from-[rgb(0,0,0,0.001)] to-[rgb(0,0,0,0.5)] h-[100%] absolute bottom-0 left-0 right-0">
					</div>
				</div>














			</div>
		</div>
	);
};

export default Services;