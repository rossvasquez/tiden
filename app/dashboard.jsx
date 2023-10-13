'use client'

import { roboto, koulen } from "@/assets/styles/fonts"

import { useState, useEffect } from "react"

import { generateMealPlan } from "./api/generations/generateMealPlan"
import { checkForGeneration } from "./api/generations/checkForGeneration"

export default function Dashboard({UserObj, SignOut}) {

    const returnArr = (textArr) => {
        return JSON.parse(textArr)
    }

    const [GenerateMealState, setGenerateMealState] = useState(0)
    const [GenerateMeal, setGenerateMeal] = useState([])
    const [CheckBase, setCheckBase] = useState(false)

    const handleMealPlanGen = async () => {
        setGenerateMealState(1)
        const response = await generateMealPlan(UserObj)
        if (response.test) {
            setCheckBase(true)
        } else {
            console.log(response.info)
        }
        
    }

    useEffect(() => {
        const getIt = async () => {
            const returnVal = await checkForGeneration(UserObj.id)
            if (returnVal.test) {
                setGenerateMeal(returnVal.info.generation_obj)
                setGenerateMealState(2)
                console.log(returnVal.info)
            } else {
                setGenerateMeal(0)
                console.log(returnVal)
            }
        }
        getIt()
      }, [CheckBase]);

    const [MealGenState, setMealGenState] = useState({
        "tab": 0,
        "breakfast": 0,
        "lunch": 0,
        "dinner": 0,
        "snack": 0
    })

    const changeTab = (tab) => {
        let tempObj = {...MealGenState}
        tempObj.tab = tab
        setMealGenState(tempObj)
    }

    const [MealPlanDay, setMealPlanDay] = useState(7)

    const DailyMeal = ({MealData}) =>
    <div className="p-6 w-full">
    <div className="relative flex items-center mb-4 py-2">
        <p className={`${koulen.className} text-white tracking-[.1rem] text-5xl pl-2`}>Day {MealPlanDay + 1}</p>
        <div onClick={() => setMealPlanDay(7)} className={`absolute right-2 w-20 flex text-xl items-center justify-center h-14 hover:text-white hover:cursor-pointer bg-amber-400 rounded-md ${roboto.className}`}>
            Back
        </div>
    </div>
    <div className="w-full h-40 md:h-20 bg-white flex flex-wrap rounded-md overflow-hidden">
        <div onClick={() => changeTab(0)} className={`w-1/2 md:w-1/4 ${roboto.className} text-2xl ${MealGenState.tab === 0 ? 'bg-amber-400' : 'hover:bg-neutral-200 hover:cursor-pointer'} flex focus:text-white justify-center items-center border-r-2 border-b-2 md:border-b-0 border-neutral-900`}>
            Breakfast
        </div>
        <div onClick={() => changeTab(1)} className={`w-1/2 md:w-1/4 ${roboto.className} text-2xl ${MealGenState.tab === 1 ? 'bg-amber-400' : 'hover:bg-neutral-200 hover:cursor-pointer'} flex focus:text-white justify-center items-center border-b-2 md:border-b-0 md:border-r-2 border-neutral-900`}>
            Lunch
        </div>
        <div onClick={() => changeTab(2)} className={`w-1/2 md:w-1/4 ${roboto.className} text-2xl ${MealGenState.tab === 2 ? 'bg-amber-400' : 'hover:bg-neutral-200 hover:cursor-pointer'} flex focus:text-white justify-center items-center border-r-2 border-neutral-900`}>
            Dinner
        </div>
        <div onClick={() => changeTab(3)} className={`w-1/2 md:w-1/4 ${roboto.className} text-2xl ${MealGenState.tab === 3 ? 'bg-amber-400' : 'hover:bg-neutral-200 hover:cursor-pointer'} flex focus:text-white justify-center items-center`}>
            Snack
        </div>
    </div>
    <div className="flex justify-center items-top md:p-6">
        {MealGenState.tab === 0 ?
        <div className={`${roboto.className} flex-col grow text-3xl max-w-5xl my-8 text-white`}>
            <p className="capitalize text-4xl">{MealData.breakfast.name}</p>
            <div className="w-full h-[.1rem] mt-5 mb-6 bg-amber-400" />
            <div className="w-max py-3 mb-3 px-6 rounded-md text-neutral-800 bg-neutral-200">
                Recipe
            </div>
            {MealData.breakfast.recipe.map((item, id) =>
                <p className="pl-2 capitalize my-2" key={id}><span className="text-amber-400">{id + 1}. </span>{item}</p>
                )}
            <div className="w-max py-3 mb-3 mt-6 px-6 rounded-md text-neutral-800 bg-neutral-200">
                Ingredients
            </div>
            {MealData.breakfast.ingredients.map((item, id) =>
                <p className="pl-2 capitalize my-2" key={id}><span className="text-amber-400">- </span>{item}</p>
                )}
        </div>
        : null}
        {MealGenState.tab === 1 ?
        <div className={`${roboto.className} flex-col grow text-3xl max-w-5xl my-8 text-white`}>
            <p className="capitalize text-4xl">{MealData.lunch.name}</p>
            <div className="w-full h-[.1rem] mt-5 mb-6 bg-amber-400" />
            <div className="w-max py-3 mb-3 px-6 rounded-md text-neutral-800 bg-neutral-200">
                Recipe
            </div>
            {MealData.lunch.recipe.map((item, id) =>
                <p className="pl-2 capitalize my-2" key={id}><span className="text-amber-400">{id + 1}. </span>{item}</p>
                )}
            <div className="w-max py-3 mb-3 mt-6 px-6 rounded-md text-neutral-800 bg-neutral-200">
                Ingredients
            </div>
            {MealData.lunch.ingredients.map((item, id) =>
                <p className="pl-2 capitalize my-2" key={id}><span className="text-amber-400">- </span>{item}</p>
                )}
        </div>
        : null}
        {MealGenState.tab === 2 ?
        <div className={`${roboto.className} flex-col grow text-3xl max-w-5xl my-8 text-white`}>
            <p className="capitalize text-4xl">{MealData.dinner.name}</p>
            <div className="w-full h-[.1rem] mt-5 mb-6 bg-amber-400" />
            <div className="w-max py-3 mb-3 px-6 rounded-md text-neutral-800 bg-neutral-200">
                Recipe
            </div>
            {MealData.dinner.recipe.map((item, id) =>
                <p className="pl-2 capitalize my-2" key={id}><span className="text-amber-400">{id + 1}. </span>{item}</p>
                )}
            <div className="w-max py-3 mb-3 mt-6 px-6 rounded-md text-neutral-800 bg-neutral-200">
                Ingredients
            </div>
            {MealData.dinner.ingredients.map((item, id) =>
                <p className="pl-2 capitalize my-2" key={id}><span className="text-amber-400">- </span>{item}</p>
                )}
        </div>
        : null}
        {MealGenState.tab === 3 ?
        <div className={`${roboto.className} flex-col w-full text-3xl max-w-5xl my-8 text-white`}>
            <p className="capitalize text-4xl">{MealData.snack.name}</p>
            <div className="w-full h-[.1rem] mt-5 mb-6 bg-amber-400" />
            <div className="w-max py-3 mb-3 px-6 rounded-md text-neutral-800 bg-neutral-200">
                Recipe
            </div>
            {MealData.snack.recipe.map((item, id) =>
                <p className="pl-2 capitalize my-2" key={id}><span className="text-amber-400">{id + 1}. </span>{item}</p>
                )}
            <div className="w-max py-3 mb-3 mt-6 px-6 rounded-md text-neutral-800 bg-neutral-200">
                Ingredients
            </div>
            {MealData.snack.ingredients.map((item, id) =>
                <p className="pl-2 capitalize my-2" key={id}><span className="text-amber-400">- </span>{item}</p>
                )}
        </div>
        : null}
    </div>
    </div>

    const MealMenu = () =>
    <>
    <p className={`${roboto.className} mt-10 mb-4 text-3xl text-center px-2 text-white`}>Select a day from your meal plan.</p>
    <div className={`${koulen.className} flex flex-wrap justify-center w-full items-center p-6 mb-4 gap-6`}>
    {GenerateMeal.map((item, id) =>
        <div onClick={() => setMealPlanDay(id)} className="hover:text-amber-400 hover:cursor-pointer text-white bg-neutral-900 tracking-[.1rem] text-4xl h-20 px-10 shrink flex justify-center items-center rounded-md">
            Day {id + 1}
        </div>
        )}
    </div>
    </>

    const MealPlanInternal = () =>
    <>
    {MealPlanDay === 7 ?
    <MealMenu />
    :
    <DailyMeal MealData={GenerateMeal[MealPlanDay]} />
    }
    </>


    const MealPlan = () =>
    <div className="w-full md:rounded-md bg-neutral-900 shadow-md mt-4 min-h-[18rem]">
        <p className={`${roboto.className} text-white px-8 py-4 text-3xl border-b-2 border-amber-400`}>Meal Plan</p>
        <div className={`flex justify-center w-full ${GenerateMealState === 2 ? 'h-auto' : 'h-80'} items-center p-6`}>
            <div className={`group overflow-hidden ${GenerateMealState === 0 ? 'hover:bg-neutral-600 hover:cursor-pointer' : null} rounded-md h-full w-full flex flex-col justify-center items-center border-[.1rem] border-white ${GenerateMealState === 1 ? 'bg-neutral-600' : 'bg-neutral-800'}`}>
                {GenerateMealState === 0 ?
                <div onClick={() => handleMealPlanGen()} className="flex flex-col items-center">
                    <p className={`${roboto.className} text-3xl mb-3 text-white`}>No Meal Plan</p>
                    <p className={`${roboto.className} group-hover:text-amber-400 text-xl text-white`}>Click To Generate</p>
                </div>
                : null}

                {GenerateMealState === 1 ?
                <div className="flex flex-col items-center">
                    <p className={`${roboto.className} animate-pulse text-center text-3xl mb-3 text-white`}>Generating Meal Plan...</p>
                    <p className={`${roboto.className} text-xl text-amber-400`}>This can take a few minutes</p>
                </div>
                : null}

                {GenerateMealState === 2 ?
                <MealPlanInternal />
                : null}
            </div>
        </div>
    </div>

    const WorkoutPlan = () =>
    <div className="w-full md:rounded-md bg-neutral-900 shadow-md mt-4 min-h-[18rem]">
        <p className={`${roboto.className} text-white px-8 py-4 text-3xl border-b-2 border-amber-400`}>Workout Plan</p>
        <div className="flex justify-center w-full h-80 items-center p-6">
            <div className="group hover:cursor-pointer hover:bg-neutral-600 rounded-md h-full w-full flex justify-center items-center border-[.1rem] border-white bg-neutral-800">
                <div className="flex flex-col items-center">
                    <p className={`${roboto.className} text-3xl mb-3 text-white`}>No Workout Plan</p>
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
    <div className={`w-full transition-all ${ShowProfile ? 'h-auto' : 'h-[7rem]'} overflow-hidden shadow-md md:rounded-md`}>
        <div className={`relative w-full md:rounded-t-md h-24 bg-neutral-900 mt-4 px-8 flex justify-top items-center`}>
            <p className={`h-auto flex justify-top items-center text-white text-3xl ${roboto.className}`}>Profile Settings</p>
            <div onClick={() => checkProfileTrue()} className={`${roboto.className} hover:cursor-pointer hover:bg-opacity-90 absolute right-8 h-14 w-24 rounded-md bg-amber-400 flex justify-center items-center`}>
                <p className={`${roboto.className} text-xl`}>{ShowProfile ? 'Close' : 'Open'}</p>
            </div>
        </div>
        <div className="bg-neutral-800 w-full h-auto">
            <p className={`text-neutral-900 bg-amber-400 text-3xl px-2 ${roboto.className} px-8 py-4`}>Workout Information</p>
            <div className="flex justify-center items-center py-2 px-6 flex-wrap w-full bg-neutral-900 gap-6 py-6">
                <div className="bg-neutral-800 grow border-[.1rem] rounded-md border-white p-6 h-auto">
                    <p className={`h-auto flex justify-top items-center text-amber-400 text-3xl ${roboto.className}`}>Experience</p>
                    <p className={`h-auto flex justify-top items-center text-white text-7xl mt-3 ${koulen.className}`}>{UserObj.workout_experience.exp}</p>
                </div>
                <div className="bg-neutral-800 grow border-[.1rem] rounded-md border-white p-6 h-auto">
                    <p className={`h-auto flex justify-top items-center text-amber-400 text-3xl ${roboto.className}`}>Emphasis</p>
                    <p className={`h-auto flex justify-top items-center text-white text-7xl mt-3 ${koulen.className}`}>{UserObj.workout_emphasis}</p>
                </div>
                <div className="bg-neutral-800 grow border-[.1rem] rounded-md border-white p-6 h-auto">
                    <p className={`h-auto flex justify-top items-center text-amber-400 text-3xl ${roboto.className}`}>Workouts Per Week</p>
                    <p className={`h-auto flex justify-top items-center text-white text-7xl mt-3 ${koulen.className}`}>{UserObj.workouts_week}</p>
                </div>
                <div className="bg-neutral-800 grow border-[.1rem] rounded-md border-white p-6 h-auto">
                    <p className={`h-auto flex justify-top items-center text-amber-400 text-3xl ${roboto.className}`}>Workout Length</p>
                    <p className={`h-auto flex justify-top items-center text-white text-7xl mt-3 ${koulen.className}`}>
                        {UserObj.workout_length.hours > 0 ? `${UserObj.workout_length.hours}` : null}
                        {UserObj.workout_length.hours === 1 ? <span className={`${roboto.className} text-3xl ml-2 mt-5`}>hour</span> : null}
                        {UserObj.workout_length.hours === 2 ? <span className={`${roboto.className} text-3xl ml-2 mt-5`}>hours</span> : null}
                        {UserObj.workout_length.minutes === 0 ? null : `${UserObj.workout_length.minutes}`}
                        {UserObj.workout_length.minutes === 0 ? null : <span className={`${roboto.className} text-3xl ml-2 mt-5`}>minutes</span>}
                    </p>
                </div>
                <div className="bg-neutral-800 grow border-[.1rem] rounded-md border-white p-6 h-auto">
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
                <div className="bg-neutral-800 shrink border-[.1rem] rounded-md border-white px-10 py-6 h-[10.5rem]">
                    <p className={`h-auto flex justify-top items-center text-amber-400 text-3xl ${roboto.className}`}>Experience</p>
                    <p className={`h-auto flex justify-top items-center text-white text-7xl mt-3 ${koulen.className}`}>{UserObj.cooking_experience.exp}</p>
                </div>
                <div className="bg-neutral-800 grow border-[.1rem] rounded-md border-white p-6 h-[10.5rem]">
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
                <div className="bg-neutral-800 grow border-[.1rem] rounded-md border-white p-6 h-auto">
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
        <div className="relative z-30 w-full h-auto bg-neutral-300 bg-opacity-[80%] shadow-md max-w-[100rem] mx-auto pb-10 md:p-6 pt-6">
            <p className={`text-white text-5xl tracking-[.1rem] bg-neutral-500 md:rounded-md md:border-2 border-neutral-900 shadow-md mb-4 pt-6 pb-5 px-2 ${koulen.className} px-8`}>Welcome, <span className="text-amber-400">{UserObj.first_name}</span></p>
            <div className="bg-neutral-900 w-full overflow-hidden py-6 h-auto md:rounded-md">
                <p className={`text-white text-3xl px-2 mb-3 px-8 ${roboto.className}`}>Goal: <span className={`text-amber-400 ${roboto.className}`}>{UserObj.personal_goal}</span></p>
                <div className="flex justify-center items-center py-2 sm:px-6 flex-wrap w-full gap-6">
                    <div className="grow sm:border-[.1rem] px-8 sm:rounded-md border-amber-400 bg-neutral-800 pt-8 h-[18rem]">
                        <p className={`h-2/3 flex justify-center items-center text-white text-[12rem] ${koulen.className}`}>{UserObj.age}</p>
                        <p className={`h-1/3 flex justify-center items-center text-amber-400 md:text-white text-4xl ${roboto.className}`}>Age</p>
                    </div>
                    <div className="grow sm:border-[.1rem] px-8 sm:rounded-md border-amber-400 bg-neutral-800 pt-8 h-[18rem]">
                        <p className={`h-2/3 flex justify-center items-center text-white text-[12rem] ${koulen.className}`}>{UserObj.height.feet}<span className={`${roboto.className} text-[8rem] mb-10 mr-2`}>&#39;</span>{UserObj.height.inches}<span className={`${roboto.className} text-[8rem] mb-10`}>&#34;</span></p>
                        <p className={`h-1/3 flex justify-center items-center text-amber-400 md:text-white text-4xl ${roboto.className}`}>Height</p>
                    </div>
                    <div className="grow sm:border-[.1rem] px-8 sm:rounded-md border-amber-400 bg-neutral-800 pt-8 h-[18rem]">
                        <p className={`h-2/3 flex justify-center items-center text-white text-[12rem] ${koulen.className}`}>{UserObj.weight}<span className={`${roboto.className} text-4xl mt-20 ml-2`}>pds.</span></p>
                        <p className={`h-1/3 flex justify-center items-center text-amber-400 md:text-white text-4xl ${roboto.className}`}>Weight</p>
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