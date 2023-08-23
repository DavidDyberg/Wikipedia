import './index.css'

export default function Language({ name, articles, text, top, setLanguage, language }) {


    return (
        <>
            <div className='component' style={{top: top + '%'}} onClick={() => setLanguage(language)}>
                <a>
                    <strong>{name}</strong>
                    <small>
                        <p>{articles}+</p><span> </span>
                        <p>{text}</p>
                    </small>
                </a>
            </div>
        </>
    )
}