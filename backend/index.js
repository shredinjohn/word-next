import { promises as fs } from "fs";
import express from "express";
import multer from "multer";
import cors from "cors";
import { convert } from "libreoffice-convert";
import { promisify } from "util";

const convertAsync = promisify(convert);
const app = express();

app.use(cors());
app.use(express.json());
const storage = multer.memoryStorage(); // Store file in memory
const upload = multer({ storage: storage });

function generateRandomString(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

app.post("/api/convert", upload.single("file"), async (req, res) => {
  try {
    const { file } = req;

    if (!file) {
      return res.status(400).json({ error: "No file uploaded." });
    }

    const { type } = req.body;

    // Determine the output file extension based on the 'type'
    const outputExtension = type === "pdf" ? "docx" : "pdf";

    // Generate a unique filename using a timestamp and random string
    // const timestamp = new Date().getTime();
    // const randomString = generateRandomString(8);
    const uniqueFilename = `output.${outputExtension}`;
    // const inputPath = path.join(__dirname, `output.${outputExtension}`);
    const fileBuffer = file.buffer;

    const outputPath = `./${uniqueFilename}`;

    let out = await convertAsync(fileBuffer, outputExtension, undefined);

    await fs.writeFile(outputPath, out);
    res.json({ filename: uniqueFilename });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "An error occurred during conversion and save." });
  }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
