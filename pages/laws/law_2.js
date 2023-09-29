import Head from 'next/head';

import Header from '../../components/header';
import Post from '../../components/post';
import Title from '../../components/title';
import Footer from '../../components/footer';

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
        <Post main_title="2" sub_title="NEVER PUT TOO MUCH TRUST IN FRIENDS, LEARN HOW TO USE ENEMIES" next_link="/laws/law_3" previous_link="/laws/law_1">
          <p>
            Be wary of friends — they will betray you more quickly, for they are easily aroused to envy. They also become spoiled and tyrannical. But hire a former enemy and he will be more loyal than a friend, because he has more to prove.
          </p>
          <p>
            Friends can sometimes take advantage of the trust and familiarity we have with them, leading to potential betrayal or exploitation. Conflicts of interest, jealousy, or personal ambitions can disrupt the bonds of friendship. Therefore, it is advisable to be cautious and not entirely rely on friends without considering their own self-interests.
          </p>
          <p>
            On the other hand, enemies can serve as valuable resources in different scenarios. Greene suggests treating enemies as a challenge and an opportunity for personal growth. By recognizing the strengths and weaknesses of enemies, one can learn from them, adapt strategies, and build resilience. Enemies can also be used as leverage to gain power, as cultivating alliances against a common adversary can lead to a stronger position.
          </p>
          <p>
            By understanding the second law of power, one learns to be astute in relationships, distinguishing between true friends and potential enemies. It emphasizes the importance of being strategic, maintaining a healthy level of skepticism, and not expecting blind loyalty from those close to us. This law encourages individuals to stay alert, adaptable, and aware of power dynamics in order to protect their own interests and capitalize on opportunities for growth and advancement.
          </p>
          <Title h3="Strategies" ljust={true} />
          <div className='p_tag'>
            <ul>
              <li>
                <b>Maintaining a balance of power:</b> It is essential to avoid becoming too reliant on friends or allies, as excessive trust can potentially blind one to their true intentions. Balancing power dynamics means being cautious while revealing personal vulnerabilities and not entirely depending on others. For instance, a politician may maintain alliances with several party members, but will always ensure they have multiple alternative options in case any of their friends turn against them.
              </li>
              <li>
                <b>Recognizing hidden agendas:</b> The second law of power advises being skeptical of the motives of those close to you. Sometimes, people may disguise their true intentions under the veil of friendship or camaraderie. By being aware of this dynamic, one can protect themselves from being manipulated or betrayed. For instance, in the corporate world, a manager who is close friends with a subordinate needs to be aware of any hidden ambitions or ulterior motives the subordinate might have for seeking friendship.
              </li>
              <li>
                <b>Utilizing enemies:</b> Enemies can sometimes prove more useful than friends. Recognizing the motivations and strengths of adversaries enables individuals to leverage their enmity to their advantage. For example, a business owner who has a rival competitor that constantly challenges their market dominance can partner with other competitors to weaken the common enemy and eliminate the competition together.
              </li>
              <li>
                <b>The power of competition:</b> Competition among friends or colleagues can bring out their best performances. By encouraging a healthy level of rivalry or competition, individuals can harness the power of their relationships to drive personal growth and achieve their goals. For instance, in an educational setting, friends who compete for top academic honors can motivate each other to study harder and perform better.
              </li>
              <li>
                <b>The dangers of blind trust:</b> The second law of power warns against placing too much faith in friends without recognizing their true motivations. Blind trust can make one vulnerable to manipulation, backstabbing, or becoming a pawn in someone else's game. For instance, a business partner who unquestioningly trusts their colleague may realize too late that the colleague has been embezzling funds from the company.
              </li>
            </ul>
          </div>
          <Title h3="Reversal" ljust={true} />
          <p>
            The reversal of the 2nd law argues that instead of solely relying on enemies for achieving power, trusting and building strong relationships with friends can be equally advantageous, if not more so. It recognizes the potential power that can arise from close-knit alliances and a network of supportive individuals.
          </p>
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
