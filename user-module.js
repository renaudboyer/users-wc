class UserModule extends HTMLElement {
    constructor() {
        super();

        // Create a shadowDOM
        this.shadowRootElement = this.attachShadow({ mode: 'open'});

        // Define component HTML code
        // (We could also have used js DOM method as createElement ...)
        this.shadowRootElement.innerHTML = this.getTemplate();

        // Add the event listener
        // NOTE: We register 'this.addItem.bind(this)' instead of 'this.addItem'
        //   because in Javascript 'this' in a function depends on the calling context
        //   bind() allow to force the value of 'this' inside the function
        const addButton = this.shadowRootElement.querySelector('.btn-add');
        addButton.addEventListener('click', this.addItem.bind(this));

        this.initUserList();
    }

    // TODO: Add button should add user on distant server too
    addItem() {
        const userInput = this.shadowRootElement.querySelector('#username');
        const userListElement = this.shadowRootElement.querySelector('user-list');
        const userItemElement = document.createElement('user-item');
        userItemElement.innerText = userInput.value;

        userListElement.appendChild(userItemElement);
    }

    initUserList() {
        const userListElement = this.shadowRootElement.querySelector('user-list')

        // Fetch data from an API
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                users.forEach(user => {
                    const userItemElement = document.createElement('user-item');
                    userItemElement.innerText = user.name;

                    userListElement.appendChild(userItemElement);
                });
            });
    }

    getTemplate() {
        return `
<h1>Users</h1>
<form>
    <label for="username">User</label>
    <input id="username" type="text">
</form>
<button class="btn-add">Add</button>

<user-list>
</user-list>
`;
    }
}

customElements.define('user-module', UserModule)
