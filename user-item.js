class UserItem extends HTMLElement {
    constructor() {
        super();

        // Create a shadowDOM
        const shadowRootElement = this.attachShadow({ mode: 'open'});

        // Define component HTML code
        // (We could also have used js DOM method as createElement ...)
        shadowRootElement.innerHTML = `
<li>
<slot></slot>
</li>
`;
        // <slot> element allows to define where the content of the user-item will be placed
        // <user-item>userName</user-item> will compute into
        // <li>userName</li>
    }
}

customElements.define('user-item', UserItem)
