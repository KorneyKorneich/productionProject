import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import {
    fetchCommentsByArticleId
} from './fetchCommentsByArticleId';

describe('fetchProfileData.test', () => {
    const data = [
        {
            articleId: '1',
            userId: '1',
            text: '11111',
            id: '1g3j8XP'
        },
        {
            articleId: '1',
            userId: '1',
            text: 'hello world',
            id: 'PD026vy'
        },
        {
            articleId: '1',
            userId: '1',
            text: 'hi',
            id: '6TvYkj0'
        }
    ]

    test('success get data', async () => {
        const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callFunc('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error fetching', async () => {
        const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callFunc('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
    });
});
