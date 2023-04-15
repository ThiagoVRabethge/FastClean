import Navbar from '@/components/Navbar/Navbar';
import { create } from 'zustand';

export const useStore = create((set) => ({
  washsTypesList: [],
  setWashsTypesList: (newWashsTypesList) => set((state) => ({ washsTypesList: newWashsTypesList })),
}));

const Home = () => {
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