import Head from 'next/head';

import Header from '../../components/header';
import Post from '../../components/post';
import Title from '../../components/title';

import styles from '../../styles/Home.module.css';
import main_styles from '../../styles/Main.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta charSet='UTF-8'/>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
        <title>The 48 Laws of Power</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={main_styles.main}>
        <Post main_title="LAW 1" sub_title="NEVER OUTSHINE THE MASTER">
          <p>
            Always make those above you feel comfortably superior in your desire to please and impress them, do not go too far in displaying your talents or you might accomplish the opposite — inspire fear and insecurity. Make your masters appear more brilliant than they are and you will attain the heights of power.
          </p>
          <p>
            Human nature is inherently competitive, and people tend to want to rise above others in various areas of their lives. However, when it comes to dealing with those in positions of power or authority, it is crucial to be mindful not to overshadow or threaten them.
          </p>
          <p>
            The reasoning behind this principle is rooted in the fear and insecurity that those in power may experience when someone beneath them is seen as more competent, talented, or influential. By drawing unwarranted attention to oneself and achieving recognition that surpasses their superior, one risks becoming a perceived threat. This can lead to resentment, jealousy, and ultimately retaliation.
          </p>
          <p>
            Always be aware of your surroundings and the dynamics of power within any given situation. While it may be tempting to showcase one's skills and intelligence, it is advisable to gauge the temperament and emotions of the person in power and exercise restraint, ensuring that their position and ego remain intact.
          </p>
          <p>
            It's important to keep in mind that this law does not prohibit growth or advancement. Instead, it places importance on subtlety, manipulation, and the art of influencing from behind the scenes. By cultivating strong relationships, loyalty, and a sincere appreciation for the power and authority figures, individuals can navigate the delicate balance between achieving their goals and avoiding unnecessary conflicts.
          </p>
          <p>
            In essence, the first law of power serves as a reminder that while ambition and success are admirable, it is equally crucial to understand the dynamics of power and to act strategically, staying mindful of one's place within the existing hierarchy.
          </p>
          <Title h3="Examples" ljust={true} />
          <div className='p_tag'>
            <ul>
              <li>
                Office Politics: Imagine you have recently started working for a new company, and you quickly excel in your role, outperforming your direct supervisor. While it may be satisfying to demonstrate your capabilities, doing so can create envy and insecurity in your superior. As a result, they might perceive you as a threat and undermine your potential for growth or sabotage your progress. Thus, the first law of power suggests that it might be wiser to tone down your abilities or occasionally highlight your supervisor's strengths.
              </li>
              <li>
                Public Speaking: Let's say you are asked to deliver a speech at a company conference. Your natural charisma and exceptional oratory skills captivate the audience, overshadowing the CEO's opening remarks. While this may earn you praise from colleagues and admiration from the audience, it can also diminish the CEO's authority. Consequently, they might feel slighted and view you as a challenge to their leadership position. By adhering to the first law, you might consider adjusting your presentation style or subtly acknowledging and complimenting the CEO's earlier remarks to maintain harmony and respect.
              </li>
              <li>
                Competitive Sports: In team sports, particularly those with a captain or coach, it is customary to showcase respect and deference to the leader. For instance, let's say you play soccer on a team where the captain is experienced but not as skillful as you are. While you may be tempted to display your superior abilities on the field, doing so could undermine the captain's authority and leadership. Instead, by adhering to the first law of power, you may choose to follow their guidance, allowing them to make decisions and receive credit for the team's success.
              </li>
            </ul>
          </div>
          <Title h3="Reversal" ljust={true} />
          <p>
            The reversal suggests that individuals can strategically ignore or disregard the first law and actually seek opportunities to outshine their superiors. The argument behind this reversal lies in the notion that some authority figures may feel threatened or insecure when someone beneath them exhibits superior skills or talents. Therefore, by intentionally outshining the master, individuals can gain advantages, assert their presence, and potentially even challenge the authority of their superior.
          </p>
          <p>
            This reversal should be employed carefully and with calculated tactics. It emphasizes the importance of assessing the specific situation, evaluating the nature of one's superior, and understanding the potential consequences. By skillfully overpowering one's master, an individual can potentially gain more recognition, influence, and even ascend to a higher status.
          </p>
          <p>
            However, it is worth noting that the reversal of the first law of power is not without risks. Outshining a master can create enemies, provoke a backlash, or cause the superior to take assertive measures to maintain their authority. Therefore, the book advises readers to consider the potential outcomes and employ this reversal cautiously, only when the benefits outweigh the risks.
          </p>
        </Post>
      </main>
      
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
