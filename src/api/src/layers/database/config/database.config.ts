import { registerAs } from '@nestjs/config';
import { SequelizeModuleOptions } from '@nestjs/sequelize';

export default registerAs(
  'database',
  (): SequelizeModuleOptions => ({
    dialect: 'postgres',
    uri: process.env.DATABASE_URL,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT
      ? parseInt(process.env.DATABASE_PORT, 10)
      : undefined,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    autoLoadModels: true,
    logging: false,
    synchronize: true,
    dialectOptions: process.env.DATABASE_URL
      ? {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
        }
      : {},
  }),
);
