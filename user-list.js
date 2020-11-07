class UserList extends HTMLElement {
    constructor() {
        super();

        // Create a shadowDOM
        const shadowRootElement = this.attachShadow({ mode: 'open'});

        // Define component HTML code
        // (We could also have used js DOM method as createElement ...)
        shadowRootElement.innerHTML = `
<h2>User list</h2>
<ul>
    <slot></slot>
</ul>
`;
    }
}

customElements.define('user-list', UserList)
