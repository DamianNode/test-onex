import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative bg-white overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#" className="flex items-center">
                <img
                  className="h-8 w-auto sm:h-10"
                  src="./onex-dev.png"
                  alt=""
                />
                <span className="font-semibold text-3xl ml-2">
                  onex.developers
                </span>
              </a>
            </div>
            <nav className="hidden md:flex space-x-10">
              <a
                href="#"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Oferta
              </a>
              <a
                href="#"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Jak pracujemy?
              </a>
              <a
                href="#"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                O nas
              </a>
              <a
                href="#"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Kontakt
              </a>
            </nav>
          </div>
        </div>
      </div>

      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-20 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
            <div className="flex  py-8 md:justify-start md:space-x-10"></div>
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Jesteśmy zespołem</span>
                  <br />
                  <span className="block text-yellow-600 xl:inline">
                    profesjonalistów
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Kiedy rozpoczynamy z Tobą projekt stajemy się Twoim partnerem
                  w cyfryzacji. Dzięki stałemu bliskiemu kontaktowi z Twoim
                  zespołem wnosimy trwałą wartość dla Twojego biznesu.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 md:py-4 md:text-lg md:px-10"
                    >
                      Wyceń projekt
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-yellow-700 bg-yellow-100 hover:bg-yellow-200 md:py-4 md:text-lg md:px-10"
                    >
                      Oferta
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 z-10">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="./welcome.webp"
            alt=""
          />
        </div>
      </div>
      <div className="lg:absolute lg:-right-20 lg:-top-10 z-0">
        <img className="" src="./union.png" alt="" />
      </div>

      <div class="py-36 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="lg:text-center">
            <h2 class="text-base text-yellow-600 font-semibold tracking-wide uppercase">
              Zaufali nam
            </h2>
          </div>
          <section class="p-10 flex md:flex-row items-center justify-around bg-white flex-wrap sm:flex-col">
            <div class="h-40 w-44 relative cursor-pointer mb-5">
              <div class="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
              <div class="absolute inset-0 transform  hover:scale-75 transition duration-300">
                <div class="flex h-full w-full bg-white rounded-lg shadow-2xl">
                  <img src="./polsat.png" alt="" class="h-40 w-44" />
                </div>
              </div>
            </div>

            <div class="h-40 w-44 relative cursor-pointer mb-5">
              <div class="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
              <div class="absolute inset-0 transform  hover:scale-75 transition duration-300">
                <div class="h-full w-full bg-white rounded-lg shadow-2xl">
                  <img src="./polsat.png" alt="" class="h-40 w-44" />
                </div>
              </div>
            </div>

            <div class="h-40 w-44 relative cursor-pointer mb-5">
              <div class="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
              <div class="absolute inset-0 transform  hover:scale-75 transition duration-300">
                <div class="h-full w-full bg-white rounded-lg shadow-2xl">
                  <img src="./polsat.png" alt="" class="h-40 w-44" />
                </div>
              </div>
            </div>

            <div class="h-40 w-44 relative cursor-pointer mb-5">
              <div class="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
              <div class="absolute inset-0 transform  hover:scale-75 transition duration-300">
                <div class="h-full w-full bg-white rounded-lg shadow-2xl">
                  <img src="./polsat.png" alt="" class="h-40 w-44" />
                </div>
              </div>
            </div>

            <div class="h-40 w-44 relative cursor-pointer mb-5">
              <div class="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
              <div class="absolute inset-0 transform  hover:scale-75 transition duration-300">
                <div class="h-full w-full bg-white rounded-lg shadow-2xl">
                  <img src="./polsat.png" alt="" class="h-40 w-44" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div class="py-12 bg-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="lg:text-center">
            <h2 class="text-base text-yellow-600 font-semibold tracking-wide uppercase">
              Kompleksowo realizujemy
            </h2>
            <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Technologie w których działamy
            </p>
            <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Lorem ipsum byle by nie wordpress, wtyczki, wtyki i Pehapy.
              Uzywamy powaznych i nowoczesnych technologi.
            </p>
          </div>

          <div class="mt-10">
            <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div class="bg-white w-full flex items-center p-2 rounded-xl shadow border">
                <div class="flex items-center space-x-4">
                  <img
                    src="./react.png"
                    alt="React"
                    class="w-16 h-16 rounded-full"
                  />
                </div>
                <div class="flex-grow p-3">
                  <div class="font-semibold text-gray-700">React.js</div>
                  <div class="text-sm text-gray-500">
                    Lorem ipsum technology super hiper
                  </div>
                </div>
              </div>

              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <div class="flex items-center justify-center h-12 w-12 rounded-md text-white bg-yellow-600">
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <dt class="text-lg leading-6 font-medium text-gray-900">
                    Jest super nowoczesny
                  </dt>
                  <dd class="mt-2 text-base text-gray-500">
                    Nie to co wordpress. Maiores impedit perferendis suscipit
                    eaque, iste dolor cupiditate blanditiis ratione.
                  </dd>
                </div>
              </div>

              <div class="bg-white w-full flex items-center p-2 rounded-xl shadow border">
                <div class="flex items-center space-x-4">
                  <img
                    src="./net.png"
                    alt=".NET"
                    class="w-16 h-16 rounded-full"
                  />
                </div>
                <div class="flex-grow p-3">
                  <div class="font-semibold text-gray-700">Mictosoft .NET</div>
                  <div class="text-sm text-gray-500">
                    Lorem ipsum technology super hiper
                  </div>
                </div>
              </div>

              <div class="flex items-center ">
                <div class="flex-shrink-0">
                  <div class="flex items-center justify-center h-12 w-12 rounded-md text-white bg-yellow-600">
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                      />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <dt class="text-lg leading-6 font-medium text-gray-900">
                    Jest super szybki
                  </dt>
                  <dd class="mt-2 text-base text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </dd>
                </div>
              </div>

              <div class="bg-white w-full flex items-center p-2 rounded-xl shadow border">
                <div class="flex items-center space-x-4">
                  <img
                    src="./polsat.png"
                    alt="JS"
                    class="w-16 h-16 rounded-full"
                  />
                </div>
                <div class="flex-grow p-3">
                  <div class="font-semibold text-gray-700">JavaScript</div>
                  <div class="text-sm text-gray-500">
                    Lorem ipsum technology super hiper
                  </div>
                </div>
              </div>

              <div class="flex items-center ">
                <div class="flex-shrink-0">
                  <div class="flex items-center justify-center h-12 w-12 rounded-md text-white bg-yellow-600">
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                      />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <dt class="text-lg leading-6 font-medium text-gray-900">
                    Jest najlepszy
                  </dt>
                  <dd class="mt-2 text-base text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
