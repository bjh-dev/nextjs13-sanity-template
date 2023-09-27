'use client'

import { useState } from 'react'

import { IForm } from '@/lib/types'

import { CustomPortableText } from './custom-portable-text'

function FormBuilder(props: IForm) {
  // console.log('formBuiderProps: ', props)

  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const [formState, setFormState] = useState('idle')
  const [FNAME, setFNAME] = useState('')
  const [LNAME, setLNAME] = useState('')
  const [email, setEmail] = useState('')
  const [PHONE, setPHONE] = useState('')
  const [BDAY, setBDAY] = useState('')
  const [ADDR1, setADDR1] = useState('')
  const [CITY, setCITY] = useState('')
  const [STATE, setSTATE] = useState('VIC')
  const [ZIP, setZIP] = useState('')
  const [MESSAGE, setMESSAGE] = useState('')
  const [HOWHEARD, setHOWHEARD] = useState('none')

  return (
    <form className="relative grid grid-cols-2 gap-x-2 gap-y-4 rounded-lg border-2 border-tuatara-50 p-6">
      {formState !== 'success' && (
        <>
          <div className="col-span-2 md:col-span-1">
            <label
              className="text-xs uppercase text-indian-khaki-50"
              htmlFor="FNAME"
            >
              First Name
              <input
                className="w-full rounded-md py-3 text-sm text-tuatara-800 placeholder-tuatara-300 outline-rope focus:border-rope focus:ring-rope"
                type="text"
                name="FNAME"
                id="FNAME"
                placeholder="First Name"
                value={FNAME}
                onChange={(e) => setFNAME(e.target.value)}
              />
            </label>
          </div>
          <div className="col-span-2 md:col-span-1">
            <label
              className="text-xs uppercase text-indian-khaki-50"
              htmlFor="LNAME"
            >
              Last Name
              <input
                className="w-full rounded-md py-3 text-sm text-tuatara-800 placeholder-tuatara-300 outline-rope focus:border-rope focus:ring-rope"
                type="text"
                name="LNAME"
                id="LNAME"
                placeholder="Last Name"
                value={LNAME}
                onChange={(e) => setLNAME(e.target.value)}
              />
            </label>
          </div>
          <div className="col-span-2">
            <label
              className="text-xs uppercase text-indian-khaki-50"
              htmlFor="email"
            >
              Email
              <input
                className="w-full rounded-md py-3 text-sm text-tuatara-800 placeholder-tuatara-300 outline-rope focus:border-rope focus:ring-rope"
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
          {props.formFields.includes('PHONE') && (
            <div className="col-span-2">
              <label
                className="text-xs uppercase text-indian-khaki-50"
                htmlFor="PHONE"
              >
                Contact Number
                <input
                  className="w-full rounded-md py-3 text-sm text-tuatara-800 placeholder-tuatara-300 outline-rope focus:border-rope focus:ring-rope"
                  type="tel"
                  name="PHONE"
                  id="PHONE"
                  placeholder="Your Contact Number"
                  value={PHONE}
                  onChange={(e) => setPHONE(e.target.value)}
                />
              </label>
            </div>
          )}
          {props.formFields.includes('ADDRESS') && (
            <fieldset className="col-span-2 grid w-full grid-cols-1 gap-x-2 gap-y-4 rounded-lg border border-axolotl-400 p-3 lg:grid-cols-3">
              <legend className="text-base text-indian-khaki-50">
                Your Address
              </legend>
              <div className="col-span-3">
                <label
                  className="text-xs uppercase text-indian-khaki-50"
                  htmlFor="ADDRESS"
                >
                  Address
                  <input
                    className="w-full rounded-md py-3 text-sm text-tuatara-800 placeholder-tuatara-300 outline-rope focus:border-rope focus:ring-rope"
                    type="text"
                    name="ADDR1"
                    id="ADDR1"
                    value={ADDR1}
                    placeholder="123 Smith Street"
                    onChange={(e) => setADDR1(e.target.value)}
                  />
                </label>
              </div>
              <div className="col-span-3 lg:col-span-1">
                <label
                  className="text-xs uppercase text-indian-khaki-50"
                  htmlFor="CITY"
                >
                  Suburb
                  <input
                    className="w-full rounded-md py-3 text-sm text-tuatara-800 placeholder-tuatara-300 outline-rope focus:border-rope focus:ring-rope"
                    type="text"
                    name="CITY"
                    id="CITY"
                    value={CITY}
                    placeholder="St Albans"
                    onChange={(e) => setCITY(e.target.value)}
                  />
                </label>
              </div>
              <div className="col-span-3 lg:col-span-1">
                <label
                  className="text-xs uppercase text-indian-khaki-50"
                  htmlFor="STATE"
                >
                  State
                  <select
                    className="w-full rounded-md py-3 text-sm text-tuatara-800 placeholder-tuatara-300 outline-rope focus:border-rope focus:ring-rope"
                    name="STATE"
                    id="STATE"
                    value={STATE}
                    onChange={(e) => setSTATE(e.target.value)}
                  >
                    <option value="ACT">ACT</option>
                    <option value="NSW">NSW</option>
                    <option value="NT">NT</option>
                    <option value="QLD">QLD</option>
                    <option value="SA">SA</option>
                    <option value="TAS">TAS</option>
                    <option value="VIC">VIC</option>
                    <option value="WA">WA</option>
                  </select>
                </label>
              </div>
              <div className="col-span-3 lg:col-span-1">
                <label
                  className="text-xs uppercase text-indian-khaki-50"
                  htmlFor="ZIP"
                >
                  Postcode
                  <input
                    className="w-full rounded-md py-3 text-sm text-tuatara-800 placeholder-tuatara-300 outline-rope focus:border-rope focus:ring-rope"
                    type="number"
                    name="ZIP"
                    id="ZIP"
                    value={ZIP}
                    placeholder="3000"
                    onChange={(e) => setZIP(e.target.value)}
                  />
                </label>
              </div>
            </fieldset>
          )}
          {props.formFields.includes('BDAY') && (
            <div className="col-span-2">
              <label
                className="text-xs uppercase text-indian-khaki-50"
                htmlFor="BDAY"
              >
                When is your birthday?
                <input
                  className="w-full rounded-md py-3 text-sm text-tuatara-800 placeholder-tuatara-300 outline-rope focus:border-rope focus:ring-rope"
                  type="date"
                  name="BDAY"
                  id="BDAY"
                  value={BDAY}
                  placeholder="BDAY"
                  onChange={(e) => setBDAY(e.target.value)}
                />
              </label>
            </div>
          )}
          {props.formFields.includes('HOWHEARD') && (
            <div className="col-span-2">
              <label
                className="text-xs uppercase text-indian-khaki-50"
                htmlFor="HOWHEARD"
              >
                How did you hear about us?
                <select
                  className="w-full rounded-md py-3 text-sm text-tuatara-800 placeholder-tuatara-300 outline-rope focus:border-rope focus:ring-rope"
                  name="HOWHEARD"
                  id="HOWHEARD"
                  required
                  value={HOWHEARD}
                  onChange={(e) => setHOWHEARD(e.target.value)}
                >
                  <option className="text-tuatara-300" value="0">
                    --&nbsp;&nbsp;How did you hear about us?&nbsp;&nbsp;--
                  </option>
                  <option value="Someone who attends Inner West Church">
                    Someone who attends Inner West Church
                  </option>
                  <option value="Social Media">Social Media</option>
                  <option value="Google Search">Google Search</option>
                  <option value="Someone from another church">
                    Someone from another church
                  </option>
                  <option value="Friend or Family">Friend or Family</option>
                  <option value="Another Websit">Another Websit</option>
                </select>
              </label>
            </div>
          )}
          {props.formFields.includes('MESSAGE') && (
            <div className="col-span-2">
              <label
                className="text-xs uppercase text-indian-khaki-50"
                htmlFor="MESSAGE"
              >
                Send a message
                <textarea
                  className="w-full rounded-md py-3 text-sm text-tuatara-800 placeholder-tuatara-300 outline-rope focus:border-rope focus:ring-rope"
                  name="MESSAGE"
                  id="MESSAGE"
                  placeholder={`Send a message, ask a question, make a request or leave a comment. We're here to serve`}
                  rows={5}
                  value={MESSAGE}
                  onChange={(e) => setMESSAGE(e.target.value)}
                />
              </label>
            </div>
          )}
          <div className="col-span-2">
            <div className="flex justify-end">
              <button
                className="rounded-md bg-indian-khaki px-6 py-2 text-sm font-bold text-tuatara-800 placeholder-tuatara-300 outline-rope transition-all duration-300 ease-in-out hover:bg-indian-khaki-700 focus:border-rope focus:ring-rope"
                type="submit"
                disabled={formState === 'loading'}
              >
                {props.buttonLabel || 'Submit'}
              </button>
            </div>
          </div>
        </>
      )}
      <div className="col-span-2">
        {formState === 'error' && (
          <div className="mt-6 border border-r-ronchi px-5 py-2 text-ronchi">
            <CustomPortableText value={props.errorMessage} />
            {/* <p className="text-sm">{error}</p> */}
          </div>
        )}
        {formState === 'success' && (
          <div className="mt-6 text-tuatara-50">
            <CustomPortableText value={props.successMessage} />
          </div>
        )}
      </div>
    </form>
  )
}

export default FormBuilder
