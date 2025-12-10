import Button from '../Components/Button';
import '../Styles/Index.css'
import { useState, type JSX } from 'react'

type NullableNumber = number | null;

function sum(a: number, b: number): number {
    return a + b;
}

const Video8 = (): JSX.Element => {
    const [result, setResult] = useState(null as NullableNumber);
    const [number1, setNumber1] = useState(5 as number);
    const [number2, setNumber2] = useState(3 as number);

    const handleClick = (): void => {
        const res = sum(number1, number2);
        setResult(res);

        setNumber1(Math.floor(Math.random() * 10));
        setNumber2(Math.floor(Math.random() * 10));
    }

    return <>
        <h1 className='center-title'>Curso React. JSX II. Manejo de eventos. Vídeo 8</h1>
        <div className='result-container'>
            <Button onClick={handleClick} text={`Sum ${number1} + ${number2}`} />
            {result !== null && <p>The result is: {result}</p>}
        </div>
    </>
}

export default Video8;