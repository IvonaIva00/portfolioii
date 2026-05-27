import styles from '@/styles/RoastMasters.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from "react";
export default function RoastMasters() {
    useEffect(() => {
        const canvas = document.querySelector("canvas");
        const ctx = canvas.getContext("2d");
      
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      
        const points = [];
      
        for (let i = 0; i < 60; i++) {
          points.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height
          });
        }
      
        // draw dots
        points.forEach(p => {
          ctx.beginPath();
          ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
          ctx.fillStyle = "#F44D00";
          ctx.fill();
        });
      
        // draw connections
        for (let i = 0; i < points.length; i++) {
          for (let j = i + 1; j < points.length; j++) {
            const dx = points[i].x - points[j].x;
            const dy = points[i].y - points[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
      
            if (dist < 120) {
              ctx.beginPath();
              ctx.moveTo(points[i].x, points[i].y);
              ctx.lineTo(points[j].x, points[j].y);
              ctx.strokeStyle = "rgba(244,77,0,0.15)";
              ctx.stroke();
            }
          }
        }
      
      }, []);
    return(
        <div className={styles.main}>
                    <canvas className={styles.constellationBackground}></canvas>

<div className={styles.backgroundGlow}></div>
<div className={styles.backgroundGlow2}></div>
             <div className={styles.navbar}>
         <Link  href="/">
         
      <Image alt="logo"  src="/images/Logo01.png" height={65} width={91} />
      
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
      
    <div className={styles.page_content}>
        <div className={styles.title_button}>
        <h1 className={styles.project_title}>Roast Masters</h1>
        <a  href="https://roast-masters.vercel.app/index.html"
         target="_blank"
         rel="noopener noreferrer">
            <button className={styles.button}>View website</button>
        </a>
        </div>
        <Image className={styles.mockup} src="/images/RMHome.png" height={600} width={1200} />
     
      
        {/* <Image className={styles.loading} src="/images/Loading.png" height={400} width={500}/> */}
        <div className={styles.board}>   <div className={styles.board_description}>
        <h2 className={styles.title}>About Roast Masters</h2>
        <p className={styles.app_process}>Here’s a simpler, clean version that still sounds professional:

Roast Masters is a modern coffee shop website focused on creating a warm and inviting digital experience. The design combines rich visuals, clean layouts, and smooth interactions to reflect the atmosphere of a premium café. It was designed in Figma and built using HTML and CSS, with visuals refined in Photoshop. The goal was to keep the design both visually appealing and easy to use.
</p>
        
        </div>
        <Image className={styles.loading} src="/images/RM_Vision.png" height={350} width={650}/>
     
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
   
        </div>
    )
}