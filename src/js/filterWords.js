const text = "este es un ejemplo Este ejemplo de prueba prueba es estE";

export function filterWords(text) {
    const textAsArray = text.split(' ');

    const value = textAsArray.reduce((accumulator, name, index) => {
        const nameRegex = new RegExp(`\\b${name}\\b`, "gi");

        if (!accumulator.match(nameRegex)) {
            const valueToAdd = index ? `${accumulator} ${name}` : name;
            return valueToAdd;
        }
        
        return accumulator;
    }, '');
   return value;
}

filterWords(text);
