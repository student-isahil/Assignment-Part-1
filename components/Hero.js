import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col-reverse md:flex-row mt-10 justify-between px-6 md:px-20 pt-32 bg-gradient-to-b from-white to-blue-50 overflow-hidden">

      {/* Left: Text + Newsletter */}
      <div className="flex-1 text-center md:text-left space-y-6 max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Lorem ipsum dolor sit amet
        </h1>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet consectetur. Enim netus cras congue quis elit sociis.
        </p>
        <form className="flex flex-col sm:flex-row items-center gap-2 w-full max-w-md">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Submit
            <span>→</span>
          </button>
        </form>

        <div className="text-sm text-blue-700 mt-2 flex items-center gap-2 justify-center md:justify-start">
          ✅ No credit card required!
        </div>
      </div>

      {/* Right: Image with diagonal clip */}
      <div className="flex-1 relative h-[400px] md:h-[500px] w-full md:w-[50%] clip-diagonal">
        <Image
          src="/images/hero.svg"
          alt="Bike"
          fill
          className="object-cover"
        />
      </div>
    </section>
  )
}
