import { useState } from 'react';

const useFileSelection = () => {
  const [Files, setFiles] = useState([]);

  const addFile = (file) => {
    setFiles((currentFile) => [...currentFile, file]);
  };

  const removeFile = (file) => {
    setFiles((currentFile) => {
      const newFile = currentFile.slice();
      const fileIndex = currentFile.indexOf(file);
      newFile.splice(fileIndex, 1);
      return newFile;
    });
  };

  return [addFile, removeFile];
};

export default useFileSelection;