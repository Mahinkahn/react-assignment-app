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
        <div className={'col-12 col-md-6 col-lg-4 mb-4'}>
            <div className="card custom-height">
                <img src={data.img} className="card-img-top img-custom-height-and-width" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>
                    <p className="card-text custom-description">{data.dec}</p>
                    <p>For Age : {data.age}</p>
                    <p>Time required :{data.timeRequired}s</p>
                    <div>
                        <button className='btn btn-primary btn-width' onClick={handleTime} type={'button'}>{isClick ? "Added" : "Add to List"}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;