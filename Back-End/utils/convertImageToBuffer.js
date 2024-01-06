import sharp from "sharp";

async function compressImageAndGenerateURL(base64String, quality) {
  try {
    // Decode base64 string into a buffer
    const buffer = Buffer.from(base64String, "base64");

    // Check if the buffer is a valid image format (JPEG, PNG, etc.)
    const metadata = await sharp(buffer).metadata();
    if (!metadata.format) {
      throw new Error("Unsupported image format");
    }

    // Perform compression
    const compressedBuffer = await sharp(buffer)
      .jpeg({ quality: quality || 80 }) // Adjust quality as needed
      .toBuffer();

    // Convert the compressed buffer to a base64-encoded URL
    const compressedBase64 = compressedBuffer.toString("base64");
    return `data:image/${metadata.format};base64,${compressedBase64}`;
  } catch (error) {
    console.error("Error compressing image:", error);
    throw error; // Re-throw the error if needed
  }
}

export default compressImageAndGenerateURL;
