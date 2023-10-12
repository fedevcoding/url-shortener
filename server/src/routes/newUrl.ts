import { prisma } from "@/config/db";
import express from "express";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { longUrl } = req.body;

    console.log(longUrl);

    // validate with zod

    const prismaRes = await prisma.urls.create({
      data: {
        short_url: "test",
        url: longUrl,
      },
    });

    console.log(prismaRes);

    res.json({ url: prismaRes.url });
  } catch (e) {
    console.log(e);

    if (e instanceof Error) {
      res.status(500).send(e.message);
    }
  }
});

export default router;
