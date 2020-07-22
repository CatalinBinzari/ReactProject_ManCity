import React, { Component } from "react";
import { firebase } from "../../firebase";
import FileUploader from "react-firebase-file-uploader";
import CircularProgress from "@material-ui/core/CircularProgress";
import { firebaseLooper } from "./misc";
class Fileuploader extends Component {
  state = {
    name: "",
    isUploading: false,
    fileURL: "",
  };
  handleUploadStart = () => {
    //when we start uploading, we change the uploading to true
    this.setState({ isUploading: true });
  };

  handleUploadError = () => {
    this.setState({
      isUploading: false,
    });
  };
  handleUploadSuccess = (filename) => {
    console.log(filename);
    //upload picture to storageRef
    this.setState({
      name: filename,
      isUploading: false,
    });

    firebase
      .storage()
      .ref(this.props.dir)
      .child(filename)
      .getDownloadURL()
      .then((url) => {
        //store that url inside state.fileURL
        console.log(url);
        this.setState({ fileURL: url });
      });

    this.props.filename(filename);
  };

  static getDerivedStateFromProps(props, state) {
    if (props.defaultImg) {
      //check is we have default images
      //if we have, we start with a different state
      return (state = {
        //it replaces the state above with this one
        name: props.defaultImgName,
        fileURL: props.defaultImg,
      });
    }
    return null; //always return smth
  }

  uploadAgain = () => {
    this.setState({ name: "", isUploading: false, fileURL: "" });
    this.props.resetImage();
  };

  render() {
    return (
      <div>
        {!this.state.fileURL ? (
          <div>
            <div className="label_inputs">{this.props.tag}</div>
            <FileUploader
              accept="image/*"
              name="image"
              randomizeFilename //random file name
              storageRef={firebase.storage().ref(this.props.dir)}
              //and next 3 callbacks
              onUploadStart={this.handleUploadStart}
              onUploadError={this.handleUploadError}
              onUploadSuccess={this.handleUploadSuccess}
            />
          </div>
        ) : null}

        {this.state.isUploading ? (
          <div
            className="progress"
            style={{ textAlign: "center", margin: "30px 0" }}
          >
            <CircularProgress style={{ color: "#98c6e9" }} thickness={7} />
          </div>
        ) : null}
        {this.state.fileURL ? (
          <div className="image_upload_container">
            <img
              style={{
                width: "100%",
              }}
              src={this.state.fileURL}
              alt={this.state.name}
            />
            <div className="remove" onClick={() => this.uploadAgain()}>
              Remove
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Fileuploader;
