import { Component, h } from '@stencil/core';


@Component({
    tag: 'st-card',
    styleUrl: 'card.scss'
})
export class Card {

    render() {
        return (
            <div class="st-card">
                <slot />
            </div>
        );
    }
    
}