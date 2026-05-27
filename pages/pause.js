import Link from "next/link"
import Image from "next/image"
import styles from '@/styles/Pause.module.css'
import { useEffect } from "react";
export default function Pause () {
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
      <h1 className={styles.pause}>Pause</h1>
      <a href="https://mdia-2109-group-project-gegh.vercel.app/mainContent"
       target="_blank"
       rel="noopener noreferrer">
            <button  className={styles.button}>View App</button>
        </a>
        </div>
        
                <Image className={styles.mockup} src="/images/Pause_mockup.jpg" height={800} width={1200} />
                <h2 className={styles.name}>User Interface Design</h2>

                <div className={styles.design}>
                <Image src="/images/pause_landing.jpg" width={550}  height={370}/>
                <div className={styles.firts_paragraph}>
                <h2 className={styles.app}>What is Pause?</h2>
                <p className={styles.app_process}>Pause is an app that helps people relax and find calmness in their busy lives. It's like a peaceful oasis where users can take a break and destress. The app's main goal is to create a soothing environment for users to unwind and rejuvenate their minds. One of the best things about Pause is its thoughtful design, which makes it easy and enjoyable to use. The design really makes a difference in how users feel when they use the app.</p>
                </div>
                
                </div>
                <div className={styles.branding}>
                    <div className={styles.branding_desc}>
                <h2 className={styles.app}>Brand Identity</h2>
                <p className={styles.app_process}>

Pause was conceptualized with the aim of addressing the prevalent issue of managing stress and anxiety in daily life. The team identified a need to provide individuals with effective tools to track and alleviate stress levels, thereby enhancing overall well-being. By developing Pause, our goal was to offer users a platform where they could actively monitor their stress levels and explore various features designed to promote relaxation and mindfulness. Through the app's intuitive interface and visually appealing design, users can navigate seamlessly while engaging with calming visuals and interactive features tailored to alleviate stress. </p>
               <p className={styles.app_process}>In the project, we meticulously curated a color palette known for its calming properties, based on extensive research into color psychology and its impact on emotional well-being. Additionally, the logo design embodies the essence of Pause, merging elements of a dream catcher with a central pause sign. This symbolic representation signifies the app's mission to create a space for users to pause, reflect, and rejuvenate amidst the chaos of daily life. Through thoughtful design choices and user-centric features, Pause aims to empower individuals to manage stress effectively and cultivate a greater sense of peace and balance in their lives.</p>
               </div>
               <Image className={styles.sheepy} src="/images/Colour3.png" width={380}  height={690}/>
                </div>

           
           <div className={styles.app_features}>
            <div  className={styles.app_features_text}>
           <h2 className={styles.app}>App Features</h2>
           <p className={styles.app_process}> The app introduces unique features like the "Counting Sheep" animation, where users can enjoy the calming sight of animated sheep hopping over a fence. This delightful visual experience helps users unwind and release stress, promoting a sense of relaxation and tranquility. Additionally, the app now offers a new Yoga feature, providing users with a holistic approach to stress relief. With a variety of yoga sessions tailored to different skill levels and wellness objectives, users can explore gentle stretches and invigorating flows to promote physical vitality and mental clarity. Guided by soothing instructions and background music, the Yoga feature encourages users to connect with their inner selves, fostering a deeper sense of balance and renewal in their daily lives. Moreover, the app includes a playlist of calming sounds to further enhance the relaxation experience.</p>
           </div>
           <Image className={styles.screens} src="/images/pause_screens.jpg" width={655}  height={470}/>
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