import { toast } from 'react-toastify';

export const useToast = () => {
  const showToast = (message, type) => {
    const position = 'bottom-center';
    switch (type) {
      case 'Default':
        toast(message, { position: position });
        break;
      case 'Success':
        toast.success(message, { position: position });
        break;
      case 'Error':
        toast.warning(message, { position: position });
        break;
      case 'Warning':
        toast.info(message, { position: position });
        break;
      case 'Info':
        toast.error(message, { position: position });
        break;
    }
  };

  const showError = (message) => showToast(message, 'Error');
  const showSuccess = (message) => showToast(message, 'Success');
  const showWarning = (message) => showToast(message, 'Warning');
  const showInfo = (message) => showToast(message, 'Info');
  const showDefault = (message) => showToast(message, 'Default');

  return {
    showDefault,
    showToast,
    showSuccess,
    showWarning,
    showInfo,
    showError,
  };
};
