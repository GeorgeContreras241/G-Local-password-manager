import { useState } from 'react'

export const useGeneratePasswords = () => {
  const [generatedPassword, setGeneratedPassword] = useState('')
  const generateRandomPassword = () => {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()'
    let password = ''
    for (let i = 0; i < 40; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length)
      password += characters.charAt(randomIndex)
    }
    setGeneratedPassword(password)
  }
  return { generateRandomPassword, generatedPassword }
}


