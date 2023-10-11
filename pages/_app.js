import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

export default function App({ Component, pageProps }) {
  return <><Component {...pageProps} /> <ToastContainer /></>
}
