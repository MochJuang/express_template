modul.exports = {
    HOST        : 'localhost',
    USER        : 'root',
    PASSWORD    : '',
    DB          : 'rental_mobil',
    dialect     : 'mysql',
    // timeout request
    pool        : {
        max         : 5,
        min         : 0,
        acquire     : 30000, 
        idle        : 10000
    }
}