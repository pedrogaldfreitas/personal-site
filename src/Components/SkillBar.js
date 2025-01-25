import { useSpring, animated}  from '@react-spring/web';
import { useEffect, useState } from 'react';

const SkillBar = ({skill, level, inView}) => {
    const [hasAnimated, setHasAnimated] = useState(false);

    const props = useSpring({
        width: hasAnimated ? `${level}%` : "0%",
        from: { width: "0%" },
        config: { tension: 75 }
    });

    useEffect(() => {
        if (inView && !hasAnimated) {
            setHasAnimated(true);
        }
    }, [inView, hasAnimated]);

    return (
        <div style={{marginBottom: '10px'}}>
            <div style={{marginBottom: '5px'}}>{skill}</div>
            <div style={{ background: 'rgb(255 255 255 / 27%)', height: '10px', borderRadius: '5px' }}>
                <animated.div
                    style={{
                        height: '10px',
                        borderRadius: '5px',
                        background: 'white',
                        width: props.width,
                    }}
                />
            </div>
        </div>
    )
}

export default SkillBar;