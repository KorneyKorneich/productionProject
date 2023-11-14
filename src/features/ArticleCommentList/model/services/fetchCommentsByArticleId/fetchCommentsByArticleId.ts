import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/provider/StoreProvider';
import { type Comment } from 'entities/Comment';

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const fetchCommentsByArticleId = createAsyncThunk<Comment[], string | undefined, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (articleId, thunkAPI) => {
        const {
            extra,
            rejectWithValue,
            dispatch
        } = thunkAPI;
        if (!articleId) {
            return rejectWithValue('error');
        }
        try {
            const response = await extra.api.get<Comment[]>('/comments', {
                params: {
                    articleId,
                    _expand: 'user'
                }
            });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    }
);
