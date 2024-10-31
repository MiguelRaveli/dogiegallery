import MoonLoader from "react-spinners/MoonLoader";
const override = {
  display: "block",
  margin: "100px auto",
};
const Spinner = ({ loading }) => {
  return (
    <MoonLoader
      color="#EF4444"
      loading={loading}
      cssOverride={override}
      size={100}
    />
  );
};

export default Spinner;
