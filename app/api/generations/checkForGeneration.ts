import { UUID } from "crypto";
import supabase from "../supabase/supabaseClient";

export const checkForGeneration = async (user_val: UUID) => {

    interface MyType {
        test: boolean;
        info: any;
      }
  
    let returnObj: MyType = {
        "test": false,
        "info": '',
    }

    const { data, error } = await supabase
        .from('current_generations')
        .select('generation_obj, created_at')
        .eq('id', user_val)
    
        if(error) {
            returnObj = {
                "test": false,
                "info": error
            }
        } else {
            returnObj = {
                "test":true,
                "info": data
            }
        }
    
    return returnObj
}