import { Express, Request, Response } from "express";
import { createContactHandler } from "./controller/contract.controller";
import validate from "./middleware/validateResource";
import { createContactSchema } from "./schema/contact.schema";

function routes(app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => {
    res.sendStatus(200);
  });

  app.post("/api/contact", validate(createContactSchema), createContactHandler);
}

export default routes;
