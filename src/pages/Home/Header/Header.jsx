import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCards } from 'swiper/modules';
import { Fade } from "react-awesome-reveal";

import 'swiper/css';
import 'swiper/css/effect-cards';

const Header = () => {
    return (
        <div>
            <div className="bg-[url('https://plus.unsplash.com/premium_photo-1681140560806-928e8b9a9a20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGxhbnRpbmclMjB0cmVlc3xlbnwwfHwwfHx8MA%3D%3D')] bg-no-repeat bg-center bg-cover px-32 py-12 mb-12">
                <div className="flex justify-between items-center">
                    <div>
                        <Fade direction="down" triggerOnce={true}><h1 className="font-workSans mb-5 text-6xl font-bold text-white">Together We Can <br /> <span className="text-[#606c38]">Create Positive Change</span> <br /> In The World.</h1></Fade>
                        <p className="font-montserrat text-base-300 font-medium mb-6">A volunteer job is a non-paid position where you assist an organization by <br /> providing volunteer labor for a variety of tasks. Your responsibilities depend entirely <br /> on the type of organization for which you volunteer. There are many different types of volunteer positions.</p>
                        <Fade direction="up" triggerOnce={true}><button to="/add_tourists_spot" className="btn font-montserrat bg-[#dda15e] text-black font-bold px-7 text-center border-none">Our Help</button></Fade>
                    </div>

                    <div className="w-[270px]">
                        <Swiper
                            speed={600}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                            }}
                            modules={[ Autoplay, EffectCards]}
                            effect={'cards'}
                            grabCursor={true}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="bg-[url('https://images.unsplash.com/photo-1537877853655-34bdcda5e833?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dm9sdW50ZWVyaW5nfGVufDB8fDB8fHww')] bg-center bg-no-repeat bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-80 font-normal text-4xl text-white font-bebasNeue">United Kingdom</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[url('https://images.unsplash.com/photo-1565803974275-dccd2f933cbb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dm9sdW50ZWVyaW5nfGVufDB8fDB8fHww')] bg-center bg-no-repeat bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-80 font-normal text-4xl text-white font-bebasNeue">Barbados</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[url('https://images.unsplash.com/photo-1670405564800-bbb09765317b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHZvbHVudGVlcmluZ3xlbnwwfHwwfHx8MA%3D%3D')] bg-center bg-no-repeat bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-80 font-normal text-4xl text-white font-bebasNeue">Italy</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[url('https://plus.unsplash.com/premium_photo-1681152790484-8c0beab3999a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dm9sdW50ZWVyaW5nfGVufDB8fDB8fHww')] bg-center bg-no-repeat bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-72 font-normal text-4xl text-white font-bebasNeue">República dominicana</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[url('https://images.unsplash.com/photo-1655573988224-2484b832dd5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHZvbHVudGVlcmluZ3xlbnwwfHwwfHx8MA%3D%3D')] bg-center bg-no-repeat bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-80 font-normal text-4xl text-white font-bebasNeue">Turkey</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[url('https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHZvbHVudGVlcmluZ3xlbnwwfHwwfHx8MA%3D%3D')] bg-center bg-no-repeat bg-cover rounded-lg h-[415px] overflow-hidden w-full p-5">
                                    <div className="title" data-swiper-parallax="-300">
                                        <p className="absolute top-80 font-normal text-4xl text-white font-bebasNeue">Nepal</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;