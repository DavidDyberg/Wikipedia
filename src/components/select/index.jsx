import './index.css'

export default function Select({ language, setLanguage, item }) {

    const handleChange = (e) => {
        e.preventDefault();
        const selectedObject = item.find(obj => obj.countryCode === e.target.value);
        setLanguage(selectedObject);
    }

    return (
        <select className="select-languages" value={language?.countryCode} onChange={handleChange}>
            {item.map((e) => {
                return (
                    <option key={e.countryCode} value={e.countryCode}>{e.name}</option>
                )
            })}
        </select>
    )
}