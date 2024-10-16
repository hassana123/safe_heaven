import React,{useState} from 'react'
import logo from "../assets/logo.png"
const RegisterPage = () => {
    const [username, setUsername] = useState('')
    const [passcode, setPasscode] = useState('')
    const [confirmPasscode, setConfirmPasscode] = useState('')
  
    const handleSubmit = (e) => {
      e.preventDefault()
      // Handle account creation logic here
      console.log('Account created', { username, passcode })
    }
  
    return (
      <div className="min-h-screen bg-white p-6 flex flex-col items-center justify-center">
        <div className="w-full max-w-md">
          <div className="mb-8 flex justify-center">
            <img
              src={logo}
              alt="Safe Haven Logo"
              width={80}
              height={40}
              className="h-10 w-auto"
            />
          </div>
          
          <h1 className="text-2xl font-bold text-center mb-2">Create an account</h1>
          <p className="text-center text-gray-600 mb-6">
            You can create an anonymous profile for better access to resources and reports. No personal information required
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                Enter an anonymous username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="This can be anything, no email or phone number required"
              />
            </div>
            
            <div>
              <label htmlFor="passcode" className="block text-sm font-medium text-gray-700 mb-1">
                Create a 4-digit passcode
              </label>
              <input
                type="password"
                id="passcode"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                maxLength={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your password"
              />
            </div>
            
            <div>
              <label htmlFor="confirm-passcode" className="block text-sm font-medium text-gray-700 mb-1">
                Confirm passcode
              </label>
              <input
                type="password"
                id="confirm-passcode"
                value={confirmPasscode}
                onChange={(e) => setConfirmPasscode(e.target.value)}
                maxLength={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your password"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Create account
            </button>
          </form>
          
          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an anonymous account? <a href="#" className="text-blue-500 hover:underline">Login</a>.
          </p>
        </div>
      </div>
    )
}

export default RegisterPage
