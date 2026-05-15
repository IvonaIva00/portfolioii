import Link from "next/link"
import Image from "next/image"
import styles from '@/styles/About.module.css'
import { useEffect } from "react";
export default function Projects() {
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
    return(
        <main className={`${styles.main} ${styles.cornerLines}`} >
             <canvas className={styles.constellationBackground}></canvas>
             <div className={styles.backgroundGlow}></div>
             <div className={styles.backgroundGlow2}></div>
             <div className={styles.staticStars}></div>
       
       <div className={styles.navbar}>
         <Link  href="/">
         
      <Image alt="logo"  src="/images/Logo01.png" height={65} width={91} />
      
      </Link> 
      <div className={styles.work}>
      <Link className={styles.link}  href="/">
      <h1 className={styles.first_title}>HOME</h1></Link>
      <Link className={styles.link}  href="/projects">
    <h1 className={styles.second_title}>PROJECTS</h1></Link>
    <Link className={styles.link} href="/designs">
        <h1 className={styles.third_title}>DESIGN</h1>
        </Link>
        <Link className={styles.link} href="/about">
        <h1 className={styles.fourth_title}>ABOUT</h1>
        </Link>
    </div>
   
    </div>
    
    <div className={styles.about_section}>

<div className={styles.avatar_container}>
  <Image
    src="/animations/avatar1.gif"
    width={520}
    height={520}
    alt="avatar"
    className={styles.avatar}
  />
</div>

<div className={styles.about_content}>
  <h1 className={styles.about_title}>About Me</h1>
  <div className={styles.about_underline}></div>

  <p className={styles.about_text}>
  I’m a Digital Designer and Front-End Developer with a strong passion for Graphic Design, UX/UI Design, 2D animation, and interactive web experiences. With hands-on experience across both design and development, I approach challenges from a unique perspective, combining creativity with practical problem-solving. I enjoy exploring new ways to express ideas visually and digitally, constantly pushing my work to evolve. Outside of work, I stay inspired through dancing, traveling, and creating art. I’m currently seeking opportunities and collaborations where I can continue growing and contributing within the digital design field.
  </p>

  <div className={styles.skills_grid}>
    {/* your skill cards */}
  </div>

</div>

</div>

    <div className={styles.skills_section}>
  <h2 className={styles.skills_title}>Skills & Tools</h2>

  <div className={styles.skills_grid}>
    <div className={styles.skill_card}>HTML</div>
    <div className={styles.skill_card}>CSS</div>
    <div className={styles.skill_card}>JavaScript</div>
    <div className={styles.skill_card}>TypeScript</div>
    <div className={styles.skill_card}>React</div>
    <div className={styles.skill_card}>Firebase</div>
    <div className={styles.skill_card}>Git</div>
    <div className={styles.skill_card}>Figma</div>
    <div className={styles.skill_card}>Photoshop</div>
    <div className={styles.skill_card}>Illustrator</div>
    <div className={styles.skill_card}>After Effects</div>
    <div className={styles.skill_card}>InDesign</div>
    <div className={styles.skill_card}>WordPress</div>
    <div className={styles.skill_card}>Affinity Designer</div>
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
    )
}