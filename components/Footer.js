import "@/styles/footer.css"
import {FacebookFilled, TwitterCircleFilled, InstagramFilled, LinkedinFilled } from '@ant-design/icons'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>CONVINCED?</p>
        <h2>Let's create magic together</h2>
        <button className="footer-button">
          <div className="footer-button-sign">➔</div>
          <span className="footer-button-text">Learn More</span>
        </button>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Vlad Education. All rights reserved.</p>
        <div className="footer-icons">
          <span className="footer-icon"><FacebookFilled /></span>
          <span className="footer-icon"><TwitterCircleFilled /></span>
          <span className="footer-icon"><InstagramFilled /></span>
          <span className="footer-icon"><LinkedinFilled /></span>
        </div>
      </div>
    </footer>
  )
}

export default Footer