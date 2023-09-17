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
        <Post main_title="LAW 3" sub_title="CONCEAL YOUR INTENTIONS">
          <p>
            Always conceal your intentions. If you keep people off-balance and in the dark, they can't counter your efforts. Send them down the wrong path with a red herring or create a smokescreen and by the time they realize what you're up to, it will be too late for them to interfere.
          </p>
          <p>
            This law advises individuals to guard their true thoughts, motives, and goals from others. It emphasizes the strategic value of maintaining a certain level of mystery and ambiguity about oneself, making it more difficult for others to predict one's next move. By concealing one's intentions, individuals can gain an advantage over others who may be too transparent or predictable.
          </p>
          <p>
            Openly sharing one's intentions can expose them to manipulation, opposition, or scrutiny. In many situations, people tend to exploit any information they have about others, either to their advantage or to undermine them. By remaining mysterious and not revealing all their cards, individuals can create an aura of power and prevent others from exploiting them.
          </p>
          <p>
            Furthermore, the third law acknowledges the power of surprise. By not openly declaring their plans, individuals can take others by surprise, catching them off guard and often gaining an upper hand in negotiations, conflicts, or competitive situations. The book suggests that when others do not know what to expect from someone, they become cautious and uncertain, potentially weakening their position.
          </p>
          <p>
            However, use this law judiciously. Excessive secrecy and manipulation may lead to isolation and mistrust over time. The third law encourages individuals to master the art of selectively revealing information and strategically concealing certain intentions to enhance their personal power and maintain an advantageous position.
          </p>
          <Title h3="Strategies" ljust={true} />
          <div className='p_tag'>
            <ul>
              <li>
                <b>Master the art of deception:</b> Practice the ability to manipulate people's perception by being vague and ambiguous about your true goals and motives. Maintain a poker face and avoid revealing any signs that may betray your true intentions.
              </li>
              <li>
                <b>Use diversion tactics:</b> Create distractions or misdirection to shift people's attention away from what you truly desire. This can be done by feigning interests or concerns that lead others astray and deflect attention from your real objectives.
              </li>
              <li>
                <b>Gather intelligence:</b> When you possess information about others, they are more likely to reveal their intentions and agendas. By remaining observant and leveraging this knowledge discreetly, you can gain an advantage while keeping your own intentions hidden.
              </li>
              <li>
                <b>Play your cards close to your chest:</b> Avoid openly discussing your plans or goals, especially with those who have a propensity to gossip or might work against you. Instead, reveal only the information necessary to maintain strategic relationships while keeping the full scope of your intentions concealed.
              </li>
              <li>
                <b>Practice selective honesty:</b> While concealment is essential, being entirely inscrutable can arouse suspicion. Occasionally, reveal fragments of your intentions in a way that benefits you while still maintaining an air of mystery and unpredictability.
              </li>
              <li>
                <b>Cultivate a benign reputation:</b> By projecting an image of someone who is harmless or uninterested, you can lull others into underestimating you and reduce the threat of interference.
              </li>
            </ul>
          </div>
          <br />
          <p>
            Mastering the art of concealment requires finesse and careful execution. Remain vigilant and adaptable, adjusting your approach according to various situations and the individuals involved.
          </p>
          <Title h3="Reversal" ljust={true} />
          <p>
            Openly expressing one's intentions and desires for power can help in building alliances and attracting like-minded individuals who can aid in achieving those goals. By openly stating their ambitions, individuals may be perceived as trustworthy and honest, attracting others who may have similar goals or aspirations. This can lead to the formation of powerful alliances and support networks, increasing their chances of success.
          </p>
          <p>
            The reversal of Law 3 also emphasizes that excessive secrecy and manipulation may breed suspicion and mistrust among others. By being open about intentions, individuals can establish a sense of authenticity and gain the trust of those around them. This trust can be essential when seeking cooperation or collaboration from others, as people are often more willing to assist those they trust and perceive as genuine.
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
