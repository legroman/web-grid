import React from 'react';
import Header from "./components/Header";
import SectionA from "./components/Section-A";
import SectionB from "./components/Section-B";
import SectionC from "./components/Section-C";
import SectionD from "./components/Section-D";
import Footer from "./components/Footer";
import './App.css';

function App() {
    return (
        <>
            <Header/>
            <main id="main">
                <SectionA/>
                <SectionB/>
                <SectionC/>
                <SectionD/>
            </main>
            <Footer/>
        </>
    );
}

export default App;
