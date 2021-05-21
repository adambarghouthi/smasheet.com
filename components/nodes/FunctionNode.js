import { Handle } from "react-flow-renderer";

const ReplaceFunction = () => (
  <div className="flex p-5 space-x-3">
    <div>
      <label
        htmlFor="type"
        className="block text-sm font-medium text-gray-700 hidden"
      >
        Type
      </label>
      <select
        id="type"
        name="type"
        className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
        defaultValue="Canada"
      >
        <option>REPLACE</option>
        <option>ADD</option>
        <option>SUBTRACT</option>
        <option>DIVIDE</option>
        <option>MULTIPLY</option>
      </select>
    </div>
    <div>
      <label
        htmlFor="column"
        className="block text-sm font-medium text-gray-700 hidden"
      >
        Column
      </label>
      <select
        id="column"
        name="column"
        className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
        defaultValue="Canada"
      >
        <option>Col 1</option>
        <option>Col 2</option>
        <option>Col 3</option>
      </select>
    </div>
    <div className="flex items-center">
      <p>when column value is</p>
    </div>
    <div>
      <label
        htmlFor="value_1"
        className="block text-sm font-medium text-gray-700 hidden"
      >
        Value
      </label>
      <div>
        <input
          type="text"
          name="value_1"
          id="value_1"
          className="focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
          placeholder="Value"
        />
      </div>
    </div>
    <div className="flex items-center">
      <p>with</p>
    </div>
    <div>
      <label
        htmlFor="value_2"
        className="block text-sm font-medium text-gray-700 hidden"
      >
        Value
      </label>
      <div>
        <input
          type="text"
          name="value_2"
          id="value_2"
          className="focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
          placeholder="Value"
        />
      </div>
    </div>
  </div>
);

const MathFunction = () => (
  <div className="flex p-5 space-x-3">
    <div>
      <label
        htmlFor="type"
        className="block text-sm font-medium text-gray-700 hidden"
      >
        Type
      </label>
      <select
        id="type"
        name="type"
        className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
        defaultValue="Canada"
      >
        <option>REPLACE</option>
        <option>ADD</option>
        <option>SUBTRACT</option>
        <option>DIVIDE</option>
        <option>MULTIPLY</option>
      </select>
    </div>
    <div>
      <label
        htmlFor="value_1"
        className="block text-sm font-medium text-gray-700 hidden"
      >
        Value
      </label>
      <div>
        <input
          type="text"
          name="value_1"
          id="value_1"
          className="focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
          placeholder="Value"
        />
      </div>
    </div>
    <div className="flex items-center">
      <p>to</p>
    </div>
    <div>
      <label
        htmlFor="column"
        className="block text-sm font-medium text-gray-700 hidden"
      >
        Column
      </label>
      <select
        id="column"
        name="column"
        className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
        defaultValue="Canada"
      >
        <option>Col 1</option>
        <option>Col 2</option>
        <option>Col 3</option>
      </select>
    </div>
    <div className="flex items-center">
      <p>when column value is</p>
    </div>
    <div>
      <label
        htmlFor="value_2"
        className="block text-sm font-medium text-gray-700 hidden"
      >
        Value
      </label>
      <div>
        <input
          type="text"
          name="value_2"
          id="value_2"
          className="focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
          placeholder="Value"
        />
      </div>
    </div>
  </div>
);

const FunctionNode = ({ data }) => {
  return (
    <div className="bg-white text-gray-500 border rounded shadow-lg">
      <Handle type="source" position="bottom" />
      <div className="p-5 text-gray-900">
        <p className="font-bold">{data.label}</p>
        <p className="text-sm italic">This runs a function on your data.</p>
      </div>
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300" />
        </div>
      </div>
      {data.type === "replace" ? <ReplaceFunction /> : <MathFunction />}
    </div>
  );
};

export default FunctionNode;
