import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AddCommentForm.module.scss'
import { useTranslation } from 'react-i18next';
import { Button, Input } from 'shared/ui';
import { ButtonTheme } from 'shared/ui/Button/Button';
import DynamicModuleLoader, { type ReducersList } from 'shared/lib/components/DynamycModuleLoader/DynamicModuleLoader';
import {
    addCommentFormAction,
    addCommentFormReducer
} from '../../model/slice/addCommentFormSlice';
import { useSelector } from 'react-redux';
import {
    getAddCommentFormError,
    getAddCommentFormText
} from '../../model/selectors/addCommentFormSelector';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

export interface AddCommentFormProps {
    className?: string
    onSendComment: (text: string) => void
}

const AddCommentForm = memo(({ className, onSendComment }: AddCommentFormProps) => {
    const { t } = useTranslation();
    const text = useSelector(getAddCommentFormText)
    const error = useSelector(getAddCommentFormError);
    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addCommentFormAction.setText(value))
    }, [dispatch]);

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onCommentTextChange('');
    }, [onCommentTextChange, onSendComment, text])

    const reducers: ReducersList = {
        addCommentForm: addCommentFormReducer
    }
    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.AddCommentForm, {}, [className])}>
                <Input className={cls.input} value={text} onChange={onCommentTextChange} placeholder={t('Введите комментарий')} />
                <Button theme={ButtonTheme.OUTLINE} onClick={onSendHandler}>{t('Отправить')}</Button>
            </div>
        </DynamicModuleLoader>

    );
});

export default AddCommentForm;
