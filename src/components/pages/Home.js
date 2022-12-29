import React from 'react';
import Hero_banner from './images/hero-banner.png';
import About_banner from './images/about-banner.png';
import Feat_box_1 from './images/feat-box-1.png';
import Feat_box_2 from './images/feat-box-2.png';
import Feat_box_3 from './images/feat-box-3.png';


export default function Home() {
  return (
    <>
        <section id='home-section'>
            <div className="container row">
                <div className="home-content content">
                    <h1>Build your audience and grow your brand</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit interdum ullamcorper sed pharetra sene.</p>
                    <a href="#" className="btn btn-hover">Get Started</a>
                    <a href="#" className="btn ml-2">Watch Video <i className="fa-sharp fa-solid fa-circle-play"></i></a>
                </div>
                <img src={Hero_banner} alt="hero-banner" />
            </div>
        </section>
        <section>
            <div className="container">
                <h1 className='section-title title-h1'>Features</h1>
                <p className='section-title title-p'>Powerful features to boost your productivity</p>
                <div className="row">
                    <div className="feat-box">
                        <img src={Feat_box_1} alt="" />
                        <h3>Secured Platform</h3>
                        <p>Contrary to popular belief, Lore Ipsum is not simply random text. It has roots in a piece.</p>
                        <a href="#" className="link">Learn More</a>
                    </div>
                    <div className="feat-box">
                        <img src={Feat_box_2} alt="" />
                        <h3>Advanced Analytics</h3>
                        <p>Contrary to popular belief, Lore Ipsum is not simply random text. It has roots in a piece.</p>
                        <a href="#" className="link">Learn More</a>
                    </div>
                    <div className="feat-box">
                        <img src={Feat_box_3} alt="" />
                        <h3>Powerful Automation</h3>
                        <p>Contrary to popular belief, Lore Ipsum is not simply random text. It has roots in a piece.</p>
                        <a href="#" className="link">Learn More</a>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="container row">
                <div className="content">
                    <h2>Powerful and easy to use saas builder platform</h2>
                    <p>It is a long established fact that a reader will be by the from readable content of a page when looking at its layout. The point of using lorem Ipsum.</p>
                    <p>Contrary to popular belief, Lore Ipsum is not simply random text.</p>
                </div>
                <img src={About_banner} alt="" />
            </div>
        </section>
    </>
  )
}