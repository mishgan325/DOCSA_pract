import React from 'react';
import { useParams } from 'react-router-dom';

const Dialog = () => {

    const { id } = useParams();


    const dialogsData = [
        { id: 1, name: 'Шибут', message: 'Первое сообщение' },
        { id: 2, name: 'Михаил', message: 'Второе сообщение' },
        { id: 3, name: 'Владимирович', message: 'Третье сообщение' },
    ];


    const dialog = dialogsData.find((d) => d.id === parseInt(id));

    if (!dialog) {
        return <div>Dialog not found</div>;
    }

    return (
        <div>
            <h1>{dialog.name}</h1>
            <p>{dialog.message}</p>
        </div>
    );
};

export default Dialog;
