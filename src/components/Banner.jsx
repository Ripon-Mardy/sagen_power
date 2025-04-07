import product1 from "../../public/images/product1.jpg";
import product2 from "../../public/images/product2.jpg";
import product3 from "../../public/images/product3.jpg";
import product4 from "../../public/images/product4.jpg";

export default function Banner() {
  const bannerImageData = [
    {
      src: product1,
      alt: "product1",
    },
    {
      src: product2,
      alt: "product2",
    },
    {
      src: product3,
      alt: "product3",
    },
    {
      src: product4,
      alt: "product4",
    },
  ];
  return (
    <section className="w-full z-20 relative h-screen py-12 pt-32 after:absolute after:left-0 after:right-0 after:bg-black bg-[url('https://img.freepik.com/free-vector/ombre-blue-curve-light-blue-background_53876-173299.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="xl:container xl:mx-auto px-2 flex flex-col md:flex-row items-center gap-10">
        {/* overlay  */}
        <div className="inset-0 bg-black absolute left-0 top-0 opacity-10 -z-10"></div>
        {/* Left: Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-headingColor leading-tight">
            Sagen Power
          </h1>
          <p className="mt-4 text-textColor max-w-md text-justify">
            Provide Extra power backup & Voltage Control system. We ensure the
            quality after sales and service give you top solution.Everyday open.
          </p>
          <button className="mt-6 md:text-base text-sm bg-buttonBg hover:bg-buttonBgHover text-white px-6 py-3 rounded-full font-medium transition duration-300">
            Get Details
          </button>
        </div>

        {/* Right: 4 Images Grid */}
        <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-4 md:grid-cols-2 sm:grid-cols-1">
          {bannerImageData.map((image, index) => (
            <img
            key={index}
              src={image.src}
              alt={image.alt}
              className="w-full h-40 md:h-48 object-cover rounded-lg shadow"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
