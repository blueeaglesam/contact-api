import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "config";

export interface ContactDocument extends mongoose.Document {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

const contactSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const ContactModel = mongoose.model("Contact", contactSchema);

export default ContactModel;
