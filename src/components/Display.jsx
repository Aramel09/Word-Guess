import PropTypes from "prop-types";

export default function Display({ setShow }) {
  return (
    <>
      <h1 className="text-4xl font-black">Name or Initials</h1>
      <input type="text" className=" rounded bg-black text-center text-white" />
      <button
        onClick={() => setShow(false)}
        className=" rounded bg-black px-6 text-white"
      >
        Go
      </button>
    </>
  );
}

Display.propTypes = {
  setShow: PropTypes.func.isRequired,
};
