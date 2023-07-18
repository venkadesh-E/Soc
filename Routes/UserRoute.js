import express from "express";
import { UnFollowUser, deleteUser, followUser, getAllUser, getUser, updateUser } from "../Controller/UserController.js";

const router = express.Router();

router.get('/',getAllUser)
router.get("/:id", getUser)
router.put("/:id", updateUser)
router.delete("/:id", deleteUser)
router.put("/:id/follow", followUser)
router.put("/:id/unfollow",UnFollowUser)

export default router