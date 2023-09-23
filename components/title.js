import styles from '../styles/Main.module.css';

export default function Title(props) {
    
    return (
        <>
            {props.h1 ? <h1 className={props.ljust ? styles.ljust : null}>{props.h1}</h1> : null}
            {props.h2 ? <h2 className={props.ljust ? styles.ljust : null}>{props.h2}</h2> : null}
            {props.h3 ? <h3 className={props.ljust ? styles.ljust : null}>{props.h3}</h3> : null}
            {props.hr == true ? <hr /> : null}
            <>
                {props.children}
            </>
        </>
    )
}