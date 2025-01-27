import { Link } from 'react-router-dom';

function FeatureLarge({path, position, image, type, timeStart, timeEnd, text}) {
    return (
        <>
            <section className="flexContainer g30">
                <section className="column w70">
                    <img src={image} className="image100"/>
                </section>
                <section className="column w30 flexColumn">
                    <div>
                        <h4>{type}</h4>
                        <h3>{position}</h3>
                        <p className="mono">{timeStart} - {timeEnd}</p>
                        <p className="p20">
                            {text}
                        </p>
                    </div>
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
