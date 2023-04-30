import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
library.add(faFacebookF, faInstagram, faTwitter);
dom.watch();


/*
    TOP NAVIGATION SECTION
*/
let Template_1 = document.createElement('template');
Template_1.innerHTML = `
    <div class="top-navigation">
        <div class="top-navigation--header"><div class="logo"></div>NDC</div>

        <div class="top-navigation--links">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Blog</a>
        </div>

        <!---the social media links-->
        <div class="social-media-links">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
        </div>
    </div>
`

export class TopNavigation extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.appendChild(Template_1.content.cloneNode(true));
    }
}

customElements.define("top-navigation", TopNavigation);