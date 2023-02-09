//* Setting dotenv
require('dotenv').config;

//* Defining global configs
const config = {
    api: {
        nodeEnv: process.env.NODE_ENV,
        port: process.env.PORT,
        host: process.env.HOST
    },
    db: {
        development: {
            dialect: 'postgres',
            host: 'localhost',
            username: process.env.DEV_DB_USER,
            password: process.env.DEV_DB_PASS,
            port: 5432,
            database: 'blog-db',
            define: {
                timestamps: true,
                underscored: true,
                underscoredAll: true
            }
        },
        test: {

        },
        production: {

        }
    }
};

module.exports = config;