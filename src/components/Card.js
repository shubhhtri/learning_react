import React, { useState } from "react";
import "./card.css";
import lady from "./joshua-hanson-e616t35Vbeg-unsplash.jpg";
import downarrow from "./down-arrow-solid-24.png";
import uparrow from "./up-arrow-solid-24.png";


function Card(){

    const [vote, setVote]=useState(45);


    return <>
        <div className="card">
            
            <img src={lady} alt="Lady with a camera" className="card-image" />
            <h3>Lady with a camera</h3>

            <div className="card-desc">
                This section contains the description of the above image.
            </div>

            <div className="detail">
                <div className="vote">
                    <img src={uparrow} alt="up-arrow" onClick={()=>setVote(vote+1)} />
                    <span>{vote}</span>
                    <img src={downarrow} alt="down-arrow" onClick={()=>setVote(vote-1)} />
                </div>

                <div className="cmnt">
                    <label>Write a comment: </label>
                    <textarea />
                </div>

            </div>


        </div>
    </>
}

export default Card;