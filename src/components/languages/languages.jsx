import { languages } from "../../languages"
import Language from "../language/langauge"
import './index.css'
import logo from '../../images/Wikipedia-logo.png'
import { Image } from "../img/image"

export default function Languages({ setLanguage }) {
    let top = 0;

    const handleChange = (item) => {
        setLanguage(item)
    }

    return (
        <div className="languages-component">
            {languages.map((item, index) => {
                if (index >= 2) {
                    top = (Math.floor((index - 2) / 2) + 1) * 20;
                }
                return (
                    <Language 
                        key={item.id} 
                        name={item.name} 
                        articles={item.articles} 
                        text={item.articleText}
                        top={top} 
                        item={item}
                        onChange={handleChange}
                    />
                )
            })}
            <Image className='wikipedia-logo' src={logo} width={200} height={183} alt="logo" />
        </div>
    )
}