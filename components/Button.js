import { useState } from 'react';
import { getServerSideProps } from '../pages/index.js';


getServerSideProps;


export function Button ({tag}){

    const [btnState, setBtnState] = useState(false);

    function handleClick(){
        setBtnState(btnState => !btnState);
    }

    let toggleClassCheck = btnState ? ' active': null;

    return (
        <button
        className={`btn${toggleClassCheck}`}
        onClick={handleClick}
        >{tag}</button>
    )
}
