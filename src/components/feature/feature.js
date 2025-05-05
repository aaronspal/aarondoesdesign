import { Link } from 'react-router-dom';
import './featurebreakpoints.css'

function Feature({path, position, image, type, tool1, tool2, tool3, skill1, skill2, skill3}) {
    return (
        <>
            <hr/>
            <section className="flexContainer g30 flexContainerBreakpoint3">
                <section className="column w40 flexColumn feature40Breakpoint">
                    <div>
                        <h4>{type}</h4>
                        <h3>{position}</h3>
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
                    </div>
                    <Link to={path}>
                        <button className="buttonBreakpoint">view case</button>
                    </Link>
                </section>
                <section className="column w60 feature60Breakpoint">
                    <img src={image} className="image100"/>
                </section>
            </section>
        </>

    );
}

export default Feature;
