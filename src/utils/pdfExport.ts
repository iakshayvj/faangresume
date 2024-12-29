import html2pdf from 'html2pdf.js';

export const exportToPDF = async (elementId: string, filename: string) => {
  const element = document.getElementById(elementId);
  if (!element) return false;

  const opt = {
    margin: [10, 10],
    filename: filename,
    image: { type: 'jpeg', quality: 1.0 }, // Increased quality to maximum
    html2canvas: { 
      scale: 4, // Increased scale for better resolution
      useCORS: true,
      letterRendering: true,
      logging: false,
      dpi: 300, // Higher DPI
      backgroundColor: '#FFFFFF'
    },
    jsPDF: { 
      unit: 'mm', 
      format: 'a4', 
      orientation: 'portrait',
      compress: false // Disable compression for better quality
    }
  };

  try {
    await html2pdf().set(opt).from(element).save();
    return true;
  } catch (error) {
    console.error('Error generating PDF:', error);
    return false;
  }
};