import styles from '@/styles/Dreamytea.module.css'
import Image from 'next/image'
import Link from 'next/link'
export default function DreamyTea () {
    return(
        <main className={styles.main}>
   <div className={styles.navbar}>
         <Link  href="/">
         
      <Image alt="logo"  src="/images/Logo01.png" height={65} width={91} />
      
      </Link> 
      <div className={styles.work}>
      <Link className={styles.link}  href="/projects">
    <h1 className={styles.second_title}>PROJECTS</h1></Link>
    <Link className={styles.link} href="/designs">
        <h1 className={styles.third_title}>DESIGN</h1>
        </Link>
        <Link className={styles.link} href="/designs">
        <h1 className={styles.third_title}>CONTACT</h1>
        </Link>
    </div>
   
    </div>
    <div className={styles.page_content}>
 <h1 className={styles.dreamytea}>Dreamy Tea</h1>
 <Image className={styles.loading} src="/images/flavours.jpg" height={800} width={1200}/>
 <div className={styles.about_container}>
 
 <div className={styles.description}>
        <h2 className={styles.app}>About Dreamy Tea</h2>
        
        <p className={styles.app_process}>Dreamy Tea introduces a refreshing take on iced tea, catering to individuals seeking a delightful beverage experience. Crafted with care, Dreamy Tea encapsulates the essence of relaxation in every sip. As a fictional beverage company dedicated to offering premium, health-conscious drinks, Dreamy Tea aims to redefine the iced tea experience for a new generation.</p>
        
        </div>
        <Image  className={styles.loading} src="/images/DreamyTeaStrawbery.jpg" height={400} width={400} />
        </div>
        <div className={styles.branding_container}>
       
            <div className={styles.description_dialine}>
        <h2 className={styles.app}>Layout Design</h2>
        <p className={styles.app_process_dialine}>In designing the can layout for Dreamy Tea, attention was given to capturing the calm and luxurious qualities that make iced tea special. Drawing inspiration from the peaceful imagery of dream catchers and the graceful presence of feathers, these elements were integrated thoughtfully to reflect the beverage's tranquil yet lively character. The aim was to create a design that resonates with consumers, inviting them to experience a moment of refreshment and bliss with every sip of Dreamy Tea.</p>
        </div>
        <div className={styles.dialines}>
        <Image  className={styles.loading} src="/images/DreamyTeaStrawberyDieline.png" height={250} width={420} />
        <Image  className={styles.loading} src="/images/DreamyTeaPumkinDieline.png" height={250} width={420} />
        <Image  className={styles.loading} src="/images/DreamyTeaGingerDieline.png" height={250} width={420} />
        </div>
       </div>
       <div className={styles.flavour_container}>
       <div className={styles.description}>
       <h2 className={styles.app}>Flavours</h2>
       <p className={styles.app_process}>The choice of can colors mirrors the fruity tea flavors infused within, reflecting the refreshing taste and vibrant hues of each variant. From the soothing pastels of ginger to the invigorating tones of pumpkin, the colors not only tantalize the senses but also evoke a sense of anticipation for the delightful experience within.</p>
       </div>
       <Image  className={styles.loading} src="/images/flavours.jpg" height={500} width={680} />
       </div>
       </div>
       <div className={styles.footer}>
            <div className={styles.footer_line}></div>
            <div className={styles.footer_row}>
            <p className={styles.footnote}>© 2026 Ivona Ivkovic</p>
            <div className={styles.icons}>
            <Link  href="https://github.com/IvonaIva00">
      <Image src="/images/github-gray.png" height={45} width={45} />
      </Link>
      <Link href="https://www.linkedin.com/in/ivona-iv/">
      <Image src="/images/linkedin-gray.png" height={45} width={45} />
      </Link>
      <Link href="https://www.linkedin.com/in/ivona-iv/">
      <Image  src="/images/email-gray.png" height={45} width={45} />
      </Link>
      </div>
      </div>
        </div>
       </main>
    )}