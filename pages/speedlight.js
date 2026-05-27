import styles from '@/styles/SpeedLight.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from "react";
export default function SpeedLight() {
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
        <h1 className={styles.project_title}>Light Speed</h1>
        <a  href="https://idsp-02-yut-redesign.github.io/yut-redesign/public/"
         target="_blank"
         rel="noopener noreferrer">
            <button className={styles.button}>Play game</button>
        </a>
        </div>
        <Image className={styles.mockup} src="/images/LightSpeed_heading.jpg" height={1100} width={1200} />
     
      
        {/* <Image className={styles.loading} src="/images/Loading.png" height={400} width={500}/> */}
        <div className={styles.board}>   <div className={styles.board_description}>
        <h2 className={styles.title}>About Light Speed</h2>
        <p className={styles.app_process}>Light Speed is a captivating online board game accommodating four players, unfolding across the wide space of the solar system. As participants roll the dice, they venture through space, encountering diverse challenges and engaging in thrilling mini-games upon reaching different planets. Along the journey, players must navigate through wormholes and complete a full circuit around the solar system to emerge victorious.</p>
        
        </div>
        <Image className={styles.loading} src="/images/vertical-tablet.jpg" height={450} width={650}/>
     
        </div>
     
       
            <div className={styles.assets}>
            <h1 className={styles.title_design}>Design Process</h1>
            <div className={styles.design_challenges}>
        <div className={styles.design_column}>
        <h2 className={styles.title}>Asset Design</h2>
        
        <p className={styles.app_process_assets}>In the project, the team brainstormed the concept of using pixel art assets with an isometric view to give the game a unique visual style. To make it more engaging, we decided on a space theme, with players represented by space ships navigating through cosmic environments. We also incorporated rewarding elements into the game, such as upgrading features symbolized by aliens. </p>
        </div>
        <div className={styles.design_row_two}>
        <h2 className={styles.title}>Challenges</h2>
        
        <p className={styles.app_process_assets}>Throughout the design process, one of our main challenges involved optimizing the assets to ensure compatibility across different screen types and resolutions, which required careful attention to detail and thorough testing.</p>
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

        <Image className={styles.aliens} src="/images/Aliens.png" height={600} width={1200}/>
    
        </div>
        </div>
     
        


       
        <div className={styles.assets_board}>
            <h2 className={styles.app_board}>The Board</h2>
        
        <div  className={styles.board_desc}>
        <Image className={styles.picture} src="/images/LightSpeed_Board.jpg" height={450} width={650}/>
        <div  className={styles.board_ideation}>
        <h3 className={styles.app}>Board Ideation</h3>
        <p className={styles.app_process_assets}>The game board adheres closely to our team's initial vision of a space-themed setting. Positioned within the solar system, the board features all the planets orbiting around a central black hole. This layout not only aligns with our original concept but also adds an immersive dimension to the gameplay. Players engage in a competitive journey by rolling the dice and endeavoring to complete a full circuit around the board. The strategic element lies in navigating through the celestial landscape efficiently to outpace opponents and emerge victorious in the cosmic race. This thematic design choice not only enhances the visual appeal of the game but also contributes to its overall narrative and player engagement.</p>
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
      <Link href="https://www.linkedin.com/in/ivona-iv/">
      <Image  src="/images/email-gray.png" height={45} width={45} />
      </Link>
      </div>
      </div>
        </div>
   
        </div>
    )
}