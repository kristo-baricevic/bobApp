import { useState } from 'react';

export function Button ({tag}){

    const [btnState, setBtnState] = useState(false);

    function handleClick(){
        setBtnState(btnState => !btnState);
    }

    let toggleClassCheck = btnState ? ' active': null;

    return (
        <button
        className={`pill btn${toggleClassCheck}`}
        onClick={handleClick}
        >#{tag}</button>
    )
}
