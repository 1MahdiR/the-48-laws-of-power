
import Title from './title'

import styles from '../styles/Main.module.css';
import Link from 'next/link';

export default function Post(props) {

    let title_footer = false;
    if (props.next_link || props.previous_link) {
        title_footer = true;
    }

    return (
        <>
            <Title h1={props.main_title} h2={props.sub_title} ljust={false} >
                <div className={styles.title_footer}>
                    {title_footer ? 
                        <>
                        <hr />
                        {props.previous_link ?
                            <Link href={props.previous_link}><i className="large angle double left icon"></i></Link>
                        :
                        null}
                        <span>&nbsp;</span>
                        {props.next_link ?
                            <Link href={props.next_link}><i className={"large angle double right icon " + styles.float_right}></i></Link>
                        :
                        null}
                        <hr />
                        </>
                    : 
                    <hr />}
                </div>
            </Title>
            {props.children}
        </>
    )
}