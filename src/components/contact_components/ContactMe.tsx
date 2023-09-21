const ContactMe = () => {
    return (
        <div className="w-full max-w-[1040px] mx-auto backdrop-blur-[1px] rounded-md p-4 py-8">
            <h1 className={'pb-5 pl-5'}>Contact Me</h1>
            <form action="/submit-form" method="post">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-input mt-1 block w-full px-4 py-3 rounded-md"
                        placeholder="Your name"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-input mt-1 block w-full px-4 py-3 rounded-md"
                        placeholder="you@example.com"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        className="form-textarea mt-1 block w-full px-4 py-3 rounded-md"
                        placeholder="Your message"
                        rows={4}
                        required
                    ></textarea>
                </div>

                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="inline-flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-500 active:bg-blue-800 focus:outline-none focus:border-blue-800 focus:ring focus:ring-blue-200 disabled:opacity-25 transition"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactMe;