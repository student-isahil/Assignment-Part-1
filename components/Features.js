import Image from "next/image"

const features = [
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    desc: "Vestibulum ornare fermentum feugiat.",
    image: "/bike1.jpg"
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    desc: "Dictum at ac tellus faucibus urna ullamcorper.",
    image: "/bike2.jpg"
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur.",
    desc: "Vestibulum nisl morbi metus gravida.",
    image: "/bike3.jpg"
  }
]

export default function FeatureSection() {
  return (
<section className="w-full py-20 px-6 md:px-20 bg-white">
  <div className="w-full grid md:grid-cols-2 gap-12 items-center">
    {/* Left */}
    <div>
      <p className="text-sm text-blue-700 font-medium mb-2">Lorem ipsum dolor sit</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">LOREM IPSUM DOLOR SIT AMET</h2>
      <p className="mb-8 text-gray-600">
        Lorem ipsum dolor sit amet consectetur. Amet sodales facilisis donec dui.
      </p>

      <div className="space-y-6">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-start gap-4">
            <Image src='/images/feature2.svg' width={60} height={60} alt={`Feature ${idx + 1}`} className="rounded" />
            <div>
              <p className="font-medium">{feature.title}</p>
              <p className="text-sm text-gray-600">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-6 mt-10">
        <button className="bg-blue-800 text-white px-6 py-2 rounded hover:bg-blue-900 transition">Lorem Ipsum</button>
        <div className="text-blue-800 text-sm">📞 123456789</div>
      </div>
    </div>

    {/* Right */}
    <div className="w-full">
      <Image
        src='/images/feature.svg'
        alt="Feature image"
        width={1200}
        height={800}
        className="w-full rounded shadow-md object-cover"
      />
    </div>
  </div>
</section>

  )
}
