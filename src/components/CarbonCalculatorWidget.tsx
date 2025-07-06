// Carbon Footprint Calculator Components for Lovable

import React from 'react';

// Full Carbon Footprint Calculator
const CarbonFootprintCalculator = ({ 
  width = 600, 
  height = 700, 
  language = 'en-GB', 
  backgroundColor = 'FFFFFF' 
}) => {
  const src = `https://www.carbonfootprint.com/calculator.aspx?lang=${language}&b=${backgroundColor}`;
  
  return (
    <div className="carbon-calculator-container">
      <iframe
        width={width}
        height={height}
        src={src}
        title="Carbon Footprint Calculator"
        style={{
          border: 'none',
          display: 'block',
          margin: '0 auto'
        }}
        scrolling="no"
        frameBorder="0"
      />
    </div>
  );
};

// Flight-Only Carbon Footprint Calculator
const FlightCarbonCalculator = ({ 
  width = 600, 
  height = 500, 
  language = 'en-GB', 
  backgroundColor = 'FFFFFF' 
}) => {
  const src = `https://www.carbonfootprint.com/calculator.aspx?c=flight&lang=${language}&b=${backgroundColor}`;
  
  return (
    <div className="flight-calculator-container">
      <iframe
        width={width}
        height={height}
        src={src}
        title="Flight Carbon Footprint Calculator"
        style={{
          border: 'none',
          display: 'block',
          margin: '0 auto'
        }}
        scrolling="no"
        frameBorder="0"
      />
    </div>
  );
};

// Responsive versions using Tailwind CSS
const ResponsiveCarbonCalculator = ({ 
  language = 'en-GB', 
  backgroundColor = 'FFFFFF' 
}) => {
  const src = `https://www.carbonfootprint.com/calculator.aspx?lang=${language}&b=${backgroundColor}`;
  
  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <iframe
        width="100%"
        height="700"
        src={src}
        title="Carbon Footprint Calculator"
        className="border-0 rounded-lg shadow-lg"
        scrolling="no"
        frameBorder="0"
      />
    </div>
  );
};

const ResponsiveFlightCalculator = ({ 
  language = 'en-GB', 
  backgroundColor = 'FFFFFF' 
}) => {
  const src = `https://www.carbonfootprint.com/calculator.aspx?c=flight&lang=${language}&b=${backgroundColor}`;
  
  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <iframe
        width="100%"
        height="500"
        src={src}
        title="Flight Carbon Footprint Calculator"
        className="border-0 rounded-lg shadow-lg"
        scrolling="no"
        frameBorder="0"
      />
    </div>
  );
};

// Combined component with options
const CarbonCalculatorWidget = ({ 
  type = 'full', 
  width = 600, 
  height = null, 
  language = 'en-GB', 
  backgroundColor = 'FFFFFF',
  responsive = false 
}) => {
  const defaultHeight = type === 'flight' ? 500 : 700;
  const calculatorHeight = height || defaultHeight;
  
  const src = type === 'flight' 
    ? `https://www.carbonfootprint.com/calculator.aspx?c=flight&lang=${language}&b=${backgroundColor}`
    : `https://www.carbonfootprint.com/calculator.aspx?lang=${language}&b=${backgroundColor}`;
  
  if (responsive) {
    return (
      <div className="w-full max-w-2xl mx-auto p-4">
        <iframe
          width="100%"
          height={calculatorHeight}
          src={src}
          title={type === 'flight' ? 'Flight Carbon Footprint Calculator' : 'Carbon Footprint Calculator'}
          className="border-0 rounded-lg shadow-lg"
          scrolling="no"
          frameBorder="0"
        />
      </div>
    );
  }
  
  return (
    <div className="carbon-calculator-widget">
      <iframe
        width={width}
        height={calculatorHeight}
        src={src}
        title={type === 'flight' ? 'Flight Carbon Footprint Calculator' : 'Carbon Footprint Calculator'}
        style={{
          border: 'none',
          display: 'block',
          margin: '0 auto'
        }}
        scrolling="no"
        frameBorder="0"
      />
    </div>
  );
};

// Export all components
export {
  CarbonFootprintCalculator,
  FlightCarbonCalculator,
  ResponsiveCarbonCalculator,
  ResponsiveFlightCalculator,
  CarbonCalculatorWidget
};

// Default export
export default CarbonCalculatorWidget;