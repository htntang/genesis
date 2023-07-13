import React from "react";
import "./Stats.css";

const Statistics = () => {
    return(
        <div className="statistics">

            <h1 className="stats">The Numbers</h1>
            
            <div className="container-stats">
                <div className="row">
                <div className="column">
                    <div className="achievement">
                        <div className="circle">750+</div>
                        <span>Scholarships</span>
                        <span>listed in our database</span>
                    </div>
                    </div>
                    
                    <div className="column">
                    <div className="achievement">
                        <div className="circle">20+</div>
                        <span>Students</span>
                        <span>Helped and Hired</span>
                    </div>
                    </div>

                    <div className="column">
                    <div className="achievement">
                        <div className="circle">∞</div>
                        <span>Dreams</span>
                        <span>Achieved</span>
                    </div>
                    </div>
                </div>
                </div>
                </div>

    )
}

export default Statistics;