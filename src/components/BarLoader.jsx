import BarLoader from "react-spinners/BarLoader";
const override = {
  display: "block",
  margin: "100px auto",
};
const BarLoader = ({ loading }) => {
  return (
    <BarLoader
      color="#EF4444"
      loading={loading}
      cssOverride={override}
      size={100}
    />
  );
};

export default BarLoader;
