// SEEDER PARA CARGAR USUARIOS EN LA BASE DE DATOS

'use strict';

const models = require("../models/index");

module.exports = {
    up: function (queryInterface, Sequelize) {
        return Promise.all([
            models.medico.findOrCreate({
                where: {
                    id: "1"
                },
                defaults: {
                    nombre: "Juan",
                    apellido: "Gonzalez",
                    email: "emailJuan@email.com",
                    tiempo_trabajando: 5,
                    especialidad: "Endocrinología"
                }
            }),
            models.medico.findOrCreate({
                where: {
                    id: "2"
                },
                defaults: {
                    nombre: "Pedro",
                    apellido: "Gomez",
                    email: "emailPedro@email.com",
                    tiempo_trabajando: 12,
                    especialidad: "Traumatología"
                }
            })
        ])
    },
};