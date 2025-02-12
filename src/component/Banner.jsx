
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';

// import slider1 from "../assets/images/slider1.webp"
// import slider2 from "../assets/images/slider2.webp"
// import slider3 from "../assets/images/slider3.webp"
// import slider4 from "../assets/images/slider4.webp"
// import slider5 from "../assets/images/slider5.webp"

// // import required modules
// import { Navigation, Autoplay} from 'swiper/modules';

// const Banner = () => {
// 	return (
// 	  <div className='bg-red-300 overflow-hidden'>
// 		<Swiper 
// 		  className="mySwiper h-[200px] md:h-[400px] lg:h-[500px] overflow-hidden" 
// 		  navigation={true} 
// 		  autoplay={{ delay: 3000, disableOnInteraction: false }}
// 		  modules={[Navigation, Autoplay]}
// 		  lazy={true}
// 		>
// 		  {[slider1, slider2, slider3, slider4, slider5].map((slider, index) => (
// 			<SwiperSlide key={index}>
// 			  <div className="h-full w-full">
// 				<img 
// 				  src={slider} 
// 				  className='w-full h-full object-cover' 
// 				  alt={`slider ${index + 1}`} 
// 				  loading="lazy"
// 				/>
// 			  </div>
// 			</SwiperSlide>
// 		  ))}
// 		</Swiper>
// 	  </div>
// 	);
//   };

// export default Banner;
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import slider1 from "../assets/images/slider1.webp";
import slider2 from "../assets/images/slider2.webp";
import slider3 from "../assets/images/slider3.webp";
import slider4 from "../assets/images/slider4.webp";
import slider5 from "../assets/images/slider5.webp";

// Import required modules
import { Navigation, Autoplay } from 'swiper/modules';

const Banner = () => {
  return (
    <div className="w-full overflow-hidden bg-red-300">
      <Swiper
        className="w-full h-[200px] md:h-[400px] lg:h-[500px]"
        navigation={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[Navigation, Autoplay]}
        style={{ overflow: "hidden" }} // ✅ Swiper-এর জন্য overflow fix
      >
        {[slider1, slider2, slider3, slider4, slider5].map((slider, index) => (
          <SwiperSlide key={index}>
            <div className="h-full w-full">
              <img 
                src={slider} 
                className="w-full h-full object-cover block" // ✅ block যোগ করেছি
                alt={`Slider ${index + 1}`} 
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;

