import React, {Component} from 'react';
import GalleryService from '../../servise'

const service = new GalleryService();

class RandomPhoto extends Component {
    state = {
      photo: false
    };

componentDidMount() {
  service.getRandomPhoto()
  .then( (photo) => {
    this.setState({photo})
})
}

    render(){
      const {photo} = this.state;

       return ( 
        <div className="photo-wrapper">            
      {   
        <img key= {photo.id} src={typeof(photo.urls) !=='undefined' ? photo.urls.full : '' } alt="random-photo"/>        
      } 
       </div>
  );
    }
}

export default RandomPhoto;
