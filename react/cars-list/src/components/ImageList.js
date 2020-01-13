import React from 'react';
import ImageCard from './ImageCard';
import './ImageList.css';

const ImageList = ({ images }) => {
    const imageSJSX = images.map((image) => {
        return <ImageCard key={image.id} image={image}/>
    });
    return <div className="ImageList">{imageSJSX}</div>;
}

export default ImageList;