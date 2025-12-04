import { useState } from 'react'
import { FaGoogle, FaLinkedin } from 'react-icons/fa'
import { MdLogin, MdVerifiedUser, MdDashboard, MdPeople } from 'react-icons/md'
import logo from '../../logo.png'
import './styles.css'

function Login({ onSwitchToRegister }) {
    const [formData, setFormData] = useState({
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
        console.log('Login:', formData)
    }

    return (
        <div className="auth-container">
            <div className="auth-form-panel">
                <div className="auth-form">
                    <div className="logo">
                        <img src={logo} alt="emireq" />
                    </div>

                    <h2 className="form-title">Welcome back</h2>
                    <p className="form-subtitle">Log in to continue your funding journey</p>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Username</label>
                            <input
                                type="text"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="username"
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

                        <button type="submit" className="submit-button">
                            Log In
                        </button>
                    </form>

                    <p className="form-footer">
                        Don't have an account? <a href="#" className="link" onClick={(e) => { e.preventDefault(); onSwitchToRegister(); }}>Register</a>
                    </p>

                    <p className="divider">Or</p>

                    <div className="oauth-buttons">
                        <button className="oauth-button google">
                            <FaGoogle />
                            <span>Sign in with Google</span>
                        </button>
                        <button className="oauth-button linkedin">
                            <FaLinkedin />
                            <span>Sign in with LinkedIn</span>
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
                        <span>🌍 Empowering ethical entrepreneurs</span>
                    </div>

                    <h1 className="info-title">Empowering Ethical Startups Worldwide</h1>

                    <p className="info-quote">"</p>

                    <p className="info-description">
                        Join a growing network of founders and investors driving transparent, Shariah-compliant innovation. Connect, raise funds, and grow your business in a platform built for integrity and impact.
                    </p>

                    <div className="features-list">
                        <div className="feature-item">
                            <div className="feature-icon">
                                <MdLogin />
                            </div>
                            <div className="feature-text">
                                <h3>Secure Login</h3>
                                <p>Safe and encrypted access to your dashboard</p>
                            </div>
                        </div>

                        <div className="feature-item">
                            <div className="feature-icon">
                                <MdVerifiedUser />
                            </div>
                            <div className="feature-text">
                                <h3>Verified Global Investors</h3>
                                <p>Connect with pre-vetted Shariah-compliant backers</p>
                            </div>
                        </div>

                        <div className="feature-item">
                            <div className="feature-icon">
                                <MdDashboard />
                            </div>
                            <div className="feature-text">
                                <h3>Shariah-Compliant Dashboard</h3>
                                <p>Manage your startup with Islamic principles</p>
                            </div>
                        </div>

                        <div className="feature-item">
                            <div className="feature-icon">
                                <MdPeople />
                            </div>
                            <div className="feature-text">
                                <h3>Trusted by 50,000+ entrepreneurs</h3>
                                <p>Join our growing ethical business community</p>
                            </div>
                        </div>
                    </div>

                    <div className="info-emoji">📈</div>
                </div>
            </div>
        </div>
    )
}

export default Login
