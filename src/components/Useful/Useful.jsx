export const Useful = ({value, margin, color, textDecoration, href, value}) => {
  return (
    <a 
    style={{
      margin: margin,
      color: color,
      textDecoration: textDecoration
    }}
    
    href={href} 
    target="_blank"
    >{value}</a>
  )
}