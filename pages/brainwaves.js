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
      <Image className={styles.mockup} src="/images/Braiwaves_Mockupp.jpg" height={600} width={1200} />
                <div className={styles.a}>
        
      
        </div>
      
      </div>
      <div className={styles.problem_solution}>
            <div className={styles.problem}>
        <h2 className={styles.app}>The Problem</h2>
        <p className={styles.app_process}>As students enter puberty and high school, they often face challenges in developing critical thinking skills, especially those diagnosed with ADHD. The demands of adolescence and high school academics can overwhelm teenagers, making it hard to focus and solve complex problems. Students with ADHD may struggle with organizing thoughts, managing time effectively, and staying focused, hindering their academic and personal development. Addressing these challenges requires tailored interventions that provide cognitive stimulation and accommodate individual learning styles. </p>
        </div>
        <div className={styles.solution}>
        <h2 className={styles.app}>The Solution</h2>
        {/* <p className={styles.app_process}>Through the conducted research, it was determined that improving users' critical thinking could be achieved by offering them an organized framework for problem-solving via puzzle-solving activities. By regularly practicing this framework, users have the opportunity to enhance their critical thinking abilities. Moreover, the integration of AI technology provides users with consistent support and feedback, fostering a supportive environment. The research findings indicate that with the guidance and assistance of AI, users can effectively develop their critical thinking skills.</p> */}
        <p className={styles.app_process}>Based on the research, it was concluded that enhancing users' critical thinking skills can be accomplished by developing a structured method for solving problems using puzzle-solving activities. Regular utilization of this method offers users the chance to improve their critical thinking capabilities. Additionally, the incorporation of AI technology offers users ongoing assistance and feedback, fostering a supportive atmosphere. The research findings suggest that with AI guidance and support, users can effectively develop their critical thinking skills.</p>
        </div>
        </div>
        <div className={styles.firstcontainer}>
       
        <div className={styles.description}>
        <h2 className={styles.app}>About Brainwaves</h2>
        
        <p className={styles.app_process}>Introducing Brainwaves, a new app designed to help young people improve their problem-solving and critical thinking skills. Our team created this edutainment app with specially-abled students in mind, aged 13 to 17. With fun puzzles and a helpful AI friend named Wimmy the Whale, our app offers interactive learning experiences to empower users.</p>
        </div>
        <Image src="/images/Map.jpg" width={550}  height={330}/>
     
        </div>

      
        <div className={styles.research_container}>

        <div className={styles.research}>
        <Image src="/images/Brainwaves_research.jpg" width={650}  height={450}/>
        <div className={styles.explanation}>
       
        <h2 className={styles.app}>Research</h2>
       
        <p className={styles.app_process}>The development of the Brainwaves app involved extensive user research and competitive analysis, which played a crucial role in guiding team's decisions and strategies. User research was conducted through a comprehensive survey, designed to collect honest and reliable data from participants. This survey focused on gathering information about various aspects, including participants' age, learning habits, level of critical thinking and problem-solving skills, and awareness of ADHD, if applicable.</p>
        <p className={styles.app_process}>Competitive analysis was conducted, specifically targeting mind exercise apps. This analysis enabled us to assess the strengths and weaknesses of potential competitors, providing valuable insights into market dynamics and user expectations. By evaluating the scope of the market and identifying areas for improvement, we were able to refine our approach and enhance the unique value proposition of the Brainwaves app.

</p>
        </div>
        {/* <div className={styles.findings}>
        <h2 className={styles.app}>Findings</h2>

        </div> */}

        
        </div>
        <div className={styles.user_persona}>
            <div className={styles.user_persona_paragraph}>
        <h2 className={styles.app}>User Persona</h2>
        <p className={styles.app_process}>Creating a user persona was a foundational step in our user research process, providing valuable insights into the needs, preferences, and behaviors of our target audience. Through extensive data collection and analysis, we crafted a fictional representation of our ideal user, embodying key demographic and psychographic characteristics. This persona served as a guiding archetype throughout our research endeavors, allowing us to empathize with the user's perspective and tailor our methodologies accordingly. By personifying our target audience, we gained a deeper understanding of their motivations, challenges, and goals, enabling us to design solutions that resonate with their unique needs. The user persona also facilitated effective communication and collaboration within the team, ensuring that everyone remained aligned with the user-centric vision of our project. Ultimately, by leveraging the insights gleaned from the user persona, we were able to conduct more meaningful and impactful user research, leading to the development of solutions that truly address the needs of our audience.</p>
        </div>
        <Image src="/images/Persona.png" width={412}  height={630}/>
        </div>
        <div className={styles.primary_user_map}>
        <h2 className={styles.app}>Primary User Map</h2>
        <Image src="/images/PrimaryUserMap.png" width={1200}  height={400}/>
        </div>
        </div>
        <div className={styles.secondcontainer}>
       
        <div className={styles.description_two}>
            <h1  className={styles.app_bold}>Design Process</h1>
           
        <p  className={styles.app_process_design}>Recognizing the unique cognitive needs of students who struggle with ADHD, the team prioritized simplicity and clarity in design to ensure an easy user experience that won't cause distractions. The team decided to focus on designing a user-friendly interface to guide users through the app. Clear instructions and consistent design patterns were implemented to empower users to navigate through the app with confidence. </p>
        <p className={styles.app_process_design}>
