
import {ArrowRightOutlined} from '@ant-design/icons'
import "../styles/header.css"
import headerImage from '@/public/assets/images/header.jpg'


const Header = () => {
  return (
    <div className='overlay-container'>
        <div className='overlay-text'>
            <div className='ot-left'>
                <h2><span>Empowering students</span> to achieve their full potential</h2>
                <button className="header-button">
                    <div className="header-button-sign"><ArrowRightOutlined /></div>
                    <span className="header-button-text">Learn More</span>
                </button>
            </div>
            {/* <div className='ot-right'>
                <p>At VLAD Education, we believe that every student is unique and possesses the potential to achieve their dreams with the right support and guidance.</p>
                <div className='ot-line'></div>
                <p>Since 2013, we have dedicated ourselves to helping students and families navigate the complex world of education with confidence and success.</p>
            </div> */}
        </div>
    </div>
  )
}

export default Header