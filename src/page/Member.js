import React from "react";


function Member() {
  return (
    <div>
      <div class="w-full md:w-1/3 shadow p-5 rounded-lg bg-white">
       

        <div class="flex items-center justify-between mt-4">
          <p class="font-medium">Filters</p>

          <button class="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md">
            Reset Filter
          </button>
        </div>

        <div>
        {/* 各類選項 */}
          <div class="grid grid-cols-1 gap-4 mt-4">
            <select class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
              <option value="">All Type</option>
              <option value="for-rent">For Rent</option>
              <option value="for-sale">For Sale</option>
            </select>

            <select class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
              <option value="">Furnish Type</option>
              <option value="fully-furnished">Fully Furnished</option>
              <option value="partially-furnished">Partially Furnished</option>
              <option value="not-furnished">Not Furnished</option>
            </select>

            <select class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
              <option value="">Any Price</option>
              <option value="1000">RM 1000</option>
              <option value="2000">RM 2000</option>
              <option value="3000">RM 3000</option>
              <option value="4000">RM 4000</option>
            </select>

            <select class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
              <option value="">Floor Area</option>
              <option value="200">200 sq.ft</option>
              <option value="400">400 sq.ft</option>
              <option value="600">600 sq.ft</option>
              <option value="800 sq.ft">800</option>
              <option value="1000 sq.ft">1000</option>
              <option value="1200 sq.ft">1200</option>
            </select>

            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Member;
