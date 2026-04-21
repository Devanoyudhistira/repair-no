

import { Wrench } from "react-bootstrap-icons";
import { login } from "../actions/login";

export default async function Page() {
    return (
        <main className="w-full px-6 flex flex-col items-center" >
            <div className="bg-gray-700 mt-10 p-4" >
                <Wrench color="white" size={40} />
            </div>
            <h1 className="text-3xl capitalize mt-4 font-extrabold" > Repair-no </h1>
            <form action={login} className="w-full h-70 mt-4 bg-gray-50 shadow-md shadow-black/50 flex flex-col items-center justify-center" >
                <label htmlFor="email">
                    <h1 className="text-xl font-medium" > Email </h1>
                    <input className="outline-0 px-2 py-2 text-xl font-semibold ring-0 border bg-gray-300 border-gray-500" placeholder="email anda" type="email" name="email" id="email" />
                </label>
                <label htmlFor="password">
                    <h1 className="text-xl font-medium" > Email </h1>
                    <input className="outline-0 px-2 py-2 text-xl font-semibold ring-0 border bg-gray-300 border-gray-500" placeholder="password" type="password" name="password" id="password" />
                </label>
                <button className="w-[80%] mt-8 text-2xl text-gray-50 font-extrabold py-2 text-center bg-gray-800" type="submit">Login</button>
            </form>
        </main>
    )
}