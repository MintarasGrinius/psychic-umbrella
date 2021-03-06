import small_logo from "../../media/small_logo.png";

const Logo = () => {
  return (
    <a
      href="https://coingate.com/"
      className="m-3 mt-4"
      style={{ paddingLeft: "1rem" }}
    >
      <img
        src={small_logo}
        alt=""
        width="auto"
        height="14"
        className="d-inline-block align-text-top"
      />
    </a>
  );
};

export default Logo;
