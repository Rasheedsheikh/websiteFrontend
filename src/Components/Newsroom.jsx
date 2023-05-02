import React, { useEffect, useState } from 'react'
import Config from "../Config";
import { Link, useNavigate } from "react-router-dom";
import './style.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Newsroom = () => {
    const [testimonials, setTesti] = useState([])
    const [indus, setIndus] = useState({
        index: null,
        isHover: false
    })
    const Testimonials = async () => {
        try {
            let res = await fetch(`${Config.host}/get-testimonials`)
            let Testimonialsdataa = await res.json()
            console.log({ Testimonialsdataa })
            setTesti(Testimonialsdataa)
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        Testimonials()
    }, [])

  return (
    <div>

{testimonials?.map((obj, i) => (

<div>
    <div className="testimo-title">{obj.title}</div>

    <div className="carouse">
        <Carousel

            showThumbs={false}
            infiniteLoop={true}
            swipeable={false}
            dynamicHeight={false} >


            {obj?.slide.map((el, i) =>
            (
                <div  key={i} onMouseEnter={() => setIndus({ index: i, isHover: true })}
                onMouseLeave={() => setIndus({ index: null, isHover: false })} style={{ width: "85%", justifyContent: "center", margin: "auto", marginTop: "%" }}>
                    <div>
                        <img className="testimoImg" style={{ width: "151px", height: "151px", borderRadius: "50%", objectFit: "cover" }} src={el.img} alt="" /></div>
                        {/* {indus.index == i && indus.isHover && (
                                    <>

                                        <Link to={`/testimonialsedit?id=${obj._id}&id2=${el._id}`}  >  <button style={{}} className="edbuttons" >
                                            Edit
                                        </button>
                                        </Link>
                                    </>
                                )} */}
                    <div className="slider-desc" style={{ marginTop: "2%" }}>{el.desc}</div>
                    <div className="slider-role-name" style={{ marginTop: "5%" }}>
                        <div>{el.name}</div>

                    </div>

                  
                    <div style={{ marginBottom: "5%", fontSize: "20px", fontWeight: "700" }}>{el.role}</div>
                    {/* <div >{el.at}</div> */}


                  
                </div>
            ))}

        </Carousel>
    </div>

</div>

))}
    </div>
  )
}

export default Newsroom