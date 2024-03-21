import React from 'react'
import DataProvider from './context/DataProvider';
import App from './App';

export const ProviderLayer = () => {
  return (
    <DataProvider>
        <App />
    </DataProvider>
  )
}
export default ProviderLayer;
