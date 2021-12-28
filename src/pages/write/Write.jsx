import './write.css'
import megu_img from '../../assets/megu-img.jpeg'

export default function Write() {
    return (
        <div className="write">
            <img className="writeImg" src={megu_img} alt="" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i class="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display: "none"}}/>
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>

                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Tell your story..." type="text" className="writeInput writeText">

                    </textarea>
                    <button className="writeSubmit">Publish</button>
                </div>
            </form>
        </div>
    )
}
