
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';

const Appointments = () => {
    const { parkId } = useParams();
    const { currencySymbol, parking } = useContext(AppContext); // Access parking from context
    const dayOfWeek = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

    const [parkInfo, setParkInfo] = useState(null);
    const [parkSlots, setParkSlots] = useState([]);
    const [slotIndex, setSlotIndex] = useState(0);
    const [slotTime, setSlotTime] = useState('');

    const fetchParkInfo = async () => {
        const parkInfo = parking.find(park => park.id === parkId);
        setParkInfo(parkInfo);
    };

    const getAvailableSlots = async () => {
        setParkSlots([]);

        // Current date
        let today = new Date();
        for (let i = 0; i < 7; i++) {
            // Date with index
            let currentDate = new Date(today);
            currentDate.setDate(today.getDate() + i);

            // Set end time of date in index
            let endTime = new Date();
            endTime.setDate(today.getDate() + i);
            endTime.setHours(21, 0, 0);

            // Setting hours
            if (today.getDate() === currentDate.getDate()) {
                currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
                currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
            } else {
                currentDate.setHours(10);
                currentDate.setMinutes(0);
            }

            let timeSlots = [];

            while (currentDate < endTime) {
                let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

                // Add slot to array
                timeSlots.push({
                    datetime: new Date(currentDate),
                    time: formattedTime
                });

                // Increment time by 30 min
                currentDate.setMinutes(currentDate.getMinutes() + 30);
            }

            setParkSlots(pre => ([...pre, timeSlots]));
        }
    };

    useEffect(() => {
        fetchParkInfo();
    }, [parkId]);

    useEffect(() => {
        getAvailableSlots();
    }, [parkInfo]);

    useEffect(() => {
        console.log(parkSlots);
    }, [parkSlots]);

    return (
        <div>
            {/* Parking detail */}
            <div className='flex flex-col sm:flex-row gap-4'>
                <div>
                    <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={assets.upload_area} alt="" />
                </div>

                <div className='flex-1 border border-grey -400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
                    {/* Park info name location */}
                    <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
                        
                        {/* {parkInfo?.name}  */}
                        Parking Name
                        <img className='w-5' src={assets.verified_icon} alt="" />
                    </p>

                    <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
                        <p>
                           
                            {/* {parkInfo?.location} */}
                            Parking Location 
                        </p>
                    </div>

                    {/* Parking about */}
                    <div>
                        <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>
                            About <img src={assets.info_icon} alt='' />
                        </p>
                        <p className='text-sm text-gray-500 max-w-[700px] mt-1'>Parking details some add details:</p>
                    </div>

                    <p className='text-gray-500 font-medium mt-4'>
                        Appointment or Booking Fee: <span className='text-gray-600'>{currencySymbol}{parkInfo?.fees}</span>
                    </p>
                </div>
            </div>

            {/* Parking slots */}
            <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
                <p className=''>Booking Slots</p>
                <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
                    {
                        parkSlots.length > 0 && parkSlots.map((item, index) => (
                            <div onClick={() => setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-primary text-white' : 'border border-gray-200'}`} key={index}>
                                <p>{item[0] && dayOfWeek[item[0].datetime.getDay()]}</p>
                                <p>{item[0] && item[0].datetime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                            </div>
                        ))
                    }
                </div>

                <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
                    {parkSlots.length > 0 && parkSlots[slotIndex].map((item, index) => (
                        <p onClick={() => setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-white' : 'text-gray-400 border border-gray-400'}`} key={index}>
                            {item.time.toLowerCase()}
                        </p>
                    ))}
                </div>

                <button className='bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6'>Book Appointment</button>
            </div>
        </div>
    );
};

export default Appointments;