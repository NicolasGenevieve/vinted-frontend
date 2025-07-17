import Switch from "@mui/material/Switch";

const SwitchTri = ({ sort, setSort }) => {
  const handleChange = (event) => {
    const isChecked = event.target.checked;
    setSort(isChecked ? "price-desc" : "price-asc");
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <span>Prix croissant</span>
      <Switch
        checked={sort === "price-desc"}
        onChange={handleChange}
        sx={{
          "& .MuiSwitch-switchBase.Mui-checked": {
            color: " #007782", // couleur du bouton actif
          },
          "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
            backgroundColor: " #049eacff", // fond actif
          },
        }}
        slotProps={{
          input: {
            "aria-label": "switch tri prix",
          },
        }}
      />
      <span>Prix décroissant</span>
    </div>
  );
};

export default SwitchTri;
