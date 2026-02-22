import DataImage from "./data";
import { listTools, listProyek } from "./data"

function App() {

  return (
    <>
      {/* Hero */}
      <div className="hero grid md:grid-cols-2 pt-10 items-center xl:gap-0 gap-6 grid-cols-1 md:h-[75vh] h-auto">
        <div className="flex flex-col md:items-start items-center animate__animated animate__fadeInUp animate__delay-3s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md bg-orange-600/50" loading="lazy"
              style={{
                background: "linear-gradient(to top, rgba(234, 88, 12, 1) 20%, rgba(234, 88, 12, 0) 100%)",
              }} />
            <q>Di balik setiap sistem yang efisien, ada desain yang matang.😊</q>
          </div>
          <h1 className="text-2xl/tight font-bold mb-6">Halo, Saya <br />
            <span className="text-5xl/tight">Yosefino Mario Fernando</span><br />
            <span className="text-3xl/tight text-orange-600">Software Developer</span>
          </h1>
          <p className="text-base/loose mb-6 opacity-50">Membangun sistem yang efisien, aman, dan mudah digunakan, serta menyederhanakan proses kompleks melalui kode yang rapi dan handal.</p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a href="#" className="bg-orange-600 p-4 rounded-2xl hover:font-bold border-2 border-orange-600 
            transition-all duration-300 ease-in-out hover:scale-105 hover:bg-orange-50 hover:text-orange-600">Download CV <i className="ri-file-download-line ri-lg"></i></a>
            <a href="#proyek" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600
            border-2 border-zinc-700 transition-all duration-300 ease-in-out">Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i></a>
          </div>
        </div>
        <img src={DataImage.HeroImage} alt="Hero Image" className="w-[500px] rounded-4xl md:ml-auto md:mr-0 mx-auto
            animate__animated animate__fadeInUp animate__delay-4s" loading="lazy"
          style={{
            background: "linear-gradient(to top, rgba(234, 88, 12, 1) 20%, rgba(234, 88, 12, 0) 100%)",
          }} />
      </div>
      {/* Hero */}

      {/* Tentang */}
      <div className="tentang mt-32 py-10" id="tentang">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg"
          data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md mb-10 sm:hidden block" loading="lazy"
            style={{
              background: "linear-gradient(to top, rgba(234, 88, 12, 1) 20%, rgba(234, 88, 12, 0) 100%)",
            }} />
          <p className="text-base/loose mb-10">Saya seorang Software Developer dengan pengalaman mengembangkan aplikasi web dan API untuk kebutuhan internal perusahaan. Fokus saya adalah menciptakan solusi yang efisien, scalable, dan mudah dipelihara. Berpengalaman dalam merancang alur sistem, menangani integrasi backend, serta memastikan keamanan dan performa aplikasi.</p>
          <div className="flex items-center justify-between">
            <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md sm:block hidden" loading="lazy"
              style={{
                background: "linear-gradient(to top, rgba(234, 88, 12, 1) 20%, rgba(234, 88, 12, 0) 100%)",
              }} />
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  0<span className="text-orange-600">+</span>
                </h1>
                <p>Proyek Selesai</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">
                  0<span className="text-orange-600">+</span>
                </h1>
                <p>Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>

        <div className="tools mt-32">
          <h1 className="text-4xl/snug font-bold mb-4"
            data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Tools yang dipakai</h1>
          <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50"
            data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Berikut ini beberapa tools yang biasa saya pakai untuk pembuatan sistem</p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 
          grid-cols-1 gap-4">

            {listTools.map((tools, index) => (
              <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md 
              hover:bg-zinc-800 group" key={tools.id}
                data-aos="fade-up" data-aos-duration="1000" data-aos-delay={(index + 1) * 100} data-aos-once="true">
                <img src={tools.gambar} alt="Tools Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" loading="lazy" />
                <div>
                  <h4 className="font-bold">{tools.nama}</h4>
                  <p className="opacity-50">{tools.ket}</p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
      {/* Tentang */}

      {/* Proyek */}
      <div className="proyek mt-32 py-10" id="proyek">
        <h1 className="text-center text-4xl font-bold mb-2"
          data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Proyek</h1>
        <p className="text-center text-base/loose opacity-50"
          data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Berikut ini beberapa proyek yang telah saya buat.</p>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

          {listProyek.map((proyek, index) => (
            <div key={proyek.id} className="p-4 bg-zinc-800 rounded-md flex flex-col"
              data-aos="fade-up" data-aos-duration="1000" data-aos-delay={(index + 1) * 100} data-aos-once="true">
              <img src={proyek.gambar} alt="Proyek Image" loading="lazy" />
              <div className="flex-1 flex flex-col mt-4">
                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-base/loose mb-4">{proyek.desk}</p>
                <div className="my-auto">
                  <div className="flex flex-wrap gap-2 mb-6">

                    {proyek.tools.map((tool, index) => (
                      <p className="py-1 px-3 border border-zinc-500 rounded-md font-semibold
                    bg-zinc-600" key={index}>{tool}</p>
                    ))}

                  </div>
                </div>
                <div className="mt-auto text-center">
                  <a href="#" className="bg-orange-600 p-3 rounded-lg block hover:bg-orange-700 hover:scale-102 transition-all duration-300 ease-in-out">Lihat Website</a>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
      {/* Proyek */}

      {/* Kontak */}
      <div className="kontak mt-32 sm:p-10 p-0" id="kontak">
        <h1 className="text-center text-4xl font-bold mb-2"
          data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Kontak</h1>
        <p className="text-center text-base/loose opacity-50 mb-10"
          data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Mari terhubung dengan saya.</p>
        {/* <form action="https://formsubmit.co/your@email.com" method="POST"  */}
        <form action="#"
          className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" autoComplete="off"
          data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama Lengkap</label>
              <input type="text" name="nama" placeholder="Masukan Nama..." required
                className="border border-zinc-500 p-2 rounded-md" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input type="email" name="email" placeholder="Masukan Email..." required
                className="border border-zinc-500 p-2 rounded-md" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold">Pesan</label>
              <textarea name="pesan" id="pesan" cols="45" rows="7" placeholder="Pesan..." required
                className="border border-zinc-500 p-2 rounded-md"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-orange-600 p-3 rounded-lg w-full cursor-pointer 
             hover:bg-orange-700 hover:scale-102 transition-all duration-300 ease-in-out">Kirim Pesan</button>
            </div>
          </div>
        </form>
      </div>
      {/* Kontak */}
    </>
  )
}

export default App
