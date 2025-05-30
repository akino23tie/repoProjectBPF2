// pages/Error400.jsx
import PageHeader from "../components/PageHeader";
import ErrorPage from "../components/ErrorPage";
import ErrorImage from "../assets/E1.png";

const NotFound = () => (
  <>
    <ErrorPage image={ErrorImage}>
      <div className="min-h-screen bg-cover bg-center flex flex-col justify-between text-white" style={{ backgroundImage: `url(${ErrorImage})` }}>
        {/* Header */}
        <div className="flex justify-between items-start p-8">
          <div className="text-left leading-tight text-lg font-bold tracking-widest"></div>
          <div className="flex space-x-6 text-sm tracking-widest font-medium mt-2">
            <a href="#works" className="hover:underline">
              WORKS
            </a>
            <a href="#support" className="hover:underline">
              SUPPORT
            </a>
          </div>
        </div>

        {/* Error Content */}
        <div className="text-center">
          <p className="text-sm tracking-widest mb-2">KESALAHAN</p>
          <h1 className="text-8xl font-extrabold">404</h1>
          <p className="text-sm tracking-widest mt-2">
            HALAMAN TIDAK
            <br />
            DITEMUKAN
          </p>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-end p-8">
          <div className="space-y-4 text-lg">
            <a href="https://facebook.com" aria-label="Facebook" className="block hover:opacity-70">
              🌍
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className="block hover:opacity-70">
              ✉️
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="block hover:opacity-70">
              🎥
            </a>
          </div>
          <div className="text-xs tracking-widest">
            <a href="/" className="hover:underline">
              KEMBALI KE AWAL
            </a>
          </div>
        </div>
      </div>
    </ErrorPage>
  </>
);

export default NotFound;
