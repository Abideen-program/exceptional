const TestimonialItem = ({ name, testimony }) => {
  return (
    <div className="px-5 py-10 rounded-[21.53px] bg-[#F8F8F8] flex flex-col justify-center gap-3 h-[350px]">
      <h4 className="text-[20px] text-[#1E1E1E] font-semibold">{name}</h4>
      <p className="text-[#4B514F] text-[18px]">{testimony}</p>
    </div>
  );
};

export default TestimonialItem;
