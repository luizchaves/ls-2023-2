'use client';

import { createContext, useState, useContext } from 'react';
import Storage from '@/services/supabase';

export const InvestmentContext = createContext({});

export function InvestmentProvider({ children }) {
  const initialInvestmentFormData = {
    name: '',
    value: '',
    origin: '',
    category: '',
    interest: '',
    created_at: '',
  };

  const [investments, setInvestments] = useState([]);

  const [isShowValues, setIsShowValues] = useState(true);

  const [isShowInvestmentForm, setIsShowInvestmentForm] = useState(false);

  const [investmentFormData, setInvestmentFormData] = useState(
    initialInvestmentFormData
  );

  const handleCreateInvestment = async () => {
    setInvestmentFormData(initialInvestmentFormData);

    toggleShowInvestmentForm();
  };

  const toggleShowValues = () => {
    setIsShowValues(!isShowValues);
  };

  const toggleShowInvestmentForm = () => {
    setIsShowInvestmentForm(!isShowInvestmentForm);
  };

  const loadInvestments = async () => {
    const investments = await Storage.read('investments');

    setInvestments(investments);
  };

  const createInvestment = async (investment) => {
    const newInvestment = await Storage.create('investments', investment);

    setInvestments([...investments, newInvestment]);
  };

  const removeInvestment = (id) => {
    const newInvestments = investments.filter(
      (investment) => investment.id !== id
    );

    setInvestments(newInvestments);

    Storage.remove('investments', id);
  };

  return (
    <InvestmentContext.Provider
      value={{
        investments,
        setInvestments,
        isShowValues,
        setIsShowValues,
        isShowInvestmentForm,
        setIsShowInvestmentForm,
        investmentFormData,
        setInvestmentFormData,
        toggleShowValues,
        toggleShowInvestmentForm,
        loadInvestments,
        createInvestment,
        removeInvestment,
        handleCreateInvestment,
      }}
    >
      {children}
    </InvestmentContext.Provider>
  );
}

export function useInvestment() {
  return useContext(InvestmentContext);
}
