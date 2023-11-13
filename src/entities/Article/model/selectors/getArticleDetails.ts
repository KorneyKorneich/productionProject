import { type StateSchema } from 'app/provider/StoreProvider';

export const getArticleDetailsData = (state: StateSchema) => state.articlesDetails?.data;
export const getArticleDetailsIsLoading = (state: StateSchema) => state.articlesDetails?.isLoading;
export const getArticleDetailsError = (state: StateSchema) => state.articlesDetails?.error;
