import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import profile from '../../Assets/Images/profile.jpg'
import './Calculation.css'

const Calculation = ({ exerciseTime }) => {
    const [breakTime, setbreakTime] = React.useState(0)
    useEffect(() => {
        const btime = parseInt(localStorage.getItem("breakTime"))
        if (btime) {

            setbreakTime(btime)
        }
        else {
            setbreakTime(0)
        }

    }, [])
    const addBreakTime = (time) => {
        localStorage.setItem("breakTime", JSON.stringify(time))
        setbreakTime(time)
    }

    const activity = () => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
        })
    }

    return (
        <div className='add-break-section'>
            <div className='personal-section'>
                <img src={profile} className='profile-img' alt="" />
                <h5 className='text'>Instructor</h5>
            </div>
            <div>
                <h3 className='text'>Add A Break</h3>
                <div className='add-break'>
                    <button className='btn-custom' onClick={() => addBreakTime(30)}>30min</button>
                    <button className='btn-custom' onClick={() => addBreakTime(40)}>40min</button>
                    <button className='btn-custom' onClick={() => addBreakTime(35)}>35min</button>
                    <button className='btn-custom' onClick={() => addBreakTime(50)}>50min</button>
                    <button className='btn-custom' onClick={() => addBreakTime(58)}>60min</button>
                </div>

            </div>
            <div>
                <h3 className='mt-5 text'>Exercise Details</h3>
                <p className='break-customize'>Exercise time: <span>{exerciseTime}s</span> </p>
                <p className='break-customize'>Break time: <span>{breakTime}min</span></p>
            </div>

            <button className='btn-sty w-100' onClick={activity}>Activity Completed</button>
        </div>
    );
};

export default Calculation;