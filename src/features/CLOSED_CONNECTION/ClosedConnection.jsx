import { useSelector } from 'react-redux';
import './closed_connection.css';

export function ClosedConnection() {
  const isConnection = useSelector((state) => state.statusConnection.value);

  console.log(isConnection);

  return (
    !isConnection && (
      <div onClick={() => false} className='closed_connection__container'>
        <h1 className='closed_connection'>Не удалось подключиться...</h1>;
      </div>
    )
  );
}
