import { TbExternalLink } from "react-icons/tb";
import services1 from "../assets/images/services1.jpg"
import AOS from 'aos';
import { useEffect } from "react";
import 'aos/dist/aos.css';
const Services = () => {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div className="my-20">
			<h1 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-center mb-12 text-[#222222]">Our Services</h1>
			<div className="grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-6 w-[95%] mx-auto">

				<div
					className="w-[300px] md:w-[300px] lg:w-[310px] h-[350px] relative overflow-hidden cursor-pointer rounded-md "
					data-aos="zoom-out-up">

					{/*  image  */}
					<img
						src={services1}
						alt="animated_card"
						className="w-full h-full object-cover scale-[1.1] transition-all duration-700" />

					{/*  text  */}
					<div
						className="absolute top-[50%] transform translate-y-[-50%] transition-all duration-500 w-full h-full left-0 z-20 flex items-center justify-center flex-col">
						<h1 className="text-[1.5rem] font-bold text-white text-center capitalize">Treatment</h1>
						<p className="text-center z-20 opacity-100 transition-all duration-700 text-[#fff] font-semibold text-[0.9rem] px-2">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry.
						</p>
						<TbExternalLink className="text-3xl mt-4" />
					</div>

					{/*  bottom shadow  */}
					<div
						className="w-full opacity-100 z-10 transition-all duration-500 bg-gradient-to-b from-[rgb(0,0,0,0.001)] to-[rgb(0,0,0,0.5)] h-[100%] absolute bottom-0 left-0 right-0">
					</div>
				</div>
				<div
					className="w-[300px] md:w-[300px] lg:w-[310px] h-[350px] relative overflow-hidden cursor-pointer rounded-md "
					data-aos="zoom-out-up">

					{/*  image  */}
					<img
						src={services1}
						alt="animated_card"
						className="w-full h-full object-cover scale-[1.1] transition-all duration-700" />

					{/*  text  */}
					<div
						className="absolute top-[50%] transform translate-y-[-50%] transition-all duration-500 w-full h-full left-0 z-20 flex items-center justify-center flex-col">
						<h1 className="text-[1.5rem] font-bold text-white text-center capitalize">Treatment</h1>
						<p className="text-center z-20 opacity-100 transition-all duration-700 text-[#fff] font-semibold text-[0.9rem] px-2">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry.
						</p>
						<TbExternalLink className="text-3xl mt-4" />
					</div>

					{/*  bottom shadow  */}
					<div
						className="w-full opacity-100 z-10 transition-all duration-500 bg-gradient-to-b from-[rgb(0,0,0,0.001)] to-[rgb(0,0,0,0.5)] h-[100%] absolute bottom-0 left-0 right-0">
					</div>
				</div>
				<div
					className="w-[300px] md:w-[300px] lg:w-[310px] h-[350px] relative overflow-hidden cursor-pointer rounded-md "
					data-aos="zoom-out-up">

					{/*  image  */}
					<img
						src={services1}
						alt="animated_card"
						className="w-full h-full object-cover scale-[1.1] transition-all duration-700" />

					{/*  text  */}
					<div
						className="absolute top-[50%] transform translate-y-[-50%] transition-all duration-500 w-full h-full left-0 z-20 flex items-center justify-center flex-col">
						<h1 className="text-[1.5rem] font-bold text-white text-center capitalize">Treatment</h1>
						<p className="text-center z-20 opacity-100 transition-all duration-700 text-[#fff] font-semibold text-[0.9rem] px-2">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry.
						</p>
						<TbExternalLink className="text-3xl mt-4" />
					</div>

					{/*  bottom shadow  */}
					<div
						className="w-full opacity-100 z-10 transition-all duration-500 bg-gradient-to-b from-[rgb(0,0,0,0.001)] to-[rgb(0,0,0,0.5)] h-[100%] absolute bottom-0 left-0 right-0">
					</div>
				</div>
				<div
					className="w-[300px] md:w-[300px] lg:w-[310px] h-[350px] relative overflow-hidden cursor-pointer rounded-md "
					data-aos="zoom-out-up">

					{/*  image  */}
					<img
						src={services1}
						alt="animated_card"
						className="w-full h-full object-cover scale-[1.1] transition-all duration-700" />

					{/*  text  */}
					<div
						className="absolute top-[50%] transform translate-y-[-50%] transition-all duration-500 w-full h-full left-0 z-20 flex items-center justify-center flex-col">
						<h1 className="text-[1.5rem] font-bold text-white text-center capitalize">Treatment</h1>
						<p className="text-center z-20 opacity-100 transition-all duration-700 text-[#fff] font-semibold text-[0.9rem] px-2">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry.
						</p>
						<TbExternalLink className="text-3xl mt-4" />
					</div>

					{/*  bottom shadow  */}
					<div
						className="w-full opacity-100 z-10 transition-all duration-500 bg-gradient-to-b from-[rgb(0,0,0,0.001)] to-[rgb(0,0,0,0.5)] h-[100%] absolute bottom-0 left-0 right-0">
					</div>
				</div>
				<div
					className="w-[300px] md:w-[300px] lg:w-[310px] h-[350px] relative overflow-hidden cursor-pointer rounded-md "
					data-aos="zoom-out-up">

					{/*  image  */}
					<img
						src={services1}
						alt="animated_card"
						className="w-full h-full object-cover scale-[1.1] transition-all duration-700" />

					{/*  text  */}
					<div
						className="absolute top-[50%] transform translate-y-[-50%] transition-all duration-500 w-full h-full left-0 z-20 flex items-center justify-center flex-col">
						<h1 className="text-[1.5rem] font-bold text-white text-center capitalize">Treatment</h1>
						<p className="text-center z-20 opacity-100 transition-all duration-700 text-[#fff] font-semibold text-[0.9rem] px-2">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry.
						</p>
						<TbExternalLink className="text-3xl mt-4" />
					</div>

					{/*  bottom shadow  */}
					<div
						className="w-full opacity-100 z-10 transition-all duration-500 bg-gradient-to-b from-[rgb(0,0,0,0.001)] to-[rgb(0,0,0,0.5)] h-[100%] absolute bottom-0 left-0 right-0">
					</div>
				</div>
				<div
					className="w-[300px] md:w-[300px] lg:w-[310px] h-[350px] relative overflow-hidden cursor-pointer rounded-md "
					data-aos="zoom-out-up">

					{/*  image  */}
					<img
						src={services1}
						alt="animated_card"
						className="w-full h-full object-cover scale-[1.1] transition-all duration-700" />

					{/*  text  */}
					<div
						className="absolute top-[50%] transform translate-y-[-50%] transition-all duration-500 w-full h-full left-0 z-20 flex items-center justify-center flex-col">
						<h1 className="text-[1.5rem] font-bold text-white text-center capitalize">Treatment</h1>
						<p className="text-center z-20 opacity-100 transition-all duration-700 text-[#fff] font-semibold text-[0.9rem] px-2">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry.
						</p>
						<TbExternalLink className="text-3xl mt-4" />
					</div>

					{/*  bottom shadow  */}
					<div
						className="w-full opacity-100 z-10 transition-all duration-500 bg-gradient-to-b from-[rgb(0,0,0,0.001)] to-[rgb(0,0,0,0.5)] h-[100%] absolute bottom-0 left-0 right-0">
					</div>
				</div>
				<div
					className="w-[300px] md:w-[300px] lg:w-[310px] h-[350px] relative overflow-hidden cursor-pointer rounded-md "
					data-aos="zoom-out-up">

					{/*  image  */}
					<img
						src={services1}
						alt="animated_card"
						className="w-full h-full object-cover scale-[1.1] transition-all duration-700" />

					{/*  text  */}
					<div
						className="absolute top-[50%] transform translate-y-[-50%] transition-all duration-500 w-full h-full left-0 z-20 flex items-center justify-center flex-col">
						<h1 className="text-[1.5rem] font-bold text-white text-center capitalize">Treatment</h1>
						<p className="text-center z-20 opacity-100 transition-all duration-700 text-[#fff] font-semibold text-[0.9rem] px-2">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry.
						</p>
						<TbExternalLink className="text-3xl mt-4" />
					</div>

					{/*  bottom shadow  */}
					<div
						className="w-full opacity-100 z-10 transition-all duration-500 bg-gradient-to-b from-[rgb(0,0,0,0.001)] to-[rgb(0,0,0,0.5)] h-[100%] absolute bottom-0 left-0 right-0">
					</div>
				</div>
				<div
					className="w-[300px] md:w-[300px] lg:w-[310px] h-[350px] relative overflow-hidden cursor-pointer rounded-md "
					data-aos="zoom-out-up">

					{/*  image  */}
					<img
						src={services1}
						alt="animated_card"
						className="w-full h-full object-cover scale-[1.1] transition-all duration-700" />

					{/*  text  */}
					<div
						className="absolute top-[50%] transform translate-y-[-50%] transition-all duration-500 w-full h-full left-0 z-20 flex items-center justify-center flex-col">
						<h1 className="text-[1.5rem] font-bold text-white text-center capitalize">Treatment</h1>
						<p className="text-center z-20 opacity-100 transition-all duration-700 text-[#fff] font-semibold text-[0.9rem] px-2">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry.
						</p>
						<TbExternalLink className="text-3xl mt-4" />
					</div>

					{/*  bottom shadow  */}
					<div
						className="w-full opacity-100 z-10 transition-all duration-500 bg-gradient-to-b from-[rgb(0,0,0,0.001)] to-[rgb(0,0,0,0.5)] h-[100%] absolute bottom-0 left-0 right-0">
					</div>
				</div>
				<div
					className="w-[300px] md:w-[300px] lg:w-[310px] h-[350px] relative overflow-hidden cursor-pointer rounded-md "
					data-aos="zoom-out-up">

					{/*  image  */}
					<img
						src={services1}
						alt="animated_card"
						className="w-full h-full object-cover scale-[1.1] transition-all duration-700" />

					{/*  text  */}
					<div
						className="absolute top-[50%] transform translate-y-[-50%] transition-all duration-500 w-full h-full left-0 z-20 flex items-center justify-center flex-col">
						<h1 className="text-[1.5rem] font-bold text-white text-center capitalize">Treatment</h1>
						<p className="text-center z-20 opacity-100 transition-all duration-700 text-[#fff] font-semibold text-[0.9rem] px-2">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry.
						</p>
						<TbExternalLink className="text-3xl mt-4" />
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