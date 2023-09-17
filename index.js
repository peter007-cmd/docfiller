const { PDFDocument } = require('pdf-lib');
const { readFile, writeFile } = require('fs/promises');

async function createPdf(input, output) {
  try {
    const pdfDoc = await PDFDocument.load(await readFile(input));

  const fields = pdfDoc.getForm().getFields().map(f=>f.getName())
  console.log({fields})
  
const form = pdfDoc.getForm();
form.getTextField('Name1').setText('John Smith')
    
   

    const pdfBytes = await pdfDoc.save();

    await writeFile(output, pdfBytes);
    console.log('PDF created!');
  } catch (err) {
    console.log(err);
  }
}

createPdf('Rental (1).pdf', 'output.pdf');