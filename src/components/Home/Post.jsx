import React from "react";

const Post = () => {
  return (
    <div className="post-container">
      <div className="post-header">
        <div className="post-image-name-time">
          <img src="/images/user128.png" alt="" />
          <div className="post-name-time">
            <strong>Bharat Bhushan Rai</strong>
            <p>2 Days ago</p>
          </div>
        </div>
        <div className="post-extra-options">
            <div style={{'padding':'10px'}}>

                <i class="fa-solid fa-trash"></i>
            </div>
            <div style={{'padding':'10px'}}>

                <i class="fa-solid fa-share-nodes"></i>
            </div>
          {/* <i class="fa-solid fa-ellipsis-vertical"></i> */}
        </div>
      </div>

      <div className="post-body">
        <div className="post-body-description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            reprehenderit iste nihil consequuntur et saepe delectus nam cum
            eveniet a! Unde impedit voluptate eius optio accusamus magnam
            ratione fugit earum, facere fuga veritatis quis nostrum fugiat
            necessitatibus sed. Deserunt rerum vero facere nisi voluptatum totam
            neque tempora repellat quaerat ex?
          </p>
        </div>
        <div className="post-body-image">
          <img src="https://fakeimg.pl/250x100/ff0000/" alt="" />
        </div>
        <PostFooter/>
      </div>
    </div>
  );
};
export default Post;
const PostFooter = () => {
  return (
    <div className="post-footer">
      <div className="post-footer-activity">
        <div className="post-footer-acitivity-like">
            <div className="post-activity-icon">
                <i class="fa-solid fa-heart"></i>
            </div>
            5 Likes
        </div>
        <div className="post-footer-activity-comment">
            <div className="post-activity-icon">

                <i class="fa-solid fa-comment-dots"></i>
            </div>
          8 Comments
        </div>
      </div>
    <div className="post-comment-post">
        <img src={process.env.PUBLIC_URL+"/images/user128.png"} alt="" />
        <input type="text" name="" id="" />
        <button>Post</button>
    </div>
    </div>
  );
};
