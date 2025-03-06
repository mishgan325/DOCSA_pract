import React from 'react';
import { Link } from 'react-router-dom';

const DialogItem = (props) => {

    const path = `/dialogs/${props.id}`;

    return (
        <div className="dialog-item">

            <Link to={path}>{props.name}</Link>
        </div>
    );
};

export default DialogItem;
