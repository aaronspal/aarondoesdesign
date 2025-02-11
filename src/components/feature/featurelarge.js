import { Link } from 'react-router-dom';
import Skill from "../skill/skill";
import React from "react";

function FeatureLarge({path, position, image, type, timeStart, timeEnd, text, skill1, skill2, skill3, tool1, tool2, tool3}) {
    return (
        <>
            <section className="flexContainer g30">
                <section className="column w65">
                    <img src={image} className="image100"/>
                </section>
                <section className="column w35 flexColumn">
                    <div>
                        <h4>{type}</h4>
                        <h3>{position}</h3>
                        <p className="mono">{timeStart} - {timeEnd}</p>
                        <p className="p20 margin0">
                            {text}
                        </p>
                    </div>
                    <section className="flexContainer g15">
                        <div className="w50">
                            <h5>Tools</h5>
                            <h6>{tool1}</h6>
                            <h6>{tool2}</h6>
                            <h6>{tool3}</h6>
                        </div>
                        <div className="w50">
                            <h5>Skills</h5>
                            <h6>{skill1}</h6>
                            <h6>{skill2}</h6>
                            <h6>{skill3}</h6>
                        </div>
                    </section>
                    <section className="textRight">
                        <Link to={path}>
                        <button>view case</button>
                        </Link>
                    </section>
                </section>
            </section>
            <hr/>
        </>

    );
}

export default FeatureLarge;
