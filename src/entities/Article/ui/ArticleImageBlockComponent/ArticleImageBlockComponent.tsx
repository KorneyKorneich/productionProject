import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleImageBlockComponent.module.scss'
import { type ArticleImageBlock } from 'entities/Article/model/types/article';
import Text, { TextAlign } from 'shared/ui/Text/Text';

interface ArticleImageBlockComponentProps {
    className?: string
    block: ArticleImageBlock
}

const ArticleImageBlockComponent = memo(
    ({ className, block }: ArticleImageBlockComponentProps) => {
        console.log('called')
        return (
            <div className={classNames(cls.ArcticleImageBlockComponent, {}, [className])}>
                <img src={block.src} alt={block.title} className={cls.img}/>
                {block.title && (
                    <Text text={block.title} align={TextAlign.CENTER}/>
                )}
            </div>
        );
    });

export default ArticleImageBlockComponent;
