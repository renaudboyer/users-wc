class UserModule extends HTMLElement {
    constructor() {
        super();

        // Create a shadowDOM
        const shadowRootElement = this.attachShadow({ mode: 'open'});

        // Define component HTML code
        // (We could also have used js DOM method as createElement ...)
        shadowRootElement.innerHTML = `
<h1>Users</h1>
<form>
    <label for="username">User</label>
    <input id="username" type="text">
</form>

<user-list>
    <user-item>Leanne Graham</user-item>
    <user-item>Ervin Howell</user-item>
    <user-item>Clementine Bauch</user-item>
</user-list>
`;
    }
}

customElements.define('user-module', UserModule)
