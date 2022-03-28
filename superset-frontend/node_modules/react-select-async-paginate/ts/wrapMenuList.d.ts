import { useEffect, useRef, useCallback } from 'react';
import type { ComponentType, FC, Ref } from 'react';
import type { ShouldLoadMore } from './types';
export declare const CHECK_TIMEOUT = 300;
export declare type Props = {
    selectProps: {
        handleScrolledToBottom?: () => void;
        shouldLoadMore: ShouldLoadMore;
    };
    innerRef: Ref<HTMLElement>;
    useEffect?: typeof useEffect;
    useRef?: typeof useRef;
    useCallback?: typeof useCallback;
    setTimeout?: typeof setTimeout;
    clearTimeout?: typeof clearTimeout;
    [key: string]: any;
};
declare type ComponentProps = {
    innerRef: Ref<HTMLElement>;
};
export declare const wrapMenuList: (MenuList: ComponentType<ComponentProps>) => FC<Props>;
export {};
