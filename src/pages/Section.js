


import React from "react";
import '../styles/Section.css';
import Card from '../components/Card.js';
import image1 from '../assets/image1.jpg';


function Section(){

    const Data = [
        {id: 1, image: image1, title: "Dog", description: "This is a image of a dog."},
        {id: 2, image: image1, title: "Dog", description: "This is a image of a dog."},
        {id: 3, image: image1, title: "Dog", description: "This is a image of a dog."},
        {id: 4, image: image1, title: "Dog", description: "This is a image of a dog."},
    ]

    return(
        <section>
            <div className="data">
            {Data.map((data)=>(
                <Card id={data.id} image={data.image} title={data.title} description={data.description} />
            ))}
            </div>
        </section>
    );
}

export default Section;