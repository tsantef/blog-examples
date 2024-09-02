import Tesseract from 'tesseract.js';

// Function to perform OCR on an image
async function performOCR(imagePath: string): Promise<string> {
  try {
    const { data: { text } } = await Tesseract.recognize(
      imagePath,
      'eng', // Specify the language
      {
        logger: (m) => console.log(m), // Optional: Log OCR progress
      }
    );
    return text;
  } catch (error) {
    console.error('Error performing OCR:', error);
    throw error;
  }
}

// Example usage
const imagePath = './images/sample2.jpg'; // Replace with your image path

performOCR(imagePath)
  .then((text) => {
    console.log('Recognized text:', text);
  })
  .catch((error) => {
    console.error('OCR failed:', error);
  });