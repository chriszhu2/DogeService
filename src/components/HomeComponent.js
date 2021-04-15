import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';

function RenderCard({item, pic2}) {

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


function Home(props) {
    return(
        
        <div className="background">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1" >
                    <RenderCard item={props.pic1} />
                    {/* <RenderCard pic2={props.pic2} /> */}
                </div>
            </div>
        </div>
    );
}

export default Home;