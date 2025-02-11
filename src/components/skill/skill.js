import './skill.css'


function Skill({ skillname, size = 'big' }) {
    return (
        <div className={size === 'small' ? 'skillSmall' : 'skill'}>
            {skillname}
        </div>
    );
}

export default Skill;