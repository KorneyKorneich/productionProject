import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CommentCard.module.scss'
import { useTranslation } from 'react-i18next';
import { type Comment } from '../../model/types/comment';
import Avatar from 'shared/ui/Avatar/Avatar';
import Text from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { AppLink } from 'shared/ui';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';

interface CommentCardProps {
    className?: string
    comment?: Comment
    isLoading?: boolean

}

const CommentCard = memo((props: CommentCardProps) => {
    const {
        comment,
        className,
        isLoading
    } = props
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentCard, {}, [className])}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border={'50%'}/>
                    <Skeleton className={cls.username} width={100} height={16}/>
                </div>
                <Skeleton className={cls.text} height={50} width={'100%'} />
            </div>
        )
    }

    if (!comment) {
        return null
    }

    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <AppLink to={`${RoutePaths.profile}${comment?.user.id}`} className={cls.header}>
                {comment?.user.avatar ? <Avatar size={30} src={comment?.user.avatar}/> : null}
                <Text className={cls.username} title={comment?.user.username} />
            </AppLink>
            <Text className={cls.text} text={comment?.text} />
        </div>
    );
});

export default CommentCard;
