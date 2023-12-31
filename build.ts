import ReactPDF from "@react-pdf/renderer";
import fs from 'fs';
import PDF, { name } from './src';

const outFolder = `${__dirname}/dist`;
if (!fs.existsSync(outFolder)) fs.mkdirSync(outFolder);
ReactPDF.render(PDF, `${outFolder}/${name}.pdf`);