import '../Styles/Index.css';
import thisIsFine from '../Assets/this-is-fine.gif';
import Button from '../Components/Button';
import { useRef } from 'react';

const Video9 = () => {
    const gifRef = useRef<HTMLImageElement>(null);

    const moreLarger = (): void => {
        if (gifRef.current) {
            const currentWidth = gifRef.current.width;
            gifRef.current.width = currentWidth + 20;
        }
    }

    const moreSmaller = (): void => {
        if (gifRef.current) {
            const currentWidth = gifRef.current.width;
            gifRef.current.width = currentWidth - 20;
        }
    }

    return (
        <>
            <h1 className='center-title'>Curso React. JSX III. useState vs useRef. Vídeo 9</h1>
            <div className='result-container'>
                <img ref={gifRef} src={thisIsFine} alt="This is fine meme" width="400" />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '5px', marginTop: '20px' }}>
                <Button onClick={moreLarger} text='More larger' />
                <Button onClick={moreSmaller} text='More smaller' />
            </div>
        </>
    );
}

export default Video9;