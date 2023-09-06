import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
    <div className="relative mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow m-10 p-4">
      <form action="" className="space-y-5">
        <div>
          <label
            htmlFor="example1"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="example1"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
            placeholder="you@email.com"
          />
        </div>
        <div>
          <label
            htmlFor="example2"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="example2"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
            placeholder="Password"
          />
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="example3"
            className="h-4 w-4 rounded border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400"
          />
          <label htmlFor="example3" className="text-sm font-medium text-gray-700">
            Remember me
          </label>
        </div>
        <button
          type="button"
          className="rounded-lg border border-primary-500 bg-primary-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300"
        >
          Submit
        </button>
      </form>
      <button type="button" className="rounded-lg border border-violet-500 bg-violet-500 px-4 py-2 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-violet-700 hover:bg-violet-700 focus:ring focus:ring-violet-200 disabled:cursor-not-allowed disabled:border-violet-300 disabled:bg-violet-300 mt-5">
        <Link to="/dashboard">Go to Dashboard</Link>
      </button>
    </div>
  </>
  );
}
