
//HERO SECTION
import './hm-sections/hero';

//MISSION
import './hm-sections/mission';

//PRIMARY
import './hm-sections/primary';

let HmTemplate = document.createElement('template');
HmTemplate.innerHTML = `
<hm-hero></hm-hero>
<hm-mission></hm-mission>
<hm-primary></hm-primary>
`

export class Home extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.appendChild(HmTemplate.content.cloneNode(true));
    }
}

customElements.define('home-page', Home);