import Navbar from '@/components/Navbar/Navbar';
import getSchedules from '@/requests/schedules/getSchedules';
import getWashsTypes from '@/requests/washsTypes/getWashsTypes';
import { useMemo } from 'react';
import { create } from 'zustand';

export const useStore = create((set) => ({
  washsTypesList: [],
  setWashsTypesList: (newWashsTypesList) => set((state) => ({ washsTypesList: newWashsTypesList })),

  schedulesList: [],
  setSchedulesList: (newSchedulesList) => set((state) => ({ schedulesList: newSchedulesList })),

  selectedSchedule: {},
  setSelectedSchedule: (newSelectedSchedule) => set((state) => ({ selectedSchedule: newSelectedSchedule })),
}));

const Home = () => {
  const { setWashsTypesList } = useStore();

  const GetWashsTypes = () => {
    getWashsTypes()
      .then((response) => setWashsTypesList(response.data));
  };

  useMemo(() => {
    GetWashsTypes();
  }, []);

  return (
    <>
      <Navbar />

      <main>
        <div className="container">
          <p>Desenvolver página contando sobre a empresa ficctícia</p>
        </div>
      </main>
    </>
  );
};

export default Home;