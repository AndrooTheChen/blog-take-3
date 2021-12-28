import "./header.css"
import homepage from "../assets/planets.jpg"

export default function header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImg" src={homepage} alt=""/>
        </div>
    )
}
