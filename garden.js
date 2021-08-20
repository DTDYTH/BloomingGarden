const garden = document.getElementById('garden');

const FLOWERS = ['none', 'red', 'yellow', 'green', 'blue', 'pink', 'white', 'purple'];

for (let i = 0; i < 9; i++) {
    const row = document.createElement('TR');
    garden.appendChild(row);
    for (let j = 0; j < 9; j++) {
        const column = document.createElement('TD');
        column.setAttribute('rowNum', i);
        column.setAttribute('colNum', j);
        column.className = FLOWERS[0];
        row.appendChild(column);
    }
}