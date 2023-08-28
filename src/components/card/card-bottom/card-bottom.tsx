import { Component, h } from '@stencil/core';


@Component({
    tag: 'ts-card-bottom',
    styleUrl: 'card-bottom.scss'
})
export class CardBottom {
    
    render() {
        return (
            <div class="st-card-bottom">
                <slot />
            </div>
        );
    }
}