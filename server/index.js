const { PDFDocument } = require('pdf-lib');
const { readFile, writeFile } = require('fs/promises');
const express = require('express');
const cors = require("cors");
const path = require('path');
const app = express();
app.use(express.json());
app.use(express.static('server'));
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.get('/download/:filename', (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, '/', filename);
  res.sendFile(filePath);
});

app.post('/fill', async (req, res) => {
  const { name1, name2, name3, name4, name5, name6, name7, name8,name9,name10,name11,name12,name13,name14 } = req.body;

  try {
    const outputPdfBuffer = await createPdf('will(1).pdf', 'output.pdf', {
      name1,
      name2,
      name3,
      name4,
      name5,
      name6,
      name7,
      name8,
      name9,
      name10,
      name11,
      name12,
      name13,
      name14,
      
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

    const nf = 14;

for (let i = 1; i <= nf; i++) {
  form.getTextField(i.toString()).setText(data['name' + i]);
}



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
