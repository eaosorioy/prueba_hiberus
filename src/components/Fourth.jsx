import { getBreeds } from '../js/getRequest';
import { useEffect, useState } from 'react';

function Fourth() {
    const [result, setResult] = useState({ sortedBreedts: [], breedsData: [] });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getBreeds()
            .then((razas) => {
                setResult(razas);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <h2>Ejercicio 4: Manejo de Promesas y Asincronía</h2>
            {!loading ? (
                <div style={{ display: 'flex', flexDirection: 'row', columnGap: '40px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <h3 style={{ marginLeft: '40px' }}>Original data</h3>
                        <ul style={{ width: '100%' }}>
                            {result.breedsData.map((breed, key) => {
                                return (
                                    <li key={key} style={{ width: '100%', display: 'flex', flexDirection: 'column', margin: '10px 0', borderBottom: '1px solid black' }}>
                                        <span style={{ width: '100%' }}>
                                            <strong>Breed:</strong> {breed.breed}
                                        </span>
                                        <span style={{ width: '100%' }}>
                                            <strong>Country:</strong> {breed.country}
                                        </span>
                                        <span style={{ width: '100%' }}>
                                            <strong>Origin:</strong> {breed.origin}
                                        </span>
                                        <span style={{ width: '100%' }}>
                                            <strong>Coat:</strong> {breed.coat}
                                        </span>
                                        <span style={{ width: '100%', color: 'red' }}>
                                            <strong>Pattern:</strong> {breed.pattern}
                                        </span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <h3 style={{ marginLeft: '40px' }}>Sorted data</h3>
                        <ul style={{ width: '100%' }}>
                            {result.sortedBreedts.map((breed, key) => {
                                return (
                                    <li key={key} style={{ width: '100%', display: 'flex', flexDirection: 'column', margin: '10px 0', borderBottom: '1px solid black' }}>
                                        <span style={{ width: '100%' }}>
                                            <strong>Breed:</strong> {breed.breed}
                                        </span>
                                        <span style={{ width: '100%' }}>
                                            <strong>Country:</strong> {breed.country}
                                        </span>
                                        <span style={{ width: '100%' }}>
                                            <strong>Origin:</strong> {breed.origin}
                                        </span>
                                        <span style={{ width: '100%' }}>
                                            <strong>Coat:</strong> {breed.coat}
                                        </span>
                                        <span style={{ width: '100%', color: 'red' }}>
                                            <strong>Pattern:</strong> {breed.pattern}
                                        </span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            ) : <span>Cargando datos...</span> }
        </div>
    )
}

export default Fourth;
