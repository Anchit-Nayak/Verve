import React from 'react'

const Events = () => {
  return (
    
<div class="w-full max-w-md p-4 border rounded-lg shadow sm:p-8 bg-gray-800 border-gray-700">
    <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-white">Top Writers</h5>
        <a href="#" class="text-sm font-medium hover:underline text-blue-500">
            View all
        </a>
   </div>
   
<ul class="max-w-md divide-y divide-gray-700">
   <li class="py-3 sm:py-4">
      <div class="flex items-center space-x-4">
         <div class="flex-shrink-0">
            <img class="w-8 h-8 rounded-full" src="https://icon-library.com/images/default-user-icon/default-user-icon-8.jpg" alt="Neil image"/>
         </div>
         <div class="flex-1 min-w-0">
            <p class="text-sm font-medium  truncate text-white">
               anchittt
            </p>
         </div>
      </div>
   </li>
   <li class="py-3 sm:py-4">
      <div class="flex items-center space-x-4">
         <div class="flex-shrink-0">
            <img class="w-8 h-8 rounded-full" src="https://icon-library.com/images/default-user-icon/default-user-icon-8.jpg" alt="Neil image"/>
         </div>
         <div class="flex-1 min-w-0">
            <p class="text-sm font-medium  truncate text-white">
               hkirat
            </p>
         </div>
      </div>
   </li>
</ul>

</div>

  )
}

export default Events