import React, { useState, useEffect } from "react";

const EmailVerificationForm = () => {
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    if (isVerified) {
      // You can redirect the user to a different page or display a success message
      console.log("Email verified successfully!");
    }
  }, [isVerified]);

  const generateVerificationCode = () => {
    // Generate a random 6-digit verification code
    return Math.floor(100000 + Math.random() * 900000);
  };

  const sendVerificationEmail = () => {
    const code = generateVerificationCode();
    // Here, you would send the verification code to the backend for processing
    console.log(`Verification code sent to ${email}: ${code}`);
    setIsCodeSent(true);
    setVerificationCode(code);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleVerificationCodeChange = (event) => {
    setVerificationCode(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you would send the verification code to the backend for validation
    console.log(`Verification code submitted: ${verificationCode}`);
    // For demonstration purposes, let's assume verification is successful
    setIsVerified(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Verify Your Email
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            {isCodeSent && (
              <div>
                <label htmlFor="verification-code" className="sr-only">
                  Verification code
                </label>
                <input
                  id="verification-code"
                  name="verification-code"
                  type="text"
                  autoComplete="off"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Verification code"
                  value={verificationCode}
                  onChange={handleVerificationCodeChange}
                />
              </div>
            )}
          </div>

          <div>
            {!isCodeSent && (
              <button
                type="button"
                onClick={sendVerificationEmail}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Send Verification Code
              </button>
            )}
            {isCodeSent && (
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Verify Email
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmailVerificationForm;
