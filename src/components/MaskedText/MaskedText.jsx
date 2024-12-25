import React from 'react';
import { getAllChar } from './MaskUtility';

const MaskedText = ({text,gused}) => {
    const makingstring=getAllChar(text,gused)
    return (
        <div>
            {makingstring.map((le,i)=>{
                    return (
                        <span key={i}>{le}</span>
                    )
            })}
        </div>
    );
}

export default MaskedText;
