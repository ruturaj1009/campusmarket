import React from "react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <>
      <hr className="my-3" />
      <section className="relative overflow-hidden py-10 shadow-xl">
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="-m-6 flex flex-wrap">
            <div className="w-full p-6 md:w-1/2 lg:w-5/12">
              <div className="flex h-full flex-col justify-between">
                <div className="mb-4 inline-flex items-center">
                  <Link className="links" to="/">
                    <img
                      src="https://i.postimg.cc/qqw93Fq1/Screenshot-2023-12-18-185129-removebg-preview-1.png"
                      className="mt-1.5 mr-4"
                      alt="Campus Mart"
                      width="250"
                      // height="80"
                    />
                  </Link>
                </div>
                <div>
                  <p className="mb-4  text-base font-medium">
                    Designed and Developed for Igit, Sarang
                  </p>
                  <p className="text-sm text-gray-600">
                    &copy; Copyright 2022. All Rights Reserved by CampusMart.
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="w-full p-6 md:w-1/2 lg:w-2/12">
              <div className="h-full">
                <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                  Company
                </h3>
                <ul>
                  <li className="mb-4">
                    <a
                      className=" text-base font-medium text-gray-900 hover:text-gray-700"
                      href="#"
                    >
                      Features
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className=" text-base font-medium text-gray-900 hover:text-gray-700"
                      href="#"
                    >
                      Pricing
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className=" text-base font-medium text-gray-900 hover:text-gray-700"
                      href="#"
                    >
                      Affiliate Program
                    </a>
                  </li>
                  <li>
                    <a
                      className=" text-base font-medium text-gray-900 hover:text-gray-700"
                      href="#"
                    >
                      Press Kit
                    </a>
                  </li>
                </ul>
              </div>
            </div> */}
            <div className="w-full p-6 md:w-1/2 lg:w-2/12">
              <div className="h-full">
                <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                  Support
                </h3>
                <ul>
                  <li className="mb-4">
                    <Link
                      className=" text-base font-medium text-gray-900 hover:text-gray-700"
                      href="#"
                    >
                      Account
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      className=" text-base font-medium text-gray-900 hover:text-gray-700"
                      href="#"
                    >
                      Help
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      className=" text-base font-medium text-gray-900 hover:text-gray-700"
                      href="#"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      className=" text-base font-medium text-gray-900 hover:text-gray-700"
                      href="#"
                    >
                      Customer Support
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full p-6 md:w-1/2 lg:w-3/12">
              <div className="h-full">
                <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                  Legals
                </h3>
                <ul>
                  <li className="mb-4">
                    <Link
                      className=" text-base font-medium text-gray-900 hover:text-gray-700"
                      href="#"
                    >
                      Terms &amp; Conditions
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      className=" text-base font-medium text-gray-900 hover:text-gray-700"
                      href="#"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      className=" text-base font-medium text-gray-900 hover:text-gray-700"
                      href="#"
                    >
                      Licensing
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
