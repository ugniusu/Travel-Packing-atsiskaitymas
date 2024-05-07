import { Request, Response } from "express";
const { Item: ItemModel } = require("../models/Item");

// CREATE movie
// @POST /api/items
export const createItem = async function (req: Request, res: Response) {
  try {
    const { item, quantity, isPacked } = req.body;

    if (!item || !quantity || typeof isPacked !== "boolean") {
      return res.status(400).send("Invalid data provided.");
    }

    const existingItem = await Item.findOne({ item: item });
    if (existingItem) {
      return res.status(409).send("Item already exists");
    }

    const singleItem = await Item.create({
      item,
      quantity,
      isPacked,
    });

    return res.status(201).json(singleItem);
  } catch (error) {
    console.error("Error creating item:", error);
    return res.status(500).send("Internal server error");
  }
};

// UPDATE custom item
// @PUT /api/items/:id
export const updateItem = async function (req: Request, res: Response) {
  try {
    const customItem = await Item.findById(req.params.id);
    if (!customItem) {
      return res.status(404).send("Item not found");
    }

    if (typeof req.body.box_office !== "number") {
      return res.status(400).send("Invalid data provided.");
    }

    customItem.box_office = req.body.box_office;
    const result = await customItem.save();
    return res.status(200).json(result);
  } catch (error) {
    console.error("Error updating item:", error);
    return res.status(500).send("Internal server error");
  }
};

// GET custom item
// @GET /api/items/:id
export const getItem = async (req: Request, res: Response) => {
  try {
    const customItem = await Item.findById(req.params.id);
    if (!customItem) {
      return res.status(404).send("item not found");
    }
    return res.status(200).json(customItem);
  } catch (error) {
    console.error("Error fetching item:", error);
    return res.status(500).send("Internal server error");
  }
};
