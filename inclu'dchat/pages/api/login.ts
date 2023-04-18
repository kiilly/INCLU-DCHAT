import * as dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import { Login, Person } from '../../interfaces/index';

dotenv.config();

const prisma = new PrismaClient();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

export default async function handler(req, res) {
  switch (req.method) {
    // Login user
    case 'POST': {
      const body:Login = JSON.parse(req.body);

      const QueryResult = await prisma.users.findFirst({
        where: {
          email: body.email,
        },
      });
      if (QueryResult) {
        bcrypt
          .compare(body.password, QueryResult.password)
          .then((valid) => {
            if (!valid) {
              res.status(404).send('error: email or password incorrect');
            } else {
              const acces = jwt.sign(
                {
                  email: req.body.email,
                  password: req.body.password,
                },
                process.env.JWT_SIGN_SECRET,
                {
                  expiresIn: '24h',
                },
              );
              const result: Person = { token: acces, id: QueryResult.id, group: QueryResult.group_id };
              return res.status(200).json(result);
            }
          });
      } else {
        res.status(404).send('error: email or password incorrect');
      }
      break;
    }
    default:
      break;
  }
}
