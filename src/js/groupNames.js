export function groupNames(listNames) {
    const value = listNames.reduce((accumulator, name) => {
        const firstLetter = name[0].toUpperCase();
        if (!accumulator[firstLetter]) {
            accumulator[firstLetter] = [name];
        } else {
            accumulator[firstLetter].push(name);
        }

        return accumulator;
    }, {});
    return value;
};
