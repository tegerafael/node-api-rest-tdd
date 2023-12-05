module.exports = {
    test: {
        client: 'pg',
        connection: {
            host: 'localhost',
            user: 'postgres',
            password: 'root',
            database: 'apitdd'
        },
        migrations: {
            directory: 'src/migrations'
        },
    },
};