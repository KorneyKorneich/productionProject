import { type StateSchema } from 'app/provider/StoreProvider';
import { getArticleCommentsError, getArticleCommentsIsLoading } from 'features/ArticleCommentList';
import { type DeepPartial } from '@reduxjs/toolkit';

describe('comments.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            articleComments: {
                entities: {},
                ids: [],
                error: 'error'
            }
        }
        expect(getArticleCommentsError(state as StateSchema)).toBe('error');
    });
    test('should return isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            articleComments: {
                entities: {},
                ids: [],
                isLoading: true
            }
        }
        expect(getArticleCommentsIsLoading(state as StateSchema)).toBe(true);
    })
})
