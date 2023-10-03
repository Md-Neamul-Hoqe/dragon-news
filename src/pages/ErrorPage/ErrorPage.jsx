import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen space-y-5'>
            <h1 className='text-5xl'>Oops!!</h1>
            <p className='font-semibold text-xl'>Sorry! Not Found. Coming Soon.</p>
            <Link className='btn btn-success' to="/">Go to home page</Link>
        </div>
    );
};

export default ErrorPage;