export default function NewsletterSection() {
  const cards = [
    {
      img: "https://www.shutterstock.com/image-photo/buddha-image-symbolizes-belief-buddhism-600nw-2513837021.jpg",
      title: "Lorem ipsum dolor sit amet consectetur.",
      desc: "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae.",
    },
    {
      img: "https://images.unsplash.com/photo-1585202900225-6d3ac20a6962",
      title: "Lorem ipsum dolor sit amet consectetur.",
      desc: "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae.",
    },
    {
      img: "https://fruitguys.com/wp-content/uploads/2024/03/Strawberry_Bite_JSMOrganics_Horizontal.jpg",
      title: "Lorem ipsum dolor sit amet consectetur.",
      desc: "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae.",
    },
    {
      img: "https://www.robertharding.com/watermark.php?type=preview&im=RF/RH_RF/HORIZONTAL/1372-1064",
      title: "Lorem ipsum dolor sit amet consectetur.",
      desc: "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae.",
    },
  ];

  return (
    <section className="w-full md:px-20 py-20 bg-white">
      <p className="text-blue-600 font-medium mb-2">Lorem ipsum dolor sit amet</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">LOREM IPSUM DOLOR SIT</h2>
      <p className="text-gray-600 max-w-2xl mb-10">
        Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui.
        Mi porttitor ut aliquam mattis maecenas eget integer in nam. Non nisi iaculis at
        felis aliquet. Hendrerit tellus at purus lectus.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {cards.map((card, index) => (
          <div key={index} className="bg-white shadow-md rounded-md overflow-hidden">
            <img
              src={card.img}
              alt="newsletter"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{card.desc}</p>
              <a href="#" className="text-blue-600 font-medium text-sm hover:underline">
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
