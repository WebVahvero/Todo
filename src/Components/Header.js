export default function Header() {
    const header = document.createElement('header');

    header.innerHTML = `
        <h1>Today<br>Todo</h1>
    `;

    return header;
};