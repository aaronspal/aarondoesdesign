import './feature.css';
// import

function Feature({position, image, type, tool1, tool2, tool3, skill1, skill2, skill3}) {
    return (
        <>
            <hr/>
            <section className="flexContainer g30">
                <section className="column w40 flexColumn">
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
                    {/*<div>view case</div>*/}
                    <button>view case</button>
                </section>
                <section className="column w60">
                    <img src={image} className="image100"/>
                </section>
            </section>
        </>

    );
}

export default Feature;
