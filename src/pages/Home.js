


import React from "react";
import '../styles/Home.css';

function Home() {
    return (
        <section className="home">
            <h1>Practice</h1>
            <p>
                ✅ React Learning List – Phase 1
                <ul>1️⃣ JSX & Components
                    Understand JSX syntax.

                    Learn Functional Components.

                    Create and use multiple components.</ul>

                <ul> 2️⃣ Props (Passing Data)
                    What to Learn:

                    How to pass data from parent to child.

                    Use dynamic values inside components.

                    Passing functions as props.

                    Example Task:

                    Create a Card component that accepts:

                    title (string)

                    description (string)

                    image (URL or import)

                    Render multiple Cards in a parent component using .map().</ul>

                <ul> 3️⃣ State (Dynamic Data)
                    What to Learn:

                    Understand useState hook.

                    Updating state on events.

                    Example Tasks:

                    Build a Counter:

                    + and - buttons to update state.

                    Create a Form:

                    Inputs update state as the user types.

                    Show the live data below.</ul>

                <ul>4️⃣ useEffect Hook
                    What to Learn:

                    Run side effects (like API calls) when component mounts or updates.

                    Learn dependency array behavior.

                    Example Task:

                    Fetch user data from a public API (e.g., JSONPlaceholder).

                    Display user cards after loading.

                    Show loading spinner or error message if needed.</ul>
                    
                <ul>5️⃣ Function as Props
                    What to Learn:

                    Parent component sends function to child.

                    Child can call that function.

                    Example Task:

                    Build a Light Toggle Component:

                    Parent has light on/off state.

                    Child button toggles it using function passed as prop.</ul>
            </p>
        </section>
    );
}

export default Home;