

type NoobDeveloper ={
    name: string,
}

// type JuniorDeveloper={
//     name: string,
//     expertise: string
//     experience: number
// }
type JuniorDeveloper= NoobDeveloper &{
    expertise: string
    experience: number
}

// enum Level{
//     jun ior ='junior',
//     senior = 'senior',
//     mid = 'mid'
// }

type NextLevelDeveloper = JuniorDeveloper &{
    leadershipExperience: number;
    level: "Senior" | "Lead" | "Manager" | "Director"
}

const newDeveloper: NoobDeveloper | JuniorDeveloper = {
    name: "John",
    expertise: "Frontend",
    experience: 1
}

const developer : NextLevelDeveloper = {
    name: "Peter",
    expertise: "Frontend",
    experience: 5,
    leadershipExperience: 2,
    level: "Lead"
}
