import React,{Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import axios from 'axios';
import { HAPPINESS } from '../shared/happiness';
var imageToBlob = require( 'image-to-blob');
var DOMURL = window.URL || window.webkitURL || window;



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
            leftsidestate: {
                //dog
                imgstring: ''
            },
            rightsidestate: {
                //human
                imgstring: '',
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
        // const anger = ["When someone asks you whats wrong but nothings wrong, this is just how you’re face looks", "That face you make when you drop your plate", "When they say you’ll get candy and they give you a mint", "My face when I have the same teacher from last year", "When I can't find anything good on Netflix"];
        // const surprised = ["When I get a better grade than expected", "When your coffee slips out of your hands and bounces all the way down the stairs", "When you’re at the store and you see someone paying for movies", "When my cat tells me he lost 2 pounds", "When i see my friend at the store"];
        // const disgust = ["When someone shows me a beehive", "When he first sees you without your makeup","When you get facebook recommended to be friend’s with you girlfriend's ex", "When you see someone leave bathroom without washing hands"];
        // const sadness = ["When you put too much salt on", "When your kids grow up to be ugly", "When your dog hates you"];
        // const happiness = ["When you get a good grade on your homework", "When you win the chess game", "When your mom gives you birthday money","My face when I eat icecream"];
        // const fear = ["When you find out that epstein didn’t kill himself", "When you haven't done your assignment but its due in 5 mins", "When you wake up late for an interview"];
        // const neutral = ["When you let out a fart and you’re trying to have a neutral face", "That was so funny I laughed", "That moment when you make eye contact with another co-worker when walking down the hall", 'When someone sends you a funny text and you reply “lol” but really you just look like this','When friends start to make you mad but you gotta keep it together'];
        // if(this.props.faces.faceAttributes.emotion.neutral >= .5) {
        //     this.pref.current.innerHTML = neutral[Math.floor(Math.random()*neutral.length)]
        // }
        // if(this.props.faces.faceAttributes.emotion.anger >= .5) {
        //     this.pref.current.innerHTML = anger[Math.floor(Math.random()*anger.length)]
        // }
        // if(this.props.faces.faceAttributes.emotion.surprise >= .5) {
        //     this.pref.current.innerHTML = surprised[Math.floor(Math.random()*surprised.length)]
        // }
        // if(this.props.faces.faceAttributes.emotion.disgust >= .5) {
        //     this.pref.current.innerHTML = disgust[Math.floor(Math.random()*disgust.length)]
        // }
        // if(this.props.faces.faceAttributes.emotion.sadness >= .5) {
        //     this.pref.current.innerHTML = sadness[Math.floor(Math.random()*sadness.length)]
        // }
        // if(this.props.faces.faceAttributes.emotion.happiness >= .5) {
        //     this.pref.current.innerHTML = happiness[Math.floor(Math.random()*happiness.length)]
        // }
        // if(this.props.faces.faceAttributes.emotion.fear >= .5) {
        //     this.pref.current.innerHTML = fear[Math.floor(Math.random()*fear.length)]
        // }
        this.updateCanvas();
        this.updateCanvas2();

    }

    updateCanvas() {        
        // if(this.props.faces.faceAttributes.emotion.neutral >= .5) {
        //     this.pref.current.innerHTML = neutral[Math.floor(Math.random()*neutral.length)]
        // }
        // if(this.props.faces.faceAttributes.emotion.anger >= .5) {
        //     this.pref.current.innerHTML = anger[Math.floor(Math.random()*anger.length)]
        // }
        // if(this.props.faces.faceAttributes.emotion.surprise >= .5) {
        //     this.pref.current.innerHTML = surprised[Math.floor(Math.random()*surprised.length)]
        // }
        // if(this.props.faces.faceAttributes.emotion.disgust >= .5) {
        //     this.pref.current.innerHTML = disgust[Math.floor(Math.random()*disgust.length)]
        // }
        // if(this.props.faces.faceAttributes.emotion.sadness >= .5) {
        //     this.pref.current.innerHTML = sadness[Math.floor(Math.random()*sadness.length)]
        // }
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
                canvas.drawImage(imageObj1, 0, 0, 300, 300);
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

        const that = this;

        // fetch(this.state.dogpic) 
        // .then(function(response) {
        //     return response.blob()
        // })
        // .then(function(blob) {
        //     console.log("bruh reached", blob);
        //     that.setState({newdog: blob}, function() {
        //         console.log("new dog blob is", that.state.newdog); // returns blob:http://localhost:3000/2be42315-d2b5-4729-b5b0-99c7a84de5ff
        //     });
        //     console.log("new dog dog blob afterwards is ", that.state.newdog);
        //     // here the image is a blob
        //     return that.state.newdog;
        // })

        // console.log("new dog2 is ", this.state.newdog);

        // function blobToFile(theBlob, fileName){
        //     //A Blob() is almost a File() - it's just missing the two properties below which we will add
        //     theBlob.lastModifiedDate = new Date();
        //     theBlob.name = fileName;
        //     return theBlob;
        // }

        // var myBlob = new Blob();
        // var myFile = blobToFile(this.state.newdog, "my-image.png");

        // console.log("myFile is ", myFile);

        const canvas = this.myRef.current;
        const imgUrl = canvas.toDataURL();
        const trimmedURl = imgUrl.split(",")[1]
        // console.log("trimmed url is", trimmedURl);
        let leftsidestate = this.state.leftsidestate;
        leftsidestate.imgstring = trimmedURl;
        this.setState({ leftsidestate: leftsidestate

        });
        console.log("left side state is ", leftsidestate)


        

        const canvas2 = this.secondmyRef.current;
        const imgUrl2 = canvas2.toDataURL();
        const trimmedURl2 = imgUrl2.split(",")[1]
        // console.log("trimmed url2 is", trimmedURl2);
        let rightsidestate = this.state.rightsidestate;
        rightsidestate.imgstring = trimmedURl2;
        this.setState({ rightsidestate: rightsidestate

        });
        console.log("right side state is ", rightsidestate)
  
        const imgs = {
            leftsidestate,
            rightsidestate
        };

  
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
        console.log("my ref current is", this.myRef.current)
        console.log("second my ref current is", this.secondmyRef.current)

        return (
            <div>
                <div >
                    {/* <p ref={this.pref} className="leftsidep">No Caption here</p> */}
                    
                    {/* <form className="tagform" onSubmit={this.leftsidehandlesubmit}>
                        <br></br>
                        <br></br>
                        <input type="submit" name="leftsidetags" className="leftsidesubmit" value="Post to MemeBoard"></input>
                    </form> */}

                    
                </div>
                

                <div className = "background2">
                


                    <div className = "parent">

                            <div className = "context-box" >
                                <div class="flip-card">
                                    <div class="flip-card-inner">
                                        <div class="flip-card-front">
                                        {/* <img src={this.state.dogpic} alt={this.state.dogpic} className = "BookPic" id = "doge"/> */}
                                        <canvas id="doge" ref={this.myRef} ></canvas>
                                        </div>
                                        <div class="flip-card-back">
                                        <h1>John Doe</h1>
                                        <p>Architect & Engineer</p>
                                        <p>We love that guy</p>
                                        </div>
                                    </div>
                                </div>
                                <form onSubmit={this.handleSubmit} encType='multipart/form-data'>
                                    {/* Add tags:
                                    <input type="text" name="leftsidetagbox" onChange={this.leftsidehandlechange}></input>
                                    <br></br>
                                    <br></br> */}
                                    <div>
                                        <input type="submit" className="submitButton" name="postbutton" value="Post to MemeBoard"></input>
                                    </div>
                                </form>
                            </div>
                        
                            
                            {/* <img src={this.state.dogpic} alt={this.state.dogpic} className = "BookPic" /> */}

                            {/* <div class="circular-sb1">
                            <p ref={this.pref} className="leftsidep">No Caption here</p>
                            <div class="circlee1"></div>
                            <div class="circlee2"></div>
                            </div> */}
                            
                            

                            <div className="RightSideDiv">
                                <div className = "rcorners1">
                                <canvas className="canvaspics" id="canvas2" ref={this.secondmyRef} ></canvas>
                                </div>
                            </div>
                            <form onSubmit={this.handleSubmit} encType='multipart/form-data'>
                            
                            {/* <div>
                                <input type="submit" className="submitButton" name="postbutton" value="Post to MemeBoard"></input>
                            </div> */}
                            </form>
                    </div>
                    


                    
                </div>
                                
            </div>
        )
    }

}

export default Canvascompo;