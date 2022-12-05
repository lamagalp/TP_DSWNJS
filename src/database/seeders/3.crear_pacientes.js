// SEEDER PARA CARGAR USUARIOS EN LA BASE DE DATOS

'use strict';

const models = require("../models/index");

module.exports = {
    up: function (queryInterface, Sequelize) {
        return Promise.all([
            models.paciente.findOrCreate({
                where: {
                    id: "1"
                },
                defaults: {
                    nombre: "Silvia",
                    apellido: "Robles",
                    email: "emailSilvia@email.com",
                    edad: 52
                }
            }),
            models.paciente.findOrCreate({
                where: {
                    id: "2"
                },
                defaults: {
                    nombre: "Roberto",
                    apellido: "Suarez",
                    email: "emailRoberto@email.com",
                    edad: 85
                }
            })
        ])
    },
};