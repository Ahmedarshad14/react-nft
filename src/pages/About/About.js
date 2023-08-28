import React from 'react';
import './About.css'
const About = () => {
    return (
       <div className="container">
       <h1 className='color-white text-center mb-5 mt-4'>About Us</h1>
       <div className="row about-hero pt-4 pb-4">
        
        <div className="col-lg-6 col-md-6 col-sm-12 text-center mt-5 pt-4">
            <h1 className='color-white text-center'>On a mission to environmental
            sustainability with NFT's</h1>
            <p className='color-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolor qui atque voluptates molestiae sint eos fugiat perferendis excepturi incidunt, cumque libero similique porro. Magni dolores iusto iste alias doloribus.</p>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 text-center">
            <img src="/images/about.svg" alt="" className='mr-auto ml-auto'/>
        </div></div>
        <h1 className="text-center color-white mt-5 mb-5">NFT Gen Marketplace with everything for everyone.</h1>
        <div className="text-center">
        <video src="/images/about.mp4" style={{width : "750px", height : '500px'}} autoPlay muted loop controls='true'></video>
        </div>
        <h1 className='color-white text-center mb-5 mt-4'>About Us</h1>
       <div className="row about-hero pt-4 pb-4">
        
        <div className="col-lg-6 col-md-6 col-sm-12 text-center mt-4 pt-4">
        <img src="/images/about.svg" alt="" className='mr-auto ml-auto mb-5'/>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 text-left">
        <h1 className='color-white mt-5 pt-5'>On a mission to environmental
        sustainability with NFT's</h1>
        <p className='color-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolor qui atque voluptates molestiae sint eos fugiat perferendis excepturi incidunt, cumque libero similique porro. Magni dolores iusto iste alias doloribus.</p>
        </div></div>
        </div>
    )
}

export default About;