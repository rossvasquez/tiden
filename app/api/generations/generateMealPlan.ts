import supabase from "../supabase/supabaseClient";

import { API } from 'aws-amplify'

export const generateMealPlan = async (UserObj: any) => {

    const parseArr = async (arrString: string) => {
      let parsedArr = JSON.parse(arrString)
      let returnString: string = ''
      let arrayStepper: number = 1
      parsedArr.forEach((item: string) => {
        if((arrayStepper) === parsedArr.length) {
          returnString += `${item}`
        } else {
          returnString += `${item}, `
          arrayStepper++
        }
      })
      return returnString
    }

    const userData = {
        "age": UserObj.age,
        "height": UserObj.height,
        "weight": UserObj.weight,
        "cooking_experience": UserObj.cooking_experience,
        "cooking_equipment": await parseArr(UserObj.cooking_equipment),
        "avoid_food": await parseArr(UserObj.avoid_food),
        "personal_goal": UserObj.personal_goal
      }

    interface MyType {
      test: boolean;
      info: any;
    }

    let returnObj: MyType = {
        "test": false,
        "info": '',
    }

    const apiUrl = 'https://ilgcyoycvkkh6gupsjxgwla5ju0sfsvz.lambda-url.us-east-2.on.aws/';

    try {
      // Construct the fetch options
      const fetchOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any other headers here
        },
        body: JSON.stringify(userData), // Convert the event object to a string
      };

      // Perform the fetch operation
      const response = await fetch(apiUrl, fetchOptions);

      // Check if the response is ok (status 200-299)
      if (!response.ok) {
        returnObj = {
          "test": false,
          "info": response.statusText
        }
      } else {
          const data = await response.json();
          returnObj = {
              "test": true,
              "info": data
          }
          console.log(returnObj)
      }
    } catch (error) {
      returnObj = {
          "test": false,
          "info": error
      }
    }

    const { error } = await supabase
        .from('current_generations')
        .insert({generation_obj: JSON.parse(returnObj.info)})
      if (error) {
        returnObj = {
          "test": false,
          "info": error
        }
      } else {
        returnObj = {
          "test": true,
          "info": 'success m8'
        }
      }

    return returnObj
}