import { useForm, ValidationError } from "@formspree/react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Send, CheckCircle } from "lucide-react";

const Contact = () => {
  const [state, handleSubmit, reset] = useForm("xnpnqvnp");

  return (
    <section id="contact" className="container py-20 relative">
      {/* 🏷️ Title */}
      <div className="text-center group mb-16 w-fit mx-auto">
        <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-3">
          Let's talk
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <span className="block h-1 w-20 bg-linear-to-r from-primary to-violet-500 mx-auto rounded-full transition-all duration-300 group-hover:w-40"></span>
      </div>

      {/**/}
      <div className="absolute w-72 h-72 md:w-96 md:h-96 dark:bg-primary/10 blur-3xl pointer-events-none"></div>

      {/* 🟢 succeeded message*/}
      {state.succeeded ? (
        <div
          className="max-w-lg mx-auto text-center bg-white dark:bg-gray-800/50 
          border border-gray-200 dark:border-gray-700 rounded-2xl p-10 
          shadow-lg relative z-10"
        >
          <div
            className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 dark:bg-green-900/30 
            flex items-center justify-center"
          >
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            Message Sent! 🎉
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Thank you for reaching out. I'll get back to you as soon as
            possible.
          </p>
          <button
            onClick={reset}
            className="bg-linear-to-r from-primary to-violet-500 text-white 
              px-6 py-3 rounded-lg cursor-pointer font-medium
              hover:shadow-[0_0_25px] hover:shadow-primary/50 
              transition-all duration-300"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16">
          <div className="relative z-10">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* name */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full outline-none border border-gray-300 dark:border-gray-700 
                    bg-white dark:bg-gray-800/50
                    px-4 py-3 rounded-lg 
                    text-gray-900 dark:text-white
                    placeholder:text-gray-400 dark:placeholder:text-gray-500
                    focus:border-primary dark:focus:border-primary 
                    focus:ring-2 focus:ring-primary/20
                    transition-all duration-200"
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>

              {/* email */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  className="w-full outline-none border border-gray-300 dark:border-gray-700 
                    bg-white dark:bg-gray-800/50
                    px-4 py-3 rounded-lg 
                    text-gray-900 dark:text-white
                    placeholder:text-gray-400 dark:placeholder:text-gray-500
                    focus:border-primary dark:focus:border-primary 
                    focus:ring-2 focus:ring-primary/20
                    transition-all duration-200"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>

              {/* message */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Write your message here..."
                  className="w-full outline-none border border-gray-300 dark:border-gray-700 
                    bg-white dark:bg-gray-800/50
                    px-4 py-3 rounded-lg 
                    text-gray-900 dark:text-white
                    placeholder:text-gray-400 dark:placeholder:text-gray-500
                    focus:border-primary dark:focus:border-primary 
                    focus:ring-2 focus:ring-primary/20
                    transition-all duration-200 resize-none"
                ></textarea>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>

              {/* button submit */}
              <button
                disabled={state.submitting}
                type="submit"
                className="flex items-center justify-center gap-2 
                  bg-linear-to-r from-primary to-violet-500 
                  text-white font-medium 
                  px-6 py-3 rounded-lg w-fit
                  cursor-pointer 
                  disabled:opacity-60 disabled:cursor-not-allowed
                  hover:shadow-[0_0_25px] hover:shadow-primary/50 
                  hover:scale-[1.02]
                  duration-300 transition-all"
              >
                <Send size={16} />
                {state.submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* animation contact */}
          <div className="relative flex items-center justify-center">
            <div className="absolute w-72 h-72 md:w-96 md:h-96 dark:bg-primary/20 bg-primary/10 blur-3xl -z-10 pointer-events-none"></div>

            <DotLottieReact
              src="../../public/animations/TTA Contact Us.lottie"
              loop={true}
              autoplay={true}
              className="h-70"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
