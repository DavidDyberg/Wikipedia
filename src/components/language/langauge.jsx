import './index.css'

export default function Language({ name, articles, text, top }) {

    return (
        <>
            <div className='component' style={{top: top + '%'}}>
                <a>
                    <strong>{name}</strong>
                    <small>
                        <p>{articles}</p>
                        <span>+ {text}</span>
                    </small>
                </a>
            </div>
        </>
    )
}