/* eslint-disable react/prop-types */

export const HomeSectionCard = ({ currData }) => {
  const { imageUrl, title, brand } = currData;

  return (
    <div
      className="cursor-pointer flex flex-col items-center 
        bg-white rounded-lg shadow-lg overflow-hidden h-[21rem] w-[14rem] mx-3
         border border-black"
    >
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top w-full h-full"
          src={imageUrl}
          alt=""
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">{brand}</h3>
        <p className="mt2 text-sm text-gray-500">{title}</p>
      </div>
    </div>
  );
};
