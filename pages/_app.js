import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "material-icons/iconfont/material-icons.css";

export default function App({ Component, pageProps }) {
  return <><Component {...pageProps} /> <ToastContainer /></>
}
