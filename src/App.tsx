import { type ReactNode, useState, ChangeEvent, useEffect } from 'react'
import { TextArea } from './components/TextArea'
import { RangeInput } from './components/RangeInput'
import { SwapButton } from './components/SwapButton'
import { caesarCipher } from './utils/caesarCipher'

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

function App(): ReactNode {
  const [isEncryption, setIsEncryption] = useState(true)
  const [plainText, setPlainText] = useState('')
  const [cipherText, setCipherText] = useState('')
  const [key, setKey] = useState(10)

  useEffect(() => {
    let text = plainText.toLowerCase()

    if (!isEncryption) {
      text = cipherText.toLowerCase()
    }

    // Encrypt/Decrypt with Caesar Cipher
    const result = caesarCipher(isEncryption, text, key)

    if (isEncryption) {
      setCipherText(result)
    } else {
      setPlainText(result)
    }
  }, [plainText, cipherText, isEncryption, key])

  const handleChangePlainText = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setPlainText(event.target.value)
  }

  const handleChangeCipherText = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setCipherText(event.target.value)
  }

  const handleChangeKey = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = parseInt(event.target.value) 
    setKey(inputValue)
  }

  return (
    <div className="bg-base-200 w-screen h-screen">
      <div className="navbar bg-primary text-neutral absolute top-0">
          <button className="btn btn-ghost text-xl mx-auto">
            Caesar Cipher
          </button>
      </div>
      <div className="w-full max-w-3xl pt-16 pb-10 mx-auto px-8 bg-base-100">

        {/*-- Plaintext/Ciphertext Input --*/}
        <div className='mt-6'>
          <TextArea label={isEncryption ? 'PlainText' : 'CipherText'} 
            className={isEncryption ? 'textarea-primary' : 'textarea-secondary'} 
            placeholder={
              `Write your ${isEncryption ? 'PlainText' : 'CipherText'} here...`
            }
            onChange={
              isEncryption ? handleChangePlainText : handleChangeCipherText
            }
            value={isEncryption ? plainText : cipherText}
          />
        </div>
         {/*-------------------------------- */}

        <div className='flex flex-row gap-x-2 items-center mt-8'>
           {/*-- Key Input --*/}
          <div className='basis-10/12 flex flex-col gap-y-1'>
            <RangeInput label='Key' min={-25} max={25} 
            value={key} onChange={handleChangeKey}
            displayValue={
              `${key} | a \u2192 ${(key >= 0 ? alphabet[key] : alphabet[key+26])}`
            }/>
          </div>
           {/*-----------*/}
          <div className='basis-1/12'></div>

           {/*-- Swap Button --*/}
          <div className='basis-1/12 flex'>
            <SwapButton  onClick={() => setIsEncryption(!isEncryption)}  
            className={isEncryption ? 'btn-primary' : 'btn-secondary'}/>
          </div>
           {/*-----------*/}
        </div>

        {/*-- Result of Encryption/Decryption --*/}
        <div className='mt-6'>
          <TextArea label={isEncryption ? 'CipherText' : 'PlainText'} 
            className={isEncryption ? 'textarea-secondary' : 'textarea-primary'} 
            placeholder="Result will show here...." readOnly={true}
            value={isEncryption ? cipherText : plainText}
          />
        </div>
        {/*------------------------------------*/}

      </div>
    </div>
  )
}

export default App
