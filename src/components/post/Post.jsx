import megumi_beach from "../../assets/megumi-beach.jpeg"
import './post.css'

export default function Post() {
    return (
        <div className="post">
            <img className="postImg" src={megumi_beach} alt ="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                    Lorem Title
                </span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat autem maiores distinctio amet error explicabo fuga adipisci, ex dolores eligendi doloremque laborum, quo omnis velit vitae itaque reiciendis ducimus harum?                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat autem maiores distinctio amet error explicabo fuga adipisci, ex dolores eligendi doloremque laborum, quo omnis velit vitae itaque reiciendis ducimus harum?

            </p>
        </div>
    )
}
