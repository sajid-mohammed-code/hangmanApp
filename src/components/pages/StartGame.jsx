import { Link } from "react-router-dom";
import InputFormConteiner from "../InputForm/InputFormConteiner";

function StartGmae(){
    return(
        <>
        <h1>Start game</h1>
        <InputFormConteiner/>
        <Link to='/play' className='text-blue-500'> Play Game</Link>
        <Link to='/' className='text-blue-500'> Home Page</Link>

        </>
    )

}

export default StartGmae;