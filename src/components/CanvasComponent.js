import React,{Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import axios from 'axios';
import { HAPPINESS } from '../shared/happiness';
import { ANGER } from '../shared/anger';
import { NEUTRAL } from '../shared/neutral';
import { SURPRISED } from '../shared/surprised';
import { DISGUST } from '../shared/disgust';
import { SADNESS } from '../shared/sadness';
import { FEAR } from '../shared/fear';

class Canvascompo extends Component {
    constructor(props) {
        super(props)
        // console.log("faces in constructor is ", this.props.faces);
        // console.log("original image in constructor is ", this.props.originalimage);

        this.myRef = React.createRef();
        this.pref = React.createRef();
        this.secondmyRef = React.createRef();
        this.state = {
            isFlipped: false,
            happy: HAPPINESS,
            anger:ANGER,
            neutral:NEUTRAL,
            surprised:SURPRISED,
            disgust: DISGUST,
            sadness:SADNESS,
            fear:FEAR,
            leftsidestate: {
                //dog
                imgstring1: ''
            },
            rightsidestate: {
                //human
                imgstring2: ''
            },
            dogpic: null,
            newdog: null

        }
        this.updateCanvas = this.updateCanvas.bind(this);
        this.updateCanvas2 = this.updateCanvas2.bind(this);
        // this.convertfirstcanvastoimage = this.convertfirstcanvastoimage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    

    componentDidUpdate(props) {
        //this method will be called after state has changed
        // console.log("original image is ", this.props.originalimage);
        // console.log("faces is ", this.props.faces);
        // console.log("dog pic update is ", this.state.dogpic);
        console.log("second ref did update is ", this.secondmyRef.current);
        console.log("new dog2 is ", this.state.newdog);




    }

    componentDidMount() {
        this.updateCanvas();
        this.updateCanvas2();

    }

    updateCanvas() {        
        if(this.props.faces.faceAttributes.emotion.neutral >= .5) {
            const ha = this.state.neutral[Math.floor(Math.random()*this.state.neutral.length)]
            this.setState({dogpic: ha.image}, function() {
                console.log("dogpic set state is", this.state.dogpic); 
            });
            console.log("dog pic set state afterwards is", this.state.dogpic);
            var canvas = this.myRef.current.getContext('2d');
            console.log("doge canvas is ", canvas);

            // var context = canvas.getContext('2d');
            // console.log("doge context is ", context);

            let imageObj1 = new Image();
            imageObj1.src = ha.image;
            console.log("img obj doge is ", imageObj1.src )
            const that = this;
            // canvas.canvas.width = window.innerWidth;
            canvas.canvas.height = 300;
            console.log("ha is", ha.image); 
            imageObj1.onload = function() {
                canvas.drawImage(imageObj1, 0, 0, 290, 290);
            }
        }

        if(this.props.faces.faceAttributes.emotion.anger >= .5) {
            const ha = this.state.anger[Math.floor(Math.random()*this.state.anger.length)]
            this.setState({dogpic: ha.image}, function() {
                console.log("dogpic set state is", this.state.dogpic); 
            });
            console.log("dog pic set state afterwards is", this.state.dogpic);
            var canvas = this.myRef.current.getContext('2d');
            console.log("doge canvas is ", canvas);

            // var context = canvas.getContext('2d');
            // console.log("doge context is ", context);

            let imageObj1 = new Image();
            imageObj1.src = ha.image;
            console.log("img obj doge is ", imageObj1.src )
            const that = this;
            // canvas.canvas.width = window.innerWidth;
            canvas.canvas.height = 300;
            console.log("ha is", ha.image); 
            imageObj1.onload = function() {
                canvas.drawImage(imageObj1, 0, 0, 290, 290);
            }        
        }

        if(this.props.faces.faceAttributes.emotion.surprised >= .5) {
            const ha = this.state.surprised[Math.floor(Math.random()*this.state.surprised.length)]
            this.setState({dogpic: ha.image}, function() {
                console.log("dogpic set state is", this.state.dogpic); 
            });
            console.log("dog pic set state afterwards is", this.state.dogpic);
            var canvas = this.myRef.current.getContext('2d');
            console.log("doge canvas is ", canvas);

            // var context = canvas.getContext('2d');
            // console.log("doge context is ", context);

            let imageObj1 = new Image();
            imageObj1.src = ha.image;
            console.log("img obj doge is ", imageObj1.src )
            const that = this;
            // canvas.canvas.width = window.innerWidth;
            canvas.canvas.height = 300;
            console.log("ha is", ha.image); 
            imageObj1.onload = function() {
                canvas.drawImage(imageObj1, 0, 0, 290, 290);
            }           
        }

        if(this.props.faces.faceAttributes.emotion.disgust >= .5) {
            const ha = this.state.disgust[Math.floor(Math.random()*this.state.disgust.length)]
            this.setState({dogpic: ha.image}, function() {
                console.log("dogpic set state is", this.state.dogpic); 
            });
            console.log("dog pic set state afterwards is", this.state.dogpic);
            var canvas = this.myRef.current.getContext('2d');
            console.log("doge canvas is ", canvas);

            // var context = canvas.getContext('2d');
            // console.log("doge context is ", context);

            let imageObj1 = new Image();
            imageObj1.src = ha.image;
            console.log("img obj doge is ", imageObj1.src )
            const that = this;
            // canvas.canvas.width = window.innerWidth;
            canvas.canvas.height = 300;
            console.log("ha is", ha.image); 
            imageObj1.onload = function() {
                canvas.drawImage(imageObj1, 0, 0, 290, 290);
            }           
        }

        if(this.props.faces.faceAttributes.emotion.sadness >= .5) {
            const ha = this.state.sadness[Math.floor(Math.random()*this.state.sadness.length)]
            this.setState({dogpic: ha.image}, function() {
                console.log("dogpic set state is", this.state.dogpic); 
            });
            console.log("dog pic set state afterwards is", this.state.dogpic);
            var canvas = this.myRef.current.getContext('2d');
            console.log("doge canvas is ", canvas);

            // var context = canvas.getContext('2d');
            // console.log("doge context is ", context);

            let imageObj1 = new Image();
            imageObj1.src = ha.image;
            console.log("img obj doge is ", imageObj1.src )
            const that = this;
            // canvas.canvas.width = window.innerWidth;
            canvas.canvas.height = 300;
            console.log("ha is", ha.image); 
            imageObj1.onload = function() {
                canvas.drawImage(imageObj1, 0, 0, 290, 290);
            }           
        }
        if(this.props.faces.faceAttributes.emotion.happiness >= .5) {
            // console.log("mood is ", this.pref.current);  
            // console.log("happy dogs is", this.state.happy);
            const ha = this.state.happy[Math.floor(Math.random()*this.state.happy.length)]
            this.setState({dogpic: ha.image}, function() {
                console.log("dogpic set state is", this.state.dogpic); // returns blob:http://localhost:3000/2be42315-d2b5-4729-b5b0-99c7a84de5ff
            });
            console.log("dog pic set state afterwards is", this.state.dogpic);
            var canvas = this.myRef.current.getContext('2d');
            console.log("doge canvas is ", canvas);

            // var context = canvas.getContext('2d');
            // console.log("doge context is ", context);

            let imageObj1 = new Image();
            imageObj1.src = ha.image;
            console.log("img obj doge is ", imageObj1.src )
            const that = this;
            // canvas.canvas.width = window.innerWidth;
            canvas.canvas.height = 300;
            console.log("ha is", ha.image); 
            imageObj1.onload = function() {
                canvas.drawImage(imageObj1, 0, 0, 290, 290);
            }
        }
        if(this.props.faces.faceAttributes.emotion.fear >= .5) {
            // console.log("mood is ", this.pref.current);  
            // console.log("happy dogs is", this.state.happy);
            const ha = this.state.fear[Math.floor(Math.random()*this.state.fear.length)]
            this.setState({dogpic: ha.image}, function() {
                console.log("dogpic set state is", this.state.dogpic); // returns blob:http://localhost:3000/2be42315-d2b5-4729-b5b0-99c7a84de5ff
            });
            console.log("dog pic set state afterwards is", this.state.dogpic);
            var canvas = this.myRef.current.getContext('2d');
            console.log("doge canvas is ", canvas);

            // var context = canvas.getContext('2d');
            // console.log("doge context is ", context);

            let imageObj1 = new Image();
            imageObj1.src = ha.image;
            console.log("img obj doge is ", imageObj1.src )
            const that = this;
            // canvas.canvas.width = window.innerWidth;
            canvas.canvas.height = 300;
            console.log("ha is", ha.image); 
            imageObj1.onload = function() {
                canvas.drawImage(imageObj1, 0, 0, 290, 290);
            }
        }
    }

    updateCanvas2() {
        //getContext allows drawing features, 
        const x = this.secondmyRef.current.getContext('2d');
        console.log("Update canvas second ref is ", this.secondmyRef.current);
        let imageObj1 = new Image();
        imageObj1.src = this.props.originalimage;
        console.log("img obj is ", imageObj1.src )
        const that = this;
        x.canvas.width = window.innerWidth;
        x.canvas.height = window.innerHeight;
        imageObj1.onload = function() {
            x.drawImage(imageObj1, that.props.faces.faceRectangle.left, that.props.faces.faceRectangle.top,
            that.props.faces.faceRectangle.width, that.props.faces.faceRectangle.height,0,0, 290, 290);
        }
    }


    // handlesubmit() {
    //     const canvas = this.myRef.current;
    //     const imgUrl = canvas.toDataURL();
    //     const trimmedURl = imgUrl.split(",")[1];

    //     const canvas2 = this.secondmyRef.current;
    //     const imgUrl2 = canvas2.toDataURL();
    //     const trimmedURl2 = imgUrl2.split(",")[1];

    //     //console.log(leftcaption);
    //     //console.log(trimmedURl);

    //     let leftsidestate = this.state.leftsidestate;
    //     leftsidestate.imgstring = trimmedURl;

    //     let rightsidestate = this.state.rightsidestate;
    //     rightsidestate.imgstring = trimmedURl2;

    //     this.setState({ leftsidestate: leftsidestate
    //     });
    //     const data = this.state.leftsidestate;
    //     console.log(data);

    //     this.setState({ rightsidestate: rightsidestate
    //     });
    //     const data2= this.state.rightsidestate;
    //     console.log(data2);

    //     const serverUrl = 'http://localhost:9000/create';
    //     fetch( 'http://localhost:9000/create', {
    //         method: "POST",
    //         headers: {
    //             'Content-type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     })
    //         .then((response) => response.json())
    //         .then((result) => {
    //             console.log(result)
    //         })
    //      /* request.post(proxyurl + serverUrl).send(data).set('Accept', 'application/json').end((err, res) => {
    //         if (err || !res.ok) {
    //             console.log('Oh no! error');
    //         } else {
    //             console.log('Success');
    //         }
    //     }); */
    // }

 



    handleSubmit(event) {
        event.preventDefault()

        const canvas = this.myRef.current;
        const imgUrl = canvas.toDataURL();
        const trimmedURl = imgUrl.split(';base64,')[1];
        // console.log("trimmed url is", trimmedURl);
        let leftsidestate = this.state.leftsidestate;
        leftsidestate = trimmedURl;
        this.setState({ leftsidestate: leftsidestate

        });
        console.log("left side state is ", this.state.leftsidestate)  

        const canvas2 = this.secondmyRef.current;
        const imgUrl2 = canvas2.toDataURL();
        const trimmedURl2 = imgUrl2.split(",")[1]
        // console.log("trimmed url2 is", trimmedURl2);
        let rightsidestate = this.state.rightsidestate;
        rightsidestate = trimmedURl2;
        this.setState({ rightsidestate: rightsidestate

        });
        console.log("right side state is ", this.state.rightsidestate)
  
        const imgs = {
            leftsidestate,
            rightsidestate
        };



  
      // const userObject = {
      //     name: this.state.name,
      //     message: this.state.message
      // };
      const data = this.state.leftsidestate;

    //   fetch( 'http://localhost:9000/create', {
    //     method: "POST",
    //     headers: {
    //         'Content-type': 'application/json'
    //     },
    //     body: JSON.stringify(imgs)
    //     })
    //     .then((response) => response.json())
    //     .then((result) => {
    //         console.log(result)
    //     })
  
       axios
        .post('http://localhost:9000/create', imgs)
        .then(() => console.log('Photo created'))
        .catch(err => {
          console.error(err);
        });
       
    }



    render() {
        console.log("my ref current is", this.myRef.current)
        console.log("second my ref current is", this.secondmyRef.current)

        return (
            <div>

                <div className = "background2">
                


                    <div className = "parent">

                        <div class = "canvaspics">
                            <div className = "dogcanvas">
                                <canvas id="doge" ref={this.myRef} ></canvas>
                            </div>
                        
                            <div className="canvashuman">
                                <canvas id="canvas2" ref={this.secondmyRef} ></canvas>
                            </div>
                        </div>
                            

                        <form onSubmit={this.handleSubmit} encType='multipart/form-data'>
                            <div className = "submit">
                                <input type="submit" className="submit" name="postbutton" value="Post to Doge Board"></input>
                            </div>
                        </form>
                            
                    </div>
                    


                    
                </div>
                                
            </div>
        )
    }

}

export default Canvascompo;