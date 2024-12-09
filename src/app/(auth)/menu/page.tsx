import React from 'react';
import Link from 'next/link';

const MenuPage: React.FC = () => {
  return (
    <div className="bg-white font-sans">
      {/* Header Section */}
      <header
        className="relative bg-cover bg-center h-96 flex flex-col items-center justify-center"
        style={{ backgroundImage: "url('/Header-bg.png')" }}
      >
        <h1 className="text-white text-3xl font-bold">Our Menu</h1>
        <nav className="text-white mt-2">
          <ul className="flex items-center space-x-2">
            <li>
              <Link href="/" className="text-gray-300 hover:underline">
                Home
              </Link>
            </li>
            <li>
              <span className="text-orange-500">&rsaquo;</span>
            </li>
            <li>
              <span className="text-orange-500">Menu</span>
            </li>
          </ul>
        </nav>
      </header>

      <main className="py-12 px-6 md:px-16 lg:px-28">
        {/* Appetizers Section */}
        <section className="bg-gray-50 flex justify-center items-center p-4">
          <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg flex flex-col md:flex-row">
            <div className="w-[448px] h-[626px] md:w-1/2 p-4">
              <img
                src="/menu-img/Start-Menu.png"
                alt="Starter Menu Dish"
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 p-6">
              <h2 className="text-2xl font-bold mb-4">Starter Menu</h2>
              <ul className="space-y-4">
                <li className="flex justify-between items-center border-b pb-2">
                  <div>
                    <h3 className="text-lg font-semibold">Alder Grilled Chinook Salmon</h3>
                    <p className="text-sm text-gray-600">Toasted French bread topped with romano, cheddar</p>
                    <p className="text-sm text-gray-500">560 CAL</p>
                  </div>
                  <span className="text-orange-500 font-bold">$32</span>
                </li>
                {/* Add more menu items as needed */}
              </ul>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-12 text-center">
          <h2 className="text-2xl font-semibold mb-6">We work with the best people</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            <img src="/menu-img/Partner (1).png" alt="Partner 1 Logo" className="h-16 mx-auto" />
            <img src="/menu-img/Partner (2).png" alt="Partner 2 Logo" className="h-16 mx-auto" />
            <img src="/menu-img/Partner (3).png" alt="Partner 3 Logo" className="h-16 mx-auto" />
            <img src="/menu-img/Partner (4).png" alt="Partner 4 Logo" className="h-16 mx-auto" />
            <img src="/menu-img/Partner (5).png" alt="Partner 5 Logo" className="h-16 mx-auto" />
            <img src="/menu-img/Partner (6).png" alt="Partner 6 Logo" className="h-16 mx-auto" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default MenuPage;
