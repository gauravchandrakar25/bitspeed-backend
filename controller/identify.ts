const asyncHandler = require("express-async-handler");
const { Contact } = require("../models/contact");
import { Request, Response } from "express";

//@desc identify email and phone number
//@route post /identify
//@access public

const identifyController = asyncHandler(async (req: Request, res: Response) => {
  const { email, phoneNumber } = req.body;

  if(!email && !phoneNumber){
    res.status(404).json({message: 'Provide at least one detail'});
  }

  try {
    const contact = await Contact.findAll({
      where: {
        email: email,
        or: [{ phoneNumber: phoneNumber }],
      },
    });

    console.log(contact)

    //if (not contact found)
    //     create new contact and mark as primary
    // else 
    //     find the related contact and give the output
        
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

module.exports = {
  identifyController,
};
