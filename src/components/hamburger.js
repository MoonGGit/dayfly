import React from 'react';

export default function({ label, className, ...rest }){
    return(
        <div className={className} {...rest}>
            {label}
        </div>
    )
}