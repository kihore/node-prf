module.exports = {
    HOST: 'ampycars.cuua14cemdcq.ap-south-1.rds.amazonaws.com',
    USER: 'Admin',
    PASSWORD: 'ampycars',
    DB:   'CarRental',
    dialect: 'mysql',

 pool:{
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
}
}