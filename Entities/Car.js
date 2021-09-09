module.exports = (sequelize, type) => {
    const Coche = sequelize.define('coche', {

        modelo: {
            type: type.STRING
        },

        marca: {
            type: type.STRING
        },

        color: {
            type: type.STRING
        },

        matricula: {
            type: type.STRING
        },

        dueno: {
            type: type.STRING
        }
    })

    return Coche
}