/*App.jsx is the root component in React that serves as the organizer and renderer 
for all other components.*/

import "./App.css"; //Imports the main CSS stylesheet

import Hero from "./sections/Hero/Hero"; //Imports Hero Section JSX
import Projects from "./sections/Projects/Projects"; //Imports Projects Section JSX
import Skills from "./sections/Skills/Skills"; //Imports Skills Section JSX
import Contact from "./sections/Contact/Contact"; //Imports Contact Section JSX
import Footer from "./sections/Footer/Footer"; //Imports Footer Section JSX

function App() {
    return (
        <>
            <Hero /> {/*Hero Section*/}
            {/* <Academics /> */}
            {/* <Achievements /> */}
            <Projects /> {/*Projects Section*/}
            <Skills /> {/*Skills Section*/}
            {/* <On Going /> */}
            {/* <Interests /> */}
            <Contact /> {/*Contact Section*/}
            <Footer /> {/*Footer Section*/}
        </>
    );
}

export default App;
