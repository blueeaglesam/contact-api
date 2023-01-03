import { Request, Response } from "express";
import { createContact } from "../service/contact.service";
import logger from "../utils/logger";

export async function createContactHandler(req: Request, res: Response) {
  try {
    const contact = await createContact(req.body);
    return contact;
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
}
