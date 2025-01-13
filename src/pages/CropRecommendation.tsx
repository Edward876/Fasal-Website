import React from 'react';
import { motion } from 'framer-motion';

export function CropRecommendation() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-3xl font-bold mb-8 text-slate-800 dark:text-white">
          Crop Recommendation
        </h1>
        
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Soil Type
                </label>
                <select className="w-full px-4 py-2 rounded-lg bg-white dark:bg-slate-700 
                                 border border-slate-300 dark:border-slate-600
                                 text-slate-800 dark:text-white">
                  <option value="">Select soil type</option>
                  <option value="clay">Clay</option>
                  <option value="loamy">Loamy</option>
                  <option value="sandy">Sandy</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  pH Level
                </label>
                <input
                  type="number"
                  min="0"
                  max="14"
                  step="0.1"
                  className="w-full px-4 py-2 rounded-lg bg-white dark:bg-slate-700 
                           border border-slate-300 dark:border-slate-600
                           text-slate-800 dark:text-white"
                  placeholder="Enter soil pH"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Region
                </label>
                <select className="w-full px-4 py-2 rounded-lg bg-white dark:bg-slate-700 
                                 border border-slate-300 dark:border-slate-600
                                 text-slate-800 dark:text-white">
                  <option value="">Select region</option>
                  <option value="north">North India</option>
                  <option value="south">South India</option>
                  <option value="east">East India</option>
                  <option value="west">West India</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Season
                </label>
                <select className="w-full px-4 py-2 rounded-lg bg-white dark:bg-slate-700 
                                 border border-slate-300 dark:border-slate-600
                                 text-slate-800 dark:text-white">
                  <option value="">Select season</option>
                  <option value="kharif">Kharif</option>
                  <option value="rabi">Rabi</option>
                  <option value="zaid">Zaid</option>
                </select>
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full px-6 py-3 bg-green-600 hover:bg-green-700 
                       text-white rounded-lg transition-colors duration-200
                       font-medium text-lg"
            >
              Get Recommendations
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}