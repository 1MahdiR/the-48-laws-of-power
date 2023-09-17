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
        <Post main_title="LAW 5" sub_title="SO MUCH DEPENDS ON REPUTATION - GUARD IT WITH YOUR LIFE">
          <p>
            Reputation is the cornerstone of power. through reputation alone you can intimidate and win; once it slips however you are vulnerable and will be attacked on all sides. Make your reputation unassailable. Always be alert to potential attacks and thwart them before they happen. Meanwhile learn to destroy your enemies by opening holes in their own reputations. Then stand aside and let public opinion hang them.
          </p>
          <p>
            In the realm of power dynamics, your reputation carries significant weight. It influences how others perceive you, how much they trust you, and to what extent they are willing to cooperate with you. A positive reputation can open doors, win allies, and give you a competitive advantage, while a damaged reputation can hinder your progress and leave you vulnerable.
          </p>
          <Title h3="Strategies" ljust={true} />
          <div className='p_tag'>
            <ul>
              <li>
                <b>Maintain an impeccable image:</b> Pay close attention to how others perceive you. Project an image of reliability, integrity, and competence. Cultivate positive traits and avoid behaviors that could tarnish your reputation.
              </li>
              <li>
                <b>Be aware of appearances:</b> People often judge based on outward appearances and first impressions. So, be conscious of your attire, behavior, and demeanor. Present yourself in a way that aligns with the image you want to project.
              </li>
              <li>
                <b>Protect against slander and attack:</b> Reputation can be fragile, subject to attacks from rivals, detractors, or gossip. Actively guard against baseless or damaging rumors. Address them promptly and effectively to mitigate potential harm.
              </li>
              <li>
                <b>Surround yourself with the right people:</b> Choose your associates wisely. Align yourself with individuals who have solid reputations and whose behavior enhances your own. Avoid toxic or disreputable company that could negatively impact your standing.
              </li>
              <li>
                <b>Control the narrative:</b> Take an active role in shaping how others perceive you. Craft your own story and reputation through careful communication and strategic actions. Be conscious of the perception you create and manage it proactively.
              </li>
            </ul>
          </div>
          <br />
          <p>
            By understanding the importance of reputation and taking steps to safeguard it, you can enhance your influence, build trust, and strengthen your position in the pursuit of power. Remember, a positive reputation can propel you forward, so guard it earnestly!
          </p>
          <Title h3="Examples" ljust={true} />
          <div className='p_tag'>
            <ul>
              <li>
                Historical Example - Julius Caesar: Julius Caesar, the Roman general and statesman, understood the significance of reputation. He carefully cultivated an image of strength, bravery, and military prowess. Caesar's reputation as a successful conqueror and leader helped him gain the loyalty and support of his troops and the Roman people, ultimately leading to his rise to power.
              </li>
              <li>
                Business Example - Apple Inc.: Apple Inc., the technology giant, has built a strong reputation for innovation, quality, and design. This reputation has allowed them to maintain a loyal customer base and charge premium prices for their products. Apple's commitment to protecting their reputation is evident in their stringent quality control measures and their proactive approach to addressing any potential issues or controversies that could tarnish their brand image.
              </li>
              <li>
                Personal Example - Professional Athlete: A professional athlete's reputation is crucial for their success and marketability. They must maintain a positive image both on and off the field. For example, a soccer player known for their exceptional skills but with a reputation for unsportsmanlike behavior or off-field controversies may face negative consequences such as loss of endorsements, fan support, and even career opportunities.
              </li>
              <li>
                Political Example - Nelson Mandela: Nelson Mandela, the former President of South Africa, understood the power of reputation in his fight against apartheid. Despite being imprisoned for 27 years, Mandela maintained a reputation as a symbol of resistance and equality. This reputation garnered international support and admiration, ultimately contributing to the dismantling of apartheid and his election as the first black President of South Africa.
              </li>
            </ul>
          </div>
          <br />
          <Title h3="Reversal" ljust={true} />
          <p>
            This law has no reversal! As the law says, guard your reputation with your life.
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
