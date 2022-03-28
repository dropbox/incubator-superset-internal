import { useState, useCallback } from 'react';
import { useAsyncPaginateBase } from './useAsyncPaginateBase';
import type { UseAsyncPaginateParams, UseAsyncPaginateResult } from './types';
export declare const useAsyncPaginatePure: <OptionType, Additional>(useStateParam: typeof useState, useCallbackParam: typeof useCallback, useAsyncPaginateBaseParam: typeof useAsyncPaginateBase, params: UseAsyncPaginateParams<OptionType, any>, deps?: ReadonlyArray<any>) => UseAsyncPaginateResult<OptionType>;
export declare const useAsyncPaginate: <OptionType = any, Additional = any>(params: UseAsyncPaginateParams<OptionType, Additional>, deps?: ReadonlyArray<any>) => UseAsyncPaginateResult<OptionType>;
