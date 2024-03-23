// import { put } from "@vercel/blob";

import { S3 } from "@aws-sdk/client-s3";
import fs from "node:fs";

import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

const s3 = new S3({
  region: "eu-north-1",
});

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  // throw new Error("Loading meals failed");
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal) {
  const randomNumber = Math.floor(Math.random() * 10000);
  meal.slug = slugify(meal.title + randomNumber, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;

  const bufferedImage = await meal.image.arrayBuffer();

  s3.putObject({
    Bucket: "segun-nextjs-demo-users-image",
    Key: fileName,
    Body: Buffer.from(bufferedImage),
    ContentType: meal.image.type,
  });

  meal.image = fileName;

  db.prepare(
    `
    INSERT INTO meals
    (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
      )
      `
  ).run(meal);
}

// export async function saveMeal(meal) {
// const randomNumber = Math.floor(Math.random() * 10000);

//   meal.slug = slugify(meal.title + randomNumber, { lower: true });
//   meal.instructions = xss(meal.instructions);

//   const extension = meal.image.name.split(".").pop();
//   const fileName = `${meal.slug}.${extension}`;

//   const imageBuffer = fs.readFileSync(meal.image.path);

//   // Upload image to Vercel Blob
//   const blob = await put(fileName, meal.image, {
//     access: "public",
//     contentType: meal.image.type,
//     token: process.env.BLOB_READ_WRITE_TOKEN,
//   });

//   // Construct URL for the uploaded image
//   const imageUrl = blob.url;

//   const stream = fs.createWriteStream(`public/images/${fileName}`);
//   const bufferedImage = await meal.image.arrayBuffer();

//   stream.write(Buffer.from(bufferedImage), (error) => {
//     if (error) {
//       throw new Error("Saving image failed!");
//     }
//   });

//   meal.image = `/images/${fileName}`;

//   // Save meal information to the database
//   // const db = new sqlite3.Database("mealsImage.db");

//   // Prepare the meal object for database insertion
//   const mealData = {
//     title: meal.title,
//     summary: meal.summary,
//     instructions: meal.instructions,
//     creator: meal.creator,
//     creator_email: meal.creator_email,
//     image: imageUrl, // Use the image URL in the database
//     slug: meal.slug,
//   };

//   // Insert meal data into the meals table
//   // db.prepare(
//   //   `INSERT INTO meals (title, summary, instructions, creator, creator_email, image, slug)
//   //    VALUES (?, ?, ?, ?, ?, ?, ?)`,
//   //   Object.values(mealData),
//   //   (err) => {
//   //     if (err) {
//   //       console.error("Error inserting meal into database:", err);
//   //       throw new Error("Error saving meal!");
//   //     } else {
//   //       console.log("Meal saved successfully!");
//   //     }
//   //   }
//   // ).run(meal);

//   // Close the database connection
//   // db.close();

//   db.prepare(
//     `
//     INSERT INTO meals
//       (title, summary, instructions, creator, creator_email, image, slug)
//     VALUES (
//       @title,
//       @summary,
//       @instructions,
//       @creator,
//       @creator_email,
//       @image,
//       @slug
//     )
//   `
//   ).run(meal);
// }
