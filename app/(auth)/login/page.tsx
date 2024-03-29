"use client";
import { loginUser } from "@/app/lib/firebase/services";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const LoginPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Mencegah halaman untuk refresh saat form disubmit
    setIsSubmitted(true);
    // Mengambil nilai dari input form
    const formData = new FormData(e.currentTarget as HTMLFormElement);

    const userData = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    try {
      // Panggil fungsi loginUser untuk melakukan proses login
      await loginUser(userData, (success: boolean, message: string) => {
        if (success) {
          formData.set("email", ""); // Mengosongkan nilai email setelah login
          formData.set("password", ""); // Mengosongkan nilai password setelah login
          navigate.push("/admin/dashboard/");
          alert(message);
          console.log(message); // Output pesan sukses
        } else {
          console.error(message); // Output pesan kesalahan jika login gagal
          alert(message);
        }
      });

      setIsSubmitted(false);
    } catch (error: any) {
      setIsSubmitted(false);
      console.error("Error saat login:", error);
    }
  };

  return (
    <div>
      {" "}
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className=" flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          {/* <a
    href="#"
    className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
  >
    <img
      className="w-8 h-8 mr-2"
      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
      alt="logo"
    />
    Flowbite
  </a> */}
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Login
              </h1>
              <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
                <div className="mb-5">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@flowbite.com"
                    required
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="flex items-start mb-5">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    />
                  </div>
                  <label
                    htmlFor="remember"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Remember me
                  </label>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
                </button>

                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Belum Punya akun?{" "}
                  <a
                    href="#"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Register di sini
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
