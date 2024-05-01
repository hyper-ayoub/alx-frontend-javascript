export default function cleanSet(Set, startString) {
    return Array.from(Set)
        .filter(value => value.startsWith(startString))
        .map(value => value.slice(startString.length))
        .join('-');
}

