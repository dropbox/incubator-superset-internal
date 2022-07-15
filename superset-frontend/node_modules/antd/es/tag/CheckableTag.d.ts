import * as React from 'react';
export interface CheckableTagProps {
    prefixCls?: string;
    className?: string;
    style?: React.CSSProperties;
    /**
     * @description       it is an absolute controlled component and has no uncontrolled mode.
     * @description.zh-CN 该组件为完全受控组件，不支持非受控用法。
     */
    checked: boolean;
    onChange?: (checked: boolean) => void;
    onClick?: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}
declare const CheckableTag: React.FC<CheckableTagProps>;
export default CheckableTag;
