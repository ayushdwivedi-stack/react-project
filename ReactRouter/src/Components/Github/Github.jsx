import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gray-800 text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-6">GitHub Profile</h1>

      <img
        src={data.avatar_url}
        alt="GitHub Avatar"
        className="w-48 h-48 rounded-full border-4 border-white mb-6"
      />

      <div className="bg-gray-700 p-6 rounded-xl shadow-lg w-full max-w-md text-center">
        <h2 className="text-3xl font-semibold mb-4">{data.name}</h2>

        <p className="text-xl mb-2">
          <span className="font-bold">Username:</span> {data.login}
        </p>

        <p className="text-xl mb-2">
          <span className="font-bold">Followers:</span> {data.followers}
        </p>

        <p className="text-xl mb-2">
          <span className="font-bold">Following:</span> {data.following}
        </p>

        <p className="text-xl mb-2">
          <span className="font-bold">Public Repositories:</span>{" "}
          {data.public_repos}
        </p>

        <a
          href={data.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-5 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
        >
          View GitHub Profile
        </a>
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch(
    "https://api.github.com/users/ayushdwivedi-stack"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch GitHub data");
  }

  return response.json();
};