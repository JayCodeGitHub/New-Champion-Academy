import React from "react"
import PropTypes from "prop-types"

const Title = ({ title }) => (
  <>
    <div className=" w-full flex lg:justify-center pl-24 lg:pl-0 items-center text-white py-9 lg:text-3xl text-2xl">
      {title}
    </div>
  </>
)

Title.propTypes = {
  title: PropTypes.element.isRequired,
}

export default Title
