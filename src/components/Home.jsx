import React,{Component} from 'react';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {   }
    }
    
    render() { 
        
        return ( 
            <React.Fragment>
               <div className="home-screen-main">
                   <button className="hom-card-button">
                    <figure>
                        <img src={require('../assets/flash.png')}/>
                    </figure>
                   </button>
               </div>
            </React.Fragment>
         );
    }
}
 
export default Home;