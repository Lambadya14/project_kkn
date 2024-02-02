"use client";
import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import panitia from "./images/gaul.jpg";
import Rectangle3 from "./images/Rectangle 3.png";
import Rectangle6 from "./images/Rectangle 6.png";
import Rectangle8 from "./images/Rectangle 8.png";
import Rectangle9 from "./images/Rectangle 9.png";
import Rectangle10 from "./images/Rectangle 10.png";
import Facebook from "./images/basil_facebook-solid.png";
import Instagram from "./images/mdi_instagram.png";
import Youtube from "./images/fa6-brands_youtube.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const navigation = [
  { name: "Beranda", href: "" },
  { name: "Berita Desa", href: "baru" },
  { name: "Data Desa", href: "#" },
  { name: "Pemerintahan Desa", href: "#" },
  { name: "Lembaga Desa", href: "#" },
  { name: "Profil Desa", href: "#" },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isSlideScreen, setIsSlideScreen] = useState(false);
  const [isFooterScreen, setIsFooterScreen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const newsData = [
    {
      title: "Pembalap Ranski Sedang Berlibur",
      date: "2024-02-01",
      content:
        "Lorem ipsum dolor sit amet consectetur. Nunc eu venenatis massa ipsum. Diam habitant a ultrices neque suscipit eget at. Lectus  maecenas volutpat ipsum praesent praesent facilisis. Molestie ligula convallis enim quam.",
      images: Rectangle8,
    },
    {
      title: "Tanah Gersang di Gunung Botak",
      date: "2024-02-02",
      content:
        "Lorem ipsum dolor sit amet consectetur. Nunc eu venenatis massa ipsum. Diam habitant a ultrices neque suscipit eget at. Lectus  maecenas volutpat ipsum praesent praesent facilisis. Molestie ligula convallis enim quam.",
      images: Rectangle9,
    },
    {
      title: "Pemandangan Indah Gunung Botak",
      date: "2024-02-02",
      content:
        "Lorem ipsum dolor sit amet consectetur. Nunc eu venenatis massa ipsum. Diam habitant a ultrices neque suscipit eget at. Lectus  maecenas volutpat ipsum praesent praesent facilisis. Molestie ligula convallis enim quam.",
      images: Rectangle10,
    },
    {
      title: "Tanah Gersang di Gunung Botak",
      date: "2024-02-02",
      content:
        "Lorem ipsum dolor sit amet consectetur. Nunc eu venenatis massa ipsum. Diam habitant a ultrices neque suscipit eget at. Lectus  maecenas volutpat ipsum praesent praesent facilisis. Molestie ligula convallis enim quam.",
      images: Rectangle8,
    },
    {
      title: "Pemandangan Indah Gunung Botak",
      date: "2024-02-02",
      content:
        "Lorem ipsum dolor sit amet consectetur. Nunc eu venenatis massa ipsum. Diam habitant a ultrices neque suscipit eget at. Lectus  maecenas volutpat ipsum praesent praesent facilisis. Molestie ligula convallis enim quam.",
      images: Rectangle9,
    },
    // Add more news items as needed
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isSlideScreen ? 1 : 3,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
  };

  const NewsCard = ({ title, date, content, images }) => (
    <div className="relative flex flex-col justify-center mx-2">
      <div className="absolute left-0 right-0 bottom-0 flex flex-col justify-center text-left">
        <h2 className="text-white text-2xl font-bold mb-2">{title}</h2>
        <p className="text-white mb-2">{date}</p>
        <p className="text-white line-clamp-3 ">{content}</p>
      </div>
      <div className="flex justify-center">
        <Image src={images} className="object-cover w-full h-[520px]" alt="" />
      </div>
    </div>
  );

  useEffect(() => {
    // Function to check the screen size and update state
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    // Initial check on mount
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  //SLIDE State
  useEffect(() => {
    // Function to check the screen size and update state
    const handleResizeSlide = () => {
      setIsSlideScreen(window.innerWidth < 905);
    };

    // Initial check on mount
    handleResizeSlide();

    // Event listener for window resize
    window.addEventListener("resize", handleResizeSlide);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResizeSlide);
    };
  });
  //Footer State
  useEffect(() => {
    // Function to check the screen size and update state
    const handleResizeFooter = () => {
      setIsFooterScreen(window.innerWidth < 870);
    };

    // Initial check on mount
    handleResizeFooter();

    // Event listener for window resize
    window.addEventListener("resize", handleResizeFooter);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResizeFooter);
    };
  });

  const Accordion = ({ data }) => {
    return (
      <div className="w-full">
        {data.map((item, index) => (
          <div key={index} className="mb-2 w-auto">
            <div
              className="bg-[#002B34] bg-opacity-50 p-2 cursor-pointer rounded-md "
              onClick={() => handleClick(index)}
            >
              <h2 className="text-lg text-left font-semibold">
                {item.question}
              </h2>
            </div>
            {activeIndex === index && (
              <div className="bg-[#002B34] p-2 bg-opacity-50">
                <p className="text-white text-left">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  const data = [
    {
      question: "Apa itu webste Kampung Siwi?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Accumsan integer mollis proin nunc. Varius morbi dui consequat feugiat convallis sed at. Nunc nunc praesent sagittis sit. Tincidunt sodales duis mi nibh senectus.",
    },
    {
      question: "Fitur apa saja yang dimiliki website Kampung Siwi?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Accumsan integer mollis proin nunc. Varius morbi dui consequat feugiat convallis sed at. Nunc nunc praesent sagittis sit. Tincidunt sodales duis mi nibh senectus.",
    },
    {
      question: "Mengapa harus menggunakan website Kampung Siwi?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Accumsan integer mollis proin nunc. Varius morbi dui consequat feugiat convallis sed at. Nunc nunc praesent sagittis sit. Tincidunt sodales duis mi nibh senectus.",
    },
    {
      question: "Keuntungan menggunakan website Kampung Siwi?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Accumsan integer mollis proin nunc. Varius morbi dui consequat feugiat convallis sed at. Nunc nunc praesent sagittis sit. Tincidunt sodales duis mi nibh senectus.",
    },
  ];

  return (
    <div className="bg-white ">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-end p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" color="white" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={`/${item.href}`}
                className="text-sm font-semibold leading-6 text-white"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-end">
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div>
        <div className=" relative isolate px-6 pt-14 lg:px-8 ">
          <div
            className="absolute inset-x-0 -top-[50px] -z-10 transform-gpu overflow-hidden"
            aria-hidden="true"
          >
            <div>
              <Image
                src={panitia}
                className="object-cover h-[700px] lg:h-auto w-full"
                alt=""
              />
              <div
                className="absolute inset-0 bg-black"
                style={{ opacity: "0.5" }}
              />
            </div>
          </div>
          <div className="max-w-2xl mt-[300px] sm:mt-[250px] lg:mt-56 xl:mt-[250px] 2xl:mt-[300px] relative z-10 mb-[170px] xl:mb-[430px]">
            <div className="text-left">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Kampung Siwi
              </h1>
              <p className="mt-6 text-lg leading-8 text-white line-clamp-3 sm:line-clamp-none">
                Lorem ipsum dolor sit amet consectetur. Nunc eu venenatis massa
                ipsum. Diam habitant a ultrices neque suscipit eget at. Lectus
                quam maecenas volutpat ipsum praesent praesent facilisis.
                Molestie ligula convallis enim quam.
              </p>
            </div>
          </div>
        </div>
        {/* POTENSI KAMPUNG */}
        <div
          className=" text-center 
          px-6  lg:px-8 "
        >
          <h1 className="underlined-text mb-[30px]">
            <strong>POTENSI KAMPUNG</strong>
          </h1>

          <div
            className={`text-center px-6 lg:px-8 ${
              isSmallScreen ? "flex-col" : "flex justify-around items-center"
            }`}
          >
            <div className="flex flex-col">
              <p className="lg:w-[400px] xl:w-[400px] text-left ">
                Lorem ipsum dolor sit amet consectetur. Nunc eu venenatis massa
                ipsum. Diam habitant a ultrices neque suscipit eget at. Lectus
                quam maecenas volutpat ipsum praesent praesent facilisis.
                Molestie ligula convallis enim quam.
              </p>
              <Image
                src={Rectangle6}
                alt=""
                className="w-full md:w-[300px]  xl:w-[400px] sm:h-[400px] object-cover object-center"
              />
            </div>

            {isSmallScreen ? "" : <div className="vertical-line py-6" />}

            <div className={`${isSmallScreen ? "flex flex-col-reverse" : ""}`}>
              <div className={isSmallScreen ? "" : "flex justify-end"}>
                <Image
                  src={Rectangle3}
                  alt=""
                  className="w-full md:w-[300px]  xl:w-[400px] sm:h-[400px] object-cover object-center"
                />
              </div>
              <p
                className={`${
                  isSmallScreen
                    ? "lg:w-[400px] xl:w-[400px] text-left"
                    : "lg:w-[400px] xl:w-[400px] text-right"
                }`}
              >
                Lorem ipsum dolor sit amet consectetur. Nunc eu venenatis massa
                ipsum. Diam habitant a ultrices neque suscipit eget at. Lectus
                quam maecenas volutpat ipsum praesent praesent facilisis.
                Molestie ligula convallis enim quam.
              </p>
            </div>
          </div>
        </div>
        {/* BERITA KAMPUNG */}
        <div className=" text-center md:px-6  pt-5 lg:px-6 bg-[#0B3147] text-white mt-6 pb-5 ">
          <h1 className="underlined-berita mb-5">
            <strong>BERITA</strong>
          </h1>
          <Slider {...settings}>
            {newsData.map((news, index) => (
              <div key={index}>
                <NewsCard
                  title={news.title}
                  date={news.date}
                  content={news.content}
                  images={news.images}
                />
              </div>
            ))}
          </Slider>
        </div>
        {/* FAQ Web */}
        <div className=" relative isolate px-6 lg:px-8 mt-[30px] ">
          <div
            className="absolute inset-x-0 -top-[30px] -z-10 transform-gpu overflow-hidden"
            aria-hidden="true"
          >
            <div>
              <Image
                src={panitia}
                className="object-cover sm:h-[700px] h-[1000px] lg:h-auto w-full"
                alt=""
              />
              <div
                className="absolute inset-0 bg-black"
                style={{ opacity: "0.5" }}
              />
            </div>
          </div>
          <div>
            <div className=" text-center  text-white mb-5 ">
              <h1 className="underlined-berita mb-5">
                <strong>FAQ</strong>
              </h1>
              <Accordion data={data} />
            </div>

            <div
              className={
                isFooterScreen
                  ? "text-white mt-[90px]"
                  : "flex justify-between text-white md:mt-[200px] lg:mt-[200px] xl:mt-[370px]"
              }
            >
              <div>
                <h1 className=" font-semibold">Kampung Siwi</h1>
                Jl. Raya Beji No. 13 Desa Beji Kec. Banjarmangu Kode Pos 53452
                <br />
                Kecamatan Banjarmangu Kabupaten Banjarnegara Provinsi Jawa
                Tengah Kode Pos 53452 <br />
                Email: Pemdesbejibjm@gmail.com Telp: 081226764534
              </div>
              <div className="mt-4">
                <div className="flex ">
                  <Image src={Facebook} alt="" width={30} height={30} />
                  Kampung Siwi
                </div>
                <div className="flex">
                  <Image src={Instagram} alt="" width={30} height={30} />
                  Kampung Siwi
                </div>
                <div className="flex">
                  <Image src={Youtube} alt="" width={30} height={30} />
                  Kampung Siwi
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
