import { groupNames } from '../js/groupNames';

const listNames = [
    'Ana',
    'Alberto',
    'Beatriz',
    'Bruno',
    'Carlos',
    'Clara',
    'marta',
    'Monica'
];

function First() {
    const result = groupNames(listNames);

    return (
        <div>
            <h2>Ejercicio 1: Agrupar Nombres por Inicial</h2>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ width: '100%' }}>{`Input: ${listNames}`}</span>
                <span style={{ width: '100%' }}>{`Output: ${JSON.stringify(result)}`}</span>
            </div>
        </div>
    )
}

export default First
