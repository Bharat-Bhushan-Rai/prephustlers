const User=()=>{
    return(
        <div className="user-content-container">
            <LeftSide/>
        </div>
    )
}
export default User;

const LeftSide=()=>{

    return(
        <div className="user-profile">
                <div className="user-profile-image">

                    <img src="/images/luser128.png" alt="" />
                    <div className="add-dp">
                        <input type="file" name="" id="file" accept="image/*" />
                        <label htmlFor="file">
                            <i class="fa-solid fa-camera "></i>
                        </label>
                    </div>
                </div>
                <div className="user-profile-detail">
                    <p>Bharat Bhushan Rai</p>
                    <p>Post 12</p>
                    <p>Total Likes 15</p>
                </div>
        </div>
    )
}