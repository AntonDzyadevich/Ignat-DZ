import React, {useState} from "react";
import Affairs from "./Affairs";


export type AffairPriorityType = "high" | "middle" | "low";

export type AffairType = {
    _id: number
    name: string
    priority: string
}
export type FilterType = "all" | AffairPriorityType;


const defaultAffairs: Array<AffairType> = [
    {_id: 1, name: "React", priority: "high"},
    {_id: 2, name: "Anime", priority: "low"},
    {_id: 3, name: "Games", priority: "low"},
    {_id: 4, name: "Work", priority: "high"},
    {_id: 5, name: "Html & css", priority: "middle"},
];


export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => {
    if (filter === "all") return affairs
    if (filter === "high") return affairs.filter(a => a.priority === "high")
    if (filter === "middle") return affairs.filter(a => a.priority === "middle")
    if (filter === "low") return affairs.filter(a => a.priority === "low")
    return affairs;
}

export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => {
    return affairs.filter(a => a._id !== _id)

}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs);


    const [filter, setFilter] = useState<FilterType>("all");

    const filteredAffairs = filterAffairs(affairs, filter);

    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id));


    return (
        <div>
            homeworks 2
            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
        </div>
    )
}

export default HW2;
