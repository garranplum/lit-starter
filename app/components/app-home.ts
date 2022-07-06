import {html, css, LitElement} from 'lit'
import {customElement, property} from 'lit/decorators.js'


// Define the web component.
@customElement('app-home')
export class appHome extends LitElement
{
  static styles = css`  
  
  :host {
      font-family: sans-serif;
      font-size: 1.5em;
      color: navy
    }

    .bold {
      font-weight: bold;
    }
    `

  //Render. Create the output HTML.
  render()
  {

    return html`
      <div>This content and style are from the <span class="bold">app-home</span> component.</div>
      <app-page></app-page>
    `
  }
}
