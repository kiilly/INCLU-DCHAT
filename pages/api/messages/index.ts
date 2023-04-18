import { PrismaClient } from '@prisma/client';
import { Message } from '../../../interfaces';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET': {
      const QueryResult = await prisma.messages.findMany();
      res.send(QueryResult);
      break; }
    case 'POST': {
      const body:Message = JSON.parse(req.body);
      const QueryResult = await prisma.messages.create({
        data: {
          created_by: body.created_by,
          content: body.content,
          created_at: body.created_at,
          belongs_to: body.belongs_to,
          bodyFile: body.bodyFile,
          type: body.type,
        },
      });
      res.send(QueryResult);
      break; }
    default:
      res.status(403).send();
      break;
  }
}
