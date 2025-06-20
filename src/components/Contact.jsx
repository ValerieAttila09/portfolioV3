import { gsap } from "gsap"
import { Draggable } from "gsap/Draggable"
import { useGSAP } from '@gsap/react'
import BottomSheet from "./Bottomsheet"
import React, { useState } from "react"



export function Contact() {
  gsap.registerPlugin(Draggable)
  gsap.registerPlugin(useGSAP)

  useGSAP(() => {

  })


  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    graduate: '',
    email: '',
    message: ''
  });

  // Handle input form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Ambil data lama dari localStorage (kalau ada)
    const existingData = JSON.parse(localStorage.getItem('formData')) || [];

    // Tambahkan data baru
    const updatedData = [...existingData, formData];

    // Simpan kembali ke localStorage
    localStorage.setItem('formData', JSON.stringify(updatedData));

    // Optional: Reset form
    setFormData({
      firstName: '',
      lastName: '',
      gender: '',
      graduate: '',
      email: '',
      message: ''
    });

    alert('Form sukses di kirim!');
    console.warn('Form sukses di kirim!');
  };



  return (
    <div className="w-full lg:flex-row h-auto pt-[4rem] pb-[8rem] flex flex-col gap-5 lg:gap-[2.6rem] p-3">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col">
          <h1 className="text-5xl md:text-6xl text-dark pt-sans-bold">Reach Out</h1>
          <h3 className="text-2xl md:text-3xl text-dark inter-bold">Feel Free to Drop a Message Anytime</h3>
        </div>
        <span className="text-lg text-greyDark">If you are interested in collaborating, have questions, or want to discuss a project, I would be happy to hear it. Please feel free to contact me via email or the available social media. I will respond to your messages as quickly as possible.</span>
      </div>

      <div className="w-full lg:hidden">
        <BottomSheet />
      </div>

      <div className="hidden lg:flex lg:flex-col lg:gap-4 contact-content py-2">
        <div className="w-full flex flex-col gap-1">
          <div className="w-full flex justify-start items-center">
            <h3 className="text-4xl text-dark inter-medium">Get in touch</h3>
          </div>
          <div className="w-full flex justify-start items-center gap-2">
            <a
              href="https://wa.me/6281262979718?text=Halo%20saya%20tertarik%20dengan%20portofolio%20Anda!"
              target="_blank"
              rel="noopener noreferrer">
              <button className="bg-white hover:bg-secondaryLight transition-all rounded-full px-5 py-1 flex items-center gap-2">
                <svg className='size-4' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20" version="1.1">
                  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -7599.000000)" fill="#323435">
                      <g id="icons" transform="translate(56.000000, 160.000000)">
                        <path d="M259.821,7453.12124 C259.58,7453.80344 258.622,7454.36761 257.858,7454.53266 C257.335,7454.64369 256.653,7454.73172 254.355,7453.77943 C251.774,7452.71011 248.19,7448.90097 248.19,7446.36621 C248.19,7445.07582 248.934,7443.57337 250.235,7443.57337 C250.861,7443.57337 250.999,7443.58538 251.205,7444.07952 C251.446,7444.6617 252.034,7446.09613 252.104,7446.24317 C252.393,7446.84635 251.81,7447.19946 251.387,7447.72462 C251.252,7447.88266 251.099,7448.05372 251.27,7448.3478 C251.44,7448.63589 252.028,7449.59418 252.892,7450.36341 C254.008,7451.35771 254.913,7451.6748 255.237,7451.80984 C255.478,7451.90987 255.766,7451.88687 255.942,7451.69881 C256.165,7451.45774 256.442,7451.05762 256.724,7450.6635 C256.923,7450.38141 257.176,7450.3464 257.441,7450.44643 C257.62,7450.50845 259.895,7451.56477 259.991,7451.73382 C260.062,7451.85686 260.062,7452.43903 259.821,7453.12124 M254.002,7439 L253.997,7439 L253.997,7439 C248.484,7439 244,7443.48535 244,7449 C244,7451.18666 244.705,7453.21526 245.904,7454.86076 L244.658,7458.57687 L248.501,7457.3485 C250.082,7458.39482 251.969,7459 254.002,7459 C259.515,7459 264,7454.51465 264,7449 C264,7443.48535 259.515,7439 254.002,7439" id="whatsapp-[#128]"></path>
                      </g>
                    </g>
                  </g>
                </svg>
                <span className="text-md text-greyDark">WhatsApp</span>
              </button>
            </a>
            <a href="https://www.linkedin.com/in/lnv-valerie-479672370/">
              <button className="bg-white hover:bg-secondaryLight transition-all rounded-full px-5 py-1 flex items-center gap-1">
                <svg className="size-5" xmlns="http://www.w3.org/2000/svg" fill="#323435" viewBox="-5.5 0 32 32" version="1.1">
                  <path d="M0 8.219v15.563c0 1.469 1.156 2.625 2.625 2.625h15.563c0.719 0 1.406-0.344 1.844-0.781 0.469-0.469 0.781-1.063 0.781-1.844v-15.563c0-1.469-1.156-2.625-2.625-2.625h-15.563c-0.781 0-1.375 0.313-1.844 0.781-0.438 0.438-0.781 1.125-0.781 1.844zM2.813 10.281c0-1 0.813-1.875 1.813-1.875 1.031 0 1.875 0.875 1.875 1.875 0 1.031-0.844 1.844-1.875 1.844-1 0-1.813-0.813-1.813-1.844zM7.844 23.125v-9.531c0-0.219 0.219-0.406 0.375-0.406h2.656c0.375 0 0.375 0.438 0.375 0.719 0.75-0.75 1.719-0.938 2.719-0.938 2.438 0 4 1.156 4 3.719v6.438c0 0.219-0.188 0.406-0.375 0.406h-2.75c-0.219 0-0.375-0.219-0.375-0.406v-5.813c0-0.969-0.281-1.5-1.375-1.5-1.375 0-1.719 0.906-1.719 2.125v5.188c0 0.219-0.219 0.406-0.438 0.406h-2.719c-0.156 0-0.375-0.219-0.375-0.406zM2.875 23.125v-9.531c0-0.219 0.219-0.406 0.375-0.406h2.719c0.25 0 0.406 0.156 0.406 0.406v9.531c0 0.219-0.188 0.406-0.406 0.406h-2.719c-0.188 0-0.375-0.219-0.375-0.406z" />
                </svg>
                <span className="text-md text-greyDark">LinkedIn</span>
              </button>
            </a>
          </div>
        </div>
        <div className="w-full h-full bg-white rounded-2xl py-5 relative overflow-hidden">
          <form onSubmit={handleSubmit} className="w-full grid gap-2 py-2 lg:px-4 md:gap-3" action="">
            <div className="flex flex-col md:flex-row gap-2">
              <div className="md:w-full flex flex-col">
                <label htmlFor="firstName" className="bg-secondaryLight text-md border border-transparent focus:outline-2 focus:border-violet-300 focus:outline-violet-300 focus:outline-offset-1 transition-all rounded-md flex flex-col px-1 py-[2px]">
                  <span className="text-sm text-greyLight">First Name</span>
                  <input value={formData.firstName} onChange={handleChange} required type="text" name="firstName" className="outline-none" />
                </label>
              </div>
              <div className="md:w-full flex flex-col">
                <label htmlFor="lastName" className="bg-secondaryLight text-md border border-transparent focus:outline-2 focus:border-violet-300 focus:outline-violet-300 focus:outline-offset-1 transition-all rounded-md flex flex-col px-1 py-[2px]">
                  <span className="text-sm text-greyLight">Last Name</span>
                  <input value={formData.lastName} onChange={handleChange} required type="text" name="lastName" className="outline-none" />
                </label>
              </div>
            </div>
            <div className="flex w-full gap-2">
              <div className="w-1/2">
                <label htmlFor="gender" className="bg-secondaryLight text-md border border-transparent focus:outline-2 focus:border-violet-300 focus:outline-violet-300 focus:outline-offset-1 transition-all rounded-md flex flex-col px-1 py-[2px]">
                  <span className="text-sm text-greyLight">Gender</span>
                  <select value={formData.gender} onChange={handleChange} required name="graduate" id="graduate" className="outline-none transition-all">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </label>
              </div>
              <div className="w-1/2">
                <label htmlFor="graduate" className="bg-secondaryLight text-md border border-transparent focus:outline-2 focus:border-violet-300 focus:outline-violet-300 focus:outline-offset-1 transition-all rounded-md flex flex-col px-1 py-[2px]">
                  <span className="text-sm text-greyLight">Graduate</span>
                  <select value={formData.graduate} onChange={handleChange} required name="graduate" id="graduate" className="outline-none transition-all">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </label>
              </div>
            </div>
            <div className="w-full">
              <div className="flex flex-col">
                <label htmlFor="email" className="bg-secondaryLight text-md border border-transparent focus:outline-2 focus:border-violet-300 focus:outline-violet-300 focus:outline-offset-1 transition-all rounded-md flex flex-col px-1 py-[2px]">
                  <span className="text-sm text-greyLight">Email</span>
                  <input placeholder="name@email.example" value={formData.email} onChange={handleChange} required type="email" name="email" className="outline-none" />
                </label>
              </div>
            </div>
            <div className="w-full">
              <label htmlFor="message" className="bg-secondaryLight text-md border border-transparent focus:outline-2 focus:border-violet-300 focus:outline-violet-300 focus:outline-offset-1 transition-all rounded-md flex flex-col px-1 py-[2px]">
                <span className="text-sm text-greyLight">Message</span>
                <textarea value={formData.message} onChange={handleChange} required name="message" className="outline-none" />
              </label>
            </div>
            <div className="w-full">
              <div className="flex items-center gap-2 py-2">
                <svg className="size-5 text-greyLight" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                </svg>
                <span className="text-md text-greyDark">By this, you have agreed to my privacy and policy</span>
              </div>
            </div>
            <div className="w-full">
              <div className="w-full p-2 flex justify-between items-center gap-2">
                <button type="submit" className="w-2/3 text-lg p-2 text-light hover:bg-greyLight transition-all bg-dark rounded-full ">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}