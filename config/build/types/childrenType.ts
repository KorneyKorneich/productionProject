import type {FC, PropsWithChildren} from 'react';

export type ReactFC<Props extends Record<PropertyKey, unknown> = {}> = FC<PropsWithChildren<Props>>;