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

                <div className="bg-amber-50 p-4 rounded-lg shadow-md max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row">
            <div className="flex-shrink-0">
              <img src="https://placehold.co/150x150" alt="Product Image" className="rounded-lg">
            </div>
            <div className="flex-grow md:ml-4 mt-4 md:mt-0">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-zinc-500">#LJ00012300</p>
                  <p className="text-xs text-zinc-400">Placed on 24 Mar 2024</p>
                </div>
                <div className="flex space-x-4 text-amber-600">
                  <a href="#" className="flex items-center space-x-1">
                    <span>👁️</span>
                    <span>View Order Details</span>
                  </a>
                  <a href="#" className="flex items-center space-x-1">
                    <span>📄</span>
                    <span>Download Invoice</span>
                  </a>
                </div>
              </div>
              <h2 className="text-xl font-semibold mt-2">The Merrie Gold Ring</h2>
              <p className="text-sm text-zinc-500">Weight - 2.158g | Size - 19.10 MM</p>
              <p className="text-2xl font-semibold text-amber-700 mt-2">₹10,912</p>
              <button className="mt-4 px-4 py-2 border border-amber-600 text-amber-600 rounded-full hover:bg-amber-600 hover:text-white transition">Cancel Order</button>
              <p className="mt-2 text-sm text-zinc-500">Expected Delivery on <span className="font-semibold text-zinc-700">Monday 30 Mar 2023</span></p>
            </div>
            <div className="flex-shrink-0 mt-4 md:mt-0 md:ml-4">
              <ul className="space-y-2 text-sm text-zinc-700">
                <li className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full bg-amber-600"></span>
                  <span>Ordered</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full bg-amber-600"></span>
                  <span>Confirmed</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full border border-amber-600"></span>
                  <span>Out for delivery</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full border border-amber-600"></span>
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
