import React from "react";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { useState } from "react";
import { toast } from "react-toastify";
import { baseURL } from "../../api";

const CreatePostModal = ({ CreateModal, setCreateModal }) => {
  const [formdata, setFormdata] = useState({
    image: "",
    link: "",
    description: "",
  });

  const imageUploadHandler=async(e)=>{
    const file=e.target.files[0];
    let encoded="";
    var reader = new FileReader();  
    reader.onloadend = async function() {  
        encoded = reader.result;  
        await formdata({...formdata,image:encoded});
    }  
    reader.readAsDataURL(file);
  }


  const postuploader = async (e) => {
    e.preventDefault();

    if (!formdata.file && formdata.link === "") {
      toast.info("Upload file or feed a link at least");
    } else if (formdata.description === "") {
      toast.info("Description is must");
    } else {
    //   console.log(formdata);
     
      fetch(baseURL + "/upload/post", {
        method: "POST",
        headers: {
          "Content-Type":"application/json",
          Authorization: `Bearer ${localStorage.getItem("JWTtoken")}`,
        },
        body:JSON.stringify(formdata)
      })
        .then((res) => res.json())
        .then(
          (result) => {
            if(result.success===true){
              toast.info('Posted Successfully');
              setTimeout(()=>{window.location.reload()},2000);
              
            }
            else{

            }
            console.log(result);
            // console.log(result.status);
          },
          (error) => {
            window.localStorage.clear();
            window.location.reload();
            // console.log(error);
          }
        );
    }
  };
  return (
    <Dialog open={CreateModal}>
      <DialogTitle>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <strong>Create Your Post</strong>
          <button
            style={{
              padding: "0",
              minWidth: "0",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
            onClick={async () => {
              await setCreateModal(false);
            }}
          >
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </DialogTitle>
      <DialogContent>
        <div className="createModal-Form">
          <input
            type="file"
            accept="image/jpeg, image/png"
            onChange={(e) => {
              imageUploadHandler(e);
            }}
          />
          <input
            type="text"
            placeholder="Enter Your link "
            onChange={(e) => {
              setFormdata({ ...formdata, link: e.target.value });
            }}
          />
          <input
            type="text"
            placeholder="Enter Your Problem Description *"
            onChange={(e) => {
              setFormdata({ ...formdata, description: e.target.value });
            }}
          />
          <button
            onClick={(e) => {
              postuploader(e);
            }}
          >
            Submit
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default CreatePostModal;
