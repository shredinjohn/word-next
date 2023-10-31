// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from "fs";
import formidable from "formidable";

import { Writable } from "stream";
const formidableConfig = {
  keepExtensions: true,
  maxFileSize: 10_000_000,
  maxFieldsSize: 10_000_000,
  maxFields: 10,
  allowEmptyFiles: true,
  multiples: true,
};

export const config = {
  api: {
    bodyParser: false,
  },
};

function formidablePromise(req, opts) {
  return new Promise((accept, reject) => {
    const form = formidable(opts);

    form.parse(req, (err, fields, files) => {
      if (err) {
        return reject(err);
      }
      return accept({ fields, files });
    });
  });
}

const fileConsumer = (acc) => {
  const writable = new Writable({
    write: (chunk, _enc, next) => {
      acc.push(chunk);
      next();
    },
  });

  return writable;
};

function generateRandomString(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
export default async function convert(req, res) {
  try {
    const chunks = [];

    const { fields, files } = await formidablePromise(req, {
      ...formidableConfig,
      // consume this, otherwise formidable tries to save the file to disk
      fileWriteStreamHandler: () => fileConsumer(chunks),
    });

    const { type } = fields;

    if (!files.file) {
      return res.status(400).json({ lol: "No file uploaded." });
    }

    // Determine the output file extension based on the 'type'
    // const outputExtension = type === "pdf" ? "word" : "pdf";
    const outputExtension = type;

    // Generate a unique filename using a timestamp and random string
    const timestamp = new Date().getTime();
    const randomString = generateRandomString(8);
    const uniqueFilename = `${timestamp}-${randomString}.${outputExtension}`;

    // Define the output path where you want to save the converted file
    const outputPath = `../../public/conversions/${uniqueFilename}`;

    fs.renameSync(files.file.path, outputPath);
    res.json({ filename: uniqueFilename });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred during conversion and save." });
  }
}
