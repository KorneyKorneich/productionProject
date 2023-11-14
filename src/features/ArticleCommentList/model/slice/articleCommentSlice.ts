import { createEntityAdapter, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type Comment } from 'entities/Comment';
import { type StateSchema } from 'app/provider/StoreProvider';
import { type ArticleCommentsSchema } from '../types/ArticleCommentsSchema';
import {
    fetchCommentsByArticleId
} from 'features/ArticleCommentList/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';

const commentAdapter = createEntityAdapter<Comment>({
    selectId: (comment) => comment.id
})

export const getArticleComment = commentAdapter.getSelectors<StateSchema>(
    (state) => {
        return state.articleComments || commentAdapter.getInitialState()
    })

const commentSlice = createSlice({
    name: 'commentSlice',
    initialState: commentAdapter.getInitialState<ArticleCommentsSchema>({
        error: undefined,
        isLoading: false,
        ids: [],
        entities: {}
    }),
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByArticleId.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchCommentsByArticleId.fulfilled, (state, action: PayloadAction<Comment[]>) => {
                state.isLoading = false;
                commentAdapter.setAll(state, action.payload)
            })
            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }

})

export const { reducer: ArticleCommentReducer } = commentSlice
