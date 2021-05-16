import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';



function RenderCard({item}) {

    return(
        <div className = "container">
            <div class = "move-down">
                <img src={item.image} alt={item.name}/>
            </div>

            <div class="circular-sb">
            {item.description}
            <div class="circle1"></div>
            <div class="circle2"></div>
            </div>
        </div>
        
    );

}

function AwardPage({dog}){
    
    return(
        <div className = "dogsdown">
            <div className = "homepic">
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img className = "BookPic" src={dog.image} alt={dog.name}/>
                            {/* <img className = "BookPic" src={dog3.image} alt={dog3.name}/> */}
                        </div>
                        <div class="flip-card-back">
                        <h1>{dog.name}</h1>
                        <p> {dog.description} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}


function Home(props) {
    return(
        <div className = "home-backgrounds">
            <div class="background">
                <div className="row align-items-start">
                    <div className="col-12 col-md m-1" >
                        <RenderCard item={props.pic1} />
                        
                        {/* <RenderCard pic2={props.pic2} /> */}
                    </div>
                </div>
            </div>

            <div class = "background-bot" >

                <div className = "dogright">
                <RenderCard item={props.pic2} />

                </div>
                
               
                
                
                
                

                <div className="homepic" >


                    <div>
                        <h1 className = "text1">Best Smile Award</h1>

                        
                        <AwardPage dog={props.dog1} />
                        {/* <AwardPage dog3={props.dog3} /> */}
                    </div>

                    <div className="col-12 col-md-4" >
                        <h1 className = "text1">Gives Best Hugs Award</h1>

                        <AwardPage dog={props.dog2} />
                        {/* <AwardPage dog3={props.dog3} /> */}
                    </div>
                    
                    <div className="col-12 col-md-4" >
                    <h1 className = "text1">Most Protective Award</h1>

                        <AwardPage dog={props.dog3} />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home;