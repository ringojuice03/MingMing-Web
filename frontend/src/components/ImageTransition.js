import {useState} from 'react';
import '../App.css';

export const ImageTransition = ({ defSource, hovSource, alt }) => {
    const [isHovering, setIsHovering] = useState(false);

    return(
        <div className={`image-wrapper ${isHovering ? "hovered" : ""} `}>
            <img
                className="hovSource"
                src={hovSource}
                alt={alt}
            />
            <img
                className="defSource"
                src={defSource}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                alt={alt}
            />
        </div>
    );
}