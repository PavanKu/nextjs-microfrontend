export default function NoMatch() {
    return (
    <div className="space-y-5 m-10">
        <div className="relative mx-auto max-w-[400px] overflow-hidden rounded-xl border border-secondary-50 bg-white text-sm shadow-lg">
            <div className="flex">
            <img className="h-auto w-24 object-cover" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            <div className="flex-1 p-4">
                <h4 className="pr-6 font-medium text-secondary-900">Updates have been made to your profile</h4>
                <div className="mt-1 text-secondary-500">Your team has made changes to your company profile since you last logged in.</div>
                <div className="mt-2 flex space-x-4">
                <button className="inline-block font-medium leading-loose text-secondary-500 hover:text-secondary-900">Dismiss</button>
                <button className="inline-block font-medium leading-loose text-primary-600 hover:text-primary-700">View more</button>
                </div>
            </div>
            </div>
        </div>
    </div>
    );
}