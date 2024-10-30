const url = "https://catfact.ninja/breeds";

export async function getData() {
    try {
        const response = await fetch(url);
        const datos = await response.json();
        return datos.data;
    } catch (error) {
        console.error('Error al obtener la información:', error);
    }
}

function sortByPattern(breeds) {
    const clonedBreeds = structuredClone(breeds); // Clone data to ensure immutability

    for (let i = 1; i < clonedBreeds.length; i++) {
        let j = i - 1;
        const currentBreed = clonedBreeds[i];

        while (j >= 0 && currentBreed.pattern < clonedBreeds[j].pattern) {
            clonedBreeds[j + 1] = clonedBreeds[j];
            j--;
        }

        clonedBreeds[j + 1] = currentBreed;
    }
    
    return clonedBreeds;
}

export async function getBreeds() {
    const breedsData = await getData();
    const sortedBreedts = sortByPattern(breedsData);

    return { sortedBreedts, breedsData };
}
