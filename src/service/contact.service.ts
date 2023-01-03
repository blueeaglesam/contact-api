import { DocumentDefinition } from "mongoose";
import ContactModel, { ContactDocument } from "../models/contact.model";

export async function createContact(
  input: DocumentDefinition<ContactDocument>
) {
  try {
    return await ContactModel.create(input);
  } catch (e: any) {
    throw new Error(e);
  }
}
