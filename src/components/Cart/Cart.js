import React, { useState } from 'react';
import './Cart.css'

const Cart = ({ data, setExerciseTime }) => {
    const [isClick, setisClick] = useState(false)
    console.log(data)
    const handleTime = () => {
        setExerciseTime((time) => time + data.timeRequired)
        setisClick(true)

    }
    return (
        <div className={'col-12 col-md-6 col-lg-4 mb-4 mt-4'}>
            <div className="card custom-height">
                <img src={data.img} className="card-img-top img-custom-height-and-width" alt="..." />
                <div className="card-body">
                    <h3 className="card-title">{data.name}</h3>
                    <p className="card-text custom-description">{data.dec}</p>
                    <p className='text'>For Age : {data.age}</p>
                    <p className='text'>Time required :{data.timeRequired}s</p>
                    <div>
                        <button className='btn-width' onClick={handleTime} type={'button'}>{isClick ? "Add" : "Add to List"}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;