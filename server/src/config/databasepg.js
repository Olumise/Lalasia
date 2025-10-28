const { Client } = require("pg");

const client = new Client({
	user: "postgres",
	password: "tolulope",
	host: "localhost",
	port: 5432,
	database: "Lalasia",
});



    module.exports = {client}