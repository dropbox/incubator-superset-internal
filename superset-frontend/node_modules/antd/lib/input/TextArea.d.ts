import * as React from 'react';
import { TextAreaProps as RcTextAreaProps } from 'rc-textarea';
import { SizeType } from '../config-provider/SizeContext';
export interface TextAreaProps extends RcTextAreaProps {
    allowClear?: boolean;
    bordered?: boolean;
    showCount?: boolean;
    maxLength?: number;
    size?: SizeType;
}
export interface TextAreaRef extends HTMLTextAreaElement {
    resizableTextArea: any;
}
declare const TextArea: React.ForwardRefExoticComponent<TextAreaProps & React.RefAttributes<TextAreaRef>>;
export default TextArea;
