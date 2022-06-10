import React, { useState, useEffect } from 'react'
import Pilot from './Images/PilotWorkPhoto.jpg'
import English from './Images/English102Class.jpg'
import Mountains from './Images/HomeBackground.jpg'
import CanyonFriends from './Images/CanyonFriends.jpg'
import Fraternity from './Images/Fraternity.png'
import Glacier from './Images/Glacier.jpg'
import ParkeWLizard from './Images/ParkeWLizard.jpg'
import ParkeWNato from './Images/ParkeWNato.jpg'
import RomeFam from './Images/RomeFam.jpg'
import RomeFriends from './Images/RomeFriends.jpg'
import UTKFriends from './Images/UTKFriends.jpg'
import Venice from './Images/Venice.jpg'
import './Pictures.css'

export default function Pictures() {
    const ImageData = [
        { id: 1, name: Pilot }, 
        { id: 2, name: UTKFriends }, 
        { id: 3, name: CanyonFriends },
        { id: 4, name: Fraternity },
        { id: 5, name: Glacier },
        { id: 6, name: RomeFriends },
        { id: 7, name: ParkeWNato },
        { id: 8, name: RomeFam },
        { id: 9, name: ParkeWLizard },
        { id: 10, name: English },
        { id: 11, name: Venice }
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
            <img className='background-img' src={Mountains} alt='Missing'></img>
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
