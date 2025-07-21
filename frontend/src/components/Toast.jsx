import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = () => {
  return (
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      style={{
        position: 'fixed',
        top: '1rem',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        maxWidth: '600px',
        zIndex: 9999,
        pointerEvents: 'none', // Allows clicks to pass through when inactive
      }}
      toastStyle={{
        pointerEvents: 'auto', // Re-enable clicks for active toasts
        margin: '0.5rem 0',
      }}
    />
  );
};

export default Toast;