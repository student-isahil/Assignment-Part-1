export default function ImageShowcase() {
    const images = [
        "https://www.otocapital.in/_next/image?url=https%3A%2F%2Fassets.otocapital.in%2Fproduction%2Fsports-bike-in-india.png&w=1024&q=75", 
        "https://cdnp.flypgs.com/files/Ekstrem_Sporlar/dag-bisikleti-sporu-nedir.jpg", 
        "https://images.unsplash.com/photo-1592194996308-7b43878e84a6", 
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEsFMmrCokA7syxPdEQnhcOk_GL3hcqtcJu_ANxv8Xm2VqqqPHFv7yOyG94qjVrRrM-GM&usqp=CAU", 
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMo4zeug9ZN3QkGfGSRHEE7e_s1mDTdcWrHg&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF5FM0NngXjOuuaJPYVeTcAUO-KEU0V1u0OA&s", 
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8", 
        "https://i.pinimg.com/236x/1b/e5/a7/1be5a7966f634f99a3759e670789070b.jpg", 
    ]


    return (
        <section className="w-full px-6 md:px-20 py-20 bg-blue-50">
            <div className="grid md:grid-cols-2 gap-10 items-center">
                {/* LEFT TEXT SECTION */}
                <div>
                    <p className="text-sm text-gray-600 uppercase tracking-wide">No Limits</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        LOREM IPSUM DOLOR SIT AMET
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor
                        pharetra tempor quis arcu. Ipsum nullam.
                    </p>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-md shadow hover:bg-blue-700 transition">
                        Lorem Ipsum →
                    </button>
                </div>

                {/* RIGHT IMAGE GRID */}
                <div className="grid grid-cols-3 gap-1">
                    {images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`bike-${index}`}
                            className={`w-full object-cover rounded-md ${index === 4 || index === 5 ? "col-span-2" : ""
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
