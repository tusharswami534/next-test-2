import React from "react";

const Todo = () => {
  return (
    <div className="m-8 font-sans">
      <h2 className="text-2xl mb-6">Form</h2>
      <form
        className="max-w-md mx-auto flex justify-center items-center flex-col w-full"
        id="form"
      >
        <div className="mb-4 w-full">
          <label htmlFor="first-name" className="block mb-2">
            First Name
          </label>
          <input
            type="text"
            id="first-name"
            name="first-name"
            placeholder="Enter your first name"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4 w-full">
          <label htmlFor="email" className="block  mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4 w-full">
          <label htmlFor="phone" className="block mb-2">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4 w-full">
          <label htmlFor="password" className="block mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4 w-full">
          <label htmlFor="confirm-password" className="block mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 bg-blue mx-auto text-white rounded"
        >
          Submit
        </button>
      </form>

      <div className="mt-8">
        <h3 className="text-xl mb-4 w-full">Submitted Data</h3>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">
                First Name
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Email
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Phone
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Password
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>{/* Data rows will go here */}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Todo;
