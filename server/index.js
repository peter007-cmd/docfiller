const { PDFDocument } = require('pdf-lib');
const { readFile, writeFile } = require('fs/promises');
const express = require('express');
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.post('/fill', async (req, res) => {
  const { name1, name2, name3, name4, name5, name6, name7, name8 } = req.body;

  try {
    const outputPdfBuffer = await createPdf('Rental (1).pdf', 'output.pdf', {
      name1,
      name2,
      name3,
      name4,
      name5,
      name6,
      name7,
      name8,
    });

    res.status(200).send('PDF created successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('PDF creation failed');
  }
});

async function createPdf(input, output, data) {
  try {
    const pdfDoc = await PDFDocument.load(await readFile(input));

    const form = pdfDoc.getForm();

    // Set text fields based on the data passed in
    form.getTextField('Name1').setText(data.name1);
    

    const pdfBytes = await pdfDoc.save();

    await writeFile(output, pdfBytes);
    console.log('PDF created!');
  } catch (err) {
    console.log(err);
    throw err;
  }
}

app.listen(4000, () => {
  console.log('Server is listening on port 4000');
});
