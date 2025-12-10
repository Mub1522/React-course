import '../Styles/Index.css';

function sum(a: number, b: number): number {
  return a + b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function Video7() {
  const styles = {
    color: 'blue',
  }

  const element = <h1 className='center-title'>Curso React. JSX I. Vídeo 7</h1>
  const element2 = <h2 className='center-title' style={styles}>The sum is: {sum(5, 10)}</h2>
  const element3 = <h2 className='center-title' style={styles}>The product is: {multiply(5, 10)}</h2>

  return (
    <>
      {element}
      {element2}
      {element3}
    </>
  )
}

export default Video7
