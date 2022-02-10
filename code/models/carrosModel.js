var pool = require("./connection");

module.exports.getAll = async function (filterObj) {
    try {
        let filterQueries = "";
        let filterValues = [];
        if (filterObj.marca) {
            filterQueries += " AND Marca LIKE ?";
            filterValues.push("%" + filterObj.marca + "%");
        }
        if (filterObj.car_id != null) {
            let sql = "SELECT car_id, car_marca, car_modelo, car_nacionalidade, car_matricula, car_ano FROM carro";
            let carros = await pool.query(sql, filterObj.car_id);
            return { status: 200, data: carros };
        }
        let sql = "SELECT car_id, car_marca, car_modelo, car_nacionalidade, car_matricula, car_ano FROM carro" +
            filterQueries + " ORDER BY `carro`.`car_id`";
        let carros = await pool.query(sql, filterValues);
        return { status: 200, data: carros };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}


module.exports.save = async function (carro) {
    try {
        let sql = "INSERT INTO carro(car_marca, car_modelo, car_nacionalidade, car_matricula, car_ano) VALUES (?,?,?,?,?)";
        let result = await pool.query(sql, [carro.marca, carro.modelo, carro.nacionalidade, carro.matricula, carro.ano]);
        return { status: 200, data: result };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}