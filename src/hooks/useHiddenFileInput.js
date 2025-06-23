import { useRef } from 'react';

const useHiddenFileInput = () => {
  const fileInputRef = useRef(null);

  const openFileDialog = (e) => {
    e.preventDefault();
    fileInputRef.current?.click();
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openFileDialog(e);
    }
  };

  return { fileInputRef, openFileDialog, onKeyDown };
};

export default useHiddenFileInput;