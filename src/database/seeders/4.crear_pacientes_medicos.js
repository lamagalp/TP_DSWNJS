'use strict';

const models = require("../models/index");

module.exports = {
    up: function (queryInterface, Sequelize) {
        return Promise.all([
            models.paciente_medico.findOrCreate({
                where: {
                    id: 1
                },
                defaults: {
                    medicoId: 1,
                    pacienteId: 1
                }
            })
        ])
    },
};