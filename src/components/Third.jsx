import { getDateDifference } from '../js/date';
const startDate = "2023-08-01"
const endDate = "2023-08-15"

function Third() {
    const result = getDateDifference(startDate, endDate);
  
    return (
        <div>
            <h2>Ejercicio 3: Calcular la Diferencia entre Fechas</h2>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ width: '100%' }}>{`Input: ${startDate} ${endDate}`}</span>
                <span style={{ width: '100%' }}>{`Output: ${result}`}</span>
            </div>
        </div>
    )
}

export default Third
