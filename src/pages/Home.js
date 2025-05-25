


import React from "react";
import '../styles/Home.css';

function Home() {


    const topics = [
        {
            title: "JSX & Components",
            whatToLearn: [
                "Understanding JSX syntax.",
                "Learn Functional Components.",
                "Create and use multiple components."
            ]
        },
        {
            title: "Props (Passing Data)",
            whatToLearn: [
                "How to pass data from parent to child.",
                "Use dynamic values inside components.",
                "Passing functions as props."
            ],
            exampleTasks: [
                "Create a Card component that accepts:",
                "title (string)",
                "description (string)",
                "image (URL or import)",
                "Render multiple Cards in a parent component using .map()."
            ]
        },
        {
            title: "State (Dynamic Data)",
            whatToLearn: [
                "Understand useState hook.",
                "Updating state on events."
            ],
            exampleTasks: [
                "Build a Counter with + and - buttons to update state.",
                "Create a Form where inputs update state as the user types.",
                "Show the live data below."
            ]
        },
        {
            title: "useEffect Hook",
            whatToLearn: [
                "Run side effects (like API calls) when component mounts or updates.",
                "Learn dependency array behavior."
            ],
            exampleTasks: [
                "Fetch user data from a public API (e.g., JSONPlaceholder).",
                "Display user cards after loading.",
                "Show loading spinner or error message if needed."
            ]
        },
        {
            title: "Function as Props",
            whatToLearn: [
                "Parent component sends function to child.",
                "Child can call that function."
            ],
            exampleTasks: [
                "Build a Light Toggle Component:",
                "Parent has light on/off state.",
                "Child button toggles it using function passed as prop."
            ]
        }
    ];


    return (
        <section className="home">
            <h1>Practice</h1>
            <div className="topic-card">
                {topics.map((t, index) => (
                    <div key={index} >
                        <h1>{t.title}</h1>
                        <h4>What to Learn:</h4>
                        <ul>
                            {t.whatToLearn.map((tw, i) => (
                                <li key={i} >{tw}</li>
                            ))}
                        </ul>
                        {t.exampleTasks && (
                            <>
                                <h4>Example Tasks:</h4>
                                <ul>
                                    {t.exampleTasks.map((te, i) => (
                                        <li key={i} >{te}</li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Home;