'use client'

import { useState } from "react"

import Image from "next/image"

import SignUp from "./homepage_components/signUp"

import Lottie from "lottie-react"

import backgroundAnimation from "@/public/lottie/background.json"
import sparkles from "@/public/lottie/sparkles.json"

import food_schedule from "@/public/static/food_schedule.png"
import fitness_schedule from "@/public/static/fitness_schedule.png"
import person from "@/public/static/person.png"

import './globals.css'

export default function Home() {

  const [LogInState, setLogInState] = useState(0)

  const [RemoveAnimation, setRemoveAnimation] = useState(false)

  const LogIn = () =>
  <div className="mx-auto h-auto w-full max-w-lg mx-auto bg-amber-400 p-6 rounded-md mt-40 shadow-md">
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

  const timeoutAnimation = () => {
    setTimeout(() => {
      setRemoveAnimation(true)
    }, 3700)
  }

  timeoutAnimation()
  

  return (
    <div className="min-h-[100vh] w-screen bg-neutral-800">
      <div className="foodBack min-h-[100vh] w-full">
      <div className="relative w-full h-full mx-auto">
        <div className="relative z-50 w-full h-24 bg-amber-400 shadow-lg p-4 flex justify-center items-center">
          <div className="relative max-w-[100rem] w-full h-full flex items-center">
            <p className="absolute left-6 md:left-12 pb-1 text-4xl font-light text-neutral-800">Tiden</p>
            <div className="flex flex-row gap-4 absolute right-4 md:right-12">
              <div onClick={() => setLogInState(1)} className={` ${LogInState === 1 ? 'hidden' : null} group hover:border-2 hover:bg-amber-400 border-neutral-800 cursor-pointer flex justify-center items-center w-28 h-12 rounded-md bg-neutral-800`}>
                <div className="text-white font-semibold group-hover:text-neutral-800">Log In</div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-30 w-full h-auto bg-neutral-300 bg-opacity-[80%] shadow-md max-w-[100rem] mx-auto pb-10 md:pt-6">
          {LogInState === 1 ? 
          <div className="fixed z-40 px-2 bg-opacity-90 w-screen left-0 -mt-32 h-[110vh] bg-neutral-800">
            <LogIn />
          </div>
          : null}
          <div className={`overflow-hidden relative w-full md:w-11/12 md:border-2 ${RemoveAnimation ? 'bg-amber-400' : 'bg-neutral-300'} shadow-inner border-neutral-800 mx-auto h-auto py-20 mb-2 md:rounded-md flex flex-col justify-center items-center`}>
            {RemoveAnimation ? null :
            <Lottie
              animationData={backgroundAnimation}
              loop={false}
              className="z-10 absolute top-0 left-0 min-w-[50rem] w-full"
            />
            }
            <Lottie
              animationData={sparkles}
              loop={true}
              className={`z-10 absolute bottom-0 ${LogInState === 2 ? '-top-[40rem] md:-top-80' : '-top-10'} min-w-[50rem] w-full opacityChange`}
            />
            <div className="relative z-20">
              <p className="text-7xl md:text-8xl px-4 textChange text-center mb-4 font-semibold">Harness AI</p>
              <p className="text-5xl md:text-6xl px-4 text-center text-neutral-800 font-light">For A Better You</p>
            </div>
            {LogInState === 2 ? <SignUp /> : 
            <div onClick={() => setLogInState(2)} className="relative z-20 mt-10 w-60 h-24 rounded-md border-2 bg-neutral-800 transition-all font-light hover:scale-[105%] border-neutral-800 flex justify-center items-center hover:shadow-md group hover:cursor-pointer">
              <div className="pb-1 group-hover:text-white text-3xl text-white">Sign Up</div>
            </div>
            }
          </div>
          <div className="flex relative z-10 flex-row justify-center flex-wrap w-11/12 h-auto gap-6 py-6 mx-auto">
            <div className="relative flex flex-col items-center justify-center w-[29.5rem] h-[28rem] bg-neutral-800 rounded-md shadow-md p-4">
              <div className="h-2/3 flex justify-center items-center w-full rounded-md">
                <Image
                 src={food_schedule}
                 alt='Food Calendar'
                 className="h-[14rem] w-[14rem] mb-4"
                 />
              </div>
              <p className="flex justify-center items-center text-center text-2xl font-light p-4 bg-neutral-800 rounded-md h-[8rem] text-neutral-300 w-11/12">
                One weekly meal plan that provides recipes and nutritional content based on your goals.
              </p>
            </div>
            <div className="relative flex flex-col items-center justify-center w-[29.5rem] h-[28rem] bg-neutral-800 rounded-md shadow-md p-4">
              <div className="h-2/3 flex justify-center items-center w-full rounded-md">
                <Image
                 src={fitness_schedule}
                 alt='Fitness Plan'
                 className="h-[15rem] w-[15rem]"
                 />
              </div>
              <p className="flex justify-center items-center text-center text-2xl font-light p-4 bg-neutral-800 rounded-md h-[8rem] text-neutral-300 w-11/12">
                One weekly workout plan that fits your comfort level, availability, and equipment access.
              </p>
            </div>
            <div className="relative flex flex-col items-center justify-center w-[29.5rem] h-[28rem] bg-neutral-800 rounded-md shadow-md p-4">
              <div className="h-2/3 flex justify-center items-center w-full rounded-md">
                <Image
                 src={person}
                 alt='Happy Person'
                 className="h-60 w-60"
                 />
              </div>
              <p className="flex justify-center items-center text-center text-2xl font-light p-4 bg-neutral-800 rounded-md h-[8rem] text-neutral-300 w-11/12">
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
