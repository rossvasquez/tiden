'use client'

import { useState } from "react"

import supabase from '../supabaseClient'

export default function SignUp() {

    //Setup

    type Equipment = string[]

    const [UserInfo, setUserInfo] = useState({
        "first_name": '',
        "email": '',
        "password": '',
        "age": 35,
        "height": {
          "feet": 0,
          "inches": 0,
        },
        "weight": 165,
        "workout_experience": {
          "level": 0,
          "exp": 'None'
        },
        "workouts_week": 4,
        "workout_length": {
          'raw': 45,
          'minutes' : 45,
          'hours' : 0,
        },
        "workout_equipment": [] as Equipment,
        "workout_emphasis": '',
        "cooking_experience": {
          "level": 0,
          "exp": "None"
        },
        "cooking_equipment": [] as Equipment,
        "avoid_food": [] as Equipment,
        "personal_goal": '',
    })

    const [FormPage, setFormPage] = useState(1)

    const signUpNext = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      setFormPage(prev => prev + 1)
    }

    const FormNav = () =>
    <div className="flex flex-row items-center justify-center max-w-lg gap-2">
      <div onClick={() => setFormPage(prev => prev - 1)} className="text-neutral-800 hover:text-white w-1/2 bg-amber-400 text-neutral-800 h-16 rounded-md shdaow-md mx-auto mt-6 flex justify-center items-center hover:bg-transparent hover:border-2 border-amber-300 pb-1 hover:cursor-pointer">
        <p className="text-xl font-semibold">Prev</p>
      </div>
      <button type="submit" className="text-neutral-800 hover:text-white w-1/2 bg-amber-400 text-neutral-800 h-16 rounded-md shdaow-md mx-auto mt-6 flex justify-center items-center hover:bg-transparent hover:border-2 border-amber-300 pb-1 hover:cursor-pointer">
        <p className="text-xl font-semibold">Next</p>
      </button>
    </div>

    //First Page

    const [PasswordMatch, setPasswordMatch] = useState(0)

    const setFirstName = (e: { target: { value: string } }) => {
        let tempObj = { ...UserInfo }
        tempObj.first_name = e.target.value
        setUserInfo(tempObj)
    }

    const setEmail = (e: { target: { value: string } }) => {
        let tempObj = { ...UserInfo }
        tempObj.email = e.target.value
        setUserInfo(tempObj)
    }

    const setPassword = (e: { target: { value: string } }) => {
        let tempObj = { ...UserInfo }
        tempObj.password = e.target.value
        setUserInfo(tempObj)
    }

    const passwordMatch = (e: { target: { value: string } }) => {
      if (e.target.value === UserInfo.password || e.target.value === '') {
        setPasswordMatch(0)
      } else {
        setPasswordMatch(1)
      }
    }
    
    const signUpOne = () =>
    <form onSubmit={(e) => signUpNext(e)} className="bg-neutral-800 p-10 md:rounded-md shadow-md h-auto w-full max-w-xl mx-auto mt-14">
      <p className="pl-2 font-light text-white mb-1">First Name</p>
      <input onChange={(e) => setFirstName(e)} value={UserInfo.first_name}className="w-full h-14 focus:outline-none rounded-md shadow-inner text-xl font-light p-2" type="text" />
      <p className="pl-2 font-light text-white mb-1 mt-3">Email</p>
      <input onChange={(e) => setEmail(e)} value={UserInfo.email} className="w-full h-14 focus:outline-none rounded-md shadow-inner text-xl font-light p-2" type="email" />
      <p className={`h-10 mt-1 flex items-center text-red-400 ${PasswordMatch === 1 ? null : 'hidden'}`}>Passwords Do Not Match</p> 
      <p className={`pl-2 font-light text-white mb-1 ${PasswordMatch === 1 ? null : 'mt-3'}`}>Password</p>
      <input onChange={(e) => setPassword(e)} value={UserInfo.password} className="w-full h-14 focus:outline-none rounded-md shadow-inner text-xl font-light p-2" type="password" />
      <p className="pl-2 font-light text-white mb-1 mt-3">Confirm Password</p>
      <input onChange={(e) => passwordMatch(e)} className="w-full h-14 focus:outline-none rounded-md shadow-inner text-xl font-light p-2" type="password" />
      <button type="submit" className="text-neutral-800 hover:text-white w-full max-w-lg bg-amber-400 text-neutral-800 h-16 rounded-md shdaow-md mx-auto mt-6 flex justify-center items-center hover:bg-transparent hover:border-2 border-amber-300 pb-1 hover:cursor-pointer">
        <p className="text-xl font-semibold">Next</p>
      </button>
    </form>

    //Second Page

    const setAge = (e: { target: { value: string } }) => {
        let tempObj = { ...UserInfo }
        tempObj.age = Number(e.target.value)
        setUserInfo(tempObj)
    }

    const setFeet = (e: { target: { value: string } }) => {
        let tempObj = { ...UserInfo }
        tempObj.height.feet = Number(e.target.value)
        setUserInfo(tempObj)
    }

    const setInches = (e: { target: { value: string } }) => {
        let tempObj = { ...UserInfo }
        tempObj.height.inches = Number(e.target.value)
        setUserInfo(tempObj)
    }

    const setWeight = (e: { target: { value: string } }) => {
        let tempObj = { ...UserInfo }
        tempObj.weight = Number(e.target.value)
        setUserInfo(tempObj)
    }

    const signUpTwo = () =>
    <form onSubmit={(e) => signUpNext(e)} className="bg-neutral-800 p-10 md:rounded-md shadow-md h-auto w-full max-w-xl mx-auto mt-14">
      <p className="pl-2 font-light text-white text-2xl mb-1">Age <span className="font-semibold">{UserInfo.age}</span></p>
      <input onChange={(e) => setAge(e)} value={UserInfo.age} className="mt-2 focus:cursor-pointer hover:cursor-pointer appearance-none bg-transparent [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-amber-400 [&::-webkit-slider-thumb]:h-8 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:w-8 w-full [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-white" type="range" />
      <p className="pl-1 font-light text-white text-2xl mb-1 mt-4">Height</p>
      <div className="flex flex-row items-end">
        <input onChange={(e) => setFeet(e)} value={UserInfo.height.feet} className="mt-2 w-14 text-2xl font-semibold h-10 focus:outline-none rounded-md text-center shadow-inner text-xl font-light p-2" type="text" />
        <p className="text-2xl text-white ml-2">feet</p>
        <input onChange={(e) => setInches(e)} value={UserInfo.height.inches} className="mt-2 ml-4 w-14 text-2xl font-semibold h-10 focus:outline-none rounded-md text-center shadow-inner text-xl font-light p-2" type="text" />
        <p className="text-2xl text-white ml-2">inches</p>
      </div>
      <p className="mt-5 pl-2 font-light text-white text-2xl mb-1">Weight (Pds.) <span className="font-semibold">{UserInfo.weight}</span></p>
      <input onChange={(e) => setWeight(e)} value={UserInfo.weight} className="mt-2 focus:cursor-pointer hover:cursor-pointer appearance-none bg-transparent [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-amber-400 [&::-webkit-slider-thumb]:h-8 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:w-8 w-full [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-white" type="range" min='80' max='500' />
      <FormNav />
    </form>

    //Third Page

    const setWorkoutExp = (e: { target: { value: string } }) => {
        let tempObj = { ...UserInfo }
        let exp = Number(e.target.value)
        tempObj.workout_experience.level = exp
        if (exp === 0) {
          tempObj.workout_experience.exp = 'None'
        } else if (exp === 1) {
          tempObj.workout_experience.exp = 'Beginner'
        } else if (exp === 2) {
          tempObj.workout_experience.exp = 'Intermediate'
        } else {
          tempObj.workout_experience.exp = 'Advanced'
        }
        setUserInfo(tempObj)
    }

    const setWorkoutsWeek = (e: { target: { value: string } }) => {
        let tempObj = {...UserInfo}
        tempObj.workouts_week = Number(e.target.value)
        setUserInfo(tempObj)
    }

    const setWorkoutLength = (e: { target: { value: string } }) => {
        let tempObj = { ...UserInfo }
        let length = Number(e.target.value)
        tempObj.workout_length.raw = length
        if (length === 120) {
          tempObj.workout_length.hours = 2
          tempObj.workout_length.minutes = 0
        } else if (length > 60) {
          tempObj.workout_length.hours = 1
          tempObj.workout_length.minutes = (length - 60)
        } else if (length === 60) {
          tempObj.workout_length.hours = 1
          tempObj.workout_length.minutes = 0
        } else {
          tempObj.workout_length.hours = 0
          tempObj.workout_length.minutes = length
        }
        setUserInfo(tempObj)
    }

    const signUpThree = () =>
    <form onSubmit={(e) => signUpNext(e)} className="bg-neutral-800 p-10 md:rounded-md shadow-md h-auto w-full max-w-xl mx-auto mt-14">
      <p className="pl-2 font-light text-white text-2xl mb-1">I Want To Exercise...</p>
      <p className="pl-2 font-light text-white text-2xl mb-1 mt-3"><span className="font-semibold">{UserInfo.workouts_week}</span> Times Per Week</p>
      <input onChange={(e) => setWorkoutsWeek(e)} value={UserInfo.workouts_week} className="mt-2 focus:cursor-pointer hover:cursor-pointer appearance-none bg-transparent [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-amber-400 [&::-webkit-slider-thumb]:h-8 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:w-8 w-full [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-white" type="range" min='1' max='7' />
      <div className="flex flex-row pl-2 font-light text-white text-2xl mb-1 mt-3">
        For
        {UserInfo.workout_length.hours === 1 ? 
        <p className="font-semibold ml-2">1 Hour</p> 
        : null
        }
        {UserInfo.workout_length.hours === 2 ? 
        <p className="font-semibold ml-2">2 Hours</p> 
        : null
        }
        {UserInfo.workout_length.minutes > 0 ? 
        <p className="font-semibold ml-2">{UserInfo.workout_length.minutes} Minutes</p> 
        : null
        }
      </div>
      <input onChange={(e) => setWorkoutLength(e)} value={UserInfo.workout_length.raw} className="mt-2 focus:cursor-pointer hover:cursor-pointer appearance-none bg-transparent [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-amber-400 [&::-webkit-slider-thumb]:h-8 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:w-8 w-full [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-white" type="range" step='15' min='15' max='120' />
      <p className="pl-2 font-light text-white text-2xl mb-1 mt-4">Fitness Experience - <span className="font-semibold">{UserInfo.workout_experience.exp}</span></p>
      <input onChange={(e) => setWorkoutExp(e)} value={UserInfo.workout_experience.level} className="mt-2 focus:cursor-pointer hover:cursor-pointer appearance-none bg-transparent [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-amber-400 [&::-webkit-slider-thumb]:h-8 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:w-8 w-full [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-white" type="range" min='0' max='3' />
      <FormNav />
    </form>

    //Fourth Page

    const setExerciseEquipment = (equipment: string) => {
      let tempObj = {...UserInfo}
      let fullGym = tempObj.workout_equipment.indexOf("Full Gym")
      if (fullGym === -1) {

      } else {
        let first = tempObj.workout_equipment.slice(0, fullGym)
        let second = tempObj.workout_equipment.slice(fullGym + 1)
        tempObj.workout_equipment = first.concat(second)
      }
      let index = tempObj.workout_equipment.indexOf(equipment)
      if (index === -1) {
        tempObj.workout_equipment.push(equipment)
      } else {
        let first = tempObj.workout_equipment.slice(0, index)
        let second = tempObj.workout_equipment.slice(index + 1)
        tempObj.workout_equipment = first.concat(second)
      }
      setUserInfo(tempObj)
    }

    const fullGym = () => {
      let tempObj = {...UserInfo}
      tempObj.workout_equipment = ["Full Gym"]
      setUserInfo(tempObj)
    }

    const testEquipment = (equipment: string) => {
      let tempObj = {...UserInfo}
      return tempObj.workout_equipment.indexOf(equipment)
    }

    const setEmphasis = (emphasis: string) => {
      let tempObj = {...UserInfo}
      tempObj.workout_emphasis = emphasis
      setUserInfo(tempObj)
    }

    const signUpFour = () =>
    <form onSubmit={(e) => signUpNext(e)} className="bg-neutral-800 p-10 md:rounded-md shadow-md h-auto w-full max-w-xl mx-auto mt-14">
      <p className="w-full text-center font-light text-white text-2xl mb-1">Select Exercise Equipment Access</p>
      <div className="w-full h-auto flex flex-wrap gap-4 justify-center mt-5">
        <div className={`h-14 border-2 border-amber-400 rounded-md flex justify-center items-center px-4 pb-1 text-xl font-light hover:cursor-pointer ${testEquipment("Jump Rope") === -1 ? 'text-white' : 'bg-amber-400 text-neutral-800'}`} onClick={() => setExerciseEquipment("Jump Rope")}>Jump Rope</div>
        <div className={`h-14 border-2 border-amber-400 rounded-md flex justify-center items-center px-4 pb-1 text-xl font-light hover:cursor-pointer ${testEquipment("Medicine Ball") === -1 ? 'text-white' : 'bg-amber-400 text-neutral-800'}`} onClick={() => setExerciseEquipment("Medicine Ball")}>Medicine Ball</div>
        <div className={`h-14 border-2 border-amber-400 rounded-md flex justify-center items-center px-4 pb-1 text-xl font-light hover:cursor-pointer ${testEquipment("Resistance Bands") === -1 ? 'text-white' : 'bg-amber-400 text-neutral-800'}`} onClick={() => setExerciseEquipment("Resistance Bands")}>Resistance Bands</div>
        <div className={`h-14 border-2 border-amber-400 rounded-md flex justify-center items-center px-4 pb-1 text-xl font-light hover:cursor-pointer ${testEquipment("Kettlebell") === -1 ? 'text-white' : 'bg-amber-400 text-neutral-800'}`} onClick={() => setExerciseEquipment("Kettlebell")}>Kettlebell</div>
        <div className={`h-14 border-2 border-amber-400 rounded-md flex justify-center items-center px-4 pb-1 text-xl font-light hover:cursor-pointer ${testEquipment("Dumbbells") === -1 ? 'text-white' : 'bg-amber-400 text-neutral-800'}`} onClick={() => setExerciseEquipment("Dumbbells")}>Dumbbells</div>
        <div className={`h-14 border-2 border-amber-400 rounded-md flex justify-center items-center px-4 pb-1 text-xl font-light hover:cursor-pointer ${testEquipment("Weight Bench") === -1 ? 'text-white' : 'bg-amber-400 text-neutral-800'}`} onClick={() => setExerciseEquipment("Weight Bench")}>Weight Bench</div>
        <div className={`h-14 border-2 border-amber-400 rounded-md flex justify-center items-center px-4 pb-1 text-xl font-light hover:cursor-pointer ${testEquipment("Barbell") === -1 ? 'text-white' : 'bg-amber-400 text-neutral-800'}`} onClick={() => setExerciseEquipment("Barbell")}>Barbell</div>
        <div className={`h-14 border-2 border-amber-400 rounded-md flex justify-center items-center px-4 pb-1 text-xl font-light hover:cursor-pointer ${testEquipment("Barbell Rack") === -1 ? 'text-white' : 'bg-amber-400 text-neutral-800'}`} onClick={() => setExerciseEquipment("Barbell Rack")}>Barbell Rack</div>
        <div className={`h-14 border-2 border-amber-400 rounded-md flex justify-center items-center px-4 pb-1 text-xl font-light hover:cursor-pointer ${testEquipment("Treadmill") === -1 ? 'text-white' : 'bg-amber-400 text-neutral-800'}`} onClick={() => setExerciseEquipment("Treadmill")}>Treadmill</div>
        <div className={`h-14 border-2 border-amber-400 rounded-md flex justify-center items-center px-4 pb-1 text-xl font-light hover:cursor-pointer ${testEquipment("Bicycle") === -1 ? 'text-white' : 'bg-amber-400 text-neutral-800'}`} onClick={() => setExerciseEquipment("Bicycle")}>Bicycle</div>
        <div className={`h-14 border-2 border-amber-400 rounded-md flex justify-center items-center px-4 pb-1 text-xl font-light hover:cursor-pointer ${testEquipment("Pull-Up Bar") === -1 ? 'text-white' : 'bg-amber-400 text-neutral-800'}`} onClick={() => setExerciseEquipment("Pull-Up Bar")}>Pull-Up Bar</div>
      </div>
      <p className="w-full text-xl font-semibold text-center text-white py-3">or</p>
      <div onClick={() => fullGym()} className={`h-14 border-2 w-3/4 mx-auto border-amber-400 rounded-md flex justify-center items-center px-4 pb-1 text-xl font-light hover:cursor-pointer ${testEquipment("Full Gym") === -1 ? 'text-white' : 'bg-amber-400 text-neutral-800'}`}>I Have Access to a Gym</div>
      <p className="w-full font-light text-white text-2xl mb-1 mt-6">I want to focus on...</p>
      <div className="md:flex md:flex-wrap justify-center items-center gap-4 mt-4">
        <div className={`h-14 w-full mt-4 md:mt-0 md:w-[9.6rem] border-2 border-amber-400 rounded-md flex justify-center items-center px-4 pb-1 text-xl font-light hover:cursor-pointer ${UserInfo.workout_emphasis === "Cardio" ? 'bg-amber-400 text-neutral-800' : 'text-white'}`} onClick={() => setEmphasis("Cardio")}>Cardio</div>
        <div className={`h-14 w-full mt-4 md:mt-0 md:w-[9.6rem] border-2 border-amber-400 rounded-md flex justify-center items-center px-4 pb-1 text-xl font-light hover:cursor-pointer ${UserInfo.workout_emphasis === "Strength" ? 'bg-amber-400 text-neutral-800' : 'text-white'}`} onClick={() => setEmphasis("Strength")}>Strength</div>
        <div className={`h-14 w-full mt-4 md:mt-0 md:w-[9.6rem] border-2 border-amber-400 rounded-md flex justify-center items-center px-4 pb-1 text-xl font-light hover:cursor-pointer ${UserInfo.workout_emphasis === "Balance" ? 'bg-amber-400 text-neutral-800' : 'text-white'}`} onClick={() => setEmphasis("Balance")}>Balance</div>
      </div>
      <FormNav />
    </form>

    //Page Five

    const setCookingExp = (e: { target: { value: string } }) => {
      let tempObj = { ...UserInfo}
      let exp = Number(e.target.value)
      tempObj.cooking_experience.level = exp
      if (exp === 0) {
        tempObj.cooking_experience.exp = 'None'
      } else if (exp === 1) {
        tempObj.cooking_experience.exp = 'Beginner'
      } else if (exp === 2) {
        tempObj.cooking_experience.exp = 'Intermediate'
      } else {
        tempObj.cooking_experience.exp = 'Advanced'
      }
      setUserInfo(tempObj)
    }

    const [Allergy, setAllergy] = useState('')

    const addAllergy = () => {
      if (Allergy === '') {

      } else {
        let tempObj = {...UserInfo}
        tempObj.avoid_food.push(Allergy)
        setAllergy('')
        setUserInfo(tempObj)
      }
    }

    const popAllergy = () => {
      let tempObj = {...UserInfo}
      tempObj.avoid_food.pop()
      setUserInfo(tempObj)
    }

    const setCookingEquipment = (equipment: string) => {
      let tempObj = {...UserInfo}
      let index = tempObj.cooking_equipment.indexOf(equipment)
      if (index === -1) {
        tempObj.cooking_equipment.push(equipment)
      } else {
        let first = tempObj.cooking_equipment.slice(0, index)
        let second = tempObj.cooking_equipment.slice(index + 1)
        tempObj.cooking_equipment = first.concat(second)
      }
      setUserInfo(tempObj)
    }

    const testCooking = (equipment: string) => {
      let tempObj = {...UserInfo}
      return tempObj.cooking_equipment.indexOf(equipment)
    }

    const signUpFive = () =>
    <form onSubmit={(e) => signUpNext(e)} className="bg-neutral-800 p-10 md:rounded-md shadow-md h-auto w-full max-w-xl mx-auto mt-14">
      <p className="pl-2 font-light text-white text-2xl mb-1">Cooking Experience - <span className="font-semibold">{UserInfo.cooking_experience.exp}</span></p>
      <input onChange={(e) => setCookingExp(e)} value={UserInfo.cooking_experience.level} className="mt-2 focus:cursor-pointer hover:cursor-pointer appearance-none bg-transparent [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-amber-400 [&::-webkit-slider-thumb]:h-8 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:w-8 w-full [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-white" type="range" min='0' max='3' />
      <p className="pl-2 font-light text-white text-2xl mb-1 mt-5">Allergies / Foods To Avoid</p>
      <div className="flex flex-row gap-4 w-full mt-2">
        <input onChange={(e) => setAllergy(e.target.value)} value={Allergy} className="w-3/5 h-14 focus:outline-none rounded-md shadow-inner text-xl font-light p-2" type="text" />
        <div onClick={() => addAllergy()} className="rounded-md bg-amber-400 h-14 w-1/5 flex justify-center items-center text-4xl pb-2 hover:border-2 border-amber-400 hover:bg-neutral-800 text-neutral-800 hover:text-amber-400 active:text-white hover:cursor-pointer font-semibold">+</div>
        <div onClick={() => popAllergy()} className="rounded-md bg-amber-400 h-14 w-1/5 flex justify-center items-center text-4xl pb-2 hover:border-2 border-amber-400 hover:bg-neutral-800 text-neutral-800 hover:text-amber-400 active:text-white hover:cursor-pointer font-semibold">-</div>
      </div>
      <div className="flex flex-wrap">
        {UserInfo.avoid_food.map(item => 
          <div key={item} className="ml-3 mt-2 flex flex-row items-center">
            <div className="text-amber-400 pb-[.05rem] text-2xl flex justify-center items-center">|</div>
            <p className="ml-3 text-2xl text-white font-light">{item}</p>
          </div>
          )}
      </div>
      <p className="w-full text-center font-light text-white text-2xl mb-1 mt-6">Select Cooking Equipment Access</p>
      <div className="w-full h-auto flex flex-wrap gap-4 justify-center mt-5">
        <div className={`h-14 border-2 border-amber-400 rounded-md flex justify-center items-center px-4 pb-1 text-xl font-light hover:cursor-pointer ${testCooking("Oven") === -1 ? 'text-white' : 'bg-amber-400 text-neutral-800'}`} onClick={() => setCookingEquipment("Oven")}>Oven</div>
        <div className={`h-14 border-2 border-amber-400 rounded-md flex justify-center items-center px-4 pb-1 text-xl font-light hover:cursor-pointer ${testCooking("Stove Top") === -1 ? 'text-white' : 'bg-amber-400 text-neutral-800'}`} onClick={() => setCookingEquipment("Stove Top")}>Stove Top</div>
        <div className={`h-14 border-2 border-amber-400 rounded-md flex justify-center items-center px-4 pb-1 text-xl font-light hover:cursor-pointer ${testCooking("Grill") === -1 ? 'text-white' : 'bg-amber-400 text-neutral-800'}`} onClick={() => setCookingEquipment("Grill")}>Grill</div>
        <div className={`h-14 border-2 border-amber-400 rounded-md flex justify-center items-center px-4 pb-1 text-xl font-light hover:cursor-pointer ${testCooking("Air Fryer") === -1 ? 'text-white' : 'bg-amber-400 text-neutral-800'}`} onClick={() => setCookingEquipment("Air Fryer")}>Air Fryer</div>
        <div className={`h-14 border-2 border-amber-400 rounded-md flex justify-center items-center px-4 pb-1 text-xl font-light hover:cursor-pointer ${testCooking("Slow Cooker") === -1 ? 'text-white' : 'bg-amber-400 text-neutral-800'}`} onClick={() => setCookingEquipment("Slow Cooker")}>Slow Cooker</div>
        <div className={`h-14 border-2 border-amber-400 rounded-md flex justify-center items-center px-4 pb-1 text-xl font-light hover:cursor-pointer ${testCooking("Rice Cooker") === -1 ? 'text-white' : 'bg-amber-400 text-neutral-800'}`} onClick={() => setCookingEquipment("Rice Cooker")}>Rice Cooker</div>
        <div className={`h-14 border-2 border-amber-400 rounded-md flex justify-center items-center px-4 pb-1 text-xl font-light hover:cursor-pointer ${testCooking("Microwave") === -1 ? 'text-white' : 'bg-amber-400 text-neutral-800'}`} onClick={() => setCookingEquipment("Microwave")}>Microwave</div>
        <div className={`h-14 border-2 border-amber-400 rounded-md flex justify-center items-center px-4 pb-1 text-xl font-light hover:cursor-pointer ${testCooking("Toaster") === -1 ? 'text-white' : 'bg-amber-400 text-neutral-800'}`} onClick={() => setCookingEquipment("Toaster")}>Toaster</div>
        <div className={`h-14 border-2 border-amber-400 rounded-md flex justify-center items-center px-4 pb-1 text-xl font-light hover:cursor-pointer ${testCooking("Blender") === -1 ? 'text-white' : 'bg-amber-400 text-neutral-800'}`} onClick={() => setCookingEquipment("Blender")}>Blender</div>
        <div className={`h-14 border-2 border-amber-400 rounded-md flex justify-center items-center px-4 pb-1 text-xl font-light hover:cursor-pointer ${testCooking("Food Processor") === -1 ? 'text-white' : 'bg-amber-400 text-neutral-800'}`} onClick={() => setCookingEquipment("Food Processor")}>Food Processor</div>
        <div className={`h-14 border-2 border-amber-400 rounded-md flex justify-center items-center px-4 pb-1 text-xl font-light hover:cursor-pointer ${testCooking("Frying Pan(s)") === -1 ? 'text-white' : 'bg-amber-400 text-neutral-800'}`} onClick={() => setCookingEquipment("Frying Pan(s)")}>Frying Pan(s)</div>
        <div className={`h-14 border-2 border-amber-400 rounded-md flex justify-center items-center px-4 pb-1 text-xl font-light hover:cursor-pointer ${testCooking("Sauce Pot(s)") === -1 ? 'text-white' : 'bg-amber-400 text-neutral-800'}`} onClick={() => setCookingEquipment("Sauce Pot(s)")}>Sauce Pot(s)</div>
        <div className={`h-14 border-2 border-amber-400 rounded-md flex justify-center items-center px-4 pb-1 text-xl font-light hover:cursor-pointer ${testCooking("Baking Sheet") === -1 ? 'text-white' : 'bg-amber-400 text-neutral-800'}`} onClick={() => setCookingEquipment("Baking Sheet")}>Baking Sheet</div>
      </div>
      <FormNav />
    </form>

    //Page Six

    const setGoal = (goal: string) => {
      let tempObj = {...UserInfo}
      tempObj.personal_goal = goal
      setUserInfo(tempObj)
    }

    const regUser = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      console.log(UserInfo)
    }

    const signUpSix = () =>
    <form onSubmit={(e) => regUser(e)} className="bg-neutral-800 p-10 md:rounded-md shadow-md h-auto w-full max-w-xl mx-auto mt-14">
      <p className="pl-2 font-light text-white text-2xl mb-1">I Want To...</p>
      <div onClick={() => setGoal("Lose Weight")} className={`w-full h-14 border-2 border-amber-400 rounded-md mt-4 flex justify-center items-center pb-1 text-2xl font-light hover:cursor-pointer ${UserInfo.personal_goal === "Lose Weight" ? 'bg-amber-400 text-neutral-800' : 'text-white'}`}>Lose Weight</div>
      <div onClick={() => setGoal("Gain Weight")} className={`w-full h-14 border-2 border-amber-400 rounded-md mt-4 flex justify-center items-center pb-1 text-2xl font-light hover:cursor-pointer ${UserInfo.personal_goal === "Gain Weight" ? 'bg-amber-400 text-neutral-800' : 'text-white'}`}>Gain Weight</div>
      <div onClick={() => setGoal("Maintain Weight")} className={`w-full h-14 border-2 border-amber-400 rounded-md mt-4 flex justify-center items-center pb-1 text-2xl font-light hover:cursor-pointer ${UserInfo.personal_goal === "Maintain Weight" ? 'bg-amber-400 text-neutral-800' : 'text-white'}`}>Maintain Weight</div>
      <button type="submit" className="text-neutral-800 hover:text-white w-full max-w-lg bg-amber-400 text-neutral-800 h-16 rounded-md shdaow-md mx-auto mt-6 flex justify-center items-center hover:bg-transparent hover:border-2 border-amber-300 pb-1 hover:cursor-pointer">
        <p className="text-xl font-semibold">Register</p>
      </button>
    </form>

    return(
        <>
        {FormPage === 1 ? signUpOne() : null}
        {FormPage === 2 ? signUpTwo() : null}
        {FormPage === 3 ? signUpThree() : null}
        {FormPage === 4 ? signUpFour() : null}
        {FormPage === 5 ? signUpFive() : null}
        {FormPage === 6 ? signUpSix() : null}
        <div className="mt-8 w-full gap-3 flex justify-center items-center">
          <div className={`w-4 h-4 rounded-full border-2 border-neutral-800 ${FormPage > 1 ? 'bg-neutral-800' : null} ${FormPage === 1 ? 'bg-white' : null}`}/>
          <div className={`w-4 h-4 rounded-full border-2 border-neutral-800 ${FormPage > 2 ? 'bg-neutral-800' : null} ${FormPage === 2 ? 'bg-white' : null}`}/>
          <div className={`w-4 h-4 rounded-full border-2 border-neutral-800 ${FormPage > 3 ? 'bg-neutral-800' : null} ${FormPage === 3 ? 'bg-white' : null}`}/>
          <div className={`w-4 h-4 rounded-full border-2 border-neutral-800 ${FormPage > 4 ? 'bg-neutral-800' : null} ${FormPage === 4 ? 'bg-white' : null}`}/>
          <div className={`w-4 h-4 rounded-full border-2 border-neutral-800 ${FormPage > 5 ? 'bg-neutral-800' : null} ${FormPage === 5 ? 'bg-white' : null}`}/>
          <div className={`w-4 h-4 rounded-full border-2 border-neutral-800 ${FormPage > 6 ? 'bg-neutral-800' : null} ${FormPage === 6 ? 'bg-white' : null}`}/>
        </div>
        </>
    )
}