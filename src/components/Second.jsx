import { filterWords } from '../js/filterWords';

const text = "este es un ejemplo Este ejemplo de prueba prueba es estE";

function Second({ textToFilter = text }) {
    const result = filterWords(textToFilter);

    return (
        <div>
            <h2>Ejercicio 2: Filtrar Palabras Repetidas</h2>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ width: '100%' }}>{`Input: ${textToFilter}`}</span>
                <span style={{ width: '100%' }}>{`Output: ${result}`}</span>
            </div>
        </div>
    )
}

export default Second;
