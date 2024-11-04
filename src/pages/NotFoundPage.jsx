import React from "react";

const NotFoundPage = () => {
  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-black">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl text-black">
            Something's missing.
          </p>
          <p className="mb-4 text-lg font-light text-black">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.{" "}
          </p>
          <a
            href="#"
            className="inline-flex text-white bg-red-500 p-2.5 rounded-lg hover:bg-red-600 transition ease-in-out delay-150"
          >
            Back to Homepage
          </a>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
