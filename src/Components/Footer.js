export default function Footer() {
    const footer = document.createElement('footer');

    footer.innerHTML = `
        <div class="dev-info">
            <h5>Created by</h5>
            <p>Valtteri Kurunsaari <a href="https://github.com/WebVahvero" target="_blank">@WebVahvero</a></p>
        </div>
        <div class="credit-info">
            <h5>Credits</h5>
            <p>Unsplash</p>
        </div>
    `;

    return footer;
};