import { Link } from 'react-router-dom';

function PageError() {
  return (
    <div className="h-screen flex justify-center items-center bg-slate-300">
      <div className="bg-white shadow-md w-4/5 p-5 rounded-md flex flex-col items-center">
        <h1 className="text-center text-xl font-semibold mb-5">Page Not Pound</h1>
        <p className="whitespace-break-spaces mb-7 text-sm">
          Looks like you've followed a broken link or entered a URL that doesn't exist on this site.
        </p>
        <Link to="/" className="w-max px-6 py-1 text-sm bg-slate-100 rounded-md">Back to our site</Link>
      </div>
    </div>
  );
}

export default PageError;
