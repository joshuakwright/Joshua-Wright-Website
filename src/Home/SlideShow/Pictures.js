import React, { useState, useEffect } from 'react'
import flex from './Images/flex.jpg'
import pilot from './Images/PilotWorkPhoto.jpg'
import me from './Images/English102Class.jpg'
import english from './Images/ProfilePic.jpg'
import mountains from './Images/Mountains.jpg'
import './Pictures.css'

export default function Pictures() {
    const ImageData = [
        { id: 1, name: flex }, 
        { id: 2, name: pilot }, 
        { id: 3, name: me }, 
        { id: 4, name: english }
    ];
    const [place, ChangeImage] = useState(0);
    const length = ImageData.length;

    useEffect(() => {
        setTimeout(() => {
            ChangeImage(place === length - 1 ? 0 : place + 1)
        }, 5000);
    });

    return (
        <div>
            <img className='background-img' src={mountains} alt='Missing'></img>
            <div>
                {ImageData.map((image, index) => {
                    return (
                        <div key={index}>
                            {index === place && (<img className='image' src={image.name} alt='Missing' />)}
                        </div>
                )})}
            </div>
        </div>
    )
}
