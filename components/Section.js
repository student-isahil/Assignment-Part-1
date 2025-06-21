export default function SectionTeam() {
  return (
    <section className="w-full px-6 md:px-20 py-16 bg-white">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE */}
        <div>
          <p className="text-blue-600 font-medium mb-2">Lorem ipsum dolor sit amet</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            LOREM IPSUM DOLOR SIT AMET CONSECTETUR. EU ELIT.
          </h2>
          <p className="text-gray-700 mb-6">
            Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam leo eleifend condimentum
            in vitae faucibus. Amet massa malesuada sit pretium. Donec pharetra erat lacus suspendisse ornare.
          </p>

          {/* Bullet Items */}
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="flex items-start gap-3 mb-4">
              <img src='https://images-platform.99static.com//bhaktHiOk8hZag-35vHeLFwtV8U=/447x3197:972x3722/fit-in/500x500/99designs-contests-attachments/88/88839/attachment_88839233' alt="icon" width={24} height={24} className="mt-1" />
              <div>
                <p className="font-semibold">
                  Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.
                </p>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra.
                  Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum.
                  Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="w-full">
          <img
            src='https://t3.ftcdn.net/jpg/04/94/93/66/240_F_494936647_DVsq0HIhBBG4qwktVyKGHSZ9l3tI9z4w.jpg'
            alt="Team talking"
            className="rounded-md w-full h-auto object-cover"
            width={600}
            height={400}
          />
        </div>
      </div>

      {/* COLOR STRIP AT BOTTOM */}
      <div className="mt-10 h-2 w-full flex">
        <div className="w-1/3 bg-blue-900" />
        <div className="w-1/3 bg-green-500" />
        <div className="w-1/3 bg-purple-900" />
      </div>
    </section>
  )
}
