/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import axios from "axios"
import React, { useState } from "react"
import ReCAPTCHA from "react-google-recaptcha"

interface FormsProps {
  name: string
  email: string
  subject: string
  message: string
}

interface MessageStatusProps {
  ok?: boolean
  msg: string
}

interface InfoProps {
  error: boolean
}

type MessageInfoProps = MessageStatusProps & InfoProps

interface StatusProps {
  submitted: boolean
  submitting: boolean
  info: MessageInfoProps
}

export default function FormComponent(): React.ReactElement {
  const [status, setStatus] = useState<StatusProps>({
    submitted: false,
    submitting: false,
    info: { error: false, msg: "" },
  })

  const [inputs, setInputs] = useState<FormsProps>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null)

  const [isNameValid, setIsNameValid] = useState<boolean>(true)
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true)

  const recaptchaRef = React.createRef<ReCAPTCHA>()

  const resetRecaptcha = () => {
    const currentRef = recaptchaRef.current
    if (currentRef) {
      currentRef.reset()
      setRecaptchaValue(null)
    }
  }

  const handleRecaptchaChange = (value: string | null) => {
    setRecaptchaValue(value)
  }

  const handleServerResponse = ({ ok, msg }: MessageStatusProps) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg },
      })
      setInputs({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } else {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg },
      })
    }
  }

  const verificationFields = () => {
    setIsNameValid(inputs.name.length >= 5)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    setIsEmailValid(emailPattern.test(inputs.email))
  }

  const handleOnChange = (e: any) => {
    e.persist()

    const { name, value } = e.target

    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }))

    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: "" },
    })
  }

  const handleOnSubmit = (e: any) => {
    e.preventDefault()

    setStatus((prevStatus) => ({
      ...prevStatus,
      submitting: true,
    }))

    verificationFields()

    if (isNameValid && isEmailValid && recaptchaValue) {
      axios({
        method: "POST",
        url: `https://formspree.io/${process.env.NEXT_PUBLIC_FORMSPREE_END_POINT}`,
        data: { ...inputs, "g-recaptcha-response": recaptchaValue },
      })
        .then((_response) => {
          handleServerResponse({
            ok: true,
            msg: "Obrigado, sua mensagem foi enviada!",
          })
          resetRecaptcha()
        })
        .catch((error) => {
          handleServerResponse({ ok: false, msg: error.response.data.error })
          resetRecaptcha()
        })
    } else {
      handleServerResponse({
        ok: false,
        msg: "Por favor, verifique os campos e complete o reCAPTCHA.",
      })
    }
  }

  return (
    <section className="flex w-full flex-col items-center justify-center">
      <form onSubmit={handleOnSubmit} action="" className="md:w-[90%] lg:w-[75%]">
        <div className="flex flex-col pb-3 md:w-[100%]">
          <label htmlFor="name" className="text-[1.3rem]">
            NOME
          </label>
          <input
            className="border-b-2 border-[#FFD700] bg-transparent text-[1.2rem] text-[white] focus:outline-none"
            type="text"
            name="name"
            onChange={handleOnChange}
            value={inputs.name}
          />
          {!isNameValid && <p className="text-[1.2rem] text-[white]">Nome precisa ter mais do que 5 caracteres</p>}
        </div>
        <div className="flex flex-col pb-3 md:w-[100%]">
          <label htmlFor="email" className="text-[1.3rem]">
            EMAIL
          </label>
          <input
            className="border-b-2 border-[#FFD700] bg-transparent text-[1.2rem] text-[white] focus:outline-none"
            type="email"
            name="email"
            onChange={handleOnChange}
            value={inputs.email}
          />
          {!isEmailValid && <p className="text-[1.2rem] text-[white]">Email deve estar num formato válido</p>}
        </div>
        <div className="flex flex-col pb-3 md:w-[100%]">
          <label htmlFor="subject" className="text-[1.3rem]">
            ASSUNTO
          </label>
          <input
            className="border-b-2 border-[#FFD700] bg-transparent text-[1.2rem] text-[white] focus:outline-none"
            type="text"
            name="subject"
            required
            onChange={handleOnChange}
            value={inputs.subject}
          />
        </div>
        <div className="flex flex-col pb-3 md:w-[100%]">
          <label htmlFor="message" className="text-[1.3rem]">
            MENSAGEM
          </label>
          <textarea
            className="border-b-2 border-[#FFD700] bg-transparent text-[1.2rem] text-[white] focus:outline-none"
            cols={30}
            rows={10}
            name="message"
            required
            onChange={handleOnChange}
            value={inputs.message}
          ></textarea>
        </div>
        <div className="flex flex-col items-center gap-6 pt-4">
          <button
            type="submit"
            disabled={status.submitting}
            className="w-[12.7rem] cursor-pointer rounded bg-[white] py-2 text-[1.1rem] uppercase text-[#32312B] md:w-[75%] md:text-[1.2rem]"
          >
            {!status.submitting ? (!status.submitted ? "ENVIAR" : "ENVIADO") : "ENVIANDO..."}
          </button>
          <ReCAPTCHA
            className="pb-3"
            sitekey={`${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
            onChange={handleRecaptchaChange}
          />
        </div>
      </form>
      {status.info.error && (
        <div className="w-full text-center">
          <p className="text-[1.3rem] text-[white]">Error: {status.info.msg}</p>
        </div>
      )}
      {!status.info.error && status.info.msg && (
        <div className="w-full text-center">
          <p className="text-[1.3rem] text-[white]">{status.info.msg}</p>
        </div>
      )}
    </section>
  )
}
