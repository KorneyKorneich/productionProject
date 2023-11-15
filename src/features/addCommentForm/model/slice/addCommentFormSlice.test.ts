import { type AddCommentFormSchema } from 'features/addCommentForm';
import { addCommentFormAction, addCommentFormReducer } from 'features/addCommentForm/model/slice/addCommentFormSlice';

describe('addCommentFormSlice.test', () => {
    test('set text', () => {
        const state: DeepPartial<AddCommentFormSchema> = {
            text: 'text'
        }

        expect(addCommentFormReducer(state as AddCommentFormSchema, addCommentFormAction.setText('12345')))
            .toEqual({ text: '12345' });
    })
})