Users of the app can explore Logic Problems, Numerical Problems, and Pattern Recognition Puzzles. The app offers a progressive learning experience where users can begin at Level 1 and advance through higher levels as they unlock them. </p>
        </div>
        
       
        </div>
        
        <div className={styles.colors}>
            <div className={styles.column}>
        <h2 className={styles.app}>Color Pallette</h2>
        <p className={styles.app_process}>The team decides on using a simple color palette, including shades such as Byzantine Blue (#2853D5) and Neon Blue, is a thoughtful approach to accommodate the needs of ADHD students. Bright and vibrant colors like Neon Blue can help maintain attention and interest without overwhelming or overstimulating the user. These colors are visually appealing and can enhance engagement with the app's interface and content.</p>
        </div>
        <Image src="/images/Colour_Palette.png" width={520}  height={600}/>
        </div>
        <div className={styles.colors}>
        <Image src="/images/Font.png" width={520}  height={600}/>
            <div className={styles.column}>
        <h2 className={styles.app}>Typography</h2>
        
        <p className={styles.app_process}>In designing the app interface, considerations were made to ensure that font choices are non-distracting and promote sustained attention. By avoiding ornate or overly stylized fonts, the design aims to maintain a clean and streamlined appearance, minimizing unnecessary visual noise that may distract or overwhelm users with ADHD.</p>
        </div>
        
        </div>
        <h2 className={styles.app}>Logo</h2>
        <p className={styles.app_process_design}>The logo embodies the essence of the app's name through visual representation. It reflects the idea of expanding the mind and strengthening thinking skills through engaging challenges. With a clean and playful design, the logo captures the spirit of learning, curiosity, and discovery that Brainwaves encourages in its users.
        </p>
        <Image src="/images/Logo_design.png" width={1200}  height={450}/>

        <div className={styles.mascot_wimmy}>
            <div className={styles.wimmy_description}>
            <h2 className={styles.app}> Meet Wimmy the Whale</h2>
           
            <p className={styles.app_process}>Introducing our AI Mascot, Wimmy the Whale, the friendly guide within the Brainwaves app. Wimmy assists users in solving puzzles by providing helpful hints when needed and offers detailed feedback at the end of each level. During feedback sessions, users can choose to listen to Wimmy's explanations, tailored to their learning styles. Wimmy also reveals users' current skill levels and the number of coins earned, adding a rewarding aspect to the learning experience. Moreover, Wimmy is not just a tutor; users can engage in conversations, ask questions, and enjoy friendly chats, making learning enjoyable and interactive.</p>
            </div>
            <Image src="/images/About_Brainwaves.jpg" width={550}  height={370}/>
     
        </div>
        <div  className={styles.lofi_design}>
            <h2 className={styles.app}>Lofi Prototype </h2>
            <p className={styles.app_process_lofi}>Following the Brainwaves style guide and brand identity, the team embarked on a series of low-fidelity layout design sprints. The design team generated a variety of iterations aiming to craft a captivating and enjoyable user experience. By combining the most promising features and designs from each iteration, the design team finalized a low-fidelity design for Brainwaves. </p>
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
            <h2 className={styles.app}>Hifi Prototype </h2>
            <p className={styles.app_process_hifi}>The first look at the LoFi design helped the team to understand how Brainwaves is laid out and gave ideas for adding more features to the app. Before a detailed High-Fidelity prototype was made, the team worked on Brainwaves' UI components in small steps, trying out different colors and typography. Then, these components were implemented into the design to create the final HiFi prototype.</p>
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
        <h1 className={styles.app}>Development</h1>
        
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
      <Link href="https://www.linkedin.com/in/ivona-iv/">
      <Image  src="/images/email-gray.png" height={45} width={45} />
      </Link>
      </div>
      </div>
        </div>
        </div>
    )
}