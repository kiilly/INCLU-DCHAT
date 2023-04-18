/* eslint-disable @typescript-eslint/no-unused-vars */
import { PrismaClient } from '@prisma/client';
import { Getevent } from '../../../interfaces';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const pid: number = JSON.parse(req.query.id);
  switch (req.method) {
    case 'GET': {
      const QueryResult = await prisma.events.findUnique({
        where: {
          id: pid,
        },

      });
      res.send(QueryResult);
      break;
    }
    case 'PUT': {
      const data: Getevent = JSON.parse(req.body);
      const QueryResult = await prisma.events.update({
        where: {
          id: pid,
        },
        data: {
          title: data.title,
          start: data.start,
          end: data.end,
          color: data.color,
          content: data.content,
          created_by: Number(data.created_by),
        },
      });
      res.send('Event Updated');
      break;
    }
    case 'DELETE': {
      const QueryResult = await prisma.events.delete({
        where: {
          id: pid,
        },
      });
      res.send('Event Deleted');
      break;
    }
    default:
      res.status(403).send();
      break;
  }
}
