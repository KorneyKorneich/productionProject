import { getCounterValue } from '../getCounterValue/getCounterValue';
import { type DeepPartial } from 'redux';
import { type StateSchema } from 'app/provider/StoreProvider';

describe('getCounterValue', () => {
    test('', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 }
        }
        expect(getCounterValue(state as StateSchema)).toEqual(10);
    })
})
