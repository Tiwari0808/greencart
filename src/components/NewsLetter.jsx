const NewsLetter = () => {
    return (
        <div className="mt-20 pb-16 px-4">
            {/* CONTENT */}
            <div className="w-full max-w-3xl mx-auto text-center">
                
                <p className="text-primary-dull font-medium">Get updated</p>

                <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl text-black mt-2 leading-snug">
                    Subscribe to our newsletter & get the latest news
                </h1>

                {/* INPUT BOX */}
                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-2 mt-8 w-full justify-center">

                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className="border border-slate-400 focus:border-primary outline-none px-4 py-3 rounded-full w-full sm:w-80 text-gray-600"
                    />

                    <button className="bg-primary text-white px-6 py-3 rounded-full w-full sm:w-auto">
                        Subscribe now
                    </button>

                </div>

            </div>
        </div>
    );
};

export default NewsLetter;
