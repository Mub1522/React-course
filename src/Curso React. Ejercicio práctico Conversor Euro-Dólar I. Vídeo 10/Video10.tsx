import { useRef } from 'react';
import '../Styles/Index.css';
import Button from '../Components/Button';
import DollarsBackground from '../Assets/Imgs/dollars-background.webp';

const Video10 = () => {
    const backgroundStyles = {
        backgroundImage: `url(${DollarsBackground})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '20px',
    };

    const labelStyles = {
        backgroundColor: 'white',
        padding: '2px 5px',
        marginBottom: '10px',
    };

    const euroRef = useRef<HTMLInputElement>(null);
    const resultRef = useRef<HTMLSpanElement>(null);

    const convertCurrency = (): void => {
        const euroValue = euroRef.current?.value;

        if (euroValue && !isNaN(Number(euroValue))) {
            const dollars = (Number(euroValue) * 1.18).toFixed(2);

            if (resultRef.current) {
                resultRef.current.textContent = `Dollars: ${dollars} $`;
            }
        } else {
            if (resultRef.current) {
                resultRef.current.textContent = 'Please enter a valid number';
            }
        }
    }

    return <>
        <h1 className='center-title'>Curso React. Ejercicio práctico. Conversor Euro-Dólar I. Vídeo 10</h1>
        <div className='result-container' style={backgroundStyles}>
            <label style={labelStyles}>Euros: </label>
            <input type="text" ref={euroRef} />
            <br />
            <Button onClick={convertCurrency} text='Convert'></Button>
            <br />
            <span ref={resultRef}></span>
        </div>
    </>
}

export default Video10