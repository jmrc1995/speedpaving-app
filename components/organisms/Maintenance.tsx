export const Maintenance = () => {
  return (
    <div className="flex flex-col items-center justify-center font-(family-name:) min-h-screen p-8 sm:p-20 ">
      <div className="items-center max-w-4xl w-full  l p-8 rounded-lg flex flex-col sm:flex-row gap-8">
        {/* Left Side: Text */}
        <div className="flex-1 text-center sm:text-left">
          <h1 className="text-4xl sm:text-4xl font-bold uppercase">
            Speed Paving.com
          </h1>
          <h2 className="text-2xl sm:text-xl mt-4">Check back soon !</h2>
          <p className="mt-4 text-gray-700">
            Our website is currently under construction as we work to pave the
            way to an even better online experience. Were busy updating our
            digital presence to better serve you and showcase our high-quality,
            fast paving solutions.
          </p>
          <div className="mt-4">
            <p>
              <strong>Phone:</strong> (908) 413-5002
            </p>
            <p>
              <strong>Email:</strong> wspeedsr@gmail.com
            </p>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="flex-1 min-w-[250px] sm:min-w-[300px]">
          <img
            src="/sp-assphault_1--pic.jpg"
            alt="Paving Machine"
            className="w-full h-auto max-h-[400px] object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};
