import React from 'react';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const onClickhendel=()=>{
        navigate(`/play`)
    }
    const onClickhendel2=()=>{
        navigate(`/start`)
    }

    return (
        <div>
            <h1>Home</h1>
            <div>

            <Button onclickk={onClickhendel2} text={"Start Maltiplayer Game"} styleType='warning' />
            </div>
            <div>
            <Button onclickk={onClickhendel} text={'Singel plater Game'} styleType="success" />
            </div>
                
        </div>
    );
}

export default Home;
