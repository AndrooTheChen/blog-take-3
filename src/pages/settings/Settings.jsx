import './settings.css'
import Sidebar from "../../components/sidebar/Sidebar"
import megu_img from '../../assets/MegumiJinno_1.png'

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img src={megu_img} alt="" />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display: "none"}}/>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Megumi" />
                    <label>Email</label>
                    <input type="text" placeholder="megumi@eromanga.com" />
                    <label>Passowrd</label>
                    <input type="password" />
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}
