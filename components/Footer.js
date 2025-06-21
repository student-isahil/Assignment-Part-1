export default function Footer() {
  return (
    <footer className="bg-[#0A0D14] text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
        {/* Logo */}
        <div className="col-span-2 md:col-span-1">
          <div className="bg-gray-200 inline-block px-4 py-1 text-black font-bold">
            LOGO
          </div>
        </div>

        {/* Link Columns */}
        {[1, 2, 3, 4].map((col) => (
          <div key={col}>
            <h4 className="text-sm font-semibold mb-4">Lorem Ipsum</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
