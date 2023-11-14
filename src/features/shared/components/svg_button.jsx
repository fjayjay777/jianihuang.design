const SvgButton = ({ svgChild, onClick }) => {
  return <button onClick={onClick}>{svgChild}</button>;
};

export default SvgButton;
