import React from 'react'
import { ICFacebook, ICInstagram, ICPinterest, ICTwitter, ICWhatsapp, LogoKabayan } from '../../../assets'
import './footer.scss'

const Icon = ({img}) => {
    return (
        <div className="icon-wrapper">
            <img className="icon-medsos" src={img} alt="icon" />
        </div>
    )
}
const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div>
                    <img className="logo" src={LogoKabayan} alt="Logo" />
                </div>
                <div className="social-wrapper">
                    <Icon img={ICFacebook} />
                    <Icon img={ICInstagram} />
                    <Icon img={ICTwitter} />
                    <Icon img={ICWhatsapp} />
                    <Icon img={ICPinterest} />
                </div>
            </div>
            <div className="copyright">
                <p>Copyright</p>
            </div>
        </div>
    )
}

export default Footer