import { useEffect, useState } from 'react';
import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
    component: Index,
});

type Riddle = {
    id: string;
    contents: string;
    answers: {
        id: string;
        text: string;
    }[];
};

const Index = () => {
    const date = new Date();
    const [id, setId] = useState<string>();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // +1 because months are 0-indexed
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const hoursStr = Number(hours);
    const minutes = String(date.getMinutes()).padStart(2, '0');
    let workInterval = 'Busy Times';

    if (hoursStr >= 11 && hoursStr > 17) {
        workInterval = 'Easy jets';
    } else if (hoursStr >= 17 && hoursStr < 23) {
        workInterval = 'Returning pips';
    } else if (hoursStr >= 23 && hoursStr < 5) {
        workInterval = 'Sleepies';
    }

    useEffect(() => {
        fetch('http://localhost:3000/riddles')
            .then((response) => response.json())
            .then((riddles: Riddle[]) => {
                const ids = riddles.map(({ id: riddleId }) => riddleId);
                setId(ids[Math.floor(Math.random() * ids.length)]);
            });
    }, []);

    return (
        <main className="text-lg">
            <div>
                <p>Work Interval: {workInterval}</p>
                <p>
                    Timestamp: {year}-{month}-{day} {hours}
                    {minutes}
                </p>
                <div className="p-20 text-center">
                    {id && (
                        <Link
                            to={`/riddle/${id}`}
                            className="border border-blue-500 p-5"
                            data-test="riddle-link"
                        >
                            Resolve random riddle
                        </Link>
                    )}
                </div>
            </div>
        </main>
    );
};
