import { FocusEvent, PointerEvent } from 'react';
declare type EventType = PointerEvent | FocusEvent;
export declare function isPointerEvent(event?: EventType): event is PointerEvent;
export declare function isFocusEvent(event?: EventType): event is FocusEvent;
export {};
//# sourceMappingURL=events.d.ts.map