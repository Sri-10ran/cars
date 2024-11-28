import React from 'react';
import './Founder.css';  // Ensure other styles are defined here


function Founder() {
    return (
        <div className="container my-5" id="about">
            <br/>
            <br/>
            {/* Header */}
            <p className="text-center"  style={{ fontSize: '39px', fontWeight: '580' ,fontFamily:'Poppins',color:'#349bc6'}}>About us</p>
            
            {/* Founder Section */}
            <div className="founder-section">
                <div className="founder-image">
                    <img src="founder.png" className="img-fluid" alt="Founder" />
                </div>
                <div className="founder-text" style={{textAlign:'justify',fontFamily:'Outfit',fontSize:'1rem',color:'#666',fontWeight:'579',lineHeight:'25px'}}>
                    <p>
                    Car Garage was founded by a group of automotive enthusiasts and engineers who shared a vision to revolutionize the car service industry. With a deep understanding of vehicles and a commitment to quality, they brought their expertise together to create a one-stop destination for all things automotive.Our mission is to redefine car care through exceptional service, innovative technology, and customer-first principles. We believe that every car deserves the best treatment and every customer deserves transparency and trust.From humble beginnings as a small workshop, Car Garage has grown into a comprehensive service provider, catering to car enthusiasts and everyday drivers alike. Today, we offer a wide range of services, from routine maintenance to specialized repairs, all under one roof.At Car Garage, we treat every car like our own, ensuring it receives the care and attention it deserves. Whether you’re looking for routine servicing, major repairs, or custom solutions, our team is here to help.

Experience the difference at Car Garage – because your car deserves the best.


                                 </p>
                </div>
            </div>
<br/>

            {/* Business Section */}
            <div className="business-section">
                <div className="business-item" >
                <i class="fa-solid fa-briefcase" style={{fontSize:'33px',color:'white'}}></i>
                    <h3 style={{fontFamily:'Poppins',fontSize:'23px',fontWeight:'500',marginTop:'5px',color:'white'}}>450+ customers</h3>
                </div>
                <div className="business-item">
                <i class="fa-solid fa-calendar-days" style={{fontSize:'32px',color:'white'}}></i>
                    <h3 style={{fontFamily:'Poppins',fontSize:'23px',fontWeight:'500',marginTop:'5px',color:'white'}}>8+ years experience</h3>
                </div>
                <div className="business-item">
                <i class="fa-solid fa-users" style={{fontSize:'29px',color:'white'}}></i>
                    <h3 style={{fontFamily:'Poppins',fontSize:'23px',fontWeight:'500',marginTop:'5px',color:'white'}}>39 employees</h3>
                </div>
            </div>
        </div>
    );
}

export default Founder;
