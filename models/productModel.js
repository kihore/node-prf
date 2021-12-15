module.exports = (sequelize, DataTypes) =>{
     
    const Product = sequelize.define("product",{
      image:{
            type: DataTypes.STRING,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER
        },
        description: {
            type: DataTypes.TEXT
        },
        published: {
            type: DataTypes.INTEGER
        },
        location: {
            type: DataTypes.STRING,
           
        }

    })

    return Product
}

