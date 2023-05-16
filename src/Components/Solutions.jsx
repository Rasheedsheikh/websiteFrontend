import React, { useEffect, useState } from 'react'
import Config from "../Config";
import { Link } from "react-router-dom";
const Solutions = () => {
    const [solution, setSolu] = useState([])
    const [indus, setIndus] = useState({
        index: null,
        isHover: false
    })


    const solutions = async () => {

        try {
            let res = await fetch(`${Config.host}/get-solutions`)
            let solutionsdataa = await res.json()
            // console.log({ solutionsdataa })
            setSolu(solutionsdataa)
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        solutions()
    }, [])
    return (
        <div>
            <div >
                <div id="Solution" className="Solution" style={{ width: "99%", margin: "auto" }}>
                    <div className="Solution-heading-cont">
                        {solution?.map((item, i) => (
                            item?.heading?.map((e, j) => (
                                <div key={j} className="solu-back"
                                    onMouseEnter={() => setIndus({ index: j, isHover: true })}
                                    onMouseLeave={() => setIndus({ index: null, isHover: false })} >
                                    <div className="sol-heading-title">
                                        <div className="sol-heading-title-div">{e.title}
                                            {indus.index == j && indus.isHover && (
                                                <>
                                                    <Link to={`/solutionsedit?id=${item._id}&id2=${e._id}`}> <button className="buttons" style={{ marginLeft: "5%" }} >
                                                        Edit
                                                    </button>
                                                    </Link>
                                                </>
                                            )}</div>
                                    </div>
                                    <div>
                                        <div className="sol-desc"> {e.desc}</div>
                                    </div>
                                </div>
                            ))
                        ))}
                    </div>

                    <div className="Solution-images" style={{ justifyItems: "center", justifyContent: "center", alignItems: "center", marginTop: "2%", objectFit: "cover" }} >
                        {/* Dont ever delete this never delete this */}
                        {/* {data?.Total?.Solutions?.Images?.map((e, i) => ( */}
                        {/* <div key={i} className="sol-img-abs" > */}
                        {/* <div className="solImgdiv"><img style={{ width: "130px", height: "60px" }} src={e.img} alt="" /> */}
                        {/* <div className="solution-images-title">{e.title}</div> */}
                        {/* </div> */}
                        <div style={{ margin: "auto", width: "90%" }}><img style={{ width: "500%", alignItems: "center", margin: "auto", marginLeft: "25%", height: "aut" }} src="./Images/copy.png" /></div>
                        {/* </div> */}
                        {/* ))} */}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Solutions