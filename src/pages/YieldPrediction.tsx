import React from 'react';
import { motion } from 'framer-motion';

export function YieldPrediction() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-3xl font-bold mb-8 text-slate-800 dark:text-white">
          Yield Prediction
        </h1>
        
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Crop Type
                </label>
                <select className="w-full px-4 py-2 rounded-lg bg-white dark:bg-slate-700 
                                 border border-slate-300 dark:border-slate-600
                                 text-slate-800 dark:text-white">
                  <option value="">Select crop</option>
                  <option value="rice">Rice</option>
                  <option value="wheat">Wheat</option>
                  <option value="cotton">Cotton</option>
                  <option value="sugarcane">Sugarcane</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Area (in acres)
                </label>
                <input
                  type="number"
                  min="0"
                  step="0.1"
                  className="w-full px-4 py-2 rounded-lg bg-white dark:bg-slate-700 
                           border border-slate-300 dark:border-slate-600
                           text-slate-800 dark:text-white"
                  placeholder="Enter area"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Irrigation Type
                </label>
                <select className="w-full px-4 py-2 rounded-lg bg-white dark:bg-slate-700 
                                 border border-slate-300 dark:border-slate-600
                                 text-slate-800 dark:text-white">
                  <option value="">Select irrigation type</option>
                  <option value="drip">Drip Irrigation</option>
                  <option value="sprinkler">Sprinkler</option>
                  <option value="flood">Flood Irrigation</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Fertilizer Usage
                </label>
                <select className="w-full px-4 py-2 rounded-lg bg-white dark:bg-slate-700 
                                 border border-slate-300 dark:border-slate-600
                                 text-slate-800 dark:text-white">
                  <option value="">Select usage level</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full px-6 py-3 bg-green-600 hover:bg-green-700 
                       text-white rounded-lg transition-colors duration-200
                       font-medium text-lg"
            >
              Calculate Yield
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}