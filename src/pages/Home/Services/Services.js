import React from 'react';
import tiger from '../../../images/service img/tiger.jpg';
import elephants from '../../../images/service img/elephants.jpg';
import nature from '../../../images/service img/nature.jpg';
import birds from '../../../images/service img/birds.jpg';
import underwater from '../../../images/service img/underwater.jpg';
import mountains from '../../../images/service img/mountains.jpg';
import './Services.css';
import Service from '../Service/Service';
const data = [
    {id:1,img:elephants,name:"Animal in their environment",description:"Photos that capture animal behaviour in the wild. This could be interactions between multiple individuals, or one going about its day and interacting with its environment.",price:329},
    {id:2,img:tiger,name:"Animal Portraits",description:"Focused on beautiful portraits of wildlife, this category is usually more “traditional.” Favoured by photographers who want to showcase an animal with a straight-forward portrait.",price:410},
    {id:3,img:birds,name:"Birds",description:"Focused on beautiful portraits or pack of birds in wildlife, this category is usually more Favoured by photographers. Photos that capture Birds behaviour and interacting with its environment.",price:150},
    {id:4,img:nature,name:"Nature",description:"Conveying the essence of a plant and other natural element or portraying its importance or role in its environment or its means of survival",price:200},
    {id:5,img:mountains,name:"Mountains",description:"Photos that show off the beauty of our natural world through Mountains. Taking mountains photos is not a easy thing to do ",price:229},
    {id:6,img:underwater,name:"Under Water",description:"This category focuses on the underwater world. This could be marine animals, as well as landscapes and macro beneath the waves.",price:360}
]
const Services = () => {
    
    return (
        <div className='my-4'>
            <h2 className='text-center mt-4'>My Services</h2>
        <div className='services-container mx-auto row justify-content-center'>
            {data.map(service=><Service key={service.id} service={service}></Service>)}
        </div>
        </div>
    );
};

export default Services;