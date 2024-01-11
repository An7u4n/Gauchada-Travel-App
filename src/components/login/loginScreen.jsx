import React from 'react';

export default function LoginScreen() {
  return (
    <div class="bg-gray-100 flex items-center justify-center h-screen">
      <div class="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <div class="flex justify-center mb-6">
          <span class="inline-block bg-gray-200 rounded-full p-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4" />
            </svg>
          </span>
        </div>
        <h2 class="text-2xl font-semibold text-center mb-4">Create a Driver Account</h2>
        <p class="text-gray-600 text-center mb-6">Enter your details to register.</p>
        <form>
          <div class="mb-4">
            <label for="fullName" class="block text-gray-700 text-sm font-semibold mb-2">
              Full Name *
            </label>
            <input type="text" id="fullName" class="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" required placeholder="James Brown" />
          </div>
          <div class="mb-4">
            <label for="email" class="block text-gray-700 text-sm font-semibold mb-2">
              Email Address *
            </label>
            <input type="email" id="email" class="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" required placeholder="hello@alignui.com" />
          </div>
          <div class="mb-6">
            <label for="password" class="block text-gray-700 text-sm font-semibold mb-2">
              Password *
            </label>
            <input type="password" id="password" class="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" required placeholder="••••••••" />
            <p class="text-gray-600 text-xs mt-1">Must contain 1 uppercase letter, 1 number, min. 8 characters.</p>
          </div>
          <button type="submit" class="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Register
          </button>
          <p class="text-gray-600 text-xs text-center mt-4">
            By clicking Register, you agree to accept Apex Financial's
            <span class="text-blue-500 hover:underline">Terms and Conditions</span>.
          </p>
        </form>
      </div>
    </div>
  );
}