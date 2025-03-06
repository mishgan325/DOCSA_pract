import React from 'react';
import DialogItem from './DialogItem';

const Dialogs = () => {

    const dialogsData = [
        { id: 1, name: 'Шибут' },
        { id: 2, name: 'Михаил' },
        { id: 3, name: 'Владимирович' },
    ];

    return (
        <div>
            <h1>Dialogs</h1>
            {dialogsData.map((dialog) => (
                <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} />
            ))}
        </div>
    );
};

export default Dialogs;
