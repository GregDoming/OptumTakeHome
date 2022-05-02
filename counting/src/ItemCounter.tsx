import React, { useState } from 'react';

interface ItemProps {
    onProcessClick: () => void,
    isDisabled: boolean
}

//Wanted to demonstrate React.FC use although is not required currently
const ItemCounter : React.FC<ItemProps> = ({ onProcessClick, isDisabled }) => {
    const [count, setCount] = useState(0)

    const handleItemAddClick = (): void => {
        setCount(count + 1)
    }

    const handleItemRemoveClick = (): void => {
        //Prevented count from going below 0 for logical reasons
        if (count === 0) return
        setCount(count - 1)
    }

    return (
        <div>
            <h2>Items: {count > 10 ? "10+" : count}</h2>
            <button onClick={handleItemAddClick} disabled={isDisabled}>Add Item</button>
            <button onClick={handleItemRemoveClick} disabled={isDisabled}>Remove Item</button>
            <button onClick={onProcessClick} disabled={isDisabled}>Process</button>
        </div>
    )
}

export default ItemCounter;
