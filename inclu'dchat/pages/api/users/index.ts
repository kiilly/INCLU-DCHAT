// Code Camp Web SDCDWEB
//
// From 5 Dec 2022 To 15 Dec 2022
//
// @authors: Menut Paul, Bouziane Nassim, Fom Nenkam Samuella, Hoarau Jordan, Boustani Abdelqodousse
//
// Copyright (c) 2022 - ETNA
//

import { PrismaClient } from '@prisma/client';
import { Getuser } from '../../../interfaces';

const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

export default async function handler(req, res) {
  switch (req.method) {
    // GET all users
    case 'GET': {
      const QueryResult = await prisma.users.findMany();
      res.json(QueryResult);
      break;
    }

    // Create new user
    case 'POST': {
      const data: Getuser = JSON.parse(req.body);
      try {
        const hash = await bcrypt.hash(data.password, 10);
        const QueryResult = await prisma.users.create({
          data: {
            username: data.username,
            email: data.email,
            password: `${hash}`,
            role_id: Number(data.role_id),
            group_id: data.group_id,
          },
        });
        res.status(200).send(QueryResult);
      } catch (error) {
        console.log(error);
        res.status(500).send({ error: 'Request error', success: false });
      }
      break;
    }
    default:
      res.status(403).send();
      break;
  }
}
