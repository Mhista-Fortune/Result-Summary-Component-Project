const btn = document.getElementById("btn");

btn.addEventListener('click', async () => {
    const list = document.getElementById('summary-list');
    const res = await fetch('data.json');
    const data = await res.json();

    const categoryClass = {
        "Reaction": "reaction",
        "Memory": "memory",
        "Verbal": "verbal",
        "Visual": "visual"
    };

    list.innerHTML = data.map(item => `
        <li class="${categoryClass[item.category] || ''}-item">
            <div class="summary-section__category">
                <img src="${item.icon}" alt="">
                <p class="${categoryClass[item.category] || ''}-txt">${item.category}</p>
            </div>
            <p><span class="bold-txt">${item.score}</span> / 100</p>
        </li>
    `).join('');
});