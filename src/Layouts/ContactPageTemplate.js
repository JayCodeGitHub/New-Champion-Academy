import React from "react"
import { PhoneIcon, LocationMarkerIcon } from "@heroicons/react/solid"
import { MailIcon } from "@heroicons/react/outline"
import { FaFacebookF } from "react-icons/fa"
import { FiInstagram } from "react-icons/fi"
import { AiFillYoutube } from "react-icons/ai"

const ContactPageLayout = () => (
  <>
    <div className="w-full pt-16">
      <div>
        <div className="h-32 flex justify-center items-center">
          <div className="lg:w-1/3 w-3/4 h-full flex items-center justify-center text-white">
            <div className="rounded-full h-14 w-14 mr-3 text-primary border-primary">
              <LocationMarkerIcon />
            </div>
            Gołaszyńska 35, Oborniki
          </div>
        </div>
        <div className="h-32 flex justify-center items-center">
          <div className="lg:w-1/3 w-3/4 h-full flex items-center justify-center text-white">
            <div className="rounded-full h-14 w-14 mr-3  text-primary border-primary">
              <MailIcon />
            </div>
            blochacademy@gmail.com
          </div>
        </div>
        <div className="h-32 flex justify-center items-center">
          <div className="lg:w-1/3 w-3/4 h-full flex items-center justify-center text-white">
            <div className="rounded-full h-14 w-14 mr-3 text-primary border-primary">
              <PhoneIcon />
            </div>
            696 162 080
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 w-3/4 h-96 m-auto flex justify-between items-center">
        <a
          href="https://www.facebook.com/BlochChampionAcademy"
          target="_blank"
          rel="noreferrer"
        >
          <div className="border-2 text-3xl rounded-full h-14 w-14 flex items-center justify-center text-primary border-primary hover:text-secondary hover:border-secondary">
            <FaFacebookF />
          </div>
        </a>
        <a
          href="https://www.instagram.com/champion_academy_oborniki/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="border-2 text-3xl rounded-full h-14 w-14 flex items-center justify-center text-primary border-primary hover:text-secondary hover:border-secondary">
            <FiInstagram />
          </div>
        </a>
        <a
          href="https://www.youtube.com/channel/UClowW1j40-wJWn2CBrT8g9Q/featured"
          target="_blank"
          rel="noreferrer"
        >
          <div className="border-2 text-3xl rounded-full h-14 w-14 flex items-center justify-center text-primary border-primary hover:text-secondary hover:border-secondary">
            <AiFillYoutube />
          </div>
        </a>
      </div>
    </div>
  </>
)

export default ContactPageLayout
