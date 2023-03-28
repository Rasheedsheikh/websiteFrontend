import React, { useEffect } from "react";
import { useState } from "react";
import db from "../db.json"
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Config from "../Config";

const Learnn = () => {

    const [active, setActive] = useState(false)
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const [data, setData1] = useState([])
    useEffect(() => {
        show()
    }, [])

    const show = async () => {
        try {
            let res = await fetch(`${Config.host}/home`)
            let dataa = await res.json()
            console.log(dataa.data)
            setData1(dataa.data)
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <>
        
                <div>
                    <div className="Navv" style={{ marginTop: "0%", display: '' }}>
                        <div className="NavLeft">
                            <img style={{ width: "253px", height: "50px" }} src="./Images/logo (1).jpg" alt="/" />
                            {/* <img style={{ width: "253px", height: "50px", }} src="./Images/Logo Value Health 1.svg" alt="/" /> */}
                        </div>

                        <div className="NavRight">
                            {data?.Total?.NavRoutes?.map((e, i) => (
                                <div key={i}>
                                    <Link style={{ textDecoration: "none", color: "black" }} to={e.direct}><div>{e.name}</div></Link>
                                    {/* { console.log(e,i)} */}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="title-tab">
                    <div className="buttonsmain">
                        <div className="button-ta">
                            <a style={{ textDecoration: "none", color: "black" }} href="#tab1"><div>Life Sciene</div></a></div>
                        <div className="button-ta"> <a style={{ textDecoration: "none", color: "black" }} href="#tab2"><div>Emerging Biotech</div></a></div>
                        <div className="button-ta"> <a style={{ textDecoration: "none", color: "black" }} href="#tab3"><div> Providers</div></a></div>
                        <div className="button-ta"> <a style={{ textDecoration: "none", color: "black" }} href="#tab4"><div>Payers</div></a></div>
                    </div>
                </div>
    
            <div style={{ border: "1px solid #F1F1F1" }}></div>
            <div id="tab1">
                <div className="LearnFlex1">
                    <div className="LearnLeft">
                        {console.log(db?.Careers?.Learn)}
                        <center style={{ width: "100px", border: "2px solid #FE602F" }}></center>
                        <div className="Learn-title">Life Sciences</div>
                        <div className="ulko" style={{ gap: "20px" }}>
                            <ul style={{ gap: "20px", marginTop: "10px", lineHeight: "30px" }} >
                                <li> We are specialised in building patient services solutions using technologies like Sales Force Health Cloud, bespoke solutions and integration with payers and providers application such as EMR, benefit verification and prior authorization for benefits.,</li>
                                <li> We help drive life sciences companies in research and development (R&D) by helping them to optimize clinical trials so they can stay ahead of the curve in developing new products and technologies</li>
                                <li> We help them embrace digital technology in order to streamline processes, improve data analysis, and accelerate discovery and development.</li>
                                <li> Submission of Investigational New Drug (IND) application or NDA to the regulatory agency and managing all ongoing reporting processes for FDA, MHRA and European Agencies. Help companies to meet IDMP standards and provide accurate and complete information on their products to regulatory agencies.</li>
                            </ul>
                        </div>



                    </div>
                    <div className="LearnRight">
                        <div className="LearnRight"><img style={{ width: "400px", height: "390px", marginTop: "25%", borderRadius: "50%" }} src="./Images/Group 1175.jpg" alt="" /></div>
                    </div>
                </div>
            </div>


            <div id="tab2">
                <div style={{ width: "100px", border: "2px solid #FE602F", margin: "auto" }}></div>
                <div className="LearnFlex2">
                    {/* <center style={{width:"100px",border:"2px solid #FE602F"}}></center> */}
                    <div className="LearnRight">
                        <div className="LearnRight"><img style={{ width: "400px", height: "390px", marginTop: "15%" }} src="./Images/Group 1173.jpg" alt="" /></div>
                    </div>


                    <div className="LearnLeft">
                        {console.log(db?.Careers?.Learn)}

                        <div className="Learn-title">Emerging Biotech</div>
                        <div className="ulko" >
                            <ul style={{ gap: "20px", marginTop: "10px", lineHeight: "30px" }} >
                                <li> Our services to emerging biotechnology companies accelerate them to focus on niche areas and aim to disrupt the market with their cutting-edge research and development efforts.</li>
                                <li>    We partner with leading patient services, logistics, distribution and benefit verification companies to build their commercial strategies and augment with technology to increase the speed to market and reduce cost to market.,</li>
                                <li> Our Pharma IT in a Box solution allows the emerging biotechnology companies to build a strong technology foundation which can scale as the business scales or sets them apart in their M&A pursuit</li>

                            </ul>
                        </div>

                    </div>

                </div>
            </div>



            <div id="tab3">
                <div className="LearnFlex3">
                    <div className="LearnLeft">
                        {console.log(db?.Careers?.Learn)}
                        <center style={{ width: "100px", border: "2px solid #FE602F", margin: "auto" }}></center>
                        <div className="Learn-title">Providers</div>
                        <div className="ulko" >
                            <ul style={{ gap: "20px", marginTop: "10px", lineHeight: "30px" }}>
                                <li>  We work with large independent facilities, medical services groups and DSO (Dental Services Organization).</li>
                                <li>  We provide state of the art digital front door experience to our customer which helps reduce the operating cost and opens up doors for new patients and provides phenomenal service to patients 24/7 every single day.,</li>
                                <li> Our SMS based appointment reminder services, referral management, Voice activated front desk service and externalised medical records to patients in a secured way are the few services we are specialised on.</li>
                            </ul>
                        </div>

                    </div>
                    <div className="LearnRight">
                        <div className="LearnRight"><img style={{ width: "400px", height: "390px", marginTop: "25%", borderRadius: "50%" }} src="./Images/Group 1174.png" alt="" /></div>
                    </div>
                </div>
            </div>


            <div id="tab4" >
                <div style={{ width: "100px", border: "2px solid #FE602F", margin: "auto" }}></div>
                <div className="LearnFlex4">

                    <div className="LearnRight">
                        <div className="LearnRight"><img style={{ width: "400px", height: "390px", marginTop: "15%" }} src="./Images/Mask group.jpg" alt="" /></div>
                    </div>
                    <div className="LearnLeft">
                        {console.log(db?.Careers?.Learn)}

                        <div className="Learn-title">Payers</div>
                        <div className="ulko">
                            <ul style={{ gap: "20px", marginTop: "10px", lineHeight: "30px" }}>
                                <li> We provide solutions to Insurance companies to reduce their service desk cost by providing the benefit summary to many clearing houses in order to enable electronic benefit , </li>
                                <li>verification services and prior authorization services  Our customer development using MERN stack allows payers to provide many bespoke solutions for their customers and agents to seamlessly integrate any workflows such as customer onboarding, claim processing and benefit verification</li>
                                <li> We help them embrace digital technology in order to streamline processes, improve data analysis, and accelerate discovery and development.</li>
                                <li> Submission of Investigational New Drug (IND) application or NDA to the regulatory agency and managing all ongoing reporting processes for FDA, MHRA and European Agencies. Help companies to meet IDMP standards and provide accurate and complete information on their products to regulatory agencies.</li>
                            </ul>
                        </div>

                    </div>

                </div>
            </div>

            <Footer />




        </>
    )
}
export default Learnn;