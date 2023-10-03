'use client'

import { useState } from "react"

import SignUp from "./homepage_components/signUp"

import Image from 'next/image'

import confused_couple from "../assets/static/confused_couple.png"
import recipe_book from "../assets/static/recipe_book.png"

import './globals.css'

export default function Home() {

  const [LogInState, setLogInState] = useState(0)

  const ActionButtons = () =>
  <>
  <div onClick={() => setLogInState(2)} className="w-full max-w-lg bg-cyan-400 h-16 rounded-md shdaow-md mx-auto flex justify-center items-center hover:bg-cyan-500 hover:cursor-pointer">
    <p className="text-xl font-semibold text-neutral-800">Sign Up</p>
  </div>
  <div onClick={() => setLogInState(1)} className="w-full max-w-lg border-cyan-400 border-2 h-16 rounded-md shdaow-md mx-auto mt-3 mb-0 md:mb-8 flex justify-center items-center hover:border-cyan-500 hover:cursor-pointer group">
    <p className="text-xl font-semibold text-cyan-400 group-hover:text-cyan-500">Log In</p>
  </div>
  </>

  const LogIn = () =>
  <div className="mx-auto h-auto w-full max-w-lg mx-auto bg-amber-400 p-6 rounded-md mt-10 shadow-md">
    <div className="h-10 -mt-3 w-full relative">
      <div onClick={() => setLogInState(0)} className="absolute right-0 bg-neutral-300 rounded-full w-8 hover:cursor-pointer flex justify-center items-center font-bold text-2xl">x</div>
    </div>
    <p className="pl-2 font-light text-neutral-800 mb-1">Email</p>
    <input className="w-full h-14 focus:outline-none rounded-sm shadow-inner text-xl font-light p-2" type="email" />
    <p className="pl-2 font-light text-neutral-800 mb-1 mt-3">Password</p>
    <input className="w-full h-14 focus:outline-none rounded-sm shadow-inner text-xl font-light p-2" type="password" />
    <div onClick={() => setLogInState(0)} className="w-full max-w-lg bg-neutral-800 h-16 rounded-md shdaow-md mx-auto mt-6 mb-0 flex justify-center items-center hover:cursor-pointer group">
      <p className="text-xl font-semibold text-white group-hover:text-neutral-800">Log In</p>
    </div>
  </div>

  

  return (
    <div className="min-h-[100vh] w-screen bg-neutral-800">
      <div className="foodBack min-h-[100vh] w-full">
      <div className="relative w-full h-full mx-auto">
        <div className="relative z-20 w-full h-24 bg-amber-400 shadow-lg p-4 flex justify-center items-center">
          <p className="absolute left-6 md:left-12 pb-1 text-4xl font-light text-neutral-800">Tiden</p>
          <div className="flex flex-row gap-4 absolute right-4 md:right-12">
            <div onClick={() => setLogInState(1)} className={` ${LogInState === 1 ? 'hidden' : null} group hover:border-2 hover:bg-amber-400 border-neutral-800 cursor-pointer flex justify-center items-center w-28 h-12 rounded-md bg-neutral-800`}>
              <div className="text-white font-semibold group-hover:text-neutral-800">Log In</div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-auto bg-neutral-300 bg-opacity-[80%] shadow-md max-w-[100rem] mx-auto pb-10 md:pt-6">
          {LogInState === 1 ? 
          <div className="absolute z-20 px-2 bg-opacity-90 md:-mt-6 w-full h-screen bg-neutral-800">
            <LogIn />
          </div>
          : null}
          <div className="w-full md:w-11/12 md:border-2 shadow-inner bg-amber-400 border-neutral-800 mx-auto h-auto py-10 md:py-14 mb-2 md:rounded-md flex flex-col justify-center items-center">
            <div>
              <p className="text-7xl md:text-8xl px-4 text-white text-center mb-4 font-semibold harnessShadow">Harness AI</p>
              <p className="text-5xl md:text-6xl px-4 text-center text-neutral-800 font-light">For A Better You</p>
            </div>
            {LogInState === 2 ? <SignUp /> : 
            <div onClick={() => setLogInState(2)} className="mt-10 w-40 h-14 rounded-md border-2 border-neutral-800 flex justify-center items-center hover:bg-amber-400 hover:bg-neutral-800 group hover:cursor-pointer">
              <div className="pb-1 font-semibold group-hover:text-white text-xl text-neutral-800">Sign Up</div>
            </div>
            }
          </div>
          <div className="flex relative z-10 flex-row justify-center flex-wrap w-11/12 h-auto gap-6 py-6 mx-auto">
            <div className="relative flex justify-center w-[29.5rem] h-[28rem] bg-neutral-800 rounded-md shadow-md ">
              <p className="flex justify-center items-center text-center text-2xl font-light p-4 bg-neutral-800 rounded-md h-[8rem] text-neutral-300 w-11/12 absolute bottom-4">
                One weekly meal plan that provides recipes and nutritional content based on your goals.
              </p>
            </div>
            <div className="relative flex justify-center w-[29.5rem] h-[28rem] bg-neutral-800 rounded-md shadow-md">
              <p className="flex justify-center items-center text-center text-2xl font-light p-4 bg-neutral-800 rounded-md h-[8rem] text-neutral-300 w-11/12 absolute bottom-4">
                One weekly workout plan that fits your comfort level, availability, and equipment access.
              </p>
            </div>
            <div className="relative flex justify-center w-[29.5rem] h-[28rem] bg-neutral-800 rounded-md shadow-md">
              <p className="flex justify-center items-center text-center text-2xl font-light p-4 bg-neutral-800 rounded-md h-[8rem] text-neutral-300 w-11/12 absolute bottom-4">
                One unique you, whether you&#39;re looking to improve your health or simplify your life.
              </p>
            </div>
          </div>
          <div className="w-11/12 h-auto mx-auto bg-neutral-300 py-4 rounded-md shadow-md mt-2">
            <div className="flex items-center pb-2 text-3xl font-semibold pl-8">How It Works</div>
            <div className="h-[.05rem] w-full bg-neutral-800 my-2" />
            <div className="px-8 text-2xl font-light">
              <p className="py-2">With the rapid development of consumer grade technology, AI (Artificial Intelligence) has become a primary topic
              of innovation and future application. We believe AI is a powerful tool that can assist us in our daily lives and more
              specifically with our exercise and nutritional desires.</p>

              <p className="py-2">By gathering information from you (that is stored in an SOC2 and HIPAA complient database, never to be shared without your consent) we
              can model unique plans that are original to each individual based on your desires. From an exercise perspective we find out what you goals are, how often
              you would like to work out, what equipment you have access to, and how experienced you are. Combined with food preperation information such as what tools
              you have access to in your kitchen, as well as how experienced you are preparing meals, we can come up with a weekly plan that meets your goals to either
              lose weight, maintain weight, or gain weight. Complete with exercise instructions as well as recipes and grocery lists, we aim to simplify your
              life at a cost much lower than a traditional coach. By creating a profile you can modify your information at any time to better suit your current needs.</p>

              <p className="py-2">Our platform is solely based on tokens. A single token is required to generate a meal plan as well as an exercise plan, respectively. This allows you to only
              generate a meal plan or only generate a workout plan if you do not desire both. Tokens start at two for $5 which gets you one week of workout plans. It is $15 for eight tokens,
              one month of plans. Our annual plan consists of 96 tokens for $150, a full year of personalized meal and exercise planning.</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
