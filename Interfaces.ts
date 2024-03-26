interface User {
    name: string
    readonly id: number
    email: string
    isActive: boolean
    setTrial(): string
}

const user: User = {
    setTrial: () => {
        return "xyz"
    },
    email: "a@a.com",
    name: "haha",
    isActive: true,
    id: 123,
    age: 21
}

//  re-opning of interfaces
interface User {
    age: number
}

// inheritace

interface Admin extends User {
    role: "admin" | "boss" | "ceo"
}

let user2: Admin = {
    setTrial: () => {
        return "xyz"
    },
    email: "a@a.com",
    name: "haha",
    isActive: true,
    id: 123,
    age: 21,
    role : "ceo"
}

// difference b/w type and inheritance

// --> re-opening is not allowed in type aliases
// --> inhertinace in type

type Roza = {
    day: number
    data : string
}
type Ashra = Roza & {
    ashraDua : string
    ashraNumber : number
}