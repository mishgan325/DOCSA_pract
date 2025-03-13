import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCheckbox } from '../../store/reducers/checkbox/actions';

const ReduxCheckbox = (props) => {
    const isChecked = useSelector(state => state.checkbox.isChecked);
    const dispatch = useDispatch();

    const handleCheckboxChange = () => {
        dispatch(toggleCheckbox());
        alert(`Checkbox state: ${!isChecked ? 'checked' : 'unchecked'}`);
    };

    return (
        <div>
            <h1>Заглушка {props.value}</h1>
            <p>Это страница-заглушка {props.value}</p>
            <label>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
                Чекбокс с redux
            </label>
        </div>
    );
};

export default ReduxCheckbox;