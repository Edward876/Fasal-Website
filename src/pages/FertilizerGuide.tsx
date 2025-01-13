import React from 'react';
import { motion } from 'framer-motion';

export function FertilizerGuide() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-3xl font-bold mb-8 text-slate-800 dark:text-white">
          Fertilizer Guide
        </h1>
        
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Crop Type
                </label>
                <select className="input-field">
                  <option value="">Select crop</option>
                  <option value="rice">Rice</option>
                  <option value="wheat">Wheat</option>
                  <option value="cotton">Cotton</option>
                  <option value="sugarcane">Sugarcane</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Soil Type
                </label>
                <select className="input-field">
                  <option value="">Select soil type</option>
                  <option value="clay">Clay</option>
                  <option value="loamy">Loamy</option>
                  <option value="sandy">Sandy</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Growth Stage
                </label>
                <select className="input-field">
                  <option value="">Select growth stage</option>
                  <option value="seedling">Seedling</option>
                  <option value="vegetative">Vegetative</option>
                  <option value="flowering">Flowering</option>
                  <option value="fruiting">Fruiting</option>
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
                  className="input-field"
                  placeholder="Enter area"
                />
              </div>
            </div>
            
            <button
              type="submit"
              className="btn-primary w-full"
            >
              Get Fertilizer Recommendations
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}