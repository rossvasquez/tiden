import supabase from "./supabaseClient";

export const logUserIn = async (email: string, password: string) => {

    async function getProfileInfo(user_val: any) {
        const { data, error } = await supabase
            .from('profile_setup')
            .select('*')
            .eq('id', user_val)
        if (error) {
            return {
                "test": false,
                "info": error
            }
        } else {
            return {
                "test": true,
                "info": data[0]
            }
        }
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })
    if (error) {
        return {
            "test": false,
            "info": error
        }
    } else {
        const response = await getProfileInfo(data.user.id)
        return response
    }
    

}