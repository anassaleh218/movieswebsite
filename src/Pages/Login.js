import React from 'react'
import Navbar from "../components/Navbar";

export default function Login() {
  return (
    <>
      <Navbar />
      <form>
        <h1>Login</h1>
        <div className='field'>
         <div className='label'><label>Username</label><sup class="supcolor">*</sup></div>
         <input type="text" required autofocus class="width" />
        </div>
        <div className='field'>
          <div className='label'><label>Password</label><sup class="supcolor">*</sup></div>
          <input type="password" required class="width" />
        </div>
        <div className='field'>
          <button class="button">Login</button>
        </div>

      </form>
    </>
  )
}
