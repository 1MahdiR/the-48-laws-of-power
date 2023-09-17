
import Title from './title'

export default function Post(props) {

    return (
        <>
            <Title h1={props.main_title} h2={props.sub_title} hr={true} ljust={false} />
            {props.children}
        </>
    )
}