import { type StateSchema } from 'app/provider/StoreProvider';
import { type AsyncThunkAction, type DeepPartial } from '@reduxjs/toolkit';
import { type AxiosStatic } from 'axios';
import axios from 'axios';

type ActionCreatorType<Return, Arg, RejectValue> = (arg: Arg) => AsyncThunkAction<Return, Arg, { rejectValue: RejectValue }>

jest.mock('axios');

const mockedAxios = jest.mocked(axios, {
    shallow: false
});

export class TestAsyncThunk<Return, Arg, RejectValue> {
    dispatch: jest.MockedFn<any>
    getState: () => StateSchema
    actionCreator: ActionCreatorType<Return, Arg, RejectValue>
    api: jest.MockedFunctionDeep<AxiosStatic>
    navigate: jest.MockedFn<any>

    constructor (actionCreator: ActionCreatorType<Return, Arg, RejectValue>,
        state?: DeepPartial<StateSchema>
    ) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn(() => state as StateSchema);
        this.api = mockedAxios;
        this.navigate = jest.fn();
    }

    async callFunc (arg: Arg) {
        const action = this.actionCreator(arg);
        const result =
            await action(this.dispatch, this.getState, { api: this.api, navigate: this.navigate })

        return result;
    }
}
