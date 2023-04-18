import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET': {
      const QueryResult = await prisma.roles.findMany();
      res.send(QueryResult);
      break; }
    case 'POST': {
      const QueryResult = await prisma.roles.create({
        data: {
          name: req.body.name,
        },
      });
      res.send(QueryResult);
      break; }
    default:
      res.status(403).send();
      break;
  }
}
