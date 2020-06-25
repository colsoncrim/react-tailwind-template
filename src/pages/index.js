import React from "react"
import Layout from '../components/layout/Layout';
import Button from '../components/Button';
import Card from '../components/Card';
import HeroImage from "../svg/HeroImage";
import { FaDatabase, FaLock, FaRegChartBar } from 'react-icons/fa';

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
    <section className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="font-bold text-2xl lg:text-5xl">Core Features</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
              <Card className="mb-8">
                <p className="font-semibold text-xl">Feature One</p>
                <p className="mt-4">
                  An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                  velna vitae auctor integer.
                </p>
              </Card>
          </div>
          <div className="flex-1 px-3">
              <Card className="mb-8">
                <p className="font-semibold text-xl">Feature Two</p>
                <p className="mt-4">
                  An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                  velna vitae auctor integer.
                </p>
              </Card>
          </div>
          <div className="flex-1 px-3">
              <Card className="mb-8">
                <p className="font-semibold text-xl">Feature Three</p>
                <p className="mt-4">
                  An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                  velna vitae auctor integer.
                </p>
              </Card>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
