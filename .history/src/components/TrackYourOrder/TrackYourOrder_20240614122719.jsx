import React from 'react';
import './TrackYourOrder.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const TrackYourOrder = () => {
  return (
        <>
            <div className='container my-5'>
                <div className='accountLinkHeading'>
                    <h5> <span className='accountSubHeading'> <a href="/">Home</a></span> | Order </h5>
                    <hr className='custom-hr'/>
                </div>
                
                <div className="trackOrderHeading">
                    <img src="/img/Homepage/PetalLeft.png" alt="" />
                    <h2 className="mx-2">Track Your Order</h2>
                    <img src="/img/Homepage/PetalRight.png" alt="" />
                </div>

                <div class="bg-amber-50 p-4 rounded-lg shadow-md max-w-4xl mx-auto">
  <div class="flex flex-col md:flex-row">
    <div class="flex-shrink-0">
      <img src="https://placehold.co/150x150" alt="Product Image" class="rounded-lg" />
    </div>
    <div class="flex-grow md:ml-4 mt-4 md:mt-0">
      <div class="flex justify-between items-start">
        <div>
          <p class="text-sm text-zinc-500">#LJ00012300</p>
          <p class="text-xs text-zinc-400">Placed on 24 Mar 2024</p>
        </div>
        <div class="flex space-x-4 text-amber-600">
          <a href="#" class="flex items-center space-x-1">
            <span>👁️</span>
            <span>View Order Details</span>
          </a>
          <a href="#" class="flex items-center space-x-1">
            <span>📄</span>
            <span>Download Invoice</span>
          </a>
        </div>
      </div>
      <h2 class="text-xl font-semibold mt-2">The Merrie Gold Ring</h2>
      <p class="text-sm text-zinc-500">Weight - 2.158g | Size - 19.10 MM</p>
      <p class="text-2xl font-semibold text-amber-700 mt-2">₹10,912</p>
      <button
        class="mt-4 px-4 py-2 border border-amber-600 text-amber-600 rounded-full hover:bg-amber-600 hover:text-white transition"
      >
        Cancel Order
      </button>
      <p class="mt-2 text-sm text-zinc-500">
        Expected Delivery on <span class="font-semibold text-zinc-700">Monday 30 Mar 2023</span>
      </p>
    </div>
    <div class="flex-shrink-0 mt-4 md:mt-0 md:ml-4">
      <ul class="space-y-2 text-sm text-zinc-700">
        <li class="flex items-center space-x-2">
          <span class="w-3 h-3 rounded-full bg-amber-600"></span>
          <span>Ordered</span>
        </li>
        <li class="flex items-center space-x-2">
          <span class="w-3 h-3 rounded-full bg-amber-600"></span>
          <span>Confirmed</span>
        </li>
        <li class="flex items-center space-x-2">
          <span class="w-3 h-3 rounded-full border border-amber-600"></span>
          <span>Out for delivery</span>
        </li>
        <li class="flex items-center space-x-2">
          <span class="w-3 h-3 rounded-full border border-amber-600"></span>
          <span>Delivered</span>
        </li>
      </ul>
    </div>
  </div>
</div>



            </div>
            
        </>
  );
};
