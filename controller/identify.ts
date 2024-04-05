const asyncHandler = require("express-async-handler");
const { Contact } = require("../models/contact");
import { Request, Response } from "express";

//@desc identify email and phone number
//@route post /identify
//@access public

const identifyController = asyncHandler(async (req: Request, res: Response) => {
  const { email, phoneNumber } = req.body;

  if (!email && !phoneNumber) {
    res.status(404).json({ message: "Provide at least one detail" });
  }

  try {
    const contact = await Contact.findAll({
      where: {
        email: email,
        phoneNumber: phoneNumber,
      },
    });

    if (contact.length == 0) {
      //create a new contact if no contact found
      Contact.create({
        email: email,
        phoneNumber: phoneNumber,
        linkPrecedence: "primary",
      });
      res.status(204).json({
        message: "Contact not found",
        success: "Contact created successfully",
      });
    } else {
      //TODO: implement this method
      res.status(200).json({
        contact: {
          primaryContatctId: phoneNumber,
          emails: [], // first element being email of primary contact
          phoneNumbers: [], // first element being phoneNumber of primary contact
          secondaryContactIds: [], // Array of all Contact IDs that are "secondary" to the primary contact
        },
      });
    }
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

module.exports = {
  identifyController,
};
