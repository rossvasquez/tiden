'use client'

import { roboto, koulen } from "@/assets/styles/fonts"

import { useState } from "react"

import { generateMealPlan } from "./api/generations/generateMealPlan"

export default function Dashboard({UserObj, SignOut}) {

    const returnArr = (textArr) => {
        return JSON.parse(textArr)
    }

    const MealPlan = () =>
    <div className="w-full rounded-md bg-neutral-900 shadow-md mt-4 min-h-[18rem]">
        <p className={`${roboto.className} text-white px-8 py-4 text-3xl border-b-2 border-amber-400`}>Meal Plan</p>
        <div className="flex justify-center w-full h-80 items-center p-6">
            <div className="group hover:cursor-pointer hover:bg-neutral-600 rounded-md h-full w-full flex justify-center items-center border-[.01rem] border-white bg-neutral-800">
                <div onClick={() => generateMealPlan()} className="flex flex-col items-center">
                    <p className={`${roboto.className} text-3xl mb-3 text-white`}>No Meal Plans</p>
                    <p className={`${roboto.className} group-hover:text-amber-400 text-xl text-white`}>Click To Generate</p>
                </div>
            </div>
        </div>
    </div>

    const WorkoutPlan = () =>
    <div className="w-full rounded-md bg-neutral-900 shadow-md mt-4 min-h-[18rem]">
        <p className={`${roboto.className} text-white px-8 py-4 text-3xl border-b-2 border-amber-400`}>Workout Plan</p>
        <div className="flex justify-center w-full h-80 items-center p-6">
            <div className="group hover:cursor-pointer hover:bg-neutral-600 rounded-md h-full w-full flex justify-center items-center border-[.01rem] border-white bg-neutral-800">
                <div className="flex flex-col items-center">
                    <p className={`${roboto.className} text-3xl mb-3 text-white`}>No Workout Plans</p>
                    <p className={`${roboto.className} group-hover:text-amber-400 text-xl text-white`}>Click To Generate</p>
                </div>
            </div>
        </div>
    </div>

    const [ShowProfile, setShowProfile] = useState(false)

    const checkProfileTrue = () => {
        if (ShowProfile) {
            setShowProfile(false)
        } else {
            setShowProfile(true)
        }
    }

    const ProfileDash = () =>
    <div className={`w-full transition-all ${ShowProfile ? 'h-auto' : 'h-[7rem]'} overflow-hidden shadow-md rounded-md`}>
        <div className={`relative w-full rounded-t-md h-24 bg-neutral-900 mt-4 px-8 flex justify-top items-center`}>
            <p className={`h-auto flex justify-top items-center text-white text-3xl ${roboto.className}`}>Profile</p>
            <div onClick={() => checkProfileTrue()} className={`${roboto.className} hover:cursor-pointer hover:bg-opacity-90 absolute right-8 h-14 w-24 rounded-md bg-amber-400 flex justify-center items-center`}>
                <p className={`${roboto.className} text-xl`}>{ShowProfile ? 'Close' : 'Open'}</p>
            </div>
        </div>
        <div className="bg-neutral-800 w-full h-auto">
            <p className={`text-neutral-900 bg-amber-400 text-3xl px-2 ${roboto.className} px-8 py-4`}>Workout Information</p>
            <div className="flex justify-center items-center py-2 px-6 flex-wrap w-full bg-neutral-900 gap-6 py-6">
                <div className="bg-neutral-800 grow border-[.01rem] rounded-md border-white p-6 h-auto">
                    <p className={`h-auto flex justify-top items-center text-amber-400 text-3xl ${roboto.className}`}>Experience</p>
                    <p className={`h-auto flex justify-top items-center text-white text-7xl mt-3 ${koulen.className}`}>{UserObj.workout_experience.exp}</p>
                </div>
                <div className="bg-neutral-800 grow border-[.01rem] rounded-md border-white p-6 h-auto">
                    <p className={`h-auto flex justify-top items-center text-amber-400 text-3xl ${roboto.className}`}>Emphasis</p>
                    <p className={`h-auto flex justify-top items-center text-white text-7xl mt-3 ${koulen.className}`}>{UserObj.workout_emphasis}</p>
                </div>
                <div className="bg-neutral-800 grow border-[.01rem] rounded-md border-white p-6 h-auto">
                    <p className={`h-auto flex justify-top items-center text-amber-400 text-3xl ${roboto.className}`}>Workouts Per Week</p>
                    <p className={`h-auto flex justify-top items-center text-white text-7xl mt-3 ${koulen.className}`}>{UserObj.workouts_week}</p>
                </div>
                <div className="bg-neutral-800 grow border-[.01rem] rounded-md border-white p-6 h-auto">
                    <p className={`h-auto flex justify-top items-center text-amber-400 text-3xl ${roboto.className}`}>Workout Length</p>
                    <p className={`h-auto flex justify-top items-center text-white text-7xl mt-3 ${koulen.className}`}>
                        {UserObj.workout_length.hours > 0 ? `${UserObj.workout_length.hours}` : null}
                        {UserObj.workout_length.hours === 1 ? <span className={`${roboto.className} text-3xl ml-2 mt-5`}>hour</span> : null}
                        {UserObj.workout_length.hours === 2 ? <span className={`${roboto.className} text-3xl ml-2 mt-5`}>hours</span> : null}
                        {UserObj.workout_length.minutes === 0 ? null : `${UserObj.workout_length.minutes}`}
                        {UserObj.workout_length.minutes === 0 ? null : <span className={`${roboto.className} text-3xl ml-2 mt-5`}>minutes</span>}
                    </p>
                </div>
                <div className="bg-neutral-800 grow border-[.01rem] rounded-md border-white p-6 h-auto">
                    <p className={`h-auto flex justify-top items-center text-white text-3xl ${roboto.className}`}>Equipment</p>
                    <div className="flex flex-wrap justify-top mt-6 items-center gap-6">
                        {returnArr(UserObj.workout_equipment).map((equip, id) => 
                            <div className={`shrink p-6 border-2 border-amber-400 rounded-md text-3xl text-white ${roboto.className}`} key={id}>{equip}</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-neutral-900 w-full pb-6 h-auto rounded-b-md">
            <p className={`text-neutral-900 bg-amber-400 h-full text-3xl px-2 py-4 ${roboto.className} px-8`}>Cooking Information</p>
            <div className="flex justify-top items-center py-2 px-6 flex-wrap w-full gap-6 mt-4">
                <div className="bg-neutral-800 shrink border-[.01rem] rounded-md border-white px-10 py-6 h-[10.5rem]">
                    <p className={`h-auto flex justify-top items-center text-amber-400 text-3xl ${roboto.className}`}>Experience</p>
                    <p className={`h-auto flex justify-top items-center text-white text-7xl mt-3 ${koulen.className}`}>{UserObj.cooking_experience.exp}</p>
                </div>
                <div className="bg-neutral-800 grow border-[.01rem] rounded-md border-white p-6 h-[10.5rem]">
                    <p className={`h-auto flex justify-top items-center text-amber-400 text-3xl ${roboto.className}`}>Foods To Avoid</p>
                    <div className="flex flex-wrap justify-top mt-6 items-center gap-6">
                        {returnArr(UserObj.avoid_food).map((equip, id) => 
                            <div className={`shrink text-3xl text-white flex ${roboto.className}`} key={id}>
                                <div className="bg-amber-400 h-19 w-[.1rem] mr-6" />
                                <p>{equip}</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className="bg-neutral-800 grow border-[.01rem] rounded-md border-white p-6 h-auto">
                    <p className={`h-auto flex justify-top items-center text-white text-3xl ${roboto.className}`}>Equipment</p>
                    <div className="flex flex-wrap justify-top mt-6 items-center gap-6">
                        {returnArr(UserObj.cooking_equipment).map((equip, id) => 
                            <div className={`shrink p-6 border-2 border-amber-400 rounded-md text-3xl text-white ${roboto.className}`} key={id}>{equip}</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </div>

    return(
        <div className="relative z-30 w-full h-auto bg-neutral-300 bg-opacity-[80%] shadow-md max-w-[100rem] mx-auto pb-10 p-6 md:pt-6">
            <p className={`text-white text-5xl tracking-[.1rem] bg-neutral-500 rounded-md border-2 border-neutral-900 shadow-md mb-4 pt-6 pb-5 px-2 ${koulen.className} px-8`}>Welcome, <span className="text-amber-400">{UserObj.first_name}</span></p>
            <div className="bg-neutral-900 w-full overflow-hidden py-6 h-auto rounded-md">
                <p className={`text-white text-3xl px-2 mb-3 px-8 ${roboto.className}`}>Goal: <span className={`text-amber-400 ${roboto.className}`}>{UserObj.personal_goal}</span></p>
                <div className="flex justify-center items-center py-2 px-6 flex-wrap w-full gap-6">
                    <div className="grow border-[.01rem] px-8 rounded-md border-amber-400 bg-neutral-800 pt-6 h-[16rem]">
                        <p className={`h-2/3 flex justify-center items-center text-white text-[12rem] ${koulen.className}`}>{UserObj.age}</p>
                        <p className={`h-1/3 flex justify-center items-center text-white text-4xl ${roboto.className}`}>Age</p>
                    </div>
                    <div className="grow border-[.01rem] px-8 rounded-md border-amber-400 bg-neutral-800 pt-6 h-[16rem]">
                        <p className={`h-2/3 flex justify-center items-center text-white text-[12rem] ${koulen.className}`}>{UserObj.height.feet}<span className={`${roboto.className} text-[8rem] mb-10 mr-2`}>&#39;</span>{UserObj.height.inches}<span className={`${roboto.className} text-[8rem] mb-10`}>&#34;</span></p>
                        <p className={`h-1/3 flex justify-center items-center text-white text-4xl ${roboto.className}`}>Height</p>
                    </div>
                    <div className="grow border-[.01rem] px-8 rounded-md border-amber-400 bg-neutral-800 pt-6 h-[16rem]">
                        <p className={`h-2/3 flex justify-center items-center text-white text-[12rem] ${koulen.className}`}>{UserObj.weight}<span className={`${roboto.className} text-4xl mt-20 ml-2`}>pds.</span></p>
                        <p className={`h-1/3 flex justify-center items-center text-white text-4xl ${roboto.className}`}>Weight</p>
                    </div>
                </div>
            </div>
            <MealPlan />
            <WorkoutPlan />
            <ProfileDash />
            <div onClick={SignOut} className={`flex justify-center items-center text-2xl hover:bg-opacity-90 hover:cursor-pointer bg-amber-400 w-full ${roboto.className} p-6 h-20 rounded-md mt-4`}>
                <p>Sign Out</p>
            </div>
        </div>
    )
}