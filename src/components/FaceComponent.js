
import axios from 'axios';
import React,{Component} from 'react';
import {Link } from 'react-router-dom';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';

 
class Face extends Component {

    constructor(props) {
        super(props)
        this.state = {
            facesArray: [],
            selectedFile: null,
            img: null

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    componentDidMount() {

    }

    handleChange(event) {
        let url1 = URL.createObjectURL(event.target.files[0]);
        this.setState({selectedFile: url1});
        const that = this;
        let makeblob = function (dataURL) {
            // converts image to base64 then to Blob
            let BASE64_MARKER = ';base64,';
            if (dataURL.indexOf(BASE64_MARKER) == -1) {
                let parts = dataURL.split(',');
                let contentType = parts[0].split(':')[1];
                let raw = decodeURIComponent(parts[1]);
                return new Blob([raw], {type: contentType});
            }
            let parts = dataURL.split(BASE64_MARKER);
            let contentType = parts[0].split(':')[1];
            let raw = window.atob(parts[1]);
            let rawLength = raw.length;

            let uInt8Array = new Uint8Array(rawLength);

            for (var i = 0; i < rawLength; ++i) {
                uInt8Array[i] = raw.charCodeAt(i);
            }

            return new Blob([uInt8Array], {type: contentType});
        };
        let file = event.target.files[0];
        let reader = new FileReader();
        reader.onload = function (event) {
            let contents = reader.result;
            console.log("contents is ", contents)
            fetch("https://westus.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=false&returnFaceAttributes=emotion&recognitionModel=recognition_01&returnRecognitionModel=false&detectionModel=detection_01"
                , {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/octet-stream',
                        'Ocp-Apim-Subscription-Key': '6efbc2725228490986bc5e0703d46c62'
                    },
                    body: makeblob(contents)
                }).then((response) => response.json()).then(success => {
                that.setState({facesArray: success});
                console.log(that.state.facesArray);
                // console.log(success);
            }).catch(error =>
                console.log("did not work ",error))
        };

        reader.onerror = function (event) {
            console.error("File could not be read! Code " + reader.error.code);
        };

        reader.readAsDataURL(file);
        //converts back to base64
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log('starting to submit profile');
        
        const { selectedFile } = this.state 

        console.log("posts array is ", this.state.facesArray);
        console.log("selectedFile is ", selectedFile);
  
  
  
      const imgs = {
          selectedFile
        };

      console.log("selectedFile after is ", selectedFile);
  
      // const userObject = {
      //     name: this.state.name,
      //     message: this.state.message
      // };
  
      axios
        .post('http://localhost:9000/create', imgs)
        .then(() => console.log('Photo created'))
        .catch(err => {
          console.error(err);
        });
       
    }
    
    
    render() {

        const images = this.state.facesArray.map((face) => {

        });
    
      return (
        <div>
            <div className = "center">
                <form onSubmit={this.handleSubmit} encType='multipart/form-data'>
                    <input type="file" id="fileinput" accept=".png, .jpg" onChange={this.handleChange}/>
                    <div className="form-group">
                            <button className="btn btn-primary" type="submit">Upload</button>
                        </div>
                    <Card className = "BookPic">
                    <CardImg width = "100%" src={this.state.selectedFile} alt={this.state.selectedFile} className = "BookPic"/>
                    <CardImgOverlay>
                    </CardImgOverlay>
                    </Card>  
                </form> 
                             
                {/* <Card className = "BookPic">
                <CardImg width = "100%" src={this.state.selectedFile} alt={this.state.selectedFile} className = "BookPic"/>
                <CardImgOverlay>
                </CardImgOverlay>
                </Card>   */}
                {/* <img src = {this.state.selectedFile}/> */}
            </div>
        </div>
      );
    }
}
 
export default Face;