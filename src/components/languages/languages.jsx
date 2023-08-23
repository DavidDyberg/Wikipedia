import { languages } from "../../languages"
import Language from "../language/langauge"
import './index.css'
import logo from '../../images/Wikipedia-logo.png'
import { Image } from "../img/image"
import { useState } from "react"

export default function Languages() {
    let top = 0;

    const [language, setLanguage] = useState();

    return (
        <div className="languages-component">
            {languages.map((language, index) => {
                if (index >= 2) {
                    top = (Math.floor((index - 2) / 2) + 1) * 20;
                }
                return (
                    <Language 
                        key={language.id} 
                        name={language.name} 
                        articles={language.articles} 
                        text={language.articleText}
                        top={top} 
                        setLanguage={setLanguage}
                        language={language} 
                    />
                )
            })}
            <Image className='wikipedia-logo' src={logo} width={200} height={183} alt="logo" />
        </div>
    )
}