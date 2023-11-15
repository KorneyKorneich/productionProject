import { lazy, type FC } from 'react'
import { type AddCommentFormProps } from 'features/addCommentForm/ui/AddCommentForm/AddCommentForm';

export const AddCommentFormAsync = lazy <FC<AddCommentFormProps>>(async () => {
    return await new Promise(resolve => {
        setTimeout(() => {
            resolve(import('./AddCommentForm'))
        }, 1500)
    })
})
