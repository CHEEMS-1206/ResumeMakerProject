const Header = (props) => {
  return (
    <div 
      className={props.className} 
      onMouseEnter={props.onMouseEnter}>
      {props.headerValue}
    </div>
  );
};
export default Header;
