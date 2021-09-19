import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
  type: 'postgres',
  port: parseInt(process.env.DB_PORT as string),
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,

  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
  migrationsRun: false,
  logging: true,
};

export = config;
