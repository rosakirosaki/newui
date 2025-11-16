import React from 'react';
import { Music, Clapperboard, DollarSign } from 'lucide-react';

export function Partnership() {
  return (
    <section id="partnership" className="bg-black py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How Our Partnership Works
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            MediaTiger helps with the following
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Step 1 */}
          <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 text-center">
            <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <img 
                src="https://vaeuvecjtnvismnobvyy.supabase.co/storage/v1/object/public/images/music%20-%20Edited.png" 
                alt="Music Icon" 
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              To Artists
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              MediaTiger helps with the following<br />
              &gt;Reach a global audience<br />
              &gt;Grow your music career<br />
              &gt;Maximize your earnings
            </p>
          </div>
          
          {/* Step 2 */}
          <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 text-center">
            <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <img 
                src="https://vaeuvecjtnvismnobvyy.supabase.co/storage/v1/object/public/images/416c9dfd-03ad-4e5b-b87c-c56228305b89.png" 
                alt="Video Icon" 
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              To Creators
            </h3>
          </div>
          
          {/* Step 3 */}
          <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 text-center">
            <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <img 
                src="https://vaeuvecjtnvismnobvyy.supabase.co/storage/v1/object/public/images/payout%20-%20Edited.png" 
                alt="Payout Icon" 
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              To Brands
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}