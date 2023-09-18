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

    // Set text fields based on the data passed in
    form.getTextField('1').setText(data.name1);
    form.getTextField('2').setText(data.name2);
    form.getTextField('3').setText(data.name3);
    form.getTextField('4').setText(data.name4);
    form.getTextField('5').setText(data.name5);
    form.getTextField('6').setText(data.name6);
    form.getTextField('7').setText(data.name7);
    form.getTextField('8').setText(data.name8);
    form.getTextField('9').setText(data.name9);
    form.getTextField('10').setText(data.name10);
    form.getTextField('11').setText(data.name11);
    form.getTextField('12').setText(data.name12);
    form.getTextField('13').setText(data.name13);
    form.getTextField('14').setText(data.name14);


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
