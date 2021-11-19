import axios from "axios";
import React, { Component } from 'react';

class UploadImage extends Component {

  // API Endpoints
  custom_file_upload_url = 'http://localhost:3333/files';
  token = sessionStorage.getItem('token');


  constructor(props) {
      super(props);
      this.state = {
          arquivo: null,
          image_preview: '',
      }
  }

  // Image Preview Handler
  handleImagePreview = (e) => {
      let image_as_base64 = URL.createObjectURL(e.target.files[0])
      let image_as_files = e.target.files[0];

      this.setState({
          image_preview: image_as_base64,
          arquivo: image_as_files,
      })
  }

  // Image/File Submit Handler
  handleSubmitFile = () => {

      if (this.state.arquivo !== null){

          let formData = new FormData();
          formData.append('arquivo', this.state.arquivo);
          // the image field name should be similar to your api endpoint field name
          // in my case here the field name is customFile

          axios.post(
              this.custom_file_upload_url,
              formData,
              {
                  headers: {
                      "Authorization": `Bearer ${this.token}`,
                      "Content-type": "multipart/form-data",
                  },
              }
          )
          .then(res => {
              console.log(`Success` + res.data);
          })
          .catch(err => {
              console.log(err);
          })
      }
  }


  // render from here
  render() {
      return (
          <div>
              {/* image preview */}
              <img src={this.state.image_preview} alt="image preview"/>

              {/* image input field */}
              <input
                  type="file"
                  name="arquivo"
                  onChange={this.handleImagePreview}
              />
              <label>Upload file</label>
              <input type="submit" onClick={this.handleSubmitFile} value="Submit"/>
          </div>
      );
  }
}

export default UploadImage;
