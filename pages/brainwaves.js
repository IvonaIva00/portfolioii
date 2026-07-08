import styles from '@/styles/Brainwaves.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head';
import React, { useEffect } from "react";
import Spline from '@splinetool/react-spline';


export default function Brainwaves() {
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
            <div className={styles.heading}>
            {/* <video className={styles.video} controls>
        <source src="/video.mp4" type="video/mp4" />
       
        
      </video> */}
      {/* <Spline scene="https://prod.spline.design/Bq4BMD7tW9LoE0Ah/scene.splinecode" className={styles.mobile_animation}  /> */}
      {/* <Spline scene="https://prod.spline.design/Bq4BMD7tW9LoE0Ah/scene.splinecode" className={styles.mobile_animation} /> */}
     <div className={styles.title_button}>
      <h1 className={styles.brainwaves}>Brainwaves</h1>
      {/* <div className={styles.project_underline}></div> */}
      <a  href="https://github.com/zzs1/BrainWave"
       target="_blank"
       rel="noopener noreferrer">
            <button className={styles.button}>View Code</button>
        </a>
        </div>
       
      <Image className={styles.mockup} src="/images/BW_Cover3.png" height={530} width={1300} />
      
         
        <div className={styles.projectSummary}>

<div className={styles.summaryCard}>
    <span>Role</span>
    <h3>UX Researcher & Front-end Developer</h3>
</div>

<div className={styles.summaryCard}>
    <span>Duration</span>
    <h3>4 Months</h3>
</div>

<div className={styles.summaryCard}>
    <span>Platform</span>
    <h3>Mobile App</h3>
</div>

<div className={styles.summaryCard}>
    <span>Tools</span>
    <h3>Figma • ExpoJs • Firebase</h3>
</div>

</div>
      </div>
      <div className={styles.firstcontainer}>
       
       <div className={styles.description}>
       <h2 className={styles.app}>Product Overview</h2>
       
       <p className={styles.app_process}>Brainwaves is an educational mobile application designed to help students aged 13–17 improve critical thinking through interactive puzzles and AI-assisted learning. The experience emphasizes accessibility, engagement, and structured cognitive development.
       </p>
       </div>
       <Image src="/images/Brain_Waves1.png" width={650}  height={350}/>
    
       </div>
       <div className={styles.challengeSection}>

<div className={styles.challengeCard}>

    <span className={styles.cardNumber}>01</span>

    <h2>The Challenge</h2>

    <p>
        Many educational apps focus on memorization rather than developing
        critical thinking skills. Students with ADHD often struggle to stay
        engaged due to lengthy lessons, complex navigation, and limited
        personalized support.
    </p>

</div>

<div className={styles.challengeCard}>

    <span className={styles.cardNumber}>02</span>

    <h2>The Solution</h2>

    <p>
        Brainwaves combines interactive puzzle solving with AI-assisted
        guidance to create an engaging learning experience. The app delivers
        structured challenges, personalized feedback, and an accessible
        interface designed to support diverse learning needs.
    </p>

</div>

</div>
      

      
        <div className={styles.research_container}>

        <div className={styles.research}>
        
        <div className={styles.explanation}>
       
        <h2 className={styles.research_title}>Research & Discovery</h2>
       
        <ul className={styles.findings_list}>
  <li>Students preferred short learning sessions.</li>
  <li>Users responded positively to gamified challenges.</li>
  <li>Clear navigation reduced frustration.</li>
  <li>AI-assisted hints increased confidence during problem solving.</li>
</ul>
        {/* <p className={styles.app_process}>Competitive analysis was conducted, specifically targeting mind exercise apps. This analysis enabled us to assess the strengths and weaknesses of potential competitors, providing valuable insights into market dynamics and user expectations. By evaluating the scope of the market and identifying areas for improvement, we were able to refine our approach and enhance the unique value proposition of the Brainwaves app.

</p> */}
        </div>
        {/* <div className={styles.findings}>
        <h2 className={styles.app}>Findings</h2>

        </div> */}

<Image src="/images/Brainwaves_research.jpg" width={650}  height={450}/>
        </div>
     
        </div>
        <div className={styles.secondcontainer}>
       
        <div className={styles.description_two}>
            <h1  className={styles.section_title}>Branding</h1>
           
        <p  className={styles.app_process_design}>Recognizing the unique cognitive needs of students who struggle with ADHD, the team prioritized simplicity and clarity in design to ensure an easy user experience that won't cause distractions. The team decided to focus on designing a user-friendly interface to guide users through the app. Clear instructions and consistent design patterns were implemented to empower users to navigate through the app with confidence. </p>

        </div>
        
       
        </div>
        
        <div className={styles.colors}>
            <div className={styles.column}>
        <h2 className={styles.app}>Color Pallette</h2>
        <p className={styles.app_process}>The team decides on using a simple color palette, including shades such as Byzantine Blue (#2853D5) and Neon Blue, is a thoughtful approach to accommodate the needs of ADHD students. Bright and vibrant colors like Neon Blue can help maintain attention and interest without overwhelming or overstimulating the user. These colors are visually appealing and can enhance engagement with the app's interface and content.</p>
        </div>
        <div className={styles.palette_card}>
  <div className={styles.palette_color}>
    <div
      className={styles.color_circle}
      style={{ backgroundColor: "#0C7BDC" }}
    ></div>
    <span>#0C7BDC</span>
  </div>

  <div className={styles.palette_color}>
    <div
      className={styles.color_circle}
      style={{ backgroundColor: "#005AB5" }}
    ></div>
    <span>#005AB5</span>
  </div>

  <div className={styles.palette_color}>
    <div
      className={styles.color_circle}
      style={{ backgroundColor: "#E84A34" }}
    ></div>
    <span>#E84A34</span>
  </div>

  <div className={styles.palette_color}>
    <div
      className={styles.color_circle}
      style={{ backgroundColor: "#C33C2A" }}
    ></div>
    <span>#C33C2A</span>
  </div>

  <div className={styles.palette_color}>
    <div
      className={styles.color_circle}
      style={{ backgroundColor: "#10CA23" }}
    ></div>
    <span>#10CA23</span>
  </div>

  <div className={styles.palette_color}>
    <div
      className={styles.color_circle}
      style={{ backgroundColor: "#079515" }}
    ></div>
    <span>#079515</span>
  </div>

  <div className={styles.palette_color}>
    <div
      className={styles.color_circle}
      style={{ backgroundColor: "#EFB00C" }}
    ></div>
    <span>#EFB00C</span>
  </div>

  <div className={styles.palette_color}>
    <div
      className={styles.color_circle}
      style={{ backgroundColor: "#CD9300" }}
    ></div>
    <span>#CD9300</span>
  </div>
</div>
        </div>
        <div className={styles.colors}>
        <div className={styles.typography_card}>
  <h1 className={styles.type_heading}>
    Poppins
  </h1>

  <div className={styles.type_row}>
    <span>Heading</span>
    <p className={styles.heading_example}>
      Brainwaves
    </p>
  </div>

  <div className={styles.type_row}>
    <span>Subheading</span>
    <p className={styles.subheading_example}>
      Improve critical thinking through play.
    </p>
  </div>

  <div className={styles.type_row}>
    <span>Body Text</span>
    <p className={styles.body_example}>
      Brainwaves combines educational puzzles with AI assistance
      to create engaging learning experiences.
    </p>
  </div>
</div>
            <div className={styles.column}>
        <h2 className={styles.app}>Typography</h2>
        
        <p className={styles.app_process}>Poppins was selected as the primary typeface due to its clean geometric forms, excellent readability, and friendly appearance. The font supports a clear visual hierarchy while remaining approachable for younger users. Its simple letterforms help reduce visual noise and contribute to an accessible experience for students with ADHD.</p>
        <div className={styles.typography_points}>
    <div>✓ High readability for younger users</div>
    <div>✓ Clear hierarchy across screens</div>
    <div>✓ Modern and approachable appearance</div>
    <div>✓ Consistent across Android and iOS</div>
  </div>
        </div>
        
        </div>
        <div className={styles.logo_section}>
        <h2 className={styles.app}>Logo</h2>
        {/* <p className={styles.app_process_design}>The logo embodies the essence of the app's name through visual representation. It reflects the idea of expanding the mind and strengthening thinking skills through engaging challenges. With a clean and playful design, the logo captures the spirit of learning, curiosity, and discovery that Brainwaves encourages in its users.
        </p> */}
        <div className={styles.logo_card}>
        <div className={styles.logo_row}>
        <Image src="/images/BW_LogoBlue.png" width={350}  height={300}/>
        <Image src="/images/BW_LogoDark.png" width={350}  height={300}/>
        <Image src="/images/BW_LogoWhite.png" width={350}  height={300}/>
        </div>
        </div>
        </div>

        <div className={styles.mascot_wimmy}>
            <div className={styles.wimmy_description}>
            <h2 className={styles.app}> Meet Wimmy the Whale</h2>
           
            <p className={styles.app_process}>Introducing our AI Mascot, Wimmy the Whale, the friendly guide within the Brainwaves app. Wimmy assists users in solving puzzles by providing helpful hints when needed and offers detailed feedback at the end of each level. During feedback sessions, users can choose to listen to Wimmy's explanations, tailored to their learning styles. Wimmy also reveals users' current skill levels and the number of coins earned, adding a rewarding aspect to the learning experience. Moreover, Wimmy is not just a tutor; users can engage in conversations, ask questions, and enjoy friendly chats, making learning enjoyable and interactive.</p>
            </div>
            <Image src="/images/Wimmy.png" width={450}  height={310}/>
     
        </div>
        <div  className={styles.lofi_design}>
            <h2 className={styles.app}>Wireframes </h2>
            {/* <p className={styles.app_process_lofi}>Following the Brainwaves style guide and brand identity, the team embarked on a series of low-fidelity layout design sprints. The design team generated a variety of iterations aiming to craft a captivating and enjoyable user experience. By combining the most promising features and designs from each iteration, the design team finalized a low-fidelity design for Brainwaves. </p> */}
            <h3 className={styles.app_subheader}>Word Problems Flow</h3>
            <div  className={styles.mockups}>
            <div  className={styles.screen_and_name}>
                    <p className={styles.app}>Question 1 Screen</p>
        <Image src="/images/WordProblem-1.png" width={200}  height={450}/>
        </div>
        <div  className={styles.screen_and_name}>
                    <p className={styles.app}>Question 2 Screen</p>
        <Image src="/images/WordProblem-2.png" width={200}  height={450}/>
        </div>
        <div  className={styles.screen_and_name}>
                    <p className={styles.app}>Question 3 Screen</p>
        <Image src="/images/WordProblem-3.png" width={200}  height={450}/>
        </div>
        <div  className={styles.screen_and_name}>
                    <p className={styles.app}>Question 4 Screen</p>
        <Image src="/images/WordProblem-4.png" width={200}  height={450}/>
        </div>
        <div  className={styles.screen_and_name}>
                    <p className={styles.app}>Feedback Screen</p>
        <Image src="/images/Feedback.png" width={200}  height={450}/>
        </div>
        </div>
        </div>
        {/* <div  className={styles.lofi_design_two}>
           
            <h3 className={styles.app_subheader}>Word Problems AI Assistance Flow</h3>
            <div  className={styles.mockups_two}>
        <Image src="/images/WordProblemHelp-1.png" width={200}  height={450}/>
        <Image src="/images/WordProblemHelp-2.png" width={200}  height={450}/>
        <Image src="/images/WordProblemHelp-3.png" width={200}  height={450}/>
        <Image src="/images/WordProblemHelp-4.png" width={200}  height={450}/>
        
        </div>
        </div> */}
        <div  className={styles.hifi_design}>
            <h2 className={styles.app}>High-Fidelity Prototype</h2>
            {/* <p className={styles.app_process_hifi}>The first look at the LoFi design helped the team to understand how Brainwaves is laid out and gave ideas for adding more features to the app. Before a detailed High-Fidelity prototype was made, the team worked on Brainwaves' UI components in small steps, trying out different colors and typography. Then, these components were implemented into the design to create the final HiFi prototype.</p> */}
            <h3 className={styles.app_subheader}>Word Problems Flow</h3>
            <div  className={styles.mockups}>
                <div  className={styles.screen_and_name}>
                    <p className={styles.app}>Question 1 Screen</p>
        <Image src="/images/High-fi-1.png" width={200}  height={450}/>
        </div>
        <div  className={styles.screen_and_name}>
                    <p className={styles.app}>Question 2 Screen</p>
        <Image src="/images/High-fi-2.png" width={200}  height={450}/>
        </div>
        <div  className={styles.screen_and_name}>
                    <p className={styles.app}>Question 3 Screen</p>
        <Image src="/images/High-fi-3.png" width={200}  height={450}/>
        </div>
        <div  className={styles.screen_and_name}>
                    <p className={styles.app}>Question 4 Screen</p>
        <Image src="/images/High-fi-4.png" width={200}  height={450}/>
        </div>
        <div  className={styles.screen_and_name}>
                    <p className={styles.app}>Feedback Screen</p>
        <Image src="/images/High-fi-5.png" width={200}  height={450}/>
        </div>
        </div>
        </div>
        <div className={styles.development_container}>
        <h1 className={styles.app}>Implementation</h1>
        
        <Image src="/images/Brainwaves_Development.jpg" width={1200}  height={800}/>
        <div className={styles.code}>
        <div className={styles.development}>
        
        {/* <p className={styles.app_process}> 
        
Implementing AI to provide hints to users when they encounter challenges within puzzles was a pivotal feature for our development team. We devised a solution where users could access hints by interacting with the mascot, clicking on its tail to trigger contextual clues. This approach ensured that users received assistance precisely when needed, maintaining engagement without overwhelming them with unnecessary guidance.</p> */}
<p></p>
</div>
{/* <h2 className={styles.app}>Development Tools used</h2>
<p className={styles.app_process_dev}>In the Brainwaves project's development phase, a carefully curated set of tools and frameworks was employed to ensure efficient and robust application development. Visual Studio Code served as the primary integrated development environment, providing a flexible platform for coding and project management. Expo JS facilitated cross-platform capabilities, enabling seamless development experiences across iOS and Android platforms. Android Studio played a pivotal role in Android-specific tasks, offering essential tools for crafting native Android applications. Firebase served as the backbone for real-time database management, user authentication, and hosting, while OpenAI's innovative technologies enhanced the project's capabilities through advanced language processing and understanding. Together, these tools formed a cohesive ecosystem, empowering the creation of an intuitive and feature-rich application tailored to the unique needs of Brainwaves.</p> */}
</div>
</div>
<div className={styles.challenges}>
<div className={styles.words}>
<h2 className={styles.app}>Challenges</h2>
<p className={styles.app_process}> In my role as a front-end developer for the Brainwaves project, I encountered the challenge of integrating a speech feature to enable Wimmy the Whale, our AI Mascot, to speak upon a button click. Exploring the speech library presented a new and challenging experience for me.</p>
<p className={styles.app_process}>While working on the project, I encountered the task of enabling the AI to pause on click and resume speaking from where it stopped last time. Despite extensive efforts, this feature proved challenging to implement within the project's time frame. Furthermore, the limitation of the Expo speech library, lacking the required functionality, added to the complexity of the task. </p>
</div>
<Image className={styles.image}  src="/images/WimmySpeechCode.jpg" width={550}  height={370}/>
</div>
<div  className={styles.solution_two}>
<Image className={styles.image_solution}  src="/images/Solution.jpg" width={550}  height={370}/>
<div className={styles.dev_solution}>
<h2 className={styles.app}>The Solution</h2>
<p className={styles.app_process}>Ultimately, a devised solution was to include the integration of a play and pause button. However, the implementation presented a setback: the AI would recommence its feedback from the initial segment, rather than resuming from where it previously paused. Despite extensive troubleshooting and iterative adjustments, achieving seamless continuity in the AI's feedback proved elusive within the project's scope. This challenge underscored the importance of robust planning and resource allocation for future endeavors, emphasizing the need for more versatile speech libraries or customized solutions to address such intricate requirements effectively.</p>
</div>
</div>
</div>
<div className={styles.case_study_section}>

  <div className={styles.case_study_header}>
    <h2 className={styles.case_title}>App Demo</h2>
    <p className={styles.case_subtitle}>
      A walkthrough of the Brainwaves experience in action
    </p>
  </div>

  <div className={styles.video_frame}>
    <video
      className={styles.video}
      controls
      playsInline
      muted
      loop
    >
      <source src="/videos/video.mp4" type="video/mp4" />
    </video>
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