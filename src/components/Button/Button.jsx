import './Button.css';
export const Button = ({Children, width, height, color}) => {
  return(
    <button className="button"
     style={{
       width: width,
       height: height,
       color: color,
     }}
    >{Children}</button>
  );
}