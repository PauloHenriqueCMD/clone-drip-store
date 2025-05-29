import { Link } from 'react-router-dom'
export const Useful = ({value, margin, color, textDecoration, to, target}) => {
  return (
   <p style={{margin: margin}}> 
    <Link 
    style={{
      margin: margin,
      color: color,
      textDecoration: textDecoration
    }}
    
    to={to} 
    target={target}
    >{value}</Link>
    </p>
  );
}