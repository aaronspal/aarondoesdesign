import './experience.css'

function Experience({ title, description, years }) {
    return (
        <section className="experience flexContainer spaceBetween">
            <div className="flexContainer flexColumn">
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
            <div>
                <span className="date">{years}</span>
            </div>
        </section>
    );
}

export default Experience;
