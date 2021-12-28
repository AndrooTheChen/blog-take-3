import './singlePost.css'
import megu_squad from '../../assets/squad.jpeg'

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src={megu_squad} alt="" className="singlePostImg"/>
                <h1 className="singlePostTitle">
                    Lorem, ipsum dolor sit amet
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Megumi</b></span>
                    <span className="singlePostAuthor">1 hour ago</span>
                </div>
                <p className="singlePostDesc">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur 
                    aspernatur, veniam cupiditate amet dicta, corporis minus, architecto 
                    vitae nesciunt quia ut iste? Quidem qui, ad suscipit vitae aliquid 
                    similique doloremque. Lorem ipsum dolor sit amet consectetur adipisicing 
                    elit. Similique, sint. Animi aliquid maxime, laborum sequi ipsum quia, est 
                    dolores corrupti esse, optio eius. Nihil, illum quos at autem quis omnis!
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam nam 
                    molestias sunt obcaecati sequi. Itaque impedit soluta vel quam fugit facilis. 
                    Sit neque soluta laborum commodi ea nam assumenda ad!
                </p>
            </div>
        </div>
    )
}
