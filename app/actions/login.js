"use server"

import { createClient } from "../supabase/server";

export async function login(formdata) {
  const supabase = await createClient();
  const email = formdata.get("email");
  const password = formdata.get("password");

  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  console.log(data)
  console.log(error)
}
