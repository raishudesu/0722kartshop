import { deleteObject, ref } from 'firebase/storage';
import { storage } from '../../firebase';

const DeleteFile = (filename) => {
    const deleteFileByFilename = async () => {
        try {
          const fileRef = ref(storage, filename);
          await deleteObject(fileRef);
          console.log("File deleted successfully.");
        } catch (error) {
          console.log("Error deleting file:", error);
        }
      };
      deleteFileByFilename();
}

export default DeleteFile
