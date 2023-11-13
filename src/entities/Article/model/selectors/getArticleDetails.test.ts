import { type StateSchema } from 'app/provider/StoreProvider';
import { type DeepPartial } from '@reduxjs/toolkit';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading
} from 'entities/Article/model/selectors/getArticleDetails';

describe('getArticleDetails.test', () => {
    test('get Article Details', () => {
        const data = {
            id: '1',
            title: 'title'
        }
        const state: DeepPartial<StateSchema> = {
            articlesDetails: {
                data
            }
        }
        expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
    })
    test('get Errors', () => {
        const data = {
            id: '1',
            title: 'title'
        }
        const state: DeepPartial<StateSchema> = {
            articlesDetails: {
                data,
                error: 'some error'
            }
        }
        expect(getArticleDetailsError(state as StateSchema)).toEqual('some error');
    })
    test('get isLoading', () => {
        const data = {
            id: '1',
            title: 'title'
        }
        const state: DeepPartial<StateSchema> = {
            articlesDetails: {
                data,
                isLoading: true
            }
        }
        expect(getArticleDetailsIsLoading(state as StateSchema)).toBe(true);
    })
    test('with empty state', () => {
        const state: DeepPartial<StateSchema> = {
        }
        expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
    })
})
