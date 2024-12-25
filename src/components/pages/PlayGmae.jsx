import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import MaskedText from '../MaskedText/MaskedText';

const PlayGmae = () => {
    // const[searchParams]= useSearchParams()
    // const {text}=useParams()
    const {state}=useLocation()
    return (
        <div className='m-4'>

            {(state?.wordGiven )  && (
                <>
                 <h1>Play gmae {state.wordGiven}</h1>
                 <MaskedText text={state.wordGiven} gused={["h"]}/>
                </>

            ) ?<>
            <h1>Play gmae {state.wordGiven}</h1>
            <MaskedText text={state.wordGiven} gused={["h"]}/>
            </>  : <h1 >Take  a tast for playing game from any where and come back</h1> }
            <br />
            <Link to='/start' className='text-blue-500'> Start Game</Link>
            <br />
            <Link to='/' className='text-blue-500'> Home Page</Link>
        </div>
    );
}

export default PlayGmae;
