import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import firebase from "./Firebase";
import { saveToken, getToken } from "./Common";

class Components extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      files: [],
      
      img_url: "",
      title: "",
      discription: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  state = {
    editorState: EditorState.createEmpty(),
  };

  onEditorStateChange = (editorState) => {
    // console.log(editorState)
    this.setState({
      editorState,
    });
    console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    this.setState({
      discription: draftToHtml(convertToRaw(editorState.getCurrentContent())),
    });
  };

  async saaveToDatabase() {
    const { img_url, discription, title } = this.state;
    var body = {
      
      'title': title,
      'description': discription,
      'image': img_url.replace('=media&token=','secret').replace('images%2F','img'),
    //  'image': img_url
    };
  
    console.log(body)


    const response = await fetch('http://localhost:8000/post_data', {
      method: "POST",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': 'http://localhost:8000'

      },
      body:JSON.stringify(body),
  })
  
  alert('saved')
  console.log(response)
  window.location.reload();





  // .then(response => {
  //     return response.json();
  // })
  //     .then((Response) => {
  //               alert('saved')
  //             window.location.reload();
  //               })
 


//   fetch( 'http://localhost:5000/save_data', {
//     method: "POST",
//     headers: {
//       'Content-Type': 'application/json',
//     },
   
//     body: JSON.stringify(body),
// }).then(response => {
//     return response.json();
// })
//     .then((Response) => {
//         if (Response['success']) {
//             alert('saved')
//             window.location.reload();
//         }
//        // alert('Something went wrong')
//     })



    // var prevdata = await getToken();
    // if (prevdata == null) {
    //   await saveToken([body]);
    //   return;
    // }
    // prevdata.push(body);
    // await saveToken(prevdata);
    // window.location.reload();
  }

  //   componentDidMount(){
  //   alert(JSON.stringify(getToken()))
  // var data = []
  //     saveToken(data)
  //   }
  fileUploadHandler = (files) => {
    console.log(files);
    let bucketName = "images";
    let file = files;
    let storageRef = firebase.storage().ref(`${bucketName}/${file.name}`);
    let uploadTask = storageRef.put(file);
    console.log("done");
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, () => {
      let downloadURL = uploadTask.snapshot.downloadURL;
      this.fileShowHandler(files);
      //console.log(downloadURL)
    });
  };

  fileShowHandler = (files) => {
    let storageRef = firebase.storage().ref();
    let spaceRef = storageRef.child("images/" + files.name);
    storageRef
      .child("images/" + files.name)
      .getDownloadURL()
      .then((url) => {
        console.log(url);
        this.setState({ img_url: url });
        // document.getElementById('new_img').src=url
      });
  };

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name, value);
    this.setState({
      [name]: value,
    });
  };

  
  render() {
    const { editorState } = this.state;
    //console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));

    //
    return (
      <div className="editor">
        <TextField
          required
          onChange={this.handleInputChange}
          margin="dense"
          variant="outlined"
          id="name"
          name="title"
          label="Title"
          fullWidth
        />
      <div style={{height:'300px', overflowY :'scroll'}}>
        <Editor
          editorState={editorState}
          onEditorStateChange={this.onEditorStateChange}
          toolbar={{
            inline: { inDropdown: true },
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: true },
            image: {
              uploadCallback: this.fileUploadHandler,
              //  alt: { present: true, mandatory: true },
            },
          }}
        />
        </div>
        {/* <textarea
          disabled
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        ></textarea> */}
        <div >       
         <Button
          onClick={() => this.saaveToDatabase()}
          variant="contained"
          style={{ marginTop: "10px" }}
        >
          ADD
        </Button>
        </div>

      </div>
    );
  }
}
export default Components;
