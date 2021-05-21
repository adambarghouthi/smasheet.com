import { Handle } from "react-flow-renderer";

const SplitNode = ({ data }) => {
  return (
    <div className="bg-white text-gray-500 border rounded shadow-lg">
      <Handle type="target" position="top" />
      <div className="p-5 text-gray-900">
        <p className="font-bold">{data.label}</p>
        <p className="text-sm italic">
          This splits your data into sheets containing the rows with the same
          column value.
        </p>
      </div>
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300" />
        </div>
      </div>
      <div className="flex p-5 space-x-3">
        <div className="flex items-center">
          <p>By</p>
        </div>
        <div>
          <label
            htmlFor="row"
            className="block text-sm font-medium text-gray-700 hidden"
          >
            Row
          </label>
          <select
            id="row"
            name="row"
            className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
            defaultValue="Row 1"
          >
            <option>Row 1</option>
            <option>Row 2</option>
            <option>Row 3</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SplitNode;
