/* eslint-disable @typescript-eslint/no-unused-vars */

// Code Camp Web SDCDWEB
//
// From 5 Dec 2022 To 15 Dec 2022
//
// @authors: Menut Paul, Bouziane Nassim, Fom Nenkam Samuella, Hoarau Jordan, Boustani Abdelqodousse
//
// Copyright (c) 2022 - ETNA
//

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// This function returns all events that belong to a given event group
async function getEvents(eventsGroup: string) {
  // Get all events belonging to the given group
  const QueryResult = await prisma.events.findMany({
    where: {
      belong_to: eventsGroup,
    },
  });
  return QueryResult;
}
/**
 * This function is responsible for handling HTTP requests to the /api/events/group/[group] endpoint.
 * It handles GET requests, and calls the corresponding functions to handle each request.
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 */
export default async function handler(req, res) {
  const { group } = req.query;
  switch (req.method) {
    case 'GET': {
      const events = await getEvents(group);
      res.send(events);
      break;
    }
    default:
      res.status(403).send();
      break;
  }
}
