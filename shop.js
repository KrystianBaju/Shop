window.onload = () => {
    main.makeList();
};

Main.prototype.makeList = function () {
    api.getAll().then(tableData => {
        const tableBody = document.getElementById("tableData");
        let dataHtml = "";
        let idProduct;
        for (let i in tableData) {
            idProduct = tableData[i]._id;
            console.log(idProduct);
            dataHtml +=
                `<tr><td>${tableData[i].data.name}</td>` +
                `<td>${tableData[i].data.price}</td>`
                + `<td>${tableData[i].data.count}</td>` +
                `<td><img src="${tableData[i].data.picture}" >
                 <th <button class="buyButton"  onclick="api.delete(${idProduct})">Delete</button></th>

</tr>`;
        }
        tableBody.innerHTML = dataHtml;
    })
};
const main = new Main();
const api = new Api();
