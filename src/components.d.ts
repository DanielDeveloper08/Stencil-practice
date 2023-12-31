/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AdvancedForm {
    }
    interface BgButton {
        "color": string;
        "disabled": boolean;
        "label": string;
        "styleclass": string;
    }
    interface BgInput {
        "condition": (value: string) => boolean;
        "label": string;
    }
    interface MyComponent {
        "first": string;
        "last": string;
        "middle": string;
    }
    interface StCard {
    }
    interface StCardContent {
    }
    interface StCardHeader {
    }
    interface TsCardBottom {
    }
}
export interface BgButtonCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLBgButtonElement;
}
export interface BgInputCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLBgInputElement;
}
declare global {
    interface HTMLAdvancedFormElement extends Components.AdvancedForm, HTMLStencilElement {
    }
    var HTMLAdvancedFormElement: {
        prototype: HTMLAdvancedFormElement;
        new (): HTMLAdvancedFormElement;
    };
    interface HTMLBgButtonElement extends Components.BgButton, HTMLStencilElement {
    }
    var HTMLBgButtonElement: {
        prototype: HTMLBgButtonElement;
        new (): HTMLBgButtonElement;
    };
    interface HTMLBgInputElement extends Components.BgInput, HTMLStencilElement {
    }
    var HTMLBgInputElement: {
        prototype: HTMLBgInputElement;
        new (): HTMLBgInputElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLStCardElement extends Components.StCard, HTMLStencilElement {
    }
    var HTMLStCardElement: {
        prototype: HTMLStCardElement;
        new (): HTMLStCardElement;
    };
    interface HTMLStCardContentElement extends Components.StCardContent, HTMLStencilElement {
    }
    var HTMLStCardContentElement: {
        prototype: HTMLStCardContentElement;
        new (): HTMLStCardContentElement;
    };
    interface HTMLStCardHeaderElement extends Components.StCardHeader, HTMLStencilElement {
    }
    var HTMLStCardHeaderElement: {
        prototype: HTMLStCardHeaderElement;
        new (): HTMLStCardHeaderElement;
    };
    interface HTMLTsCardBottomElement extends Components.TsCardBottom, HTMLStencilElement {
    }
    var HTMLTsCardBottomElement: {
        prototype: HTMLTsCardBottomElement;
        new (): HTMLTsCardBottomElement;
    };
    interface HTMLElementTagNameMap {
        "advanced-form": HTMLAdvancedFormElement;
        "bg-button": HTMLBgButtonElement;
        "bg-input": HTMLBgInputElement;
        "my-component": HTMLMyComponentElement;
        "st-card": HTMLStCardElement;
        "st-card-content": HTMLStCardContentElement;
        "st-card-header": HTMLStCardHeaderElement;
        "ts-card-bottom": HTMLTsCardBottomElement;
    }
}
declare namespace LocalJSX {
    interface AdvancedForm {
    }
    interface BgButton {
        "color"?: string;
        "disabled"?: boolean;
        "label"?: string;
        "onOnClick"?: (event: BgButtonCustomEvent<boolean>) => void;
        "styleclass"?: string;
    }
    interface BgInput {
        "condition"?: (value: string) => boolean;
        "label"?: string;
        "onInputChange"?: (event: BgInputCustomEvent<string>) => void;
    }
    interface MyComponent {
        "first"?: string;
        "last"?: string;
        "middle"?: string;
    }
    interface StCard {
    }
    interface StCardContent {
    }
    interface StCardHeader {
    }
    interface TsCardBottom {
    }
    interface IntrinsicElements {
        "advanced-form": AdvancedForm;
        "bg-button": BgButton;
        "bg-input": BgInput;
        "my-component": MyComponent;
        "st-card": StCard;
        "st-card-content": StCardContent;
        "st-card-header": StCardHeader;
        "ts-card-bottom": TsCardBottom;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "advanced-form": LocalJSX.AdvancedForm & JSXBase.HTMLAttributes<HTMLAdvancedFormElement>;
            "bg-button": LocalJSX.BgButton & JSXBase.HTMLAttributes<HTMLBgButtonElement>;
            "bg-input": LocalJSX.BgInput & JSXBase.HTMLAttributes<HTMLBgInputElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "st-card": LocalJSX.StCard & JSXBase.HTMLAttributes<HTMLStCardElement>;
            "st-card-content": LocalJSX.StCardContent & JSXBase.HTMLAttributes<HTMLStCardContentElement>;
            "st-card-header": LocalJSX.StCardHeader & JSXBase.HTMLAttributes<HTMLStCardHeaderElement>;
            "ts-card-bottom": LocalJSX.TsCardBottom & JSXBase.HTMLAttributes<HTMLTsCardBottomElement>;
        }
    }
}
