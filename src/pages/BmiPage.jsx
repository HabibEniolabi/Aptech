import React, { useState } from 'react';

const BmiPage = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const calculateBmi = () => {
    // Validation
    if (!weight || !height) {
      setError('Please enter both weight and height');
      setResult(null);
      return;
    }

    const w = parseFloat(weight);
    const h = parseFloat(height);

    if (w <= 0 || h <= 0) {
      setError('Weight and height must be greater than zero');
      setResult(null);
      return;
    }

    // Height is entered in cm, convert to meters
    const heightInMeters = h / 100;
    const bmi = w / (heightInMeters * heightInMeters);
    const roundedBmi = Math.round(bmi * 10) / 10;

    // Determine category
    let category = '';
    if (roundedBmi < 18.5) {
      category = 'Underweight';
    } else if (roundedBmi < 25) {
      category = 'Normal weight';
    } else if (roundedBmi < 30) {
      category = 'Overweight';
    } else {
      category = 'Obese';
    }

    setResult({
      bmi: roundedBmi,
      category: category,
    });
    setError('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      calculateBmi();
    }
  };

  return (
    <div className="w-full bg-black min-h-screen flex flex-col items-center justify-center gap-8 p-4">
      <div className="px-6 lg:px-10 text-center space-y-6 flex flex-col max-w-md">
        <h1 className="text-5xl font-black text-white">BMI Calculator</h1>
        <p className="text-xl text-white/60">
          Calculate your Body Mass Index (BMI) to understand your health better.
        </p>

        {/* BMI Calculator Form */}
        <div className="flex flex-col gap-5 mt-8">
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter your weight (kg)"
            className="w-full p-3 border border-gray-300 rounded bg-white text-black placeholder-gray-500"
          />
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter your height (cm)"
            className="w-full p-3 border border-gray-300 rounded bg-white text-black placeholder-gray-500"
          />
          <button
            className="w-full p-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition-colors"
            onClick={calculateBmi}
          >
            Calculate BMI
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="p-4 bg-red-500/20 border border-red-500 rounded text-red-400 text-sm mt-5">
            {error}
          </div>
        )}

        {/* Result Display */}
        {result && (
          <div className="p-6 bg-blue-600/20 border border-blue-500 rounded-lg text-white mt-8">
            <p className="text-sm text-blue-300 mb-2">Your BMI Result</p>
            <p className="text-4xl font-bold mb-2">{result.bmi}</p>
            <p className="text-lg text-blue-200">{result.category}</p>
          </div>
        )}

        {/* BMI Categories Reference */}
        <div className="mt-8 p-4 bg-white/10 border border-white/20 rounded-lg text-left text-sm text-white/70">
          <p className="font-semibold text-white mb-3">BMI Categories</p>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Underweight</span>
              <span>Below 18.5</span>
            </div>
            <div className="flex justify-between">
              <span>Normal weight</span>
              <span>18.5 – 24.9</span>
            </div>
            <div className="flex justify-between">
              <span>Overweight</span>
              <span>25 – 29.9</span>
            </div>
            <div className="flex justify-between">
              <span>Obese</span>
              <span>30+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BmiPage;