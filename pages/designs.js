import styles from '@/styles/Designs.module.css'
import { Video } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from "react";
export default function Designs () {
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
        
        <main className={styles.main}>
                <canvas className={styles.constellationBackground}></canvas>
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
        <h1 className={styles.fourth_title}>About</h1>
        </Link>
    </div>
   
    </div>
            
    <section className={styles.hero}>

<h1 className={styles.heroTitle}>
  Designs
</h1>

<p className={styles.heroDescription}>
  A collection of visual experiences crafted through graphic design, illustration, and digital creativity.
</p>

</section>
            <div className={styles.gallery}>

{/* CARD 1 */}
<div className={`${styles.design_card} ${styles.left}`}>
  
  <Image
    className={styles.project_image_design}
    src="/images/Butterfly.jpg"
    width={420}
    height={550}
    alt="Butterfly"
  />

  <div className={styles.card_content}>
    <h2 className={styles.app_title}>Butterfly’s Riddle</h2>
    <div className={styles.app_description}>
    <div className={styles.app_role}>
      Graphic Design
    </div>
    Butterfly’s Riddle captures the essence of a movie through a cinematic poster design. Photoshop was used to combine different images and elements into one composition. This helped create a unified movie poster with layered visuals and a cohesive atmosphere.

    </div>
  </div>
</div>

{/* <div className={styles.project_two}>
        
        <Image  src="/images/sweet_factory.png" height={400} width={300} />


<div className={styles.right_column}>
<div className={styles.description}>
<h1 className={styles.app}>Sweet Factory</h1>

</div>

{/* <button href="" className={styles.button}>View</button> */}


<div className={styles.design_card_two}>

  <Image
    className={styles.project_image_design}
    src="/images/mechanical_object.jpg"
    height={460}
    width={320}
    alt="Mechanical Object"
  />

  <div className={styles.card_content}>

    

    <h2 className={styles.app_title}>Mechanical Object</h2>
    <div className={styles.app_role}> Graphic Design</div>
    <p className={styles.app_description}>
      Mechanical Object is an engaging project centered around the meticulous recreation of a hand watch using Adobe Illustrator. Through this endeavor, intricate design elements and precise detailing come together to showcase the artistry and technical skill involved in crafting a mechanical timepiece.
    </p>

  </div>

</div>

<div className={styles.design_card_four}>
  <div className={styles.coming_soon}>
    Coming Soon
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
      <a href="mailto:ivona.i.work@gmail.com">
      <Image  src="/images/email-gray.png" height={45} width={45} />
      </a>
      </div>
      </div>
        </div>


        </main>
    )
}