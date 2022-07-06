import {html, css, LitElement} from 'lit'
import {customElement, property} from 'lit/decorators.js'


// Define the web component.
@customElement('app-page')
export class appPage extends LitElement
{
    static styles = css`
    :host {
        color: red;
    }

    .bold {
        background-color:yellow;
    }
    `


    //Render. Create the output HTML.
    render()
    {

        return html`
      This content and style are from the <span class="bold">app-page</span> component.
    `
    }
}
