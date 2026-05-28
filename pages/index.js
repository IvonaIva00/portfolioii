import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Typewriter from 'typewriter-effect';
import { useEffect } from "react";

import styles from '@/styles/Home.module.css'








export default function Home() {
  useEffect(() => {

    const buttons = document.querySelectorAll("button");
  
    buttons.forEach(button => {
  
      button.addEventListener("mousemove", (e) => {
  
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
  
        button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
      });
  
      button.addEventListener("mouseleave", () => {
        button.style.transform = "translate(0px,0px)";
      });
  
    });
  
  }, []);
  useEffect(() => {

    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");
  
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    const points = [];
  
    for (let i = 0; i < 60; i++) {
      points.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6
      });
    }
  
    function animate() {
  
      ctx.clearRect(0,0,canvas.width,canvas.height);
  
      points.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
  
        if(p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if(p.y < 0 || p.y > canvas.height) p.vy *= -1;
  
        ctx.beginPath();
        ctx.arc(p.x,p.y,2,0,Math.PI*2);
        ctx.fillStyle = "#F44D00";
        ctx.fill();
      });
  
      for(let i=0;i<points.length;i++){
        for(let j=i+1;j<points.length;j++){
  
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const dist = Math.sqrt(dx*dx + dy*dy);
  
          if(dist < 120){
            ctx.beginPath();
            ctx.moveTo(points[i].x,points[i].y);
            ctx.lineTo(points[j].x,points[j].y);
            ctx.strokeStyle = "rgba(244,77,0,0.2)";
            ctx.stroke();
          }
  
        }
      }
  
      requestAnimationFrame(animate);
    }
  
    animate();
  
  }, []);
  
  return (
    <>
    
      <main className={styles.main} >
      <div className={styles.cyberGrid}></div>
      <canvas className={styles.neuralBackground}></canvas>
      <div className={styles.backgroundGlow}></div>
      <div className={styles.backgroundGlow2}></div>
     
      <div className={styles.navbar}>
         <Link  href="/">
         
      <Image alt="logo"  src="/images/Logo01.png" height={60} width={85} />
      
      </Link> 
      <div className={styles.work}>
      <Link className={styles.link}  href="/">
      <h1 className={styles.first_title}>Home</h1></Link>
      <Link className={styles.link}  href="/projects">
    <h1 className={styles.second_title}>Projects</h1></Link>
    <Link className={styles.link} href="/designs">
        <h1 className={styles.third_title}>Design</h1>
        </Link>
        <Link className={styles.link} href="/about">
        <h1 className={styles.third_title}>About</h1>
        </Link>
    </div>
   
    </div>
    <div className={styles.navbar_line}></div>
     
     
    <div className={styles.content}>
    <div className={styles.container}>
<div className={styles.big_container}>
  <div className={styles.name_picture_description}>
   
    <div className={styles.description}>
      <div className={styles.introduction}>
Hello! I'm <span className={styles.name}>Ivona</span>
        </div>
      <div className={styles.positions}>
        <h3 className={styles.position_one}>
         </h3>
       
      </div>
      <div className={styles.job_description}> Digital Designer and Developer</div>
    
    
      
    </div>
  </div>
  
  </div>
  <div className={styles.buttons}>
  <Link  href="/projects" className={styles.button_link}>
            <button className={styles.button1}>View Projects</button>
        </Link>
        <Link  href="/designs" className={styles.button_link}>
            <button className={styles.button2}>View Designs</button>
        </Link>
    
        </div>
</div>
</div>
       <div className={styles.footer}>
            <div className={styles.footer_line}></div>
            <div className={styles.footer_row}>
            <p className={styles.footnote}>© 2026 Ivona Ivkovic</p>
            <div className={styles.icons}>
            <a  href="https://github.com/IvonaIva00"
             target="_blank"
             rel="noopener noreferrer">
      <Image src="/images/github-gray.png" height={45} width={45} />
      </a>
      <a href="https://www.linkedin.com/in/ivona-iv/"
       target="_blank"
       rel="noopener noreferrer">
      <Image src="/images/linkedin-gray.png" height={45} width={45} />
      </a>
      <Link href="https://www.linkedin.com/in/ivona-iv/">
      <Image  src="/images/email-gray.png" height={45} width={45} />
      </Link>
      </div>
      </div>
        </div>


      </main>
    </>
  )
}
