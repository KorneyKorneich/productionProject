import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CommentList.module.scss'
import { useTranslation } from 'react-i18next';
import { type Comment } from '../../model/types/comment';
import Text from 'shared/ui/Text/Text';
import CommentCard from '../CommentCard/CommentCard';

interface CommentListProps {
    className?: string
    comments?: Comment[]
    isLoading?: boolean
}

export const CommentList = memo((props: CommentListProps) => {
    const {
        comments,
        className,
        isLoading
    } = props
    const { t } = useTranslation('comments');
    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comments?.length
                ? comments.map((comment) => (
                    <CommentCard
                        isLoading={isLoading}
                        key={comment.id}
                        className={cls.comment}
                        comment={comment}
                    />
                ))
                : <Text title={t('Коментарии не найдены')}/>
            }
        </div>
    );
});
