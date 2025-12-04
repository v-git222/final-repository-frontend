import { useState } from 'react'
import { FaGoogle, FaLinkedin } from 'react-icons/fa'
import { MdTrendingUp, MdShowChart, MdVerifiedUser } from 'react-icons/md'
import logo from '../../logo.png'
import './styles.css'

function Register({ onSwitchToLogin, onStartRegistration }) {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Register:', formData)
    }

    return (
        <div className="auth-container">
            <div className="auth-form-panel">
                <div className="auth-form">
                    <div className="logo">
                        <img src={logo} alt="emireq" />
                    </div>

                    <h2 className="form-title">Welcome back</h2>
                    <p className="form-subtitle">Access your startup dashboard and funding journey</p>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Username</label>
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                placeholder="username"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="example@gmail.com"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="••••••••••••"
                                required
                            />
                        </div>

                        <button type="submit" className="submit-button" onClick={(e) => { e.preventDefault(); onStartRegistration(); }}>
                            Register
                        </button>
                    </form>

                    <p className="form-footer">
                        Already have an account? <a href="#" className="link" onClick={(e) => { e.preventDefault(); onSwitchToLogin(); }}>Log in</a>
                    </p>

                    <p className="divider">Or</p>

                    <div className="oauth-buttons">
                        <button className="oauth-button google">
                            <FaGoogle />
                            <span>Register with Google</span>
                        </button>
                        <button className="oauth-button linkedin">
                            <FaLinkedin />
                            <span>Register with LinkedIn</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="auth-info-panel">
                <div className="language-selector">
                    <span>English(UK)</span>
                    <span>▼</span>
                </div>

                <div className="info-content">
                    <div className="info-badge">
                        <span>⭐ Trusted by 50,000+ users worldwide</span>
                    </div>

                    <h1 className="info-title">Build Your Startup the Shariah Way</h1>

                    <p className="info-quote">"</p>

                    <p className="info-description">
                        Connect with ethical investors, secure funding, and scale your business on a platform built for Shariah compliance and transparency.
                    </p>

                    <div className="features-list">
                        <div className="feature-item">
                            <div className="feature-icon">
                                <MdTrendingUp />
                            </div>
                            <div className="feature-text">
                                <h3>Access to Funding</h3>
                                <p>Connect with 10,000+ verified investors</p>
                            </div>
                        </div>

                        <div className="feature-item">
                            <div className="feature-icon">
                                <MdShowChart />
                            </div>
                            <div className="feature-text">
                                <h3>Track Your Progress</h3>
                                <p>Real-time analytics and engagement insights</p>
                            </div>
                        </div>

                        <div className="feature-item">
                            <div className="feature-icon">
                                <MdVerifiedUser />
                            </div>
                            <div className="feature-text">
                                <h3>Shariah Certified</h3>
                                <p>All deals verified by Islamic finance experts</p>
                            </div>
                        </div>
                    </div>

                    <div className="info-emoji">📊</div>
                </div>
            </div>
        </div>
    )
}

export default Register
