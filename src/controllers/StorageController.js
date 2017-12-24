import uuid from 'uuid';
import path from 'path';
import fs from 'fs';
import { RootController, errors } from 'boman';

@RootController
class StorageController {
  addFileFromStream({ stream: fileStream, filename }) {
    const generatedFilename = uuid.v4() + path.extname(filename);
    const writeFileStream = fs.createWriteStream(
      `./uploads/${generatedFilename}`
    );
    fileStream.pipe(writeFileStream);
    return generatedFilename;
  }
}

export default StorageController;
