import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import './Testimonials.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Testinomial() {
    return (
        <div className="container my-5">
            <br/>
            <br/>
            <br/>
            <br/>
            <h2 className="text-center mb-4"  style={{ fontSize: '39px', fontWeight: '580', fontFamily: 'Poppins', color: '#349bc6' }}>Testimonials</h2>
            <div className="text-center">
                <p className="sub-heading mb-4"  style={{textAlign:'justify',fontFamily:'Outfit',fontSize:'1rem',color:'#666',fontWeight:'579',lineHeight:'29px'}}>
                At Car Garage, our customers’ voices reflect the excellence and dedication we bring to every service. From personalized care to professional expertise, our satisfied clients share stories of trust, reliability, and outstanding results. Whether it’s about restoring performance, resolving complex repairs, or ensuring a smooth ride, our testimonials showcase the value we deliver.

Explore real experiences from drivers who have trusted us with their vehicles and discover why Car Garage is a name synonymous with quality and satisfaction. Your trust drives us to exceed expectations, one car at a time.               </p>
            </div>
            <div className="swiper-container">
                <Swiper
                    spaceBetween={30}
                    loop={true}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="testimonial">
                            <p style={{fontSize:'17.6px',fontFamily:'Josefin Sans',color:'white',fontWeight:'600'}}>"Scheduling a test drive was quick, and the experience helped me finalize my decision. The team made sure I was comfortable and answered all my questions patiently."</p>
                            <p className="testimonial-author" style={{textAlign:'right',fontFamily:'Poppins',fontSize:'1.1rem',fontWeight:'580',color:'white'}}>- Sarah L.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonial">
                            <p  style={{fontSize:'17.6px',fontFamily:'Josefin Sans',color:'white',fontWeight:'600'}}>"Booking a car with this platform was incredibly simple! The process was smooth, and the staff was very accommodating. Highly recommend!"</p>
                            <p className="testimonial-author" style={{textAlign:'right',fontFamily:'Poppins',fontSize:'1.1rem',fontWeight:'580',color:'white'}}>- John D.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonial">
                            <p  style={{fontSize:'17.6px',fontFamily:'Josefin Sans',color:'white',fontWeight:'600'}}>"The car maintenance service was outstanding. The team explained every detail and completed the servicing ahead of time. My car feels brand new! Thank you for the excellent work."</p>
                            <p className="testimonial-author" style={{textAlign:'right',fontFamily:'Poppins',fontSize:'1.1rem',fontWeight:'580',color:'white'}}>- Emily W.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonial">
                            <p  style={{fontSize:'17.6px',fontFamily:'Josefin Sans',color:'white',fontWeight:'600'}}>"I was amazed at how easy it was to book a test drive and explore different models. The staff was knowledgeable and guided me to select the perfect car for my needs."</p>
                            <p className="testimonial-author" style={{textAlign:'right',fontFamily:'Poppins',fontSize:'1.1rem',fontWeight:'580',color:'white'}}>- David R.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonial">
                            <p  style={{fontSize:'17.6px',fontFamily:'Josefin Sans',color:'white',fontWeight:'600'}}>"Great customer service and attention to detail. From booking to delivery, the team kept me informed every step of the way. I’m thrilled with my new car!"</p>
                            <p className="testimonial-author" style={{textAlign:'right',fontFamily:'Poppins',fontSize:'1.1rem',fontWeight:'580',color:'white'}} >- Maria H.</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default Testinomial;
