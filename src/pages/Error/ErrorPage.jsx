const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="p-8 bg-white shadow-lg rounded-lg">
                <h1 className="text-3xl font-semibold text-gray-800 mb-4">Oops! Something went wrong.</h1>
                <p className="text-gray-600 mb-6">The page you are looking for might have been removed or does not exist.</p>
            </div>
        </div>
    );
};

export default ErrorPage;