interface deepFunction {
    (deep?: Number): null
}

interface stopFunction {
    (): null
}

export default function (doback: deepFunction, duration?: Number, callback?: deepFunction): stopFunction