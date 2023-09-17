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
        <Post main_title="LAW 4" sub_title="ALWAYS SAY LESS THAN NECESSARY">
          <p>
            Powerful people know how to impress others by saying less. The more you say, the more likely it is that you will end up saying something foolish. As people are constantly trying to work out what others appear to be thinking, silence makes them feel uncomfortable.
          </p>
          <p>
            Words have the power to both create and destroy, and when used excessively or carelessly, they can diminish one's power. He suggests that people tend to talk more than necessary due to insecurities or as a means of seeking validation. However, this excessive talking can actually work against them, making them appear weak, foolish, or untrustworthy.
          </p>
          <p>
            The law advises individuals to be strategic in their communication by saying less and listening more. When one speaks less, they retain an air of mystery and create a sense of intrigue around themselves. This can cultivate an aura of power since people are naturally more drawn to those who appear to hold their cards close to their chest.
          </p>
          <p>
            The law also emphasizes the importance of choosing one's words carefully and using them to create an impact. By being concise and avoiding unnecessary details, one can make their words more potent and memorable. When people speak less, their words are valued more as they are seen as deliberate and meaningful.
          </p>
          <p>
            Additionally, the law highlights the importance of being aware of one's audience and the information being shared. By saying less, individuals can avoid revealing too much or sharing information that might be used against them. Silence or vagueness can be a strategic way to maintain control and protect oneself from potential enemies or competitors.
          </p>
          <Title h3="Strategies" ljust={true} />
          <div className='p_tag'>
            <ul>
              <li>
                <b>Think before you speak:</b> Before engaging in a conversation or making a statement, take a moment to think about what you truly want to say. Avoid unnecessary rambling or voicing every thought that comes to your mind.
              </li>
              <li>
                <b>Prioritize quality over quantity:</b> Instead of focusing on the quantity of your words, prioritize the quality. Choose your words carefully, making sure they are concise, impactful, and relevant to the situation at hand.
              </li>
              <li>
                <b>Emphasize non-verbal communication:</b> Non-verbal cues, such as facial expressions, body language, and tone of voice, can often convey more meaning than words alone. Use these cues to your advantage, strategically conveying your message without excessive verbal explanations.
              </li>
              <li>
                <b>Be mysterious and enigmatic:</b> Avoid revealing all your intentions or thoughts upfront. Cultivate an aura of mystery around yourself, keeping others guessing about your motives and plans. This can give you an advantage in negotiations and interactions.
              </li>
              <li>
                <b>Listen actively:</b> Strategic speaking is not just about what you say, but also how effectively you listen. Pay close attention to what others are saying, and use their words to guide your responses. This can help you to pick up on important information or insights that you can use to your advantage.
              </li>
              <li>
                <b>Learn to pause and reflect:</b> Instead of immediately responding to every question or comment, take a moment to pause and reflect. This allows you to gather your thoughts and respond strategically rather than impulsively.
              </li>
              <li>
                <b>Use silence as a powerful tool:</b> Silence can be a powerful weapon in strategic communication. Learn to use well-timed pauses and silence to create tension, encourage others to reveal more information, or make a statement more impactful.
              </li>
            </ul>
          </div>
          <br />
          <p>
            Speaking strategically is about being intentional with your words, selectively revealing information, and using non-verbal cues to convey messages. Sometimes saying less can have more impact and influence than saying too much.
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
