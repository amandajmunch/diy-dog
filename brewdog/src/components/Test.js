import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import Axios from 'axios';
import Image from './Image';

// image uploading brought to you by https://css-tricks.com/image-upload-manipulation-react/
const CLOUDINARY_UPLOAD_PRESET = 'fuxzdsqi';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dh8irzhgb/image/upload';


export default class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadedFile: null,
      uploadedFileCloudinaryUrl: '',
      images: '',
      input: ''
    };
  }

onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
  }

handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });
      }
    });
  }

// rendering all the beers on page load
  componentDidMount(){
    this.getImages();
  }
// axios call to the server to grab all the beers
  getImages(){
    Axios.get('http://www.localhost:8080/api/images')
      .then((response) => {
        this.setState(() => {
          return { images: response }
        })
      })
      .catch(function (error) {
        console.log(error);
      })
  }

// deleting an individual iamge
 deleteImage(image) {
    if(image){
      Axios.delete(`http://www.localhost:8080/api/images/${image.id}`)
        .then((response) => {
          this.getImages();
          })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

// rendering them in key value form
  renderImages(){
    if(this.state.images){
      return this.state.images.data.map((image, index) => {
        return <Image key={index} image={image} deleteImage={this.deleteImage.bind(this)}/>

      });
    }
  };

  handleChange(e) {
    this.setState({input: e.target.value});
  };


// upon clicking save, send this beer to the server
  saveImage(){
    let image = {name: this.state.uploadedFileCloudinaryUrl, content: this.state.input}
    Axios.post("http://localhost:8080/api/images", image)
      .then(response => {
        // this.props.history.push("/gallery");
        window.location.reload();
        console.log("image click");
      })
      .catch(response => alert("Couldn't save image"));
  }

// if the state has a name in beer, return the values

  render() {
    console.log("this is the state of images", this.state.images);
    console.log("this is the image you sent", this.state.uploadedFileCloudinaryUrl);

    return(
    <div className="images">
      <div className="dragImage">
       <div className="FileUpload">
          <Dropzone
            multiple={false}
            accept="image/*"
            onDrop={this.onImageDrop.bind(this)}>
            <p>Drop an image or click to select a file to upload.</p>
          </Dropzone>
      </div>

        <div>
          {this.state.uploadedFileCloudinaryUrl === '' ? null :
          <div className="userPic">
            <img src={this.state.uploadedFileCloudinaryUrl} alt="failed"/>
          </div>}
        </div>
          <div className={this.state.uploadedFileCloudinaryUrl ? "show" : "hide"}>
            <form onSubmit={this.saveImage.bind(this)}>
                <label>
                  Comment:
                <input type="text"
                    value={this.state.input} placeholder="Insert text here"
                    onChange={this.handleChange.bind(this)}/>
                </label>
                <input type="submit" value="Save"/>
            </form>
            </div>
        </div>
        <div className="imageList">
          {this.renderImages()}
        </div>
    </div>
    )
  }

}

// export default Test;
