import { ToastContainer } from "react-toastify";
import MainLayout from "@/ui/layout/MainLayout";
export default function App() {
  return (
    <>
      <ToastContainer position="top-center" autoClose={3000} theme="light" />
      <MainLayout />
    </>
  );
}
