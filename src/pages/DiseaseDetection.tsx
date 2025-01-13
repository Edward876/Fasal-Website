import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload } from 'lucide-react';

export function DiseaseDetection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-3xl font-bold mb-8 text-slate-800 dark:text-white">
          Disease Detection
        </h1>
        
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
          <div className="space-y-6">
            <div className="text-center">
              <label
                htmlFor="image-upload"
                className="block w-full cursor-pointer"
              >
                <div className={`border-2 border-dashed rounded-xl p-8
                              ${selectedImage ? 'border-green-500' : 'border-slate-300 dark:border-slate-600'}
                              hover:border-green-500 dark:hover:border-green-500
                              transition-colors duration-200`}
                >
                  {selectedImage ? (
                    <img
                      src={selectedImage}
                      alt="Selected crop"
                      className="max-h-96 mx-auto rounded-lg"
                    />
                  ) : (
                    <div className="space-y-4">
                      <Upload className="w-12 h-12 mx-auto text-slate-400" />
                      <div className="text-slate-600 dark:text-slate-300">
                        <p className="font-medium">Click to upload an image</p>
                        <p className="text-sm">or drag and drop</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                          PNG, JPG up to 10MB
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                <input
                  id="image-upload"
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </label>
            </div>
            
            {selectedImage && (
              <button
                type="submit"
                className="w-full px-6 py-3 bg-green-600 hover:bg-green-700 
                         text-white rounded-lg transition-colors duration-200
                         font-medium text-lg"
              >
                Analyze Image
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}