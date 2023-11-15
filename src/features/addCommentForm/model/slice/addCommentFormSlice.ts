import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type AddCommentFormSchema } from '../types/addCommentForm';

const initialState: AddCommentFormSchema = {
    error: '',
    text: ''
}

const AddCommentFormSlice = createSlice({
    name: 'AddCommentFormSlice',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        }
    }
})

export const { reducer: addCommentFormReducer } = AddCommentFormSlice
export const { actions: addCommentFormAction } = AddCommentFormSlice
