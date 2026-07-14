import { useState, useEffect } from "react";
import * as pdfjsLib from "pdfjs-dist";
import worker from "pdfjs-dist/build/pdf.worker?url";
import { PDFDocument, PDFTextField, StandardFonts, rgb } from "pdf-lib";

pdfjsLib.GlobalWorkerOptions.workerSrc = worker;

const Practice = () => {
  const [formData, setFormData] = useState({});
  const [fieldNames, setFieldNames] = useState([]);
  useEffect(() => {
    const extractPlaceholders = async () => {
      const loadingTask = pdfjsLib.getDocument("/WhatsappQuotationsUpdated.pdf");
      const pdf = await loadingTask.promise;

      let foundFields = [];

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();

        content.items.forEach((item) => {
          const text = item.str;

          const matches = text.match(/{{(.*?)}}/g);
          if (matches) {
            matches.forEach((match) => {
              const fieldName = match.replace(/[{}]/g, "");

              foundFields.push({
                name: fieldName,
                fullText: text, // store full line
                x: item.transform[4],
                y: item.transform[5],
                page: i - 1,
              });
            });
          }
        });
      }

      // create form state
      const initial = {};
      foundFields.forEach((f) => {
        initial[f.name] = "";
      });

      setFormData(initial);
      setFieldNames(foundFields);
    };

    extractPlaceholders();
  }, []);

  const handleGenerate = async () => {
    const bytes = await fetch("/WhatsappQuotationsUpdated.pdf").then((res) =>
      res.arrayBuffer()
    );

    const pdfDoc = await PDFDocument.load(bytes);
    const pages = pdfDoc.getPages();

    fieldNames.forEach((field) => {
      const page = pages[field.page];

      const updatedText = field.fullText.replace(
        `{{${field.name}}}`,
        formData[field.name] || ""
      );

      // cover original line
      page.drawRectangle({
        x: field.x,
        y: field.y - 5,
        width: 300, // slightly bigger for full line
        height: 20,
        color: rgb(1, 1, 1),
      });

      // redraw full updated text
      page.drawText(updatedText, {
        x: field.x,
        y: field.y,
        size: 12,
        color: rgb(0, 0, 0),
      });
    });

    const pdfBytes = await pdfDoc.save();

    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    window.open(url);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Fill PDF Data</h2>

      {fieldNames.map((field, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            {field.name}
          </label>

          <input
            type="text"
            value={formData[field.name] || ""}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                [field.name]: e.target.value,
              }))
            }
            placeholder={`Enter ${field.name}`}
            style={{
              padding: "8px",
              width: "250px",
              border: "1px solid #ccc",
              borderRadius: "6px",
            }}
          />
        </div>
      ))}

      <button onClick={handleGenerate} style={{ marginTop: "20px" }}>
        Generate PDF
      </button>
    </div>
  );
};

export default Practice;