"use client";
import React from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Image from "next/image";
import shape from "@/assets/img/home-01/project/project-shape-1-1.png";

const ProjectTextLine = () => {
  useGSAP(() => {
    gsap.set(".tp-project-textline", {
      x: "10%",
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".tp-project-textline",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      })
      .to(".tp-project-textline", {
        x: "-100%",
      });
  });

  return (
    <div
      className="tp-project-textline tp-project-effect mb-115"
      data-scrub="0.0001"
      style={{ color: '#fff' }}
    >
      <span className="textline-1" style={{ color: '#fff' }}>
        Mina
        <span>
          <Image src={shape} alt="shape" />
        </span>
        Design
      </span>
      <span className="textline-2" style={{ WebkitTextStrokeColor: '#fff', color: 'transparent' }}>Collections</span>
      <span className="textline-1" style={{ color: '#fff' }}>
        Co
        <span>
          <Image src={shape} alt="shape" />
        </span>
        lest
      </span>
      <span className="textline-2" style={{ WebkitTextStrokeColor: '#fff', color: 'transparent' }}>Project</span>
      <span className="textline-1" style={{ color: '#fff' }}>
        Co
        <span>
          <Image src={shape} alt="shape" />
        </span>
        lest
      </span>
      <span className="textline-2" style={{ WebkitTextStrokeColor: '#fff', color: 'transparent' }}>Project</span>
      <span className="textline-1" style={{ color: '#fff' }}>
        Co
        <span>
          <Image src={shape} alt="shape" />
        </span>
        lest
      </span>
      <span className="textline-2" style={{ WebkitTextStrokeColor: '#fff', color: 'transparent' }}>Project</span>
    </div>
  );
};

export default ProjectTextLine;
