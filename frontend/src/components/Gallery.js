import React from 'react';
import GalleryCard from './GalleryCard';
import axios from 'axios';
import './Gallery.css';

const part = {
    Number: 1,
    Description: "windshield w/ polymer",
    Quantity: 1000,
    Price: 178.76,
    Weight: 0.55,
    Link: "http://blitz.cs.niu.edu/pics/shi.jpg",
}

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
        this.getParts();
    }

    render(){
        return (
            <div className="gallery-grid">
                
                <GalleryCard item={part}/>
                <GalleryCard item={part}/>
                <GalleryCard item={part}/>
                <GalleryCard item={part}/>
                <GalleryCard item={part}/>
                <GalleryCard item={part}/>
                <GalleryCard item={part}/>
                <GalleryCard item={part}/>

                {/* {this.data.map(part => <GalleryCard item={part}/>)} */}
                
            </div>
        );
    }
}

export default Gallery;