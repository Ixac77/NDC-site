let Template_4 = document.createElement('template');
Template_4.innerHTML = `
<div class="primary-bg-container">

    <div class="pri-bg"><div>

    <div class="primary-container">
        <div class="primary-bg--header">WHO WE ARE</div>
        <p class="pri-bg--text">We are the people God has Chosen</p>
        <p class="pri-bg--text">We are Ndejje Collective</p>

        <div class="primary-container--top">
            <div class="pri-container--top--img_left"></div>
            <div class="pri-container--top-text_right">
                <p>Nulla vel sodales tellus, quis condimentum enim. Nunc porttitor venenatis feugiat.Etiam quis faucibus erat, non accumsan leo. Aliquam erat volutpat. Vestibulum ac faucibus eros. Cras ullamcorper gravida tellus ut co
                    To bring worship experience
                </p> 
            </div>
        </div>
        <div class="primary-container--bottom">
            <div class="pri-container--bottom--text_left">
                <p>Nulla vel sodales tellus, quis condimentum enim. Nunc porttitor 
                    To bring worship experience
                </p> 
            </div>
            <div class="pri-container--bottom--img_right"></div>
        </div>
    </div>
</div>
`;

export class Primary extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.appendChild(Template_4.content.cloneNode(true))
    }
}

customElements.define('hm-primary', Primary);