import "./index.css"
import Logo1 from "../../images/Wikipedia-logo-black.png"
import Logo2 from "../../images/Wikipedia-tile-logo.png"
import item1 from "../../images/item-1.png"
import item2 from "../../images/item-2.png"
import item3 from "../../images/item-3.png"
import item4 from "../../images/item-4.png"
import item5 from "../../images/item-5.png"
import item6 from "../../images/item-6.png"
import item7 from "../../images/item-7.png"
import item8 from "../../images/item-8.png"
import item9 from "../../images/item-9.png"
import item10 from "../../images/item-10.png"
import item11 from "../../images/item-11.png"
import item12 from "../../images/item-12.png"
import item13 from "../../images/item-13.png"

export default function FooterTop() {
    return(
        <>
        <hr></hr>
        <div className="footercontainer">
            <div className="footerSidebarContainer">
                <div className="sideBarTop">
                    <img className="logo" src={Logo1} alt="" />
                    <p>Wikipedia drivs av Wikimedia Foundation, 
                        en ideell organisation som också driver en rad andra projekt.
                        Du kan stödja vårt arbete med ett bidrag.
                    </p>
                    </div>

                    <div className="sideBarBottom">
                        <img className="logo" src={Logo2} alt="" />
                        <div>
                        <h3>Ladda ned Wikipedia för Android och iOS</h3>
                        <p>
                            Spara dina favoritartiklar för att läsa dem utan uppkoppling, 
                            synkronisera dina läslistor över enheter och anpassa din läsupplevelse med den officiella 
                            Wikipedia-appen.
                        </p>
                        </div>
                    </div>
            </div>
            <div className="footer-right-container">
                <div className="wrapper">
                    <div className="item">
                        <img className="item-logo" src={item1} alt="" />
                        <div>
                        <h4 className="item-title">Commons</h4>
                        <p className="item-text">Foton och mer för fri användning</p> 
                        </div>
                    </div>
                    
                    <div className="item">
                    <img className="item-logo" src={item2} alt="" />
                        <div>
                        <h4 className="item-title">Wikivoyage</h4>
                        <p className="item-text">Fri reseguide</p> 
                        </div>
                    </div>

                    <div className="item">
                    <img className="item-logo" src={item3} alt="" />
                        <div>
                        <h4 className="item-title">Wiktionary</h4>
                        <p className="item-text">Den fria ordboken</p>
                        </div>
                    </div>

                    <div className="item">
                    <img className="item-logo" src={item4} alt="" />
                        <div>
                        <h4 className="item-title">Wikibooks</h4>
                        <p className="item-text">Fria läroböcker</p>
                        </div>
                    </div>

                    <div className="item">
                    <img className="item-logo-5" src={item5} alt="" />
                        <div>
                        <h4 className="item-title">Wikinews</h4>
                        <p className="item-text">Fri nyhetskälla</p>
                        </div>
                    </div>

                    <div className="item">
                    <img className="item-logo" src={item6} alt="" />
                        <div>
                        <h4 className="item-title">Wikidata</h4>
                        <p className="item-text">Fri kunskapsdatabas</p>
                        </div>
                    </div>

                    <div className="item">
                    <img className="item-logo" src={item7} alt="" />
                        <div>
                        <h4 className="item-title">Wikiversity</h4>
                        <p className="item-text">Fritt kursmaterial</p>
                        </div>
                    </div>

                    <div className="item">
                    <img className="item-logo" src={item8} alt="" />
                        <div>
                        <h4 className="item-title">Wikiquote</h4>
                        <p className="item-text">Fri samling av citat</p>  
                        </div>
                    </div>

                    <div className="item">
                    <img className="item-logo" src={item9} alt="" />
                        <div>
                        <h4 className="item-title">MediaWiki</h4>
                        <p className="item-text">Fri och öppen wikiprogramvara</p>
                        </div>
                    </div>

                    <div className="item">
                    <img className="item-logo" src={item10} alt="" />
                        <div>
                        <h4 className="item-title">Wikisource</h4>
                        <p className="item-text">Fritt bibliotek</p>
                        </div>
                    </div>

                    <div className="item">
                    <img className="item-logo" src={item11} alt="" />
                        <div>
                        <h4 className="item-title">Wikispecies</h4>
                        <p className="item-text">Fri artdatabas</p> 
                        </div>
                    </div>

                    <div className="item">
                    <img className="item-logo" src={item12} alt="" />
                        <div>
                        <h4 className="item-title">Wikifunctions</h4>
                        <p className="item-text">Free function library</p>
                        </div>
                    </div>

                    <div className="item">
                    <img className="item-logo" src={item13} alt="" />
                        <div>
                        <h4 className="item-title">Meta-Wiki</h4>
                        <p className="item-text">Gemenskapskoordinering och dokumentation</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}