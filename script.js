Main.prototype.makeList = function () {
    api.getAll().then(tableData => {
        const tableBody = document.getElementById("tableData");
        let dataHtml = "";
        for (let i in tableData) {
            dataHtml +=
                `<tr><td>${tableData[i].data.name}</td>` +
                `<td>${tableData[i].data.price}</td>`
                + `<td>${tableData[i].data.count}</td>` +
                `<td><img src="${tableData[i].data.picture}" ></td></tr>`;
        }
        tableBody.innerHTML = dataHtml;
    })
};


const main = new Main();
const api = new Api();

main.addBttn.addEventListener('click', main.add.bind(main));

main.getAllBttn.addEventListener('click', main.makeList);

main.deleteBttn.addEventListener('click', main.delete.bind(main));




