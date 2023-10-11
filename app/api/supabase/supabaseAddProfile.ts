import supabase from "./supabaseClient";

export const addProfileInfo = async (profile: any) => {
    const { error } = await supabase
        .from('profile_setup')
        .insert({
            first_name: profile.first_name,
            age: profile.age, 
            height: profile.height, 
            weight: profile.weight, 
            workout_experience: profile.workout_experience, 
            workouts_week: profile.workouts_week,
            workout_length: profile.workout_length,
            workout_equipment: JSON.stringify(profile.workout_equipment),
            workout_emphasis: profile.workout_emphasis,
            cooking_experience: profile.cooking_experience,
            cooking_equipment: JSON.stringify(profile.cooking_equipment),
            avoid_food: JSON.stringify(profile.avoid_food),
            personal_goal: profile.personal_goal
        })
    if (error) {
        return {
            "test": false,
            "info": error
        }
    } else {
        return {
            "test": true,
            "info": null,
        }
    }
    
}