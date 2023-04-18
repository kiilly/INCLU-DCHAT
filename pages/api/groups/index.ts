import { PrismaClient } from '@prisma/client';
import { Group } from '../../../interfaces';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET': {
      const QueryResult = await prisma.groups.findMany();
      res.send(QueryResult);
      break;
    }
    case 'POST': {
      const data: Group = JSON.parse(req.body);
      const QueryResult = await prisma.groups.create({
        data: {

          name: data.name,
        },
      });
      res.send(QueryResult);
      break;
    }
    default:
      res.status(403).send();
      break;
  }
}
