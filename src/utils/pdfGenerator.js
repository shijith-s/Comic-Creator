import jsPDF from "jspdf";

export const generatePDF = (images) => {
  if (!images?.length) return false;
  const pdf = new jsPDF({
    orientation: "landscape",
    unit: "in",
    format: "letter",
  });

  const imageWidthPercentage = 0.9; // 90% of page height
  const imageHeightPercentage = 0.9; // 90% of page height

  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();

  const imageWidth = pageHeight * imageWidthPercentage;
  const imageHeight = pageHeight * imageHeightPercentage;

  const xPos = (pageWidth - imageWidth) / 2;
  const yPos = (pageHeight - imageHeight) / 2;

  const fontSize = 12;
  const margin = 0.2;

  images.forEach((image, index) => {
    if (index !== 0) {
      pdf.addPage(); // Add a new page for each subsequent image
    }

    pdf.addImage(image, "JPEG", xPos, yPos, imageWidth, imageHeight);

    // Add page number to the bottom-right corner
    const pageNumberText = `Page ${index + 1}`;
    pdf.setFontSize(fontSize);
    pdf.text(
      pageWidth - margin,
      pageHeight - margin,
      pageNumberText,
      "right",
      "bottom"
    );
  });

  // Save the PDF
  pdf.save("comic_strip.pdf");
  return true;
};
