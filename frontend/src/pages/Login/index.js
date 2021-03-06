import React from 'react'
import { LoginBg } from '../../assets';
import { Button, Gap, Input, Link} from '../../components';
import './login.scss';
import { useHistory } from 'react-router'

const Login = () => {
    const history = useHistory()
    return (
        <div className="main-page">
            <div className="left">
                <img src={LoginBg} className="bg-image" alt="imageBG" />
            </div>
            <div className="right">
                <p className="title">Login</p>
                <Input label="Email" placeholder="Email" />
                <Gap height={15} />
                <Input label="Password" placeholder="Password" />
                <Gap height={15} />
                <Button title="Login" onClick={() => history.push('/')} />
                <Gap height={100} />
                <Link title="Belum punya akun, silahkan daftar" onClick={() => history.push('/register')} />
            </div>
        </div>
    )
}

export default Login
