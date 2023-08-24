import './index.css'

export default function Language({ name, articles, text, top, item, onChange }) {
   
    return (
        <>
            <div className='component' style={{top: top + '%'}} onClick={() => onChange(item) }>
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