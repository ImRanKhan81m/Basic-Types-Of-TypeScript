type CrushType ={
    name: string,
    age?: number,
    profession: string,
    address: string
}

const crush1: CrushType = {
    name: "John",
    age: 20,
    profession: "Developer",
    address: "New York"
}

const crush2: CrushType = {
    name: "Peter",
    profession: "Designer",
    address: "London"
}

type CrushMarriedType = boolean;

const isCrushMarried : CrushMarriedType = false;
