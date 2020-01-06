const Api = function () {
    this.headers = new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    })
};

Api.prototype.buildUrl = function (id) {
    return "http://localhost:3000/db/games/" + id;
};


Api.prototype.post = function (id, data) {
    alert("Dodano produkt o id :" +id )
    const urlPost = this.buildUrl(id);
    return fetch(urlPost, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: this.headers
    })
};


Api.prototype.get = function (id) {
    return fetch(id,
        {
            method: "GET",
        }
    )
        .then(resp => {
                alert(resp.json());
                return resp.data();
            }
        )
};
Api.prototype.getAll = function () {
    const urlPost = "http://localhost:3000/db/games";

    return fetch(urlPost,
        {
            method: "GET"
        }
    )
        .then(resp => {
            return resp.json()
        })
};

Api.prototype.update = function (id, data) {
    const url = api.buildUrl(id);
    return fetch(url,
        {
            method: "PUT",
            body: JSON.stringify(data)
        }
    )
        .then(resp => {
            return resp.json()
                .catch(error => {
                    let notFound = "The server can not find requested resource";
                   alert(error + notFound);
                })
        })
};

Api.prototype.delete = function (id) {
    let urlDelete;
    if (isNaN(id)) {
        urlDelete = this.buildUrl(id.value);
    } else {
        urlDelete = this.buildUrl(id);
    }
    return fetch(urlDelete,
        {
            method: "DELETE",
            headers: this.headers
        }
    )
        .then(resp => {
            return resp.json()
        })
};


Api.prototype.addProduct = function (id, data) {
    return this.post(id.value, data);
};


Api.prototype.deleteProduct = function (id) {
    return this.delete(id);
};

Api.prototype.updateProduct = function (id, data) {
    return this.update(id, data);
};

Api.prototype.getProduct = function (id) {
    return this.get(id);
};
Api.prototype.getAllProducts = function () {
    return this.getAll;
};

const Main = function () {
    this.idAdd = document.getElementById("id-add");
    this.idDelete = document.getElementById("id-delete");

    this.addCount = document.getElementById("count-add");
    this.addName = document.getElementById("name-add");
    this.addPrice = document.getElementById("price-add");
    this.addPicture = document.getElementById("photo-add");

    this.editId = document.getElementById("id-edit");

    this.editCount = document.getElementById("count-edit");
    this.editName = document.getElementById("name-edit");
    this.editPrice = document.getElementById("price-edit");
    this.editPicture = document.getElementById("picture-edit");

    this.addBttn = document.getElementById('add-button');
    this.editBttn = document.getElementById('editBtn');

    this.updateBttn = document.getElementById('updateBtn');
    this.deleteBttn = document.getElementById('deleteBtn');
    this.getBttn = document.getElementById('getBtn');
    this.getAllBttn = document.getElementById("getAllBtn");
};


Main.prototype.add = function () {
    const productId = this.idAdd;
    const data = {
        "price": this.addPrice.value,
        "name": this.addName.value,
        "count": this.addCount.value,
        "picture": this.addPicture.value,
    };
    api.addProduct(productId, data);
};

Main.prototype.update = function () {
    const data = {
        "price": this.price,
        "name": this.name,
        "count": this.count,
        "description": this.description,
        "picture": this.picture
    };
    api.updateProduct(id, data);
};

Main.prototype.delete = function () {

    const deleteId = this.idDelete;
    alert(deleteId);
    api.deleteProduct(deleteId);
};

Main.prototype.get = function () {
    let id = api.buildUrl(this.id.value);
    api.getProduct(id);
};

Main.prototype.getAll = function () {
    api.getAllProducts();
};