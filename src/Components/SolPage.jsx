import React, { useState } from "react";
import Navbar from "./Navbar";
// import db from "../db.json";
import "./SolPage.css"

const SolPage = () => {
    // const[data,setData]=useState([])
    const data = [
        {
            "img": ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/2560px-Salesforce.com_logo.svg.png"],
            "text": [{
                "desc": "Our vision is to help healthcare and life sciences organizations build a true Salesforce ecosystem that enhances & interacts with all other tools and delivers the desired outcomes at faster pace at significantly lower cost by leveraging our assets. This can only be achieved by truly using our framework and tools we built with over a decade of experience.",
                "title": "Salesforce"
            },
            {
                "desc": "We are one of the premier partners when it comes to health cloud Implementation. Our approach to implement a health cloud for your enterprise is very different from the traditional approach of Discover, Design, Build, Test and Deploy. Our proven assets and accelerator model with Integration of systems like safety, regulatory and HCP databases helps you bootstrap your implementation with maximum advantage in record time and in the most cost-efficient way",
                "subtitle": "Health Cloud"
            },
            {
                "desc": "Implementation of marketing cloud in the healthcare industry requires a strong PDMA compliance knowledge such as 21 CFR Part 203 Prescription Drug Marketing. Our proven marketing implementation template allows you to get the maximum benefit from Salesforce marketing helps reach faster time to value with real-time data unification across Salesforce and beyond. Reconcile identities and gain a complete view of each customer. The potential of omni channel routing can deliver smarter service by automatically matching cases to the agent with the best skill set to solve them",
                "subtitle": "Marketing Cloud"
            },
            {
                "desc": "We have a CRO specific Sales Cloud template which helps all the Clinical Research Organization to take advantage of the market intelligence on studies how they can create opportunities proactively",
                "subtitle": "Sales Cloud"
            },


            ]
        }
        ,
        {
            "img": [" https://tech-radix.com/wp-content/uploads/2022/03/BOT-1.jpg"],
            "text": [{
                "desc": "The Build-Operate-Transfer (BOT) model is well suited for innovative product development companies or companies who are in the ideation stage of product or companies who are in various stages of fundraising. The BOT model is a partnership model we enter with our customers where they are contracted to design, build, and operate a product or technology capabilities for a specified period of time, after which ownership is transferred back to the customer. This model frees up a lot of working capital for our customers and allows them to focus on go to market strategies and divert the money where it matters the most.",
                "title": "Build-Operate-Transfer (BOT) Model"
            },
            {
                "desc": "In our BOT model, we take on the financial risk of developing the technology capabilities, with the expectation of earning a return on investment through the operation and maintenance of the project during the operating period. We will be responsible for ensuring that the deliverables meet the agreed-upon performance standards",
                "title": ""
            },
            {
                "desc": "Our BOT approach is very flexible and adaptable, and not limited by pre-existing technological investments or commitments. It allows for a more unified way of operations, even helping you in the most suitable technology selection for the given project or requirement. In many cases, being technology agnostic can also lead to cost savings and improved efficiency, as it allows organizations to choose the latest and greatest technology by looking at market availability.",
                "title": ""
            },
            {
                "desc": "We understand everyone can hire resources on their own to build the team but they need to deal with attrition and career management goals for resources which requires a separate HR team to manage all of that while building other capabilities such as sales, marketing and customer service. Give us 30 mts we will show you the advantage of this model vs organic way to build the team",
                "title": ""
            },


            ]
        }
        ,
        {
            "img": ["https://i.pinimg.com/originals/07/3e/a8/073ea8b86447ed9310e7e73bd89894b3.png"],
            text: [{
                "desc": "Our full-stack developers are trained to work on both client-side (front-end) and server-side (back-end) components of a web application. Our developers are familiar with a variety of technologies, including HTML, CSS, JavaScript (for front-end), and at least one server-side programming language such as Python, Ruby, Java, PHP, or Node.js (for back-end), as well as database management systems like MySQL, MongoDB, or PostgreSQL.",
                "title": "Full Stack development"
            },
            {
                "desc": "Our methodology of mobile first approach has proven faster ROI to many organizations we worked in the past since the application is made available in all devices with one development cost. We are also one of the pioneers to build progressive web application framework (PWA) as an alternative to mobile applications to drive better adoption. The aim of PWAs is to provide a seamless experience for users, combining the best features of web and native apps to deliver fast, reliable, and engaging experiences.",
                "title": ""
            },
            {
                "desc": "HCP engagement solutions to help doctors and nurses who are on the move to look at their schedules and get alerts from the front office and patients directly. The goal of virtual visits is to make healthcare more accessible and convenient for patients, while also reducing the spread of infectious diseases and reducing health care costs. They have become increasingly popular due to the COVID-19 pandemic, and many health care providers are now offering virtual visits as a way to continue providing care to their patients while maintaining social distance.",
                "subtitle": "HCP Engagement Solutions"
            },
            {
                "desc": "The goal of patient engagement solutions is to improve patient outcomes by enabling patients to be more informed and involved in their own health care. By giving patients the tools and information they need to manage their health, these solutions can help to reduce costs, improve the quality of care, and increase patient satisfaction. Patient engagement solutions can include a range of technology-based tools, such as patient portals, mobile health apps, telemedicine platforms, and wearable devices.",
                "subtitle": "Patient Engagement Solutions"
            },
            {
                "desc": "IoT devices can range from everyday consumer devices such as Google Home, Alexa, wearable fitness trackers, and sensor based devices, and other medical devices. By connecting these devices to the internet, they can collect, analyze and share data, enabling a variety of new and innovative applications and services. With our IoT expertise coupled with full stack development we can deliver a custom solution for any needs using our IoT framework much faster and cheaper. IoT has the potential to revolutionize many industries, including health care by providing valuable insights and enabling new forms of automation and control.",
                "subtitle": "IOT Data Collection"
            },
        

            ]
        },

        {
            "img": ["https://smartbridge.com/digitalinnovation/wp-content/uploads/sites/3/ai-ml.png"],
            
            text: [{
                "desc": "Artificial Intelligence (AI) and Machine Learning (ML) are having a significant impact on the life sciences industry, providing innovative solutions and driving advancements in various fields such as drug discovery, medical imaging, and personalized medicine. Some examples of AI/ML usage in the life sciences industry                ",
                "title": "Artificial Intelligence & Machine Learning"
            },
            {
                "desc": "Regulatory Intelligence: AI can be used to analyze any changes in the regulations around the world and how it can impact clinical trials in any given local market Predict Study Design: Help with study design using various protocol inclusion and exclusion criteria to see how the study can be designed optimally to drive innovation and help patient to get the cure they deserve faster and reduce cost of development",
            
                "title": ""
            },
            {
                "desc": "Implementation of marketing cloud in the healthcare industry requires a strong PDMA compliance knowledge such as 21 CFR Part 203 Prescription Drug Marketing. Our proven marketing implementation template allows you to get the maximum benefit from Salesforce marketing helps reach faster time to value with real-time data unification across Salesforce and beyond. Reconcile identities and gain a complete view of each customer. The potential of omni channel routing can deliver smarter service by automatically matching cases to the agent with the best skill set to solve them",
                "title": ""
            },
            {
                "desc": "In conclusion, AI and ML are transforming the life sciences industry by providing innovative solutions and driving advancements in various fields. The increased use of AI and ML in the life sciences industry is expected to improve patient outcomes and lead to the development of more effective and personalized treatments.",
                "title": ""
            },
        

            ]
        }

        
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const imageContainerStyle = {
        transform: `rotateY(${currentIndex * -200}deg)`,
    };

    return (
        <>

            <Navbar />
            <div className="container" style={{ display: "flex", justifyItems: "center", gap: "20%", justifyContent: "centre", marginTop: "10%" }}>
                <div style={{ marginLeft: "8%" }}>

                    <div className="nextimg" style={{ height: "250px", margin: "auto" }}>
                    {data[currentIndex]?.img?.map((e,i)=>(

                 
                        <img className="currentimage" style={{ width: "220px", height: "180px", marginTop: "7%" }} src={e} alt="Image" />
                        ))
                    }
                        </div>


                    <div style={{ marginTop: "20%", display: "flex", gap: "40%" }}>


                        <button className="buttoo" style={{ borderRadius: "20px" }} onClick={() => {
                            const PrevIndex = currentIndex - 1;
                            if (PrevIndex < 0) {
                                setCurrentIndex(data.length - 1);
                            } else {
                                setCurrentIndex(PrevIndex);
                            }
                        }}><span><img style={{ width: "40px", height: "40px" }} src="./Images/leftarrow1.png" /></span></button>
                        <button className="butto" onClick={() => {
                            const nextIndex = currentIndex + 1;
                            if (nextIndex >= data.length) {
                                setCurrentIndex(0);
                            } else {
                                setCurrentIndex(nextIndex);
                            }
                        }}><span><img style={{ width: "40px", height: "40px" }} src="./Images/rightarrow.png" /></span></button>
                    </div>
                </div>
                <div style={{ marginTop: "10px", marginRight: "30px", height:"300px",overflow:"scroll",overflowX:"hidden" }}>
                    {data[currentIndex]?.text.map((e,i)=>(
<>
                    <h1 style={{ margin: "auto",marginTop:"10px",color:"blue" }}>{e.title}</h1>
                    <h3 style={{color:"blue"}}>{e.subtitle}</h3>
                    <div style={{ textAlign: "left", marginTop: "20px",marginRight:"20px" }}>{e.desc}</div>
                    </>
                    ))}
               
                    </div>
            </div>

        </>
    )
}
export default SolPage;