import express from "express";
import { getMessages, sendMessages, getUserForSidebar } from '../controllers/message.controller.js'
const router = express.Router();

//Routes for auth api
router.get("/:id", getMessages);
router.post("/send/:id", sendMessages);
router.get("/", getUserForSidebar);

export default router;