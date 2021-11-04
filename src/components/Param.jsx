import React from 'react';
import { useParams } from 'react-router';

const Param = (props) => {
    const { param } = useParams();
    const { color1 } = useParams();
    const { color2 } = useParams();
    
    return (
    <div style={{ 
        color: color1, 
        backgroundColor: color2,
        height: 150,
        textAlign: 'center',
        fontSize: 50
     }}>
        The {isNaN(parseInt(param)) ? 'word' : 'number'} is { param }.
    </div>
    )
}

export default Param;