import { languages } from "../../languages"
import Language from "../language/langauge"
import './index.css'

export default function Languages() {
    let top = 0;

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
                    />
                )
            })}
            <Image src={logo} width={200} height={183} alt="logo" />
        </div>
    )
}