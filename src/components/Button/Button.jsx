import './Button.scss'
// import { useNavigate } from 'react-router-dom'

const Button = ({ label, onClick, type='button', className, }) => {
  // const navigate = useNavigate();
  // const handleBackToHomePage = () => {
  //     navigate('/')
  // }
  return (
    <button
        className={ className } 
        onClick={ onClick } 
        type={type} 
    >
        {label}
    </button>
  )
}

export default Button