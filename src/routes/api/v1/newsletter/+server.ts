import { error, json } from '@sveltejs/kit'
import type { RequestHandler } from './$types'

export const GET: RequestHandler = async(event) => {
    const options: ResponseInit = {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const responseData = {
        "name": "John Doe",
        "age": 32,
        "address": {
            "street": "123 Main St",
            "city": "San Francisco",
            "state": "CA",
            "zip": 94102
        },
        "email": "johndoe@example.com",
        "phone": "+1 (555) 555-5555",
        "interests": ["reading", "hiking", "traveling"],
        "isEmployed": true
        };
    const data = JSON.stringify(responseData);
    return new Response(data, options)
}

export const POST: RequestHandler = async(event) => {
    const data = await event.request.formData()
    const email = data.get('email')
    console.log(email)

    return new Response(JSON.stringify({ success: true}), {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}