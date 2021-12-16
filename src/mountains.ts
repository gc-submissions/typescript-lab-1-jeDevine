export interface Mountain {
    name: string;
    height: number;
}

let mountains:Array<Mountain> = [
    {name: "kilimanjaro", height: 19341,},
    {name: "Everest", height:29029,},
    {name: "Denali", height:20310}
]

export const findNameOfTallestMountain = (arrayOfMountains:Array<Mountain>):string => {
   let potato = arrayOfMountains.reduce((max, next) => (max.height > next.height ? max : next))
   console.log(potato.name);
   return potato.name;
}

findNameOfTallestMountain(mountains);