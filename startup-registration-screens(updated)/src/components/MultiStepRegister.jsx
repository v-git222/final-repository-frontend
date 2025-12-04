import { useState } from 'react'
import { FaArrowRight, FaArrowLeft, FaCheck } from 'react-icons/fa'
import { MdBusiness, MdPerson, MdAttachMoney, MdDescription, MdRocketLaunch, MdGroup, MdGavel, MdShare, MdRateReview, MdVerified } from 'react-icons/md'
import logo from '../../logo.png'
import './MultiStepRegister.css'

const steps = [
    { id: 1, title: 'Basic Info', icon: <MdPerson />, color: 'rgba(30, 58, 138, 0.6)' }, // Dark Blue
    { id: 2, title: 'Company Details', icon: <MdBusiness />, color: 'rgba(88, 28, 135, 0.6)' }, // Purple
    { id: 3, title: 'Business Model', icon: <MdRocketLaunch />, color: 'rgba(13, 148, 136, 0.6)' }, // Teal
    { id: 4, title: 'Funding Details', icon: <MdAttachMoney />, color: 'rgba(21, 128, 61, 0.6)' }, // Green
    { id: 5, title: 'Team Info', icon: <MdGroup />, color: 'rgba(180, 83, 9, 0.6)' }, // Orange
    { id: 6, title: 'Legal Info', icon: <MdGavel />, color: 'rgba(190, 18, 60, 0.6)' }, // Red
    { id: 7, title: 'Social Presence', icon: <MdShare />, color: 'rgba(14, 165, 233, 0.6)' }, // Light Blue
    { id: 8, title: 'Additional Info', icon: <MdDescription />, color: 'rgba(76, 29, 149, 0.6)' }, // Dark Purple
    { id: 9, title: 'Review', icon: <MdRateReview />, color: 'rgba(71, 85, 105, 0.6)' }, // Slate
    { id: 10, title: 'Verification', icon: <MdVerified />, color: 'rgba(0, 0, 0, 0.6)' } // Black
]

