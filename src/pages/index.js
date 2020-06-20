import React from "react"
import Layout from '../components/layout/Layout';
import Button from '../components/Button';
import HeroImage from "../svg/HeroImage";

const IndexPage = () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center content-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Capture Customers with an Amazing Title
          </h1>
          <p className="text-xl lg:text-2xl mt-4 font-thin">
            Describe how your product is going to make an impact on your prospective customers in a sentence or two. 
          </p>
          <form className="mt-8 sm:flex">
            <input aria-label="Email address" type="email" required className="appearance-none w-full px-5 py-3 border border-gray-300 text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out sm:max-w-xs" placeholder="Enter your email" />
            <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <Button>Sign Up</Button>
            </div>
          </form>
        </div>
        <div className="lg:w-1/2 container mx-auto xl:flex">
          <HeroImage />
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
