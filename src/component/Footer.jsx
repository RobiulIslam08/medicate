


// react icons
import {  FaCcAmazonPay, FaCcDiscover, FaCcMastercard, FaCcPaypal, FaCcVisa, FaFacebook, FaGooglePay, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail, MdOutlineLocalPhone } from "react-icons/md";
import logo from "../assets/images/logo.png"
import { FaXTwitter } from "react-icons/fa6";
import {  SiApplepay } from "react-icons/si";
import { LiaCcAmex } from "react-icons/lia";

const Footer = () => {

	return (
		<footer className="bg-[#111111]  w-full  sm:p-9 pt-5">
			{/* logo and social link */}
			<div className="flex items-center justify-between  px-6 md:px-24 mb-7">
				{/* logo */}
				<div className="flex items-center gap-4">
					{/* logo */}
					<img className="w-[60px] max-w-full"
						src={logo}
						alt="logo"

					/>
					<div className="hidden md:flex flex-col">
						<h1 className="text-xl md:text-2xl font-semibold text-[#ffffff]">Bangladeshi Studeo</h1>
						<p className="text-[#b1aaaa]">is Trusted Duciment Site.</p>
					</div>
				</div>
				{/* socila link */}
				<div className="flex  gap-4 text-2xl md:text-3xl text-[#e12454]  mt-4">
					<FaFacebook className="hover:text-[#e12454] transition-all duration-300 ease-in hover:scale-125" />
					<FaInstagram className="hover:text-[#e12454] transition-all duration-300 ease-in hover:scale-125" />
					<FaLinkedinIn className="hover:text-[#e12454] transition-all duration-300 ease-in hover:scale-125" />
					<FaYoutube className="hover:text-[#e12454] transition-all duration-300 ease-in hover:scale-125" />
					<FaXTwitter className="hover:text-[#e12454] transition-all duration-300 ease-in hover:scale-125" />

				</div>
			</div>
			<div
				className="flex justify-between gap-[30px] flex-col sm:flex-row flex-wrap w-full  px-6 md:px-24">
				<div className="w-full sm:w-[25%] ">

					<div className="flex flex-col gap-[10px] text-primary ">
						<h3 className="text-[1.2rem] font-semibold text-text mb-2 text-[#ffffff] font-fontRobotoSlab">Reach Us</h3>
						<span><a
							className="text-[0.9rem] flex items-center gap-[8px]  cursor-pointer text-[#999999]">
							<MdOutlineLocalPhone className="text-[1.1rem] text-[#b4f079d2] " />
							01323090887
						</a></span>
						<span><a
							className="text-[0.9rem] flex items-center gap-[8px] cursor-pointer text-[#999999]">
							<IoLocationOutline className="text-[1.2rem] text-[#b4f079d2]" />
							Sherpur, Mymensingh, Bangladesh
						</a></span>
						<span><a
							className="text-[0.9rem] flex items-center gap-[8px]  cursor-pointer text-[#999999]">
							<MdOutlineEmail className="text-[1.1rem] text-[#b4f079d2] " />
							bangladeshstudeo@gmail.com
						</a></span>

					</div>

				</div>

				<div className="">
					<h3 className="text-[1.2rem] font-semibold text-text mb-2 text-[#ffffff] font-fontRobotoSlab">Services</h3>
					<div className="flex text-black flex-col gap-[10px] font-fontRoboto">
						<p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200 text-[#999999]">Service Name</p>
						<p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200 text-[#999999]">Service Name</p>
						<p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200 text-[#999999]">Service Name</p>
						<p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200 text-[#999999]">Service Name</p>
						<p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200 text-[#999999]">Service Name</p>


					</div>
				</div>


				<div className="">
					<h3 className="text-[1.2rem] font-semibold text-text mb-2 text-[#ffffff]">Links</h3>
					<div className="flex text-black flex-col gap-[10px]">
						<p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200 text-[#999999]">Home</p>
						<p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200 text-[#999999]">Medical Certificate</p>
						<p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200 text-[#999999]">
							Future Pipe</p>
						<p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200 text-[#999999]">PDF Generate</p>
						<p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200 text-[#999999]">Term and Condition</p>
						<p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200 text-[#999999]">Payment Page</p>
						<p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200 text-[#999999]">Live Chat</p>
						<p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200 text-[#999999]">Help</p>

					</div>
				</div>


				<div className="">
					<h3 className="text-[1.2rem] font-semibold text-text mb-2 text-[#ffffff]">Contact Us</h3>

					<form action="" className="text-white space-y-1">
						<div className="flex flex-col gap-1">
							<label className="text-[#bdb9b9] ">Name:</label>
							<input type="text" className="border border-[#b4f079d2] focus:border-[#aef963e6] transition-all duration-300 outline-none p-1 rounded-md" />
						</div>
						<div className="flex flex-col gap-1">
							<label className="text-[#bdb9b9] ">Email:</label>
							<input type="email" className="border border-[#b4f079d2] focus:border-[#aef963e6] transition-all duration-300 outline-none p-1 rounded-md" />
						</div>

						<div className="flex flex-col gap-1">
							<label className="text-[#bdb9b9] ">Message</label>
							<textarea className="border border-[#b4f079d2] focus:border-[#aef963e6] transition-all duration-300 outline-none p-1 rounded-md"
							></textarea>
						</div>
						<button type="submit" className="py-2 px-6 border border-[#e12454] bg-[#e12454] text-[#d8e4cde6] rounded font-[500] relative overflow-hidden z-10 mt-[10px]">Submit</button>
					</form>
				</div>


			</div>

			{/* payment card */}
			<div className="flex gap-2 md:gap-4  justify-center items-center mt-4 md:mt-7">
				<FaCcVisa className="text-2xl md:text-5xl text-[#95b971fc]" />
				<FaCcDiscover className="text-2xl md:text-5xl text-[#d4a842]" />
				<FaCcMastercard className="text-2xl md:text-5xl text-[#7981efd2]" />
				<FaCcPaypal className="text-2xl md:text-5xl text-[#f09aced2]" />
				<FaCcAmazonPay className="text-2xl md:text-5xl text-[#b4f079d2]" />
				<LiaCcAmex className="text-2xl md:text-5xl text-[#b4f079d2]" />
				<FaGooglePay className="text-2xl md:text-5xl text-[#8bdfe9d2]" />
				<SiApplepay className="text-2xl md:text-5xl text-[#f0ec79d2]" />
			</div>
			<hr className="md:mx-24 mx-6 mt-6 border-gray-700" />
			<p className="text-gray-500 font-fontRoboto flex justify-center items-center pt-5 md:pt-7 pb-4 md:pb-6">Copyright © 2025 Bangladesh Studeo.</p>
		</footer>
	);
};

export default Footer;