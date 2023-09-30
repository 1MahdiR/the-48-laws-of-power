import Head from 'next/head';
import Link from 'next/link';

import Header from '../components/header';
import Post from '../components/post';
import Title from '../components/title';

import styles from '../styles/Home.module.css';
import main_styles from '../styles/Main.module.css';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta charSet='UTF-8'/>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
        <title>The 48 Laws of Power</title>
        <link rel="icon" href="/the-48-laws-of-power/favicon.png" />
      </Head>
      <Header />
      <main className={main_styles.main}>
        <Post main_title="The 48 Laws of Power" sub_title="Empower Yourself, Master the Game!">
          <p>
            Welcome to a comprehensive resource designed to provide you with a condensed exploration of the acclaimed literary work, <a href="https://en.wikipedia.org/wiki/The_48_Laws_of_Power" target='_blank'>The 48 Laws of Power</a> by Robert Greene. This e-book presents a concise summary of each law, enabling you to grasp the fundamental principles outlined in the original text.
          </p>
          <Title h3="About the book" ljust={true} />
          <p>
            <b>The 48 Laws of Power</b> (1998) is a non-fiction book by American author Robert Greene. The book is a New York Times bestseller, selling over 1.2 million copies in the United States <a href="https://en.wikipedia.org/wiki/The_48_Laws_of_Power" target='_blank'>(Wikipedia)</a>. Whether you're an ambitious entrepreneur, a motivated professional, or simply someone in pursuit of personal growth, <b>The 48 Laws of Power</b> can provide you with an invaluable roadmap to understanding and leveraging power effectively.
          </p>
          <Title h3="About this website" ljust={true} />
          <p>
            This website is a comprehensive summary of this remarkable work. Each law has its summary and important notes presented concisely and effectively, plus some additional resources like books, videos, etc. This format allows you to easily grasp the key concepts behind each law without overwhelming you with excessive information.
          </p>
          <p>
            This website aims to provide you with a valuable resource to navigate power dynamics in various aspects of life. Feel free to dive into the pages for profound insights, real-life examples, and guidance on strategy, manipulation, and leadership.
          </p>
          <ul style={{listStyle:'none'}}>
            <li><Link href="laws/law_1">Law 1: Never Outshine the Master</Link></li>
            <li><a href="laws/law_2">Law 2: Never Put Too Much Trust in Friends, Learn How to Use Enemies</a></li>
            <li><a href="laws/law_3">Law 3: Conceal Your Intentions</a></li>
            <li><a href="laws/law_4">Law 4: Always Say Less Than Necessary</a></li>
            <li><a href="laws/law_5">Law 5: So Much Depends on Reputation – Guard It with Your Life</a></li>
            <li><a href="#">Law 6: Court Attention at All Costs</a></li>
            <li><a href="#">Law 7: Get Others to Do the Work for You, But Always Take the Credit</a></li>
            <li><a href="#">Law 8: Make Other People Come to You – Use Bait If Necessary</a></li>
            <li><a href="#">Law 9: Win Through Your Actions, Never Through Argument</a></li>
            <li><a href="#">Law 10: Infection: Avoid the Unhappy and Unlucky</a></li>
            <li><a href="#">Law 11: Learn to Keep People Dependent on You</a></li>
            <li><a href="#">Law 12: Use Selective Honesty and Generosity to Disarm Your Victim</a></li>
            <li><a href="#">Law 13: When Asking for Help, Appeal to People’s Self-Interest, Never to Their Mercy or Gratitude</a></li>
            <li><a href="#">Law 14: Pose as a Friend, Work as a Spy</a></li>
            <li><a href="#">Law 15: Crush Your Enemy Totally</a></li>
            <li><a href="#">Law 16: Use Absence to Increase Respect and Honor</a></li>
            <li><a href="#">Law 17: Keep Others in Suspended Terror: Cultivate an Air of Unpredictability</a></li>
            <li><a href="#">Law 18: Do Not Build Fortresses to Protect Yourself – Isolation is Dangerous</a></li>
            <li><a href="#">Law 19: Know Who You’re Dealing With – Do Not Offend the Wrong Person</a></li>
            <li><a href="#">Law 20: Do Not Commit to Anyone</a></li>
            <li><a href="#">Law 21: Play a Sucker to Catch a Sucker – Seem Dumber Than Your Mark</a></li>
            <li><a href="#">Law 22: Use the Surrender Tactic: Transform Weakness into Power</a></li>
            <li><a href="#">Law 23: Concentrate Your Forces</a></li>
            <li><a href="#">Law 24: Play the Perfect Courtier</a></li>
            <li><a href="#">Law 25: Re-Create Yourself</a></li>
            <li><a href="#">Law 26: Keep Your Hands Clean</a></li>
            <li><a href="#">Law 27: Play on People’s Need to Believe to Create a Cultlike Following</a></li>
            <li><a href="#">Law 28: Enter Action with Boldness</a></li>
            <li><a href="#">Law 29: Plan All the Way to the End</a></li>
            <li><a href="#">Law 30: Make Your Accomplishments Seem Effortless</a></li>
            <li><a href="#">Law 31: Control the Options: Get Others to Play with the Cards You Deal</a></li>
            <li><a href="#">Law 32: Play to People’s Fantasies</a></li>
            <li><a href="#">Law 33: Discover Each Man’s Thumbscrew</a></li>
            <li><a href="#">Law 34: Be Royal in Your Own Fashion: Act Like a King to Be Treated Like One</a></li>
            <li><a href="#">Law 35: Master the Art of Timing</a></li>
            <li><a href="#">Law 36: Disdain Things You Cannot Have: Ignoring Them Is the Best Revenge</a></li>
            <li><a href="#">Law 37: Create Compelling Spectacles</a></li>
            <li><a href="#">Law 38: Think as You Like, But Behave Like Others</a></li>
            <li><a href="#">Law 39: Stir Up Waters to Catch Fish</a></li>
            <li><a href="#">Law 40: Despise the Free Lunch</a></li>
            <li><a href="#">Law 41: Avoid Stepping into a Great Man’s Shoes</a></li>
            <li><a href="#">Law 42: Strike the Shepherd and the Sheep Will Scatter</a></li>
            <li><a href="#">Law 43: Work on the Hearts and Minds of Others</a></li>
            <li><a href="#">Law 44: Disarm and Infuriate with the Mirror Effect</a></li>
            <li><a href="#">Law 45: Preach the Need for Change, but Never Reform Too Much at Once</a></li>
            <li><a href="#">Law 46: Never Appear Too Perfect</a></li>
            <li><a href="#">Law 47: Do Not Go Past the Mark You Aimed for; In Victory, Learn When to Stop</a></li>
            <li><a href="#">Law 48: Assume Formlessness</a></li>
          </ul>
          <Title h3="Please note..." ljust={true} />
          <p>
            This website is created to help introduce people to this literary work and educate them on its key concepts. I want to make it clear that I haven't used any exact portions of the original text, and <b>I don't receive any credits or financial gain for this work.</b> My goal is simply to provide a resource that can help others benefit from the insights of this book. I believe that <a href="https://en.wikipedia.org/wiki/The_48_Laws_of_Power" target='_blank'>The 48 Laws of Power</a> is a valuable resource for anyone interested in personal development, and I hope that my summary can help you understand its key concepts and apply them to your life.
          </p>
          <Link href="laws/law_1">
            <Title h3="Start Your Journey!" b={true} />
          </Link>
        </Post>
      </main>
      <Footer />
      
      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
