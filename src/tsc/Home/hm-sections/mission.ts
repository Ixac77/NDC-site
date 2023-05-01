import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

library.add(faQuoteLeft, faQuoteRight);
dom.watch();


let Template_3 = document.createElement('template');
Template_3.innerHTML = `
<div class="mission-container">
    <div class="mission--text">
        <h1>MISSION</h1>
        <p>We unite to spread the love of Christ as we worship, praise and fellowship. We desire to inspire and encourage believers to continue to fight the good fight standing on the basis of faith and love.</p>
        <p><i class="fa-solid fa-quote-left"></i> I will praise you as long as I live, and in your name I will lift up my hands <i class="fa-solid fa-quote-right"></i> - Psalms 63:4</p>
    </div>
</div>
`

export class Mission extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.appendChild(Template_3.content.cloneNode(true))
    }
}
customElements.define('hm-mission', Mission);