import React, {useState} from 'react';
import MyGridListButton from "../UI/buttons/MyGridListButton";
import Cards from "../cards/Cards";

const MyEventList = () => {
    const [viewMode, setViewMode] = useState("list");
    const data = [
        {
            id: 1,
            name: "Мероприятие 1 ",
        },
        {
            id: 2,
            name: "Мероприятие 2 ",
        },
        {
            id: 3,
            name: "Мероприятие 3 ",
        },
    ];

    return (
        <div className="mt-5 w-full ">
            <MyGridListButton setViewMode={setViewMode} viewMode={viewMode}></MyGridListButton>
            <div className="text-center items-center justify-center">
                {viewMode === "list" ? (
                    <ul>
                        {data.map((item) => (
                            <li key={item.id}>{item.name}</li>
                        ))}
                    </ul>
                ) : (
                    <Cards></Cards>
                )}
            </div>
        </div>
    );
};

export default MyEventList;