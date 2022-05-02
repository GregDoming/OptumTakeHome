import React, { useState } from 'react';
import ItemCounter from './ItemCounter'
import './CounterContainer.css'



const CounterContainer: React.FC = () => {
    const [isDisabled, setIsDisabled] = useState(false)

    const handleDisableClick = (): void => {
        setIsDisabled(!isDisabled);
    }

    const onProcessClick = (): void => {
        console.log("Process Button Clicked!")
    }

    return (
        <div className={isDisabled ? "counter-container-disabled" : "counter-container"}>
            <h1>Counter</h1>
            <button onClick={handleDisableClick}>{isDisabled ? "Click to Activate" : "Click to Disable"}</button>
            <ItemCounter isDisabled={isDisabled} onProcessClick={onProcessClick}/>
        </div>
    )


}

export default CounterContainer;
