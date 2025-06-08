import SkipCard from "./SkipCard";

const SkipGrid = ({ skipOptions }) => {
  const handleSelect = () => {};

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {skipOptions?.map((skip) => (
        <SkipCard
          key={skip.id}
          size={skip.size}
          hirePeriod={skip.hire_period_days}
          priceBeforeVat={skip.price_before_vat}
          onSelect={() => handleSelect(skip)}
        />
      ))}
    </div>
  );
};

export default SkipGrid;
