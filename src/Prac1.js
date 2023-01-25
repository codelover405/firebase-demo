import React, { useState } from 'react'

const Prac1 = () => {
    const friendsArray = [
        {
            id: 1,
            name: "handy",
            age: 19,
            hobbies: ["Cooking", "Reading"],
        },
        {
            id: 2,
            name: "Candy",
            age: 18,
            hobbies: ["Bathing", "Eating"],
        },
        {
            id: 3,
            name: "mandy",
            age: 20,
            hobbies: ["Making Videos", "Dancing", "Coding"],
        },
    ];

    const initial = 0;
    const [count, setCount] = useState(initial)
    const increment = () => {
        setCount(count + 1)
    }
    return (
        <>
            <div>Prac1</div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}> Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(initial)}>Reset</button>
            <button onClick={() => increment}>Increment by 5</button>

            <ul>
                {friendsArray.map((friend,index) => {
                    return (
                        <div className='mapping' key={friend.id}>
                            <li> {friend.name}</li>
                            <li>{friend.age}</li>
                            <li>
                                {
                                    friend?.hobbies?.map((items,index) => {
                                        return (<div>{items}</div>)
                                    })
                                }
                            </li>
                        </div>
                    )
                })}
            </ul>

            <div className='details'>
                <h2>Hello</h2>
                <h3>GOod morning ,mittal</h3>
            </div>
        </>
    )
}

export default Prac1;