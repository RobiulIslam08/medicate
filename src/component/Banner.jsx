
// // // Import Swiper React components
// // import { Swiper, SwiperSlide } from 'swiper/react';

// // // Import Swiper styles
// // import 'swiper/css';
// // import 'swiper/css/navigation';

// // import slider1 from "../assets/images/slider1.webp"
// // import slider2 from "../assets/images/slider2.webp"
// // import slider3 from "../assets/images/slider3.webp"
// // import slider4 from "../assets/images/slider4.webp"
// // import slider5 from "../assets/images/slider5.webp"

// // // import required modules
// // import { Navigation, Autoplay} from 'swiper/modules';

// // const Banner = () => {
// // 	return (
// // 	  <div className='bg-red-300 overflow-hidden'>
// // 		<Swiper 
// // 		  className="mySwiper h-[200px] md:h-[400px] lg:h-[500px] overflow-hidden" 
// // 		  navigation={true} 
// // 		  autoplay={{ delay: 3000, disableOnInteraction: false }}
// // 		  modules={[Navigation, Autoplay]}
// // 		  lazy={true}
// // 		>
// // 		  {[slider1, slider2, slider3, slider4, slider5].map((slider, index) => (
// // 			<SwiperSlide key={index}>
// // 			  <div className="h-full w-full">
// // 				<img 
// // 				  src={slider} 
// // 				  className='w-full h-full object-cover' 
// // 				  alt={`slider ${index + 1}`} 
// // 				  loading="lazy"
// // 				/>
// // 			  </div>
// // 			</SwiperSlide>
// // 		  ))}
// // 		</Swiper>
// // 	  </div>
// // 	);
// //   };

// // export default Banner;
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';

// import slider1 from "../assets/images/slider1.webp";
// import slider2 from "../assets/images/slider2.webp";
// import slider3 from "../assets/images/slider3.webp";
// import slider4 from "../assets/images/slider4.webp";
// import slider5 from "../assets/images/slider5.webp";

// // Import required modules
// import { Navigation, Autoplay, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

// const Banner = () => {
//   return (
//     <div className="w-full overflow-hidden bg-red-300">
//       <Swiper
//         className="w-full h-[200px] md:h-[400px] lg:h-[500px]"
//         navigation={true}
//         pagination={true}
//         mousewheel={true}
//         keyboard={true}
//         autoplay={{ delay: 2000, disableOnInteraction: false }}
//         modules={[Navigation, Autoplay,  Pagination, Mousewheel, Keyboard]}
//         style={{ overflow: "hidden" }} // ✅ Swiper-এর জন্য overflow fix
//       >
//         {[slider1, slider2, slider3, slider4, slider5].map((slider, index) => (
//           <SwiperSlide key={index}>
//             <div className="h-full w-full">
//               <img 
//                 src={slider} 
//                 className="w-full h-full object-cover block" // ✅ block যোগ করেছি
//                 alt={`Slider ${index + 1}`} 
//                 loading="lazy"
//               />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Banner;

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import slider1 from "../assets/images/sliderOne.jpg";
import slider2 from "../assets/images/sliderTwo.jpg";
import slider3 from "../assets/images/sliderThree.jpg";
import slider4 from "../assets/images/sliderFour.jpg";
import slider5 from "../assets/images/slider5.jpg";
import { Navigation, Autoplay, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const Banner = () => {
  return (
    <div className="w-full overflow-hidden bg-red-300">
      {/* Swiper কন্টেইনার */}
      <Swiper
        className="w-full h-[200px] md:h-[400px] lg:h-[500px]"
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Navigation, Autoplay, Pagination, Mousewheel, Keyboard]}
      >
        {[slider1, slider2, slider3, slider4, slider5].map((slider, index) => (
          <SwiperSlide key={index}>
            <div className="h-full w-full">
              <img
                src={slider}
                className="w-full h-full object-cover block"
                alt={`Slider ${index + 1}`}
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* কাস্টম CSS for নেভিগেশন বাটন */}
      <style>
        {`
          .swiper-button-next, .swiper-button-prev {
            width: 30px; /* বাটনের প্রস্থ */
            height: 30px; /* বাটনের উচ্চতা */
            background-color: rgba(255, 255, 255, 0.5); /* ব্যাকগ্রাউন্ড কালার */
            border-radius: 50%; /* বাটনকে গোলাকার করুন */
            color: #000; /* আইকনের কালার */
            font-size: 16px; /* আইকনের সাইজ */
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .swiper-button-next::after, .swiper-button-prev::after {
            font-size: 16px; /* আইকনের সাইজ ছোট করুন */
          }
          .swiper-button-next:hover, .swiper-button-prev:hover {
            background-color: rgba(255, 255, 255, 0.8); /* হোভার ইফেক্ট */
          }
        `}
      </style>
    </div>
  );
};

export default Banner;