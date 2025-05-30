import { useLocation } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import ErrorPage from "../components/ErrorPage";
import ErrorImage from "../assets/E1.png";

const Error = () => {
  const location = useLocation();
  console.log(location.state);
  const errorCode = location.state?.errorCode || "404";

  const errorConfig = {
    400: {
      code: "400",
      title: "Permintaan Tidak Valid",
      description: "Server tidak dapat memahami permintaan yang dikirim.",
    },
    401: {
      code: "401",
      title: "Tidak Terautentikasi",
      description: "Silakan login untuk mengakses halaman ini.",
    },
    403: {
      code: "403",
      title: "Akses Ditolak",
      description: "Anda tidak memiliki izin untuk membuka halaman ini.",
    },
  };

  const errorData = errorConfig[errorCode] || {
    code: errorCode,
    title: "Kesalahan Tidak Dikenal",
    description: "Telah terjadi gangguan yang tidak terduga.",
  };

  return (
    <>
      <PageHeader title={`Kode Kesalahan ${errorData.code}`} breadcrumb={["Beranda", `Kesalahan ${errorData.code}`]} />
      <ErrorPage image={ErrorImage}>
        <div className="min-h-screen bg-cover bg-center flex flex-col justify-between text-white" style={{ backgroundImage: `url(${ErrorImage})` }}>
          {/* Header */}
          <div className="flex justify-between items-start p-8">
            <div className="text-left leading-tight text-lg font-bold tracking-widest"></div>
            <div className="flex space-x-6 text-sm tracking-widest font-medium mt-2">
              <a href="#portfolio" className="hover:underline">
                PORTOFOLIO
              </a>
              <a href="#support" className="hover:underline">
                DUKUNGAN
              </a>
            </div>
          </div>

          {/* Error Content */}
          <div className="text-center">
            <p className="text-sm tracking-widest mb-2">KESALAHAN</p>
            <h1 className="text-8xl font-extrabold">{errorData.code}</h1>
            <p className="text-sm tracking-widest mt-2">
              {errorData.title}
              <br />
              {errorData.description}
            </p>
          </div>

          {/* Footer */}
          <div className="flex justify-between items-end p-8">
            <div className="space-y-4 text-lg">
              <a href="https://facebook.com" aria-label="Facebook" className="block hover:opacity-70">
                🌐
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="block hover:opacity-70">
                🐦
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="block hover:opacity-70">
                📷
              </a>
            </div>
            <div className="text-xs tracking-widest">
              <a href="/" className="hover:underline">
                KEMBALI
              </a>
            </div>
          </div>
        </div>
      </ErrorPage>
    </>
  );
};

export default Error;
