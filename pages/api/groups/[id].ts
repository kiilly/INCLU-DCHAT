import { PrismaClient } from '@prisma/client';
import { Group } from '../../../interfaces';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const pid: number = JSON.parse(req.query.id);
  switch (req.method) {
    case 'DELETE': {
      const QueryResult = await prisma.groups.delete({
        where: {
          id: pid,
        },
      });
      res.send(QueryResult);

      break; }
    case 'PUT': {
      const data: Group = JSON.parse(req.body);
      const QueryResult = await prisma.groups.update({
        where: {
          id: pid,
        },
        data: {
          name: data.name,
        },
      });
      res.send(QueryResult);
      break; }
    case 'GET': {
      const QueryResult = await prisma.groups.findUnique({
        where: {
          id: pid,
        },
      });
      res.send(QueryResult);
      break; }
    default:
      res.status(403).send();
      break;
  }
}
