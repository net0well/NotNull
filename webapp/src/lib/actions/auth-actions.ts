'use server'

import { fetchClient } from "../fetchClient"

export async function testAuth(){
    return fetchClient<string>(`/test/auth`, 'GET')
}