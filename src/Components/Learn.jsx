
import React, { useState } from "react";
import db from "../db.json"
// import data from "../data.json"
import "./Learn.css"
import Navbar from "./Navbar";
import Footer from "./Footer";

const Learn = () => {
    const [change, setChange] = useState(0)
    return (
        <>
            
          <Navbar/>
            <div className="title-tab">
                <div className="buttonsmain">
                    <button className="button-tab" onClick={() => { setChange(0) }} >Life Sciene</button>
                    <button className="button-tab" onClick={() => { setChange(1) }}>Emerging Biotech</button>
                    <button className="button-tab" onClick={() => { setChange(2) }}> Providers</button>
                    <button className="button-tab" onClick={() => { setChange(3) }}>Payers</button>
                </div>
            </div>

            {/* <div>
                {db.Careers.Learn[change].title}
            </div> */}
            <div className="LearnFlex">
                    <div className="LearnLeft">
                        {console.log(db?.Careers?.Learn)}
                        <div className="Learn-title">{db?.Careers?.Learn[change].title}</div>

                        {db.Careers.Learn[change]?.desc?.map((el, i) => (
                            <div  key={i}>
                                <ul>
                                    <li>  {el}</li>
                                </ul>

                            </div>
                        ))}
                    </div>
                    {/* <div className="LearnRight"><img style={{ width: "300px", height: "250px", marginTop: "15%" }} src={db.Careers.Learn[change].img} /></div> */}
                
                  <div className="LearnRight"><img style={{ width: "400px", height: "390px", marginTop: "15%" }} src="images/Group 1175.jpg" alt="" /></div>
                
                </div>

<Footer/>

        </>
    )
}
export default Learn