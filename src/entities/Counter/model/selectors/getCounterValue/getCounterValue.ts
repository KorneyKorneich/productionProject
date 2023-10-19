import { createSelector } from 'reselect';
import { getCounter } from '../getCounter/getCounter';
import { type CounterSchema } from 'entities/Counter';

export const getCounterValue = createSelector(
    getCounter,
    (counter: CounterSchema) => counter.value
);
