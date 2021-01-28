import React, { useState } from "react"
import axios from "axios"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons"

/* eslint-disable */

const ContactForm = () => {
  const initialValues = {
    name: "",
    email: "",
    area: "Contact",
    subject: "",
    message: "",
  }
  const [value, setValue] = useState(initialValues)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = event => {
    setValue({ ...value, [event.target.id]: event.target.value })
  }

  const validateForm = () => {
    return (
      value.name && value.email && value.area && value.subject && value.message
    )
  }

  const handleSubmit = async event => {
    event.preventDefault()
    setIsLoading(true)
    const data = {
      to:'johanaltro@gmail.com',
      from: `${value.name} <${value.email}>`,
      subject: `${value.area} | ${value.subject}`,
      message: `
      From: ${value.name} <${value.email}> 
      Subject: ${value.area} | ${value.subject}
      Message: ${value.message}`,
    }

    const res = await axios.post("https://mailer-johan-altamar.herokuapp.com/", data)
    if (res.data === "Contact info sent!") {
      setValue(initialValues)
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <div className="field-label is-normal has-text-left">
          <label className="label" htmlFor="name">
            From
          </label>
        </div>
        <div className="field-body">
          <div className="field">
            <p className="control is-expanded has-icons-left">
              <input
                id="name"
                className="input"
                type="text"
                placeholder="e.g. Mary Jane"
                value={value.name}
                onChange={handleChange}
                required
              />
              <span className="icon is-small is-left">
                <FontAwesomeIcon icon={faUser} />
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control is-expanded has-icons-left has-icons-right">
              <input
                id="email"
                className="input"
                type="email"
                placeholder="e.g. name@example.com"
                value={value.email}
                onChange={handleChange}
                required
              />
              <span className="icon is-small is-left">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="field">
        <div className="field-label is-normal has-text-left">
          <label className="label" htmlFor="subject">
            Subject
          </label>
        </div>
        <div className="field-body">
          <div className="field has-addons">
            <div className="control">
              <p className="select">
                <select id="area" onChange={handleChange} value={value.area}>
                  <option>Contact</option>
                  <option>Blog</option>
                  <option>Other</option>
                </select>
              </p>
            </div>
            <p className="control is-expanded">
              <input
                id="subject"
                className="input"
                type="text"
                placeholder="e.g. Partnership opportunity"
                value={value.subject}
                onChange={handleChange}
                required
              />
            </p>
          </div>
        </div>
      </div>

      <div className="field">
        <div className="field-label is-normal has-text-left">
          <label className="label" htmlFor="message">
            Message
          </label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <textarea
                id="message"
                className="textarea"
                placeholder="Explain how we can help you"
                rows="2"
                value={value.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
          </div>
        </div>
      </div>

      <div className="field">
        <div className="field-label">
          {/* <!-- Left empty for spacing --> */}
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <button
                className={`button is-primary ${
                  isLoading ? "is-loading" : undefined
                }`}
                type="submit"
                disabled={!validateForm()}
              >
                Send message
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default ContactForm
