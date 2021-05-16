import axios from 'axios';
import React,{Component} from 'react';
import { PICS } from '../shared/dogpics';


class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts:[],
            pics: PICS,
            dogpic:null,
            dogpicdes:null

        }
        
    }
    componentDidMount() {
        this.dogePic();


        axios.get('http://localhost:9000/dogeboard')
            .then((response) => {
                console.log("response is", response.data);
                const data = response.data;
                this.setState({posts: data})
                console.log("data recieved");
            })
            .catch(function(error) {
                console.log("data no recieve", error);
            });
    }

    dogePic() {
        const dogpic = this.state.pics[2];
        console.log("dog pic is", dogpic);
        this.setState({dogpic:dogpic.image});
        this.setState({dogpicdes:dogpic.description}); 
    }

    render(props) {
        // const board = this.state.posts.map((post) => {
        //     return (
        //         <div class = "containter">
        //             <div>
        //                 {post.img}
        //                 {post.img2}   
        //             </div>
        //         </div>
        //     );
        // });
        return(
            <div className = "board-background">
                <div>
                    <div className = "boardpic">
                        {/* <RenderCard item={props.pic1} /> */}
                        <img src = {this.state.dogpic}></img>
                        <div class="circular-sb">
                        {this.state.dogpicdes}
                        <div class="circle1"></div>
                        <div class="circle2"></div>
                        </div>
                    </div>

                    {this.state.posts.map(post =>
                    <div>
                    <div>
                    <div className = "board"> 
                        <div className = "board2">
                            
                                <div className = "dog" >
                                <img src = {`data:image/png;base64,${post.imagestring2}`}></img>
                                </div>
                                <div className = "human" >
                                <img src = {`data:image/png;base64,${post.imagestring}`}></img> 
                                </div>
                            
                        </div>
                    </div>
                    </div>
                    </div>
                    )}
                </div>
            </div>
            

        );
    }
}

export default Board;