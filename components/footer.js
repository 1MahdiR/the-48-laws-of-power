
import footer_styles from '../styles/Footer.module.css';

export default function Footer() {

  const website_url = "<WEBSITE_URL>";

  const linkedin_share_url = `https://linkedin.com/shareArticle?url=${website_url}&title=%27The%2048%20Laws%20of%20Power%27%20e-book`;
  const telegram_share_url = `https://t.me/share/url?url=${website_url}&text=%F0%9F%93%9A%20Welcome%20to%20%27The%2048%20Laws%20of%20Power%27%20e-book%20platform%21%20%F0%9F%92%BC%20Embark%20on%20a%20transformative%20journey%20into%20strategic%20genius%2C%20influential%20tactics%2C%20and%20profound%20mastery.%20%F0%9F%93%96%E2%9C%A8%20%23The48LawsOfPower%20%23Ebook%20%23UnleashYourPotential`;
  const twitter_share_url = `https://twitter.com/intent/tweet?text=%F0%9F%93%9A%20Check%20out%20%27The%2048%20Laws%20of%20Power%27%20e-book%20platform%21%20%F0%9F%92%BC%20Embark%20on%20a%20transformative%20journey%20into%20strategic%20genius%2C%20influential%20tactics%2C%20and%20profound%20mastery.%20%F0%9F%93%96%E2%9C%A8%20%20%23The48LawsOfPower%20%23Ebook%20%23UnleashYourPotential%0A${website_url}`;
  const facebook_share_url = `http://www.facebook.com/sharer.php?s=100&p[url]=${website_url}`;
  const github_url = 'https://github.com/1MahdiR/';
  const telegram_url = 'https://t.me/mr_var_log';
  const linkedin_url = 'https://www.linkedin.com/in/amir-mahdi-rasouli-39566a143/';
  const gmail_url = 'mailto:a.m.rasouli.n@gmail.com';
  
  return (
      <>
        <footer>
          <div className={footer_styles.container}>
            <h2>48 Laws of Power</h2>
            <h3>By Robert Greene</h3>
            <br /><br />
            <p>This website was created by MR.</p>
            <p>All credits for the contents of this website belongs to the author of the book <a href="https://www.amazon.com/48-Laws-Power-Robert-Greene/dp/0140280197">"The 48 Laws of Power"</a>, Robert Greene.</p>
            <hr />
            <div className={footer_styles.footer_end}>
                <div className={footer_styles.share_box}>
                  <p>Share this website</p>
                  <br />
                  <div className={footer_styles.icon_box}>
                    &nbsp;
                    <a href={linkedin_share_url} target='_blank'><i className="big linkedin icon"></i></a><span>&nbsp;</span>
                    <a href={telegram_share_url} target='_blank'><i className="big telegram icon"></i></a><span>&nbsp;</span>
                    <a href={twitter_share_url} target='_blank'><i className="big twitter icon"></i></a><span>&nbsp;</span>
                    <a href={facebook_share_url} target='_blank'><i className="big facebook icon"></i></a>
                  </div>
                </div>
                <div className={footer_styles.contact_box}>
                  <p>Contact me</p>
                  <br />
                  <div className={footer_styles.icon_box}>
                    &nbsp;
                    <a href={github_url} target='_blank'><i className="big github icon"></i></a><span>&nbsp;</span>
                    <a href={telegram_url} target='_blank'><i className="big telegram icon"></i></a><span>&nbsp;</span>
                    <a href={linkedin_url} target='_blank'><i className="big linkedin icon"></i></a><span>&nbsp;</span>
                    <a href={gmail_url} target='_blank'><i className="big envelope icon"></i></a>
                  </div>
                </div>
            </div>
          </div>
        </footer>
      </>
  )
}