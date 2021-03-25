import React, { Component} from "react";
import firebase from "./firebase/index";

class Uploadimage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: "",
    };
  }
  fileSelectedHandler = (files) => {
    this.setState({
      files: files,
    });
  };
  fileUploadHandler = () => {
    let bucketName = "images";
    let file = this.state.files[0];
    let storageRef = firebase.storage().ref(`${bucketName}/${file.name}`);
    let uploadTask = storageRef.put(file);
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, () => {
      let downloadURL = uploadTask.snapshot.downloadURL;
    });
  };

  fileShowHandler = () => {
    let storageRef = firebase.storage().ref();
    let spaceRef = storageRef.child("images/" + this.state.files[0].name);
    storageRef
      .child("images/" + this.state.files[0].name)
      .getDownloadURL()
      .then((url) => {
        console.log(url);
        document.getElementById("new_img").src = url;
      });
  };

  render() {
    return (
      <>
        <input
          type="file"
          onChange={(e) => {
            this.fileSelectedHandler(e.target.files);
          }}
        />
        <button onClick={this.fileUploadHandler}>Upload</button>
        <button onClick={this.fileShowHandler}>show</button>
        <img id="new_img" alt="img" width="30%" height="30%" />
      </>
    );
  }
}
export default Uploadimage;
