import { useMemo } from 'react';
import type { SelectComponentsConfig } from 'react-select';
export declare const MenuList: import("react").FC<import("./wrapMenuList").Props>;
export declare const useComponentsPure: <OptionType>(useMemoParam: typeof useMemo, components: Partial<import("react-select/src/components").SelectComponents<OptionType>>) => Partial<import("react-select/src/components").SelectComponents<OptionType>>;
export declare const useComponents: <OptionType = any>(components: Partial<import("react-select/src/components").SelectComponents<OptionType>>) => Partial<import("react-select/src/components").SelectComponents<OptionType>>;