function MultiStepRegister({ onBackToLogin }) {
    const [currentStep, setCurrentStep] = useState(1)
    const [formData, setFormData] = useState({
        // Step 1
        firstName: '', lastName: '', email: '', phone: '', password: '', confirmPassword: '',
        // Step 2
        companyName: '', website: '', foundedDate: '', employeeCount: '', industry: '',
        // Step 3
        businessModel: '', stage: '', targetMarket: '',
        // Step 4
        fundingGoal: '', raisedAmount: '', valuation: '',
        // Step 5
        coFounders: '', teamBio: '',
        // Step 6
        registrationNumber: '', taxId: '',
        // Step 7
        twitter: '', linkedin: '', instagram: '',
        // Step 8
        pitchDeck: '', bio: '',
        // Step 9 & 10 are review/verify
        termsAccepted: false
    })

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        setFormData({ ...formData, [e.target.name]: value })
    }

    const nextStep = () => {
        if (currentStep < steps.length) setCurrentStep(currentStep + 1)
    }

    const prevStep = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1)
    }

    const renderStepContent = () => {
        switch (currentStep) {
            case 1:
                return (
                    <div className="step-content">
                        <h2>Let's start with the basics</h2>
                        <p>Create your account to begin your journey</p>
                        <div className="form-grid">
                            <div className="form-group">
                                <label>First Name</label>
                                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="John" />
                            </div>
                            <div className="form-group">
                                <label>Last Name</label>
                                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Doe" />
                            </div>
                            <div className="form-group full-width">
                                <label>Work Email</label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@company.com" />
                            </div>
                            <div className="form-group full-width">
                                <label>Phone Number</label>
                                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="••••••••" />
                            </div>
                            <div className="form-group">
                                <label>Confirm Password</label>
                                <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="••••••••" />
                            </div>
                        </div>
                    </div>
                )
            case 2:
                return (
                    <div className="step-content">
                        <h2>Tell us about your company</h2>
                        <p>Help investors understand your business</p>
                        <div className="form-grid">
                            <div className="form-group full-width">
                                <label>Company Name</label>
                                <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Acme Inc." />
                            </div>
                            <div className="form-group full-width">
                                <label>Website URL</label>
                                <input type="url" name="website" value={formData.website} onChange={handleChange} placeholder="https://www.acme.com" />
                            </div>
                            <div className="form-group">
                                <label>Founded Date</label>
                                <input type="date" name="foundedDate" value={formData.foundedDate} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label>Team Size</label>
                                <select name="employeeCount" value={formData.employeeCount} onChange={handleChange}>
                                    <option value="">Select size</option>
                                    <option value="1-10">1-10 employees</option>
                                    <option value="11-50">11-50 employees</option>
                                    <option value="51-200">51-200 employees</option>
                                    <option value="201+">201+ employees</option>
                                </select>
                            </div>
                            <div className="form-group full-width">
                                <label>Industry</label>
                                <select name="industry" value={formData.industry} onChange={handleChange}>
                                    <option value="">Select industry</option>
                                    <option value="fintech">Fintech</option>
                                    <option value="healthtech">Healthtech</option>
                                    <option value="edtech">Edtech</option>
                                    <option value="saas">SaaS</option>
                                    <option value="ecommerce">E-commerce</option>
                                </select>
                            </div>
                        </div>
                    </div>
                )
            case 3:
                return (
                    <div className="step-content">
                        <h2>Business Model & Stage</h2>
                        <p>Where are you in your journey?</p>
                        <div className="form-grid">
                            <div className="form-group full-width">
                                <label>Business Model</label>
                                <div className="radio-group">
                                    <label className={`radio-card ${formData.businessModel === 'B2B' ? 'selected' : ''}`}>
                                        <input type="radio" name="businessModel" value="B2B" checked={formData.businessModel === 'B2B'} onChange={handleChange} />
                                        <span>B2B</span>
                                    </label>
                                    <label className={`radio-card ${formData.businessModel === 'B2C' ? 'selected' : ''}`}>
                                        <input type="radio" name="businessModel" value="B2C" checked={formData.businessModel === 'B2C'} onChange={handleChange} />
                                        <span>B2C</span>
                                    </label>
                                    <label className={`radio-card ${formData.businessModel === 'B2B2C' ? 'selected' : ''}`}>
                                        <input type="radio" name="businessModel" value="B2B2C" checked={formData.businessModel === 'B2B2C'} onChange={handleChange} />
                                        <span>B2B2C</span>
                                    </label>
                                </div>
                            </div>
                            <div className="form-group full-width">
                                <label>Current Stage</label>
                                <select name="stage" value={formData.stage} onChange={handleChange}>
                                    <option value="">Select stage</option>
                                    <option value="idea">Idea Phase</option>
                                    <option value="mvp">MVP / Prototype</option>
                                    <option value="early_traction">Early Traction</option>
                                    <option value="growth">Growth / Scaling</option>
                                </select>
                            </div>
                            <div className="form-group full-width">
                                <label>Target Market</label>
                                <input type="text" name="targetMarket" value={formData.targetMarket} onChange={handleChange} placeholder="e.g. Small Businesses in SE Asia" />
                            </div>
                        </div>
                    </div>
                )
            case 4:
                return (
                    <div className="step-content">
                        <h2>Funding Details</h2>
                        <p>What are your fundraising goals?</p>
                        <div className="form-grid">
                            <div className="form-group full-width">
                                <label>Funding Goal (USD)</label>
                                <input type="number" name="fundingGoal" value={formData.fundingGoal} onChange={handleChange} placeholder="500,000" />
                            </div>
                            <div className="form-group full-width">
                                <label>Raised So Far (USD)</label>
                                <input type="number" name="raisedAmount" value={formData.raisedAmount} onChange={handleChange} placeholder="50,000" />
                            </div>
                            <div className="form-group full-width">
                                <label>Pre-Money Valuation (USD)</label>
                                <input type="number" name="valuation" value={formData.valuation} onChange={handleChange} placeholder="2,000,000" />
                            </div>
                        </div>
                    </div>
                )
            case 5:
                return (
                    <div className="step-content">
                        <h2>Team Information</h2>
                        <p>Who is behind the magic?</p>
                        <div className="form-grid">
                            <div className="form-group full-width">
                                <label>Co-Founders</label>
                                <input type="text" name="coFounders" value={formData.coFounders} onChange={handleChange} placeholder="Names separated by comma" />
                            </div>
                            <div className="form-group full-width">
                                <label>Team Bio</label>
                                <textarea name="teamBio" value={formData.teamBio} onChange={handleChange} placeholder="Brief description of your core team..." rows="4"></textarea>
                            </div>
                        </div>
                    </div>
                )
            case 6:
                return (
                    <div className="step-content">
                        <h2>Legal Information</h2>
                        <p>Registration and compliance details</p>
                        <div className="form-grid">
                            <div className="form-group full-width">
                                <label>Registration Number</label>
                                <input type="text" name="registrationNumber" value={formData.registrationNumber} onChange={handleChange} placeholder="Company Reg No." />
                            </div>
                            <div className="form-group full-width">
                                <label>Tax ID / VAT Number</label>
                                <input type="text" name="taxId" value={formData.taxId} onChange={handleChange} placeholder="Tax ID" />
                            </div>
                        </div>
                    </div>
                )
            case 7:
                return (
                    <div className="step-content">
                        <h2>Social Presence</h2>
                        <p>Where can we find you online?</p>
                        <div className="form-grid">
                            <div className="form-group full-width">
                                <label>LinkedIn Company Page</label>
                                <input type="url" name="linkedin" value={formData.linkedin} onChange={handleChange} placeholder="https://linkedin.com/company/..." />
                            </div>
                            <div className="form-group full-width">
                                <label>Twitter / X Profile</label>
                                <input type="url" name="twitter" value={formData.twitter} onChange={handleChange} placeholder="https://twitter.com/..." />
                            </div>
                            <div className="form-group full-width">
                                <label>Instagram Profile</label>
                                <input type="url" name="instagram" value={formData.instagram} onChange={handleChange} placeholder="https://instagram.com/..." />
                            </div>
                        </div>
                    </div>
                )
            case 8:
                return (
                    <div className="step-content">
                        <h2>Additional Info</h2>
                        <p>Pitch deck and other documents</p>
                        <div className="form-grid">
                            <div className="form-group full-width">
                                <label>Short Bio / Pitch</label>
                                <textarea name="bio" value={formData.bio} onChange={handleChange} placeholder="Tell us briefly about your vision..." rows="4"></textarea>
                            </div>
                            <div className="form-group full-width upload-group">
                                <label>Pitch Deck (Optional)</label>
                                <div className="upload-box">
                                    <MdDescription className="upload-icon" />
                                    <span>Click to upload or drag and drop</span>
                                    <small>PDF up to 10MB</small>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            case 9:
                return (
                    <div className="step-content">
                        <h2>Review Information</h2>
                        <p>Please review your details before submitting</p>
                        <div className="review-grid">
                            <div className="review-item">
                                <label>Name</label>
                                <p>{formData.firstName} {formData.lastName}</p>
                            </div>
                            <div className="review-item">
                                <label>Company</label>
                                <p>{formData.companyName}</p>
                            </div>
                            <div className="review-item">
                                <label>Email</label>
                                <p>{formData.email}</p>
                            </div>
                            <div className="review-item">
                                <label>Industry</label>
                                <p>{formData.industry}</p>
                            </div>
                        </div>
                        <div className="form-group full-width checkbox-group">
                            <label className="checkbox-label">
                                <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} />
                                <span>I confirm that all information provided is accurate and true.</span>
                            </label>
                        </div>
                    </div>
                )
            case 10:
                return (
                    <div className="step-content">
                        <h2>Verification</h2>
                        <p>Final step to secure your account</p>
                        <div className="verification-box">
                            <MdVerified className="verify-icon" />
                            <h3>Almost There!</h3>
                            <p>We've sent a verification code to <strong>{formData.email}</strong></p>
                            <div className="form-group">
                                <input type="text" placeholder="Enter 6-digit code" className="verification-input" />
                            </div>
                        </div>
                    </div>
                )
            default:
                return null
        }
    }

    return (
        <div className="multi-step-container">
            {/* Left Panel - Dynamic Info (Swapped) */}
            <div
                className="multi-step-info-panel"
                style={{
                    background: `linear-gradient(135deg, ${steps[currentStep - 1].color} 0%, rgba(0,0,0,0.6) 100%), url('../../fonts/background.png') center/cover no-repeat`
                }}
            >
                <div className="ms-info-content">
                    <div className="ms-step-list">
                        {steps.map((step) => (
                            <div key={step.id} className={`ms-step-item ${currentStep === step.id ? 'active' : ''} ${currentStep > step.id ? 'completed' : ''}`}>
                                <div className="ms-step-icon">
                                    {currentStep > step.id ? <FaCheck /> : step.icon}
                                </div>
                                <div className="ms-step-text">
                                    <h3>{step.title}</h3>
                                    {currentStep === step.id && <p>In Progress</p>}
                                    {currentStep > step.id && <p>Completed</p>}
                                    {currentStep < step.id && <p>Pending</p>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Panel - Form (Swapped) */}
            <div className="multi-step-form-panel">
                <div className="ms-header">
                    <div className="logo">
                        <img src={logo} alt="emireq" />
                    </div>
                </div>

                {/* Stepper Progress Bar */}
                <div className="stepper-container">
                    {steps.map((step, index) => (
                        <div key={step.id} className={`step-item ${currentStep === step.id ? 'active' : ''} ${currentStep > step.id ? 'completed' : ''}`}>
                            <div className="step-circle">
                                {currentStep > step.id ? <FaCheck /> : step.icon}
                            </div>
                            {index < steps.length - 1 && (
                                <div className={`step-line ${currentStep > step.id ? 'completed' : ''}`}></div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="ms-form-wrapper">
                    {renderStepContent()}
                </div>

                <div className="ms-footer">
                    {currentStep === 1 ? (
                        <button className="ms-btn-secondary" onClick={onBackToLogin}>
                            Cancel
                        </button>
                    ) : (
                        <button className="ms-btn-secondary" onClick={prevStep}>
                            <FaArrowLeft /> Back
                        </button>
                    )}

                    <button className="ms-btn-primary" onClick={nextStep}>
                        {currentStep === steps.length ? 'Verify & Submit' : 'Next Step'}
                        {currentStep !== steps.length && <FaArrowRight />}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MultiStepRegister
