import { Range } from "react-range";

const SlideTri = ({ priceRange, setPriceRange }) => {
  const STEP = 1;
  const MIN = 0;
  const MAX = 500;

  return (
    <div style={{ padding: "20px 0", width: "100%" }}>
      <Range
        step={STEP}
        min={MIN}
        max={MAX}
        values={priceRange}
        onChange={(values) => setPriceRange(values)}
        renderTrack={({ props, children }) => {
          const [min, max] = priceRange;
          const percentageLeft = ((min - MIN) / (MAX - MIN)) * 100;
          const percentageRight = ((max - MIN) / (MAX - MIN)) * 100;

          return (
            <div
              {...props}
              style={{
                ...props.style,
                height: "6px",
                width: "100%",
                background: `linear-gradient(
                  to right,
                  #ccc 0%,
                  #ccc ${percentageLeft}%,
                  #007782 ${percentageLeft}%,
                  #007782 ${percentageRight}%,
                  #ccc ${percentageRight}%,
                  #ccc 100%
                )`,
                margin: "20px 0",
                borderRadius: "3px",
              }}
            >
              {children}
            </div>
          );
        }}
        renderThumb={({ props }) => {
          const { key, ...rest } = props;
          return (
            <div
              key={key}
              {...rest}
              style={{
                ...props.style,
                height: "24px",
                width: "24px",
                backgroundColor: "#007782",
                borderRadius: "50%",
                boxShadow: "0 0 2px rgba(0,0,0,0.4)",
              }}
            />
          );
        }}
      />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>{priceRange[0]} €</span>
        <span>{priceRange[1]} €</span>
      </div>
    </div>
  );
};

export default SlideTri;
