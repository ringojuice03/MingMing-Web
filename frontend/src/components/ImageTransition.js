import {useState} from 'react';

export const ImageTransition = ({ defSource, hovSource, alt }) => {
    const [isHovering, setIsHovering] = useState(false);

    return(
        <div>
            <img
                src={defSource}
                style={{ opacity: isHovering ? 0 : 1, transition: 'opacity 0.3s ease-in-out' }}
                onMouseEnter={setIsHovering(true)}
                onMouseLeave={setIsHovering(false)}
                alt={alt}
            />
            <img
                src={hovSource}
                style={{ opacity: isHovering ? 1 : 0, transition: 'opacity 0.3s ease-in-out' }}
                alt={alt}
            />
        </div>
    );
}