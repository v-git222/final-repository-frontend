import { useState } from 'react'
import Register from './components/Register'
import Login from './components/Login'
import MultiStepRegister from './components/MultiStepRegister'

function App() {
    const [activeView, setActiveView] = useState('register')

    return (
        <div className="app-container">
            <div className="content-wrapper">
                {activeView === 'register' ? (
                    <Register
                        onSwitchToLogin={() => setActiveView('login')}
                        onStartRegistration={() => setActiveView('multi-step')}
                    />
                ) : activeView === 'login' ? (
                    <Login onSwitchToRegister={() => setActiveView('register')} />
                ) : (
                    <MultiStepRegister onBackToLogin={() => setActiveView('register')} />
                )}
            </div>
        </div>
    )
}

export default App
