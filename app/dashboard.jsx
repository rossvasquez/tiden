import { roboto, koulen } from "@/assets/styles/fonts"

export default function Dashboard({UserObj, SignOut}) {

    const returnArr = (textArr) => {
        return JSON.parse(textArr)
    }

    return(
        <div className="relative z-30 w-full h-auto bg-neutral-300 bg-opacity-[80%] shadow-md max-w-[100rem] mx-auto pb-10 p-6 md:pt-6">
            <div className="bg-neutral-800 w-full p-6 h-auto rounded-md">
                <p className={`text-white text-3xl px-2 ${roboto.className}`}>Welcome, <span className="text-amber-400">{UserObj.first_name}</span></p>
                <div className="w-full h-[.01rem] my-4 bg-white"/>
                <p className={`text-white text-3xl px-2 mb-3 ${roboto.className}`}>Goal: <span className={`text-amber-400 ${roboto.className}`}>{UserObj.personal_goal}</span></p>
                <div className="flex justify-center items-center py-2 flex-wrap w-full gap-6">
                    <div className="grow border-[.01rem] px-8 rounded-md border-white pt-6 h-[16rem]">
                        <p className={`h-2/3 flex justify-center items-center text-white text-[12rem] ${koulen.className}`}>{UserObj.age}</p>
                        <p className={`h-1/3 flex justify-center items-center text-white text-4xl ${roboto.className}`}>Age</p>
                    </div>
                    <div className="grow border-[.01rem] px-8 rounded-md border-white pt-6 h-[16rem]">
                        <p className={`h-2/3 flex justify-center items-center text-white text-[12rem] ${koulen.className}`}>{UserObj.height.feet}<span className={`${roboto.className} text-[8rem] mb-10 mr-2`}>'</span>{UserObj.height.inches}<span className={`${roboto.className} text-[8rem] mb-10`}>"</span></p>
                        <p className={`h-1/3 flex justify-center items-center text-white text-4xl ${roboto.className}`}>Height</p>
                    </div>
                    <div className="grow border-[.01rem] px-8 rounded-md border-white pt-6 h-[16rem]">
                        <p className={`h-2/3 flex justify-center items-center text-white text-[12rem] ${koulen.className}`}>{UserObj.weight}<span className={`${roboto.className} text-4xl mt-20 ml-2`}>pds.</span></p>
                        <p className={`h-1/3 flex justify-center items-center text-white text-4xl ${roboto.className}`}>Weight</p>
                    </div>
                </div>
            </div>
            <div className="bg-neutral-800 w-full p-6 h-auto rounded-md mt-6">
                <p className={`text-white text-3xl px-2 ${roboto.className}`}>Workout Information</p>
                <div className="w-full h-[.01rem] my-4 bg-white"/>
                <div className="flex justify-center items-center py-2 flex-wrap w-full gap-6">
                    <div className="grow border-[.01rem] rounded-md border-white p-6 h-auto">
                        <p className={`h-auto flex justify-top items-center text-amber-400 text-3xl ${roboto.className}`}>Experience</p>
                        <p className={`h-auto flex justify-top items-center text-white text-7xl mt-3 ${koulen.className}`}>{UserObj.workout_experience.exp}</p>
                    </div>
                    <div className="grow border-[.01rem] rounded-md border-white p-6 h-auto">
                        <p className={`h-auto flex justify-top items-center text-amber-400 text-3xl ${roboto.className}`}>Emphasis</p>
                        <p className={`h-auto flex justify-top items-center text-white text-7xl mt-3 ${koulen.className}`}>{UserObj.workout_emphasis}</p>
                    </div>
                    <div className="grow border-[.01rem] rounded-md border-white p-6 h-auto">
                        <p className={`h-auto flex justify-top items-center text-amber-400 text-3xl ${roboto.className}`}>Workouts Per Week</p>
                        <p className={`h-auto flex justify-top items-center text-white text-7xl mt-3 ${koulen.className}`}>{UserObj.workouts_week}</p>
                    </div>
                    <div className="grow border-[.01rem] rounded-md border-white p-6 h-auto">
                        <p className={`h-auto flex justify-top items-center text-amber-400 text-3xl ${roboto.className}`}>Workout Length</p>
                        <p className={`h-auto flex justify-top items-center text-white text-7xl mt-3 ${koulen.className}`}>
                            {UserObj.workout_length.hours > 0 ? `${UserObj.workout_length.hours}` : 'null'}
                            {UserObj.workout_length.hours === 1 ? <span className={`${roboto.className} text-3xl ml-2 mt-5`}>hour</span> : null}
                            {UserObj.workout_length.hours === 2 ? <span className={`${roboto.className} text-3xl ml-2 mt-5`}>hours</span> : null}
                            {UserObj.workout_length.minutes === 0 ? null : `${UserObj.workout_length.minutes}`}
                            {UserObj.workout_length.minutes === 0 ? null : <span className={`${roboto.className} text-3xl ml-2 mt-5`}>minutes</span>}
                        </p>
                    </div>
                    <div className="grow border-[.01rem] rounded-md border-white p-6 h-auto">
                        <p className={`h-auto flex justify-top items-center text-white text-3xl ${roboto.className}`}>Equipment</p>
                        <div className="flex flex-wrap justify-top mt-6 items-center gap-6">
                            {returnArr(UserObj.workout_equipment).map((equip, id) => 
                                <div className={`shrink p-6 border-2 border-amber-400 rounded-md text-3xl text-white ${roboto.className}`} id={id}>{equip}</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-neutral-800 w-full p-6 h-auto rounded-md mt-6">
                <p className={`text-white text-3xl px-2 ${roboto.className}`}>Cooking Information</p>
                <div className="w-full h-[.01rem] my-4 bg-white"/>
                <div className="flex justify-top items-center py-2 flex-wrap w-full gap-6">
                    <div className="shrink border-[.01rem] rounded-md border-white px-10 py-6 h-[10.5rem]">
                        <p className={`h-auto flex justify-top items-center text-amber-400 text-3xl ${roboto.className}`}>Experience</p>
                        <p className={`h-auto flex justify-top items-center text-white text-7xl mt-3 ${koulen.className}`}>{UserObj.cooking_experience.exp}</p>
                    </div>
                    <div className="grow border-[.01rem] rounded-md border-white p-6 h-[10.5rem]">
                        <p className={`h-auto flex justify-top items-center text-amber-400 text-3xl ${roboto.className}`}>Foods To Avoid</p>
                        <div className="flex flex-wrap justify-top mt-6 items-center gap-6">
                            {returnArr(UserObj.avoid_food).map((equip, id) => 
                                <div className={`shrink text-3xl text-white flex ${roboto.className}`} id={id}>
                                    <div className="bg-amber-400 h-19 w-[.1rem] mr-6" />
                                    <p>{equip}</p>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="grow border-[.01rem] rounded-md border-white p-6 h-auto">
                        <p className={`h-auto flex justify-top items-center text-white text-3xl ${roboto.className}`}>Equipment</p>
                        <div className="flex flex-wrap justify-top mt-6 items-center gap-6">
                            {returnArr(UserObj.cooking_equipment).map((equip, id) => 
                                <div className={`shrink p-6 border-2 border-amber-400 rounded-md text-3xl text-white ${roboto.className}`} id={id}>{equip}</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={SignOut} className={`flex justify-center items-center text-2xl hover:bg-opacity-90 hover:cursor-pointer bg-amber-400 w-full ${roboto.className} p-6 h-20 rounded-md mt-6`}>
                <p>Sign Out</p>
            </div>
        </div>
    )
}