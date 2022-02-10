//Trying with chinnok example

window.onload = function () {
    loadCarros();
}
async function loadCarros() {
    try {
        let carros = await $.ajax({
            url: "/api/carros",
            method: "get",
            dataType: "json"
        });
        let html = "<tr><th>Marca</th><th>Modelo</th><th>Nacionalidade</th><th>Matricula</th><th>Ano</th></tr>";;
        for (let carro of carros) {
            html += "<tr><td>" + carro.car_marca + "</td><td>" +
                carro.car_modelo + "</td><td>" + carro.car_nacionalidade + "</td><td>" + carro.car_matricula + "</td><td>" + carro.car_ano + "</td></tr>";
        }

        document.getElementById("carros").innerHTML = html
    } catch (err) {
        console.log(err);
        // mensagem de erro para o utilizador      
    }

}
/*window.onload = async function () {
    try {
        let carros = await $.ajax({
            url: "/api/carros",
            method: "get",
            dataType: "json"
        });
        //let html = "<tr><th>Marca</th><th>Modelo</th><th>Nacionalidade</th><th>Matricula</th><th>Ano</th></tr>";;
        for (let carro of carros) {
            html += "<tr><td>" + carro.car_marca + "</td><td>" +
                carro.car_modelo + "</td><td>" + carro.car_nacionalidade + "</td><td>" + carro.car_matricula + "</td><td>" + carro.car_ano + "</td></tr>";
        }

        document.getElementById("carros").innerHTML = html
    } catch (err) {
        console.log(err);
        // mensagem de erro para o utilizador      
    }

}*/

async function addCarro() {
    try {
        let carro = {
            marca: document.getElementById("marca").value,
            modelo: document.getElementById("modelo").value,
            nacionalidade: document.getElementById("nacionalidade").value,
            matricula: document.getElementById("matricula").value,
            ano: document.getElementById("ano").value
        }
        alert(JSON.stringify(carro));
        let result = await $.ajax({
            url: "/api/carros",
            method: "post",
            dataType: "json",
            data: JSON.stringify(carro),
            contentType: "application/json"
        });
        alert(JSON.stringify(result));
    } catch (err) {
        console.log(err);
        // mensagem para o utilizador
    }
    //window.location = "carros.html";
}
/*    let carroId = sessionStorage.getItem("carroId");

    let carro = await $.ajax({
        url: "/api/carros/" + carroId,
        method: "get",
        dataType: "json"
    });
    console.log(carro);
    //document.getElementById("cover").src = "/images/cover" + album.AlbumId + ".jpg";

    let html = "<tr><th>Marca</th><th>Modelo</th><th>Nacionalidade</th><th>Matricula</th><th>Ano</th></tr>";
    for (let carro of carros.carro) {
        html += "<tr><td>" + carro.car_marca + "</td><td>" +
            carro.car_modelo + "</td><td>" + carro.car_nacionalidade + "</td><td>" + carro.car_matricula + "</td><td>" + carro.car_ano + "</td></tr>";
    }

    document.getElementById("carros").innerHTML = html
}*/


