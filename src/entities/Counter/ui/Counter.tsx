import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../model/slice/CounterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useTranslation } from 'react-i18next';

const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const handleIncrement = () => {
        dispatch(counterActions.increment());
    }
    const handleDecrement = () => {
        dispatch(counterActions.decrement());
    }

    const { t } = useTranslation();

    return (
        <div>

            <h1 data-testid={'value-title'}>{counterValue}</h1>
            <button data-testid={'inc-button'} onClick={handleIncrement}>{t('Инкрементировать')}</button>
            <button data-testid={'dec-button'} onClick={handleDecrement}>{t('Декрементировать')}</button>

        </div>
    );
};

export default Counter;
