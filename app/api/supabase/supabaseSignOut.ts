import supabase from "./supabaseClient";

export const signUserOut = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) {
        return false
    } else {
        return true
    }
}