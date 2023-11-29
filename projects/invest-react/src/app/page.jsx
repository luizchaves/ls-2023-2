'use client';

import InvestmentCard from '@/components/InvestmentCard';
import { investments } from '@/data/seed';
import Storage from '@/services/supabase';
import { IconEye, IconEyeOff } from '@tabler/icons-react';
import { useState } from 'react';

async function getData() {
  return Storage.read('investments');
}

export default function Home() {
  const [isShowValues, setIsShowValues] = useState(true);

  // const investments = await getData();

  const toggleShowValues = () => {
    setIsShowValues(!isShowValues);
  };

  return (
    <>
      <header className="my-12">
        <div
          className="float-right hover:cursor-pointer"
          onClick={toggleShowValues}
        >
          {isShowValues ? <IconEye size={24} /> : <IconEyeOff size={24} />}
        </div>
        <h1 className="text-center text-2xl font-bold">Investimentos</h1>
      </header>

      <div className="investments grid grid-cols-3 gap-3">
        {investments.map((investment) => (
          <InvestmentCard
            {...investment}
            isShowValues={isShowValues}
            key={investment.id}
          />
        ))}
      </div>
    </>
  );
}
