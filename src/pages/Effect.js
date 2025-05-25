


import react from "react";
import '../styles/Effect.css';
import Card from '../components/Card';
import elephant from '../assets/elephant.jpg';
import { useState, useEffect } from "react";


function Effect() {

    const [isError, setIsError] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    const Error = () => {
        return <div className="error">Error while Fetching data.</div>
    }

    const Loading = () => {
        return <div className="loading">Loading Data...</div>
    }

    const FetchData = () => {
        setIsError(false);
        setTimeout(() => {
            setIsLoading(false);
        }, 5000);
    }

    const data = [
        { id: 1, image: elephant, title: "Elephant", description: "Elephant is my friend." },
        { id: 2, image: elephant, title: "Elephant", description: "Elephant is my friend." },
        { id: 3, image: elephant, title: "Elephant", description: "Elephant is my friend." },
    ]

    return (
        <section className="effect">
            <button onClick={FetchData}>Fetch</button>
            {/* {isError && <Error />} */}
            {isError ? (
                <Error />
            ) : isLoading ? (
                <Loading />
            ) : (
                <div className="effect-data">
                    {data.map((data) => (
                        <Card key={data.id} image={data.image} title={data.title} description={data.description} />
                    ))}
                </div>
            )}

        </section>
    );
}

export default Effect;