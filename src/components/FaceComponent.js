
import React,{Component} from 'react';
import {Link } from 'react-router-dom';
import Canvascompo from "./CanvasComponent"
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { PICS } from '../shared/dogpics';


 
class Face extends Component {

    constructor(props) {
        super(props)
        this.state = {
            facesArray: [],
            selectedFile: null,
            img: null,
            showdiv: true,
            pics: PICS,
            dogpic:null,
            dogpicdes:null

        }
        this.handleChange = this.handleChange.bind(this);
        this.stateChangeCallback = this.stateChangeCallback.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);

    }

    stateChangeCallback() {
        return null;
    }

    

    componentDidUpdate() {
        console.log("selected file in CDU is ", this.state.selectedFile);
        console.log("facesArray is ", this.state.facesArray);
        console.log("original image")

    }

    componentDidMount() {
        this.dogePic();
    }

    dogePic() {
        const dogpic = this.state.pics[3];
        console.log("dog pic is", dogpic);
        this.setState({dogpic:dogpic.image});
        this.setState({dogpicdes:dogpic.description}); 
    }

    handleChange(event) {
        this.setState({showdiv: false});
        // console.log("event files are", event.target.files[0]);
        let url1 = URL.createObjectURL(event.target.files[0]);
        this.setState({selectedFile: url1}, function() {
            console.log("call back w/force update", this.state.selectedFile);
            this.forceUpdate();
            
        });

        this.setState({selectedFile: url1}, function() {
            console.log("normal callback", this.state.selectedFile);
        });
        console.log("selected File after callback is", this.state.selectedFile)
        

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
            // console.log("contents is ", contents)
            fetch("https://westus.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=false&returnFaceAttributes=emotion&recognitionModel=recognition_01&returnRecognitionModel=false&detectionModel=detection_01"
                , {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/octet-stream',
                        'Ocp-Apim-Subscription-Key': '6efbc2725228490986bc5e0703d46c62'
                    },
                    body: makeblob(contents)
                }).then((response) => response.json()).then(success => {
                    that.setState({selectedFile: url1});


                console.log("facesArray is going to be")
                that.setState({facesArray: success});
                console.log("facesArray is", that.state.facesArray);

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

    // handleSubmit(event) {
    //     event.preventDefault()
    //     console.log('starting to submit profile');
        
    //     const { selectedFile } = this.state 

    //     console.log("posts array is ", this.state.facesArray);
    //     console.log("selectedFile is ", selectedFile);
  
  
  
    //   const imgs = {
    //       selectedFile
    //     };

    //   console.log("selectedFile after is ", selectedFile);
  
    //   // const userObject = {
    //   //     name: this.state.name,
    //   //     message: this.state.message
    //   // };
  
    //   axios
    //     .post('http://localhost:9000/create', imgs)
    //     .then(() => console.log('Photo created'))
    //     .catch(err => {
    //       console.error(err);
    //     });
       
    // }
    
    
    render() {

        console.log("facesArray in render is", this.state.facesArray);




        let newlist = this.state.facesArray.map((face, i) => {
            
            return <Canvascompo faces={face} originalimage={this.state.selectedFile} ivalue={i} key = {i}/>

        });
    
      return (
        <div className = "home2">
            <div>{ this.state.showdiv 
            ? 
       
            <div className = "center">
                <form onSubmit={this.handleSubmit} encType='multipart/form-data'>
                    <label>
                    <input type="file" class = "myLabel" id="fileinput" accept=".png, .jpg" onChange={this.handleChange}/> 
                    </label>
                </form> 

                <div className = "facedog">
                        {/* <RenderCard item={props.pic1} /> */}
                        <img src = {this.state.dogpic}></img>
                        <div class="circular-sb">
                        {this.state.dogpicdes}
                        <div class="circle1"></div>
                        <div class="circle2"></div>
                        </div>
                    </div>
                
                
            </div>
            : null
            }
            </div>
                
            {newlist}
        
            
        </div>
      );
    }
}
 
export default Face;