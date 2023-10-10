import supabase from "./supabaseClient";

export const signUpUser = async (email: string, password: string, first_name: string) => {
    let test = false
    let errorMes: any
    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      })
    if (error) {
        errorMes = error
    } else {
        const { error } = await supabase
            .from('users')
            .insert({first_name: first_name, email: email})
        if (error) {
            console.log(error)
        } else {
            test = true
        }
    }
    console.log(errorMes)
    if (test) {
        return {
            'testy': true,
            'info': data
        }
    } else {
        return {
            'testy': false,
            'info': errorMes
        }
    }
}

