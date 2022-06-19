import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 6060;


export default {
  port : port,
  jwtSecret: "@QEGTUI",
  email: 'romeshraj78@gmail.com',
  password: 'krocks13@',
  key: 'Abc@123$'
};