import express from "express";
import dotenv from "dotenv";
import prisma from "./db/prisma";

dotenv.config();

const app = express();

app.get("/", async (req, res) => {
  await prisma.user.create({
    data: {
      name: "ramesh",
      email: "johndoe@gmail.com",
      password: "12345",
    },
  });

  //Get all users
  const users = await prisma.user.findMany();

  //Get user names
  const names = users.map((user) => user.name);

  res.send(
    `There are ${names.length} users with names of: ${names.join(", ")} `
  );
});

app.listen(3000, () => console.log("server running"));
