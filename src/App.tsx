import { Header } from './components/Header';
import { DatePicker } from './components/DatePicker';
import { ListComponent } from './components/ListComponent';
import { Footer } from './components/Footer';
import { CalendarPopup } from './components/CalendarPopup';
import { useTypedSelector } from './hooks/useTypedSelector';
import { testValues } from './data/data';
import './App.css';

function App() {
  const { currentDate, items } = useTypedSelector((state) => state.item);
  const { isOpened } = useTypedSelector((state) => state.popup);

  const currentItem = items.find(
    (el) => el.date === currentDate.toDateString()
  );

  return (
    <div className='wrap'>
      <Header />
      <main className='main'>
        <DatePicker />
        <ListComponent data={currentItem ? currentItem.value : testValues} />
      </main>
      <Footer />
      {isOpened && <CalendarPopup opened={isOpened} />}
    </div>
  );
}

export default App;
