import React,{Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { HAPPINESS } from '../shared/happiness';


class Canvascompo extends Component {
    constructor(props) {
        super(props)
        console.log("faces in constructor is ", this.props.faces);
        console.log("original image in constructor is ", this.props.originalimage);

        this.myRef = React.createRef();
        this.pref = React.createRef();
        this.secondmyRef = React.createRef();
        this.state = {
            happy: HAPPINESS,
            leftsidestate: {
                //dog
                imgstring: '',
                leftsidecaption: ''
            },
            rightsidestate: {
                //human
                imgstring: '',
            },
            dogpic: null,
            newimage: null

        }
        this.updateCanvas = this.updateCanvas.bind(this);
        this.updateCanvas2 = this.updateCanvas2.bind(this);
        // this.convertfirstcanvastoimage = this.convertfirstcanvastoimage.bind(this);
        // this.convertsecondcanvastoimage = this.convertsecondcanvastoimage.bind(this);
    }

    componentDidUpdate(props) {
        //this method will be called after state has changed
        console.log("original image is ", this.props.originalimage);
        console.log("faces is ", this.props.faces);
        console.log("newimage is ", this.state.newimage);

    }

    componentDidMount() {
        const anger = ["When someone asks you whats wrong but nothings wrong, this is just how you’re face looks", "That face you make when you drop your plate", "When they say you’ll get candy and they give you a mint", "My face when I have the same teacher from last year", "When I can't find anything good on Netflix"];
        const surprised = ["When I get a better grade than expected", "When your coffee slips out of your hands and bounces all the way down the stairs", "When you’re at the store and you see someone paying for movies", "When my cat tells me he lost 2 pounds", "When i see my friend at the store"];
        const disgust = ["When someone shows me a beehive", "When he first sees you without your makeup","When you get facebook recommended to be friend’s with you girlfriend's ex", "When you see someone leave bathroom without washing hands"];
        const sadness = ["When you put too much salt on", "When your kids grow up to be ugly", "When your dog hates you"];
        const happiness = ["When you get a good grade on your homework", "When you win the chess game", "When your mom gives you birthday money","My face when I eat icecream"];
        const fear = ["When you find out that epstein didn’t kill himself", "When you haven't done your assignment but its due in 5 mins", "When you wake up late for an interview"];
        const neutral = ["When you let out a fart and you’re trying to have a neutral face", "That was so funny I laughed", "That moment when you make eye contact with another co-worker when walking down the hall", 'When someone sends you a funny text and you reply “lol” but really you just look like this','When friends start to make you mad but you gotta keep it together'];
        if(this.props.faces.faceAttributes.emotion.neutral >= .5) {
            this.pref.current.innerHTML = neutral[Math.floor(Math.random()*neutral.length)]
        }
        if(this.props.faces.faceAttributes.emotion.anger >= .5) {
            this.pref.current.innerHTML = anger[Math.floor(Math.random()*anger.length)]
        }
        if(this.props.faces.faceAttributes.emotion.surprise >= .5) {
            this.pref.current.innerHTML = surprised[Math.floor(Math.random()*surprised.length)]
        }
        if(this.props.faces.faceAttributes.emotion.disgust >= .5) {
            this.pref.current.innerHTML = disgust[Math.floor(Math.random()*disgust.length)]
        }
        if(this.props.faces.faceAttributes.emotion.sadness >= .5) {
            this.pref.current.innerHTML = sadness[Math.floor(Math.random()*sadness.length)]
        }
        if(this.props.faces.faceAttributes.emotion.happiness >= .5) {
            this.pref.current.innerHTML = happiness[Math.floor(Math.random()*happiness.length)]
        }
        if(this.props.faces.faceAttributes.emotion.fear >= .5) {
            this.pref.current.innerHTML = fear[Math.floor(Math.random()*fear.length)]
        }
        this.setState({newimage: this.props.originalimage})
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
            this.setState({dogpic: ha.image});
            console.log("ha is", ha.image); 
        }
    }

    updateCanvas2() {
        //getContext allows drawing features, 
        const x = this.secondmyRef.current.getContext('2d');
        let imageObj1 = new Image();
        imageObj1.src = this.props.originalimage;
        console.log("img obj is ", imageObj1.src )
        const that = this;
        imageObj1.onload = function() {
            x.drawImage(imageObj1, that.props.faces.faceRectangle.left, that.props.faces.faceRectangle.top,
                that.props.faces.faceRectangle.width, that.props.faces.faceRectangle.height,0,0,that.props.faces.faceRectangle.width,
                that.props.faces.faceRectangle.height);
        }
    }

    // convertfirstcanvastoimage() {
    //     const canvas  = this.myRef.current;
    //     let image = new Image();
    //     image.src = canvas.toDataURL("image/png");
    //     return image;
    // }

    convertsecondcanvastoimage() {
        const canvas = this.secondmyRef.current;
        let image = new Image();
        image.src = canvas.toDataURL("image/png");
        return image;
    }

    // leftsidehandlesubmit() {
    //     const canvas = this.props.originalimage;
    //     const imgUrl = canvas.toDataURL();
    //     const trimmedURl = imgUrl.split(",")[1];
    //     const leftcaption = this.pref.current.innerHTML;
    //     //console.log(leftcaption);
    //     //console.log(trimmedURl);
    //     let leftsidestate = this.state.leftsidestate;
    //     leftsidestate.imgstring = trimmedURl;
    //     leftsidestate.leftsidecaption = leftcaption;
    //     this.setState({ leftsidestate: leftsidestate
    //     });
    //     const data = this.state.leftsidestate;
    //     console.log(data);
    //     fetch( 'http://localhost:9000/create', {
    //         method: "POST",
    //         headers: {
    //             'Content-type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     })
    //     .then((response) => response.json())
    //     .then((result) => {
    //         console.log(result)
    //     })

    // }

    // rightsidehandlesubmit() {
    //     const canvas = this.props.originalimage;
    //     const imgUrl = canvas.toDataURL();
    //     const trimmedURl = imgUrl.split(",")[1];
    //     let rightsidestate = this.state.rightsidestate;
    //     rightsidestate.imgstring = trimmedURl;

    //     this.setState({ rightsidestate: rightsidestate

    //     });
    //     console.log(rightsidestate);
    //     const proxyurl = "https://cors-anywhere.herokuapp.com/";
    //     const serverUrl = 'http://localhost:8000/board2';
    //     fetch( 'http://localhost:8000/board2', {
    //         method: "POST",
    //         headers: {
    //             'Content-type': 'application/json'
    //         },
    //         body: JSON.stringify(rightsidestate)
    //     })
    //         .then((response) => response.json())
    //         .then((result) => {
    //             console.log(result)
    //         })
    // }

    render() {
        return (
            <div className="canvasWrappingDiv">
                <div className="canvasWrappingDivLeft">
                    <p ref={this.pref} className="leftsidep">No Caption here</p>
                    <img src={this.state.dogpic} alt={this.state.dogpic} className = "BookPic"/>
                    
                    {/* <form className="tagform" onSubmit={this.leftsidehandlesubmit}>
                        <br></br>
                        <br></br>
                        <input type="submit" name="leftsidetags" className="leftsidesubmit" value="Post to MemeBoard"></input>
                    </form> */}
                </div>

                <div className="vertical"></div>
                    <div className="RightSideDiv">
                    <canvas className="canvaspics" id="canvas2" ref={this.secondmyRef}></canvas>
                    <form className="canvasform"  onSubmit={this.rightsidehandlesubmit}>
                        Create your own caption: <br></br>
                        <input type="text" name="createdcaptionbox" onChange={this.rightsideCAPhandlechange}></input>
                        <br></br>
                        Add tags:
                        <br></br>
                        <input type="text" name="rightsidetagbox" onChange={this.rightsideTAGhandlechange}></input>
                        <br></br>
                        <br></br>
                        <input type="submit" className="submitButton" name="postbutton" value="Post to MemeBoard"></input>
                    </form>
                    </div>
 
            </div>
        )
    }

}

export default Canvascompo;