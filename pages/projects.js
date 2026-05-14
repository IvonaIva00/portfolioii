import Link from "next/link"
import Image from "next/image"
import styles from '@/styles/Projects.module.css'
import { useEffect } from "react";
export default function Projects() {
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
        <h1 className={styles.third_title}>ABOUT</h1>
        </Link>
    </div>
   
    </div>
<div className={styles.title_block}>
    <h1 className={styles.page_title}>Projects</h1>
    <div className={styles.project_underline}></div>
    </div>
     <div className={styles.big_container}>

<div className={styles.project_one}>

  <div className={styles.left_column}>
    <h1 className={styles.app_title}>Brainwaves</h1>

    <p className={styles.app_role}>
      Front-End Development / UX Research / Branding
    </p>

    <p className={styles.app_description}>
    Brainwaves is a gamified Learning App that takes the user on a journey of puzzle solving with a wide range of different learning paths in order to develop the user’s critical thinking skills. Featuring an AI companion called Wimmy the Whale that is constantly present and help the user in their journey.
    </p>

    <Link href="/brainwaves">
      <button className={styles.button}>View Project</button>
    </Link>
  </div>

  <div className={styles.right_column}>
    <Image
      className={styles.project_image}
      alt="Brainwaves preview"
      src="/images/Brain_Waves1.png"
      height={800}
      width={650}
    />
  </div>

</div>

<div className={styles.project_two}>

  <div className={styles.left_column_two}>
    <h1 className={styles.app_title_two}>Light Speed</h1>

    <p className={styles.app_role}>
      Game Design / Prototyping
    </p>

    <p className={styles.app_description_two}>
    Speed Light is an exciting online board game set in the solar system. Designed for four players, participants embark on a cosmic journey, traveling around the solar system and rolling the dice to determine their fate. Upon landing on a planet, players unlock thrilling space mini-games.
    </p>

    <Link href="/speedlight">
      <button className={styles.button_two}>View Project</button>
    </Link>
  </div>

  <div className={styles.right_column_two}>
    <Image
      className={styles.project_image_two}
      alt="LightSpeed preview"
      src="/images/Light_Speed1.png"
      height={800}
      width={650}
    />
  </div>

</div>
<div className={styles.project_four}>

  <div className={styles.left_column_four}>
    <h1 className={styles.app_title}>Happy Hour</h1>

    <p className={styles.app_role}>
      Front-End Development
    </p>

    <p className={styles.app_description}>
    Happy Hour is a web app designed to help people find new cocktails and have fun mixing drinks by saving notes on each one. It also offers a wide selection of categorized drinks, where users can view detailed recipes and exact ingredients for every cocktail.
    </p>

    <Link href="/happyhour">
      <button className={styles.button}>View Project</button>
    </Link>
  </div>

  <div className={styles.right_column_four}>
    <Image
      className={styles.project_image_four}
      alt="Happy Hour"
      src="/images/Happy_Hour.png"
      height={300}
      width={550}
    />
  </div>

</div>
    <div className={styles.project_three}>

<div className={styles.left_column_three}>
  <h1 className={styles.app_title_three}>Pause</h1>

  <p className={styles.app_role}>
  UX/UI Design / Front-End Development
  </p>

  <p className={styles.app_description_three}>
  Pause is a stress relief app designed to help people manage and track their anxiety in a simple, supportive way. It offers a calm space to step away from daily pressure, slow down, and regain balance. Through gentle interactions, it encourages healthier emotional habits and small moments of mental reset.
  </p>

  <Link href="/pause"> <button className={styles.button_three}>View Project</button> </Link>
</div>

<div className={styles.right_column_three}>
  <Image
    className={styles.project_image_three}
    alt="Pause preview"
    src="/images/Pause_App.png"
    height={300}
    width={550}
  />
</div>

</div>
<div className={styles.project_five}>

  <div className={styles.left_column_five}>
    <h1 className={styles.app_title_five}>Roast Masters</h1>

    <p className={styles.app_role}>
      Web Design / Web Development
    </p>

    <p className={styles.app_description}>
      Roast Masters is a modern coffee shop website focused on creating a warm and inviting digital experience. The design combines rich visuals, clean layouts, and smooth interactions to reflect the atmosphere of a premium café.
    </p>

    <Link href="/roastmasters">
      <button className={styles.button}>View Project</button>
    </Link>
  </div>

  <div className={styles.right_column_five}>
    <Image
      className={styles.project_image_five}
      alt="Roast Masters preview"
      src="/images/RoastMasters.png"
      height={800}
      width={650}
    />
  </div>

</div>
{/* <div className={styles.project_two}>
<div className={styles.logo_button}>
<Image className={styles.mockup} src="/images/Pause_mockup.jpg" height={450} width={600} />

</div>
<div className={styles.right_column}>
<div className={styles.description}>
<h1 className={styles.app}>Coctail Hour</h1>
<p className={styles.app_process}>Pause is a stress relief app, designed to help students manage and track their anxiety level.</p>
</div>
<Link  href="/pause">
<button className={styles.buttonthree}>View</button>
</Link>
</div>
</div> */}

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