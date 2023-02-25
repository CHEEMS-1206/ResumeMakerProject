const Footer = (props) => {
  return (
    <div 
      className={props.className} 
      onMouseEnter={props.onMouseEnter}>
      {props.footerValue}
    </div>
  );
};
export default Footer;
