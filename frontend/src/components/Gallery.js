import React from 'react';
import GalleryCard from './GalleryCard';
import axios from 'axios';
import './Gallery.css';

class Gallery extends React.Component {

    constructor(){
        super();
        this.state = {
            data: [],
            isLoading: false,
            error: null,
        }
    }

    async getParts() {
        this.setState({isLoading: true})
        
        try {
            const response = await axios.get('')
            const items = response.data
            this.setState({data: items})
        } catch(err) {
            console.log(err)
        }

        this.setState({isLoading: false})
    }

    componentDidMount() {
        //this.getParts();
    }

    render(){
        return (
            <div className="gallery-grid">
                
                {this.props.data.map(part => <GalleryCard item={part} />)}
                
            </div>
        );
    }
}

export default Gallery;