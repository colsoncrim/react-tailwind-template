import React from "react"
import Layout from '../components/layout/Layout';
import Button from '../components/Button';
import Card from '../components/Card';
import Metrics from '../components/Metrics';
import HeroImage from "../svg/HeroImage";
import Dropdown from "../svg/Dropdown";
import AssetSelection from "../svg/AssetSelection";
import '../styles/styles.css';

       
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

    <section className="py-8 pt-40">
      <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800">
        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Pricing</h2>
        <div className="w-full mb-4">
           <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4">

          <div className="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4">
            <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
              <div className="p-8 text-3xl font-bold text-center border-b-4">Free</div>
              <ul className="w-full text-center text-sm">
                <li className="border-b py-4">Feature</li>
                <li className="border-b py-4">Feature</li>
                <li className="border-b py-4">Feature</li>
              </ul>
            </div>
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div className="w-full pt-6 text-3xl text-gray-600 font-bold text-center">$0 <span className="text-base">for one user</span></div>
              <div className="flex items-center justify-center">
                <Button>Sign Up</Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-white mt-4 sm:-mt-6 shadow-lg">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <div className="w-full p-8 text-3xl font-bold text-center">Basic</div>
              <div className="h-1 w-full gradient my-0 py-0 rounded-t"></div>
              <ul className="w-full text-center text-base font-bold">
                <li className="border-b py-4">Feature</li>
                <li className="border-b py-4">Feature</li>
                <li className="border-b py-4">Feature</li>
                <li className="border-b py-4">Feature</li>
              </ul>
            </div>
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div className="w-full pt-6 text-4xl font-bold text-center">$3.99 <span class="text-base">/ per user</span></div>
              <div className="flex items-center justify-center">
                <Button>Sign Up</Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4">
            <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
              <div className="p-8 text-3xl font-bold text-center border-b-4">Pro</div>
              <ul className="w-full text-center text-sm">
                <li className="border-b py-4">Feature</li>
                <li className="border-b py-4">Feature</li>
                <li className="border-b py-4">Feature</li>
              </ul>
            </div>
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div className="w-full pt-6 text-3xl text-gray-600 font-bold text-center">$8.99 <span className="text-base">for one user</span></div>
              <div className="flex items-center justify-center">
                <Button>Sign Up</Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section id="metrics-banner" className="py-20 lg:pt-30 bg-gray-300">
      <div className="container mx-auto text-center">
        <h3 className="text-white">Insert impressive stats here</h3>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24 text-white">
          <div className="w-full sm:w-1/3">
            <Metrics primaryText="+90%" secondaryText="Impressive stats" />
          </div>
          <div className="w-full sm:w-1/3">
            <Metrics primaryText="5x" secondaryText="Impressive stats" />
          </div>
          <div className="w-full sm:w-1/3">
            <Metrics primaryText="+60%" secondaryText="Impressive stats" />
          </div>
        </div>
      </div>
    </section>

    <section className="py-20 lg:pb-30 lg:pt-30">
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

    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center content-center lg:text-left lg:w-1/2">
          <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold leading-none">
            Highlight the benefits of using your product
          </h3>
          <p className="text-xl lg:text-2xl mt-4 font-thin">
          An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
          velna vitae auctor integer. 
          </p>
        </div>
        <div className="lg:w-1/2 container mx-auto xl:flex">
          <Dropdown />
        </div>
      </div>
    </section>

    <section className="pt-20 md:pt-40 pb-20">
    <div className="container mx-auto px-8 pt-15 lg:flex">
        <div className="lg:w-1/2 container mx-auto xl:flex">
          <AssetSelection />
        </div>
        <div className="text-center content-center lg:text-left lg:w-1/2">
          <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold leading-none">
            Highlight the benefits of using your product
          </h3>
          <p className="text-xl lg:text-2xl mt-4 font-thin">
          An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
          velna vitae auctor integer. 
          </p>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
