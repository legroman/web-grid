import React from "react";
import img1 from "../images/photo1.jpg";
import img2 from "../images/photo2.jpg";
import img3 from "../images/photo3.jpg";

export default function SectionB() {
    return(
        <section id="section-b" className="grid">
            <ul>
                <li>
                    <div className="card">
                        <img src={img1} alt="photo"/>
                        <div className="card-content">
                            <h3 className="card-title">Web Development</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at cum deserunt earum ex nam praesentium quisquam reiciendis veritatis voluptas?</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="card">
                        <img src={img2} alt="photo"/>
                        <div className="card-content">
                            <h3 className="card-title">Mobile Applications</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at cum deserunt earum ex nam praesentium quisquam reiciendis veritatis voluptas?</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="card">
                        <img src={img3} alt="photo"/>
                        <div className="card-content">
                            <h3 className="card-title">Tech Marketing</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at cum deserunt earum ex nam praesentium quisquam reiciendis veritatis voluptas?</p>
                        </div>
                    </div>
                </li>
            </ul>
        </section>
    )
}