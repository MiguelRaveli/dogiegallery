import React, { useState } from "react";
import { toast } from "react-toastify";
const ContactPage = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    toast.success("Mensagem Enviada");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <>
      <section className="bg-white dark:bg-red-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 text-white">
            Nos Contate
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-white sm:text-xl">
            Quer enviar um feedback?
          </p>
          <form action="#" className="space-y-8">
            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-white"
              >
                Seu Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                className="shadow-sm border border-gray-300 black text-sm rounded-lg focus:ring-primary-500 
                focus:border-primary-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 
                text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="nome@gmail.com"
                required
              />
            </div>
            <div>
              <label
                for="subject"
                className="block mb-2 text-sm font-medium text-white"
              >
                Assunto
              </label>
              <input
                value={subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm 
                focus:ring-primary-500 focus:border-primary-500 dark:border-gray-600 dark:placeholder-gray-400 
                text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Digite o assunto da mensagem"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                for="message"
                className="block mb-2 text-sm font-medium text-white"
              >
                Mensagem
              </label>
              <textarea
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg 
                shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 
                dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Deixa uma mensagem..."
              ></textarea>
            </div>
            <button
              type="submit"
              onClick={handleSendMessage}
              className="py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-white"
            >
              Enviar
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
