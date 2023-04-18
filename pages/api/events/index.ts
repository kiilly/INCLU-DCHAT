/* eslint-disable @typescript-eslint/no-unused-vars */
import { PrismaClient } from '@prisma/client';
import { Getevent } from '../../../interfaces';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const pid: number = Number(req.query.id);
  switch (req.method) {
    case 'GET': {
      const QueryResult = await prisma.events.findMany();
      res.send(QueryResult);
      break;
    }
    case 'POST': {
      const data: Getevent = JSON.parse(req.body);
      const QueryResult = await prisma.events.create({
        data: {
          title: data.title,
          start: data.start,
          end: data.end,
          color: data.color,
          content: data.content,
          created_by: Number(data.created_by),
        },
      });
      res.send('Event Created');
      break;
    }
    default:
      res.status(403).send();
      break;
  }
}
