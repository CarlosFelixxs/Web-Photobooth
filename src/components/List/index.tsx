import React from 'react';
import "./styleList.css";


function List() {
    const benefit = [{
        benefit: '>_Neural style transfer algorithm'
    }, {
        benefit: '>_Running only using CPU'
    }, {
        benefit: '>_Fast and easy deployment'
    }, {
        benefit: '>_Post-processing using Cloud'
    }]
    return (

        <div className='list'>
            <aside>
                    {benefit.map((item, index) => (
                        <ul key={index}>
                            <h2> {item.benefit}</h2>
                        </ul>
                    ))}
            </aside>
        </div>
    )
}

export default List;