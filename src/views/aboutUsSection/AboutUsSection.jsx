import Lottie from "lottie-react";

import { ICONS, IMAGES } from "../../assets";
import { Bubble } from "../../components";
import "./aboutUsSection.css";

const AboutUsSection = () => {
  return (
    <div id="aboutUsSection">
      <div className="left">
        <div className="heading">
          <span>We</span>
          <span>
            <img src={ICONS.heart} alt="heart" />
          </span>
          <span>What We Do</span>
        </div>

        <div className="text text1">
          <p>
            We are a freelancer group enjoying research and development till now
            in a non-profit way.
          </p>

          <p>
            Thanks to Meity and Tezpur University that we formed our lab.
            Currently, we work on IoT, SDN, web and mobile app developments,
            fog-edge computing, machine learning and blockchain.
          </p>
          <p>
            Our club aims to monitor a healthy project environment and perform
            good research. Currently we are focused on developing things for
            healthcare sector. Who knows when we kick in !!!
          </p>
        </div>

        <div className="text text2">
          <p>
            The club started way back in 2021 as a group of two or three for a
            project. Now we are a team skilled both in hardware and software in
            the the fields of IoT, Networks, SDN, Computer systems and
            Distributed systems.
          </p>
          <p>Software Defined Networks solutions and integration.</p>
          <p>Healthcare solutions with hardware integration.</p>
          <p>Ongoing research on distributed systems.</p>
        </div>

      </div>

      <div className="right aboutUsImage">
        <Lottie
          animationData={IMAGES.about_us_2}
          loop={true}
        />
      </div>

      <Bubble
        id = "large"
        style={{ 
          position: "absolute", 
          top: "-100px", 
          right: "100px", 
          zIndex: "-1",
          width : "15%",
        }}
      />

      <Bubble
        id = "medium"
        style={{ 
          position: "absolute", 
          bottom: "0px", 
          left: "40%",
          zIndex: "-1",
          width : "100px",
        }}
      />

      <Bubble
        id = "small"
        style={{ 
          position: "absolute", 
          top: "-50px", 
          left: "200px",
          zIndex: "-1",
          width : "40px",
        }}
      />

    </div>
  );
};

export default AboutUsSection;
