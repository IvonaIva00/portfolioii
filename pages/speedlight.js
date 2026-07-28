import styles from '@/styles/SpeedLight.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import { useEffect } from "react";
export default function SpeedLight() {
  const aliens = [
    {
      image:"/images/alien1.png",
      name:"Cosmic Explorer",
      level:"Level 01"
    },
    {
      image:"/images/alien_2.png",
      name:"Galaxy Guardian",
      level:"Level 02"
    },
    {
      image:"/images/alien3.png",
      name:"Nebula Creature",
      level:"Level 03"
    },
    {
      image:"/images/alien4.png",
      name:"Space Warrior",
      level:"Level 04"
    },

    {
      image:"/images/alien6.png",
      name:"Alien Commander",
      level:"Level 06"
    },
    {
      image:"/images/alien7.png",
      name:"Star Traveler",
      level:"Level 07"
    },
    {
      image:"/images/alien8.png",
      name:"Galaxy Master",
      level:"Level 08"
    }
  ];
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
      
    <div className={styles.page_content}>
        <div className={styles.title_button}>
        <h1 className={styles.project_title}>Light Speed</h1>
        <a  href="https://idsp-02-yut-redesign.github.io/yut-redesign/public/"
         target="_blank"
         rel="noopener noreferrer">
            <button className={styles.button}>Play game</button>
        </a>
        </div>
        <Image className={styles.mockup} src="/images/Light_Speed2.png" height={530} width={1300} />
     
      
        {/* <Image className={styles.loading} src="/images/Loading.png" height={400} width={500}/> */}
        <section className={styles.overview}>

<div className={styles.infoCard}>


<div className={styles.summary}>

<div>
<span>Role</span>
<h3>Game Designer & Developer</h3>
</div>

<div>
<span>Duration</span>
<h3>4 Months</h3>
</div>

<div>
<span>Tools</span>
<h3>Figma, Photoshop, Illustrator, React</h3>
</div>

</div>

</div>

</section>
        <div className={styles.board}>   <div className={styles.board_description}>
        <div className={styles.design_card}>
        <h2 className={styles.title}>What is Light Speed?</h2>
        <p className={styles.app_process_assets}>Light Speed is an interactive space adventure game designed to combine exploration, strategy, and quick decision-making into one immersive experience.

Inspired by classic board games and arcade-style challenges, the game takes players on a journey across the solar system where every move brings new obstacles, discoveries, and rewards.

Players navigate through planets, collect resources, overcome mini-games, and upgrade their spacecraft as they travel deeper into space.</p>
        </div>
        {/* <Image className={styles.aliens} src="/images/LightSpeed_heading.jpg" height={500} width={600}/> */}
        </div>
       
     
        </div>
     
       
            <div className={styles.assets}>
            <h1 className={styles.title_design}>Design Process</h1>
            <div className={styles.design_challenges}>
        <div className={styles.design_column}>
        <div className={styles.design_card}>
        <h2 className={styles.title}>Asset Design</h2>
        
        <p className={styles.app_process_assets}>In the project, the team brainstormed the concept of using pixel art assets with an isometric view to give the game a unique visual style. To make it more engaging, we decided on a space theme, with players represented by space ships navigating through cosmic environments. We also incorporated rewarding elements into the game, such as upgrading features symbolized by aliens. </p>
        </div>
        </div>
        <div className={styles.design_row_two}>
        <div className={styles.design_card}>
        <h2 className={styles.title}>Challenges</h2>
        
        <p className={styles.app_process_assets}>Throughout the design process, one of our main challenges involved optimizing the assets to ensure compatibility across different screen types and resolutions, which required careful attention to detail and thorough testing.</p>
        </div>
        </div>
        </div>
        <div className={styles.assets_board}>
            <h2 className={styles.app_board}>The Board</h2>
        
        <div  className={styles.board_desc}>
        <Image className={styles.picture} src="/images/GameBoard(4).png" height={600} width={1000}/>
        <div  className={styles.board_ideation}>
       
        </div>
        </div>
        </div>
        <h2 className={styles.title_players}>Players</h2>
        <div className={styles.players_row}>

        <div className={styles.player_card}>
  <Image src="/images/player01.png" height={200} width={170} />

  <div className={styles.player_overlay}>
    <p className={styles.player_text}>PLAYER 01</p>
  </div>
</div>

<div className={styles.player_card}>
  <Image src="/images/player02.png" height={200} width={170} />

  <div className={styles.player_overlay}>
    <p className={styles.player_text}>PLAYER 02</p>
  </div>
</div>

<div className={styles.player_card}>
  <Image src="/images/player03.png" height={200} width={170} />

  <div className={styles.player_overlay}>
    <p className={styles.player_text}>PLAYER 03</p>
  </div>
</div>

<div className={styles.player_card}>
  <Image src="/images/player04.png" height={200} width={170} />

  <div className={styles.player_overlay}>
    <p className={styles.player_text}>PLAYER 04</p>
  </div>
</div>

</div>
        <h2 className={styles.title_players}>Upgrading Features</h2>
        <div className={styles.design_row}>

        <div className={styles.alien_carousel}>


<Swiper

modules={[Autoplay, EffectCoverflow]}

effect="coverflow"

grabCursor={true}

centeredSlides={true}

slidesPerView={"auto"}

loop={true}


autoplay={{
 delay:3000,
 disableOnInteraction:false
}}


coverflowEffect={{
 rotate:0,
 stretch:0,
 depth:250,
 modifier:1.5,
 slideShadows:false
}}

className={styles.alienSwiper}

>


{aliens.map((alien,index)=>(

<SwiperSlide 
key={index}
className={styles.alienSlide}
>


<div className={styles.alien_card}>


<div className={styles.alien_image_container}>

<Image

src={alien.image}

alt={alien.name}

width={220}

height={220}

/>

</div>



<h3>
{alien.name}
</h3>


<p>
{alien.level}
</p>



</div>


</SwiperSlide>


))}


</Swiper>


</div>
    
        </div>
        </div>
     
        


      
        <div >
        <Image className={styles.loading} src="/images/Planets_row.png" height={500} width={1200}/>
        
        </div>
        <div>
            <div className={styles.game_container}>
            <div className={styles.mini_games_container}>
            
            <div  className={styles.mini_games_one}>
            <Image className={styles.picture} src="/images/MemoryCardGameTablet.png" height={250} width={350}/>
            <Image className={styles.picture} src="/images/MazeGameTablet.png" height={250} width={350}/>
            </div>
            <div  className={styles.mini_games_two}>
            <Image className={styles.picture} src="/images/MeteoriteGameTablet.png" height={250} width={350}/>
            <Image className={styles.picture} src="/images/WackAMoleGameTablet.png" height={250} width={350}/>
            </div>
            </div>
            <div className={styles.mini_games_desc}>
            
            <h2 className={styles.title}>Mini Games</h2>
            <p className={styles.app_process_assets} >In LightSpeed, players experience various exciting mini-games as they explore the solar system. These challenges range from solving mazes and memory card games to quick reflexes in Wack-a-Mole and avoiding meteorite showers. Each mini-game brings a mix of fun and strategy, making LightSpeed an adventure-filled journey full of anticipation and excitement.</p>
            
            </div>
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
   
        </div>
    )
}