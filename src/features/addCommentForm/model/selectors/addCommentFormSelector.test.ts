import { type DeepPartial } from '@reduxjs/toolkit';
import { type StateSchema } from 'app/provider/StoreProvider';
import {
    getAddCommentFormError,
    getAddCommentFormText
} from 'features/addCommentForm/model/selectors/addCommentFormSelector';

describe('addCommentFormSelector.test', () => {
    test('should return text', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                text: 'some text'
            }
        }
        expect(getAddCommentFormText(state as StateSchema)).toBe('some text');
    });
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                error: 'some error'
            }
        }
        expect(getAddCommentFormError(state as StateSchema)).toBe('some error');
    });
    test('should return undefined', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getAddCommentFormError(state as StateSchema)).toBe(undefined);
    });
    test('should return undefined', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getAddCommentFormText(state as StateSchema)).toBe(undefined);
    })
})
