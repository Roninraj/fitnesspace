import React from 'react'
import Header from '../Header/Header'
import './Hero.css'

import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import heart from "../../assets/heart.png"
import calories from "../../assets/calories.png"
import {motion} from 'framer-motion'
import NumberCounter from 'number-counter'

const Hero = () => {

  const transition = {type: 'spring', duration:3}//here
  const mobile = window.innerWidth<=768 ? true : false;

  return (
    <div className='hero'>
      <div className='blur hero-blur'></div>
        <div className='left-h'> 
            <Header />
        
            <div className='the-best-ad'>
              {/* //here */}
                <motion.div
                initial={{left: mobile? "150px" : "200px"}}
                whileInView={{left:'8px'}}
                transition={{...transition, type: 'tween'}}
                ></motion.div>
                {/* end */}
                <span> The best Fitness App There is...</span>
            </div>

            <div className='hero-text'>
              <div>
                <span className='stroke-text'>Shape</span>
                <span> Your</span>
              </div>
              <div>
                <span>Ideal Body</span>
              </div>
              <div>
                <span>In here we will help you to shape and build your ideal body and live to the fullest.</span>              
              </div>
            </div>

            <div className='figures'>
              <div>
                <span><NumberCounter end={300} start={50} delay='4' preFix="+"/></span>
                <span>EXERCISES</span>
              </div>
              <div>
                <span><NumberCounter end={200} start={25} delay='4' preFix="+"/></span>
                <span>USERS</span>
              </div>
              <div>
                <span><NumberCounter end={100} start={10} delay='4' preFix="+"/></span>
                <span>VIDEOS</span>
              </div>
            </div>
        </div>

        
        <div className='right-h'>
          <button className='btn'>Exercise Now</button>
          {/* start */}
          <motion.div
            initial={{right:'-1rem'}}
            whileInView={{right: '4rem'}}
            transition={{...transition}}
            className='heart-rate'>
            <img src={heart} alt='' />
            <span>Heart Rate</span><span>116 bpm</span>
          </motion.div>

          <img src={hero_image} alt='' className='hero-image' />
          <motion.img
          initial={{right: '11rem'}}
          whileInView={{right: '20rem'}}
          transition={transition}
          src={hero_image_back} alt="" className='hero-image-name' />
        
          <motion.div
          initial={{right:'37rem'}}
          whileInView={{right: '28rem'}}
          transition={{...transition}}
          className='calories'>
            <img src={calories} alt='' />
            
            <div>
              <span>Calories Burned</span>
              <span>220 kcal</span>
            </div>

          </motion.div>
          {/* end */}
        </div>
    </div>
  )
}

export default Hero
