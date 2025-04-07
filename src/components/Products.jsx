import product1 from '../../public/images/product1.jpg';
import product2 from '../../public/images/product2.jpg';
import product3 from '../../public/images/product3.jpg';
import product4 from '../../public/images/product4.jpg';

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Online UPS",
      description: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      image: product1,
    },
    {
      id: 2,
      name: "Inverter",
      description: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      image: product2,
    },
    {
      id: 3,
      name: "Automatic Voltage Regulator",
      description: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      image: product3,
    },
    {
      id: 4,
      name: "Battery",
      description: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      image: product4,
    },
  ];

  return (
    <section className="xl:container xl:mx-auto px-4 py-16 bg-white pt-10">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`flex flex-col items-center ${
              index % 1 !== 0 ? "md:flex-row-reverse" : ""
            } bg-gray-50 rounded-lg p-6 transition-shadow duration-300`}
          >
            {/* Image Section */}
            <div className=" flex justify-center items-center mb-3">
              <img
                src={product.image}
                alt={product.name}
                className="object-cover w-full h-48 rounded-md"
              />
            </div>

            {/* Text Section */}
            <div className=" space-y-4">
              <h2 className="inline-block bg-buttonBg text-white text-base font-semibold px-4 py-2 rounded-full">
                {product.name}
              </h2>
              <p className="text-textColor md:text-base md:text-justify leading-6 text-sm md:leading-7 text-justify">
                {product.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}