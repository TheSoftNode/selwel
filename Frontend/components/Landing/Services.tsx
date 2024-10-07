const Services = () =>
{
    return (
        <div className="bg-gray-50 py-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-center text-sky-600 mb-8">
                Our Services
            </h2>
            <p className="text-lg text-gray-700 text-center mb-12">
                Discover our comprehensive range of services designed to enhance your trading experience.
            </p>
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
                {/* Service 1 */}
                <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <h3 className="font-bold text-sky-600 text-xl mb-2">Real-Time Market Analysis</h3>
                    <p className="text-gray-600">
                        Get insights and analytics in real-time to make informed trading decisions.
                    </p>
                </div>
                {/* Service 2 */}
                <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <h3 className="font-bold text-sky-600 text-xl mb-2">Advanced Trading Tools</h3>
                    <p className="text-gray-600">
                        Utilize cutting-edge tools designed to streamline your trading experience.
                    </p>
                </div>
                {/* Service 3 */}
                <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <h3 className="font-bold text-sky-600 text-xl mb-2">24/7 Customer Support</h3>
                    <p className="text-gray-600">
                        Our dedicated support team is available around the clock to assist you.
                    </p>
                </div>
                {/* Service 4 */}
                <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <h3 className="font-bold text-sky-600 text-xl mb-2">Educational Resources</h3>
                    <p className="text-gray-600">
                        Access a wealth of resources to improve your trading knowledge and skills.
                    </p>
                </div>
                {/* Service 5 */}
                <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <h3 className="font-bold text-sky-600 text-xl mb-2">Customizable Trading Plans</h3>
                    <p className="text-gray-600">
                        Tailor your trading experience with personalized plans that fit your needs.
                    </p>
                </div>
                {/* Service 6 */}
                <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <h3 className="font-bold text-sky-600 text-xl mb-2">Secure Transactions</h3>
                    <p className="text-gray-600">
                        Experience peace of mind with our secure and reliable transaction process.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Services;
