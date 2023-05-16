import Image from "next/image";

function Header() {
  return (
    <header className="text-gray-600 body-font sticky top-0 lg:px-16 bg-[#1f1f1f]">
      <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center mb-4 md:mb-0">
          <span className="ml-3 text-xl text-white">BlogHub</span>
        </a>

        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 text-white">First Link</a>
          <a className="mr-5 text-white">Second Link</a>
          <a className="mr-5 text-white">Third Link</a>
          <a className="mr-5 text-white">Fourth Link</a>
        </nav>

        <button className="inline-flex items-center bg-orange-500 text-white border-0 py-2 px-5 focus:outline-none rounded text-base mt-4 md:mt-0">
          Lets Talk
        </button>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <div>
      <Header />

      {/*  */}
      <div className="bg-[#1f1f1f] lg:px-72">
        <div className="py-24">
          <h2 className="text-white text-center text-4xl font-medium mb-3">
            Welcome to Our Blog
          </h2>
          <p className="text-center text-white mb-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil,
            nesciunt. Eligendi minus non doloribus, voluptatibus totam
            repudiandae eum harum ipsam!. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Nihil, nesciunt. Eligendi minus non
            doloribus, voluptatibus totam repudiandae eum harum ipsam!
          </p>

          <a
            href="/learn-more"
            className="text-white text-center flex justify-center items-center"
          >
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>

      {/*  */}
      <section>
        <div className="flex pt-3 lg:px-16 gap-3 dev">
          {/* left */}
          <div className="w-3/12 dev">
            <h2 className="text-2xl font-medium">Recent posts</h2>
            <div>
              <div className="bg-white flex mb-3">
                <Image
                  src="https://picsum.photos/80/80?random=1"
                  width={80}
                  height={80}
                  alt=""
                  className="w-20 h-20"
                ></Image>
                <div className="p-2">
                  <p className="text-sm mb-1">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit rem
                  </p>
                  <a className="font-medium text-sm flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-1"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="bg-white flex mb-3">
                <Image
                  src="https://picsum.photos/80/80?random=2"
                  width={80}
                  height={80}
                  alt=""
                  className="w-20 h-20"
                ></Image>
                <div className="p-2">
                  <p className="text-sm mb-1">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit rem
                  </p>
                  <a className="font-medium text-sm flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-1"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="bg-white flex mb-3">
                <Image
                  src="https://picsum.photos/80/80?random=3"
                  width={80}
                  height={80}
                  alt=""
                  className="w-20 h-20"
                ></Image>
                <div className="p-2">
                  <p className="text-sm mb-1">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit rem
                  </p>
                  <a className="font-medium text-sm flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-1"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-medium">News</h2>
            <div>
              <div className="bg-white flex mb-3">
                <Image
                  src="https://picsum.photos/80/80?random=4"
                  width={80}
                  height={80}
                  alt=""
                  className="w-20 h-20"
                ></Image>
                <div className="p-2">
                  <p className="text-sm mb-1">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit rem
                  </p>
                  <a className="font-medium text-sm flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-1"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>{" "}
              <div className="bg-white flex mb-3">
                <Image
                  src="https://picsum.photos/80/80?random=5"
                  width={80}
                  height={80}
                  alt=""
                  className="w-20 h-20"
                ></Image>
                <div className="p-2">
                  <p className="text-sm mb-1">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit rem
                  </p>
                  <a className="font-medium text-sm flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-1"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>{" "}
              <div className="bg-white flex mb-3">
                <Image
                  src="https://picsum.photos/80/80?random=6"
                  width={80}
                  height={80}
                  alt=""
                  className="w-20 h-20"
                ></Image>
                <div className="p-2">
                  <p className="text-sm mb-1">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit rem
                  </p>
                  <a className="font-medium text-sm flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-1"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="w-9/12 dev">
            <h2 className="text-2xl font-medium">Content</h2>

            <div className="grid-cols-3 grid gap-3 dev">
              <div className="bg-white p-2 dev">
                <Image
                  src="https://picsum.photos/720/479"
                  height={480}
                  width={720}
                  alt=""
                  className="mb-3"
                ></Image>
                <p className="text-sm text-gray-600 mb-3">UI/UX</p>
                <h2 className="text-lg font-medium mb-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </h2>
                <p className="text-gray-500 text-sm mb-3">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Illum totam dignissimos ipsum. Illo sint iure, eius commodi
                  perferendis consectetur totam.
                </p>
                <span className="text-sm text-gray-600">24 March</span> |{" "}
                <span className="text-sm text-gray-600">7 min read</span>
              </div>

              <div className="bg-white p-2 dev">
                <Image
                  src="https://picsum.photos/720/481"
                  height={480}
                  width={720}
                  alt=""
                  className="mb-3"
                ></Image>
                <p className="text-sm text-gray-600 mb-3">UI/UX</p>
                <h2 className="text-lg font-medium mb-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </h2>
                <p className="text-gray-500 text-sm mb-3">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Illum totam dignissimos ipsum. Illo sint iure, eius commodi
                  perferendis consectetur totam.
                </p>
                <span className="text-sm text-gray-600">24 March</span> |{" "}
                <span className="text-sm text-gray-600">7 min read</span>
              </div>

              <div className="bg-white p-2 dev">
                <Image
                  src="https://picsum.photos/720/482"
                  height={480}
                  width={720}
                  alt=""
                  className="mb-3"
                ></Image>
                <p className="text-sm text-gray-600 mb-3">UI/UX</p>
                <h2 className="text-lg font-medium mb-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </h2>
                <p className="text-gray-500 text-sm mb-3">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Illum totam dignissimos ipsum. Illo sint iure, eius commodi
                  perferendis consectetur totam.
                </p>
                <span className="text-sm text-gray-600">24 March</span> |{" "}
                <span className="text-sm text-gray-600">7 min read</span>
              </div>

              <div className="bg-white p-2 dev">
                <Image
                  src="https://picsum.photos/720/483"
                  height={480}
                  width={720}
                  alt=""
                  className="mb-3"
                ></Image>
                <p className="text-sm text-gray-600 mb-3">UI/UX</p>
                <h2 className="text-lg font-medium mb-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </h2>
                <p className="text-gray-500 text-sm mb-3">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Illum totam dignissimos ipsum. Illo sint iure, eius commodi
                  perferendis consectetur totam.
                </p>
                <span className="text-sm text-gray-600">24 March</span> |{" "}
                <span className="text-sm text-gray-600">7 min read</span>
              </div>

              <div className="bg-white p-2 dev">
                <Image
                  src="https://picsum.photos/720/484"
                  height={480}
                  width={720}
                  alt=""
                  className="mb-3"
                ></Image>
                <p className="text-sm text-gray-600 mb-3">UI/UX</p>
                <h2 className="text-lg font-medium mb-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </h2>
                <p className="text-gray-500 text-sm mb-3">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Illum totam dignissimos ipsum. Illo sint iure, eius commodi
                  perferendis consectetur totam.
                </p>
                <span className="text-sm text-gray-600">24 March</span> |{" "}
                <span className="text-sm text-gray-600">7 min read</span>
              </div>

              <div className="bg-white p-2 dev">
                <Image
                  src="https://picsum.photos/720/485"
                  height={480}
                  width={720}
                  alt=""
                  className="mb-3 "
                ></Image>
                <p className="text-sm text-gray-600 mb-3">UI/UX</p>
                <h2 className="text-lg font-medium mb-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </h2>
                <p className="text-gray-500 text-sm mb-3">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Illum totam dignissimos ipsum. Illo sint iure, eius commodi
                  perferendis consectetur totam.
                </p>
                <span className="text-sm text-gray-600">24 March</span> |{" "}
                <span className="text-sm text-gray-600">7 min read</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
