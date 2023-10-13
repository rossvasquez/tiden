import supabase from "../supabase/supabaseClient";

import { API } from 'aws-amplify'

export const generateMealPlan = async () => {

    const userData = {
        "age": 24,
        "height": {
          "feet": 6,
          "inches": 4
        },
        "weight": 235,
        "cooking_experience": {
          "exp": "Intermediate",
          "level": 2
        },
        "cooking_equipment": "Oven, Stove Top, Slow Cooker, Microwave, Toaster, Blender, Frying Pan(s), Sauce Pot(s), Baking Sheet",
        "avoid_food": "Mushrooms",
        "personal_goal": "Lose Weight"
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
      }
    } catch (error) {
      returnObj = {
          "test": false,
          "info": error
      }
    }

    return returnObj
}