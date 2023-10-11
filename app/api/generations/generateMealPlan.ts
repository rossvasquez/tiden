import supabase from "../supabase/supabaseClient";

import { API } from 'aws-amplify'

export const generateMealPlan = () => {

    let event = {
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

    async function sendData(event: any) {
      const apiUrl = 'https://jo4y73shkkhe2xs6yab2pwoqvy0bytrf.lambda-url.us-east-2.on.aws/';
    
      try {
        // Construct the fetch options
        const fetchOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // Add any other headers here
          },
          body: event, // Convert the event object to a string
        };
    
        // Perform the fetch operation
        const response = await fetch(apiUrl, fetchOptions);
    
        // Check if the response is ok (status 200-299)
        if (!response.ok) {
          throw new Error('Network response was not ok: ' + response.statusText);
        }
    
        // Parse and log the response body
        const data = await response.json();
        console.log('Response data:', data);
      } catch (error) {
        console.error('Fetch error: ', error);
      }
    }
    
    sendData(event);
}