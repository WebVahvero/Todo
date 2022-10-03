export default function Nav() {
    const nav = document.createElement('nav');

    nav.innerHTML = `
        <ul>
            <li>Create Project</li>
        </ul>
    `;

    return nav;
};