import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

library.add(faYoutube);
dom.watch();

let Template_2 = document.createElement('template');
Template_2.innerHTML = `
<div class="hero-container">
    <div class="hero--content">
        <div class="hero--content_text">
            <h1>NDEJJE COLLECTIVE <br> COMMUNITY</h1>
            <br>
            <h2>COMING TOGETHER FOR <br> THE CAUSE OF <br> FELLOWSHIP</h2>
        </div>
        <button class="hero--content_btn">JOIN NOW</button>
    </div>

    <div class="hero--overlay--container">
        <p>Fellowship with us every <em>Thursday</em> and <em>Friday</em></p>
        <p>Live on youtube <i class="fa-brands fa-youtube"></i></p>
    </div>
</div>
`

export class Hero extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.appendChild(Template_2.content.cloneNode(true));
    }
}

customElements.define("hm-hero", Hero);