import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { EVENT_PATICIPANTS__GET, EVENT_SINGLE_URL__GET } from '../shared/constant/constant';
import { useApiHooks } from '../shared/hooks/useApiHooks';
import MealCard from '../shared/components/api/meals/mealCard';
import { useDate } from '../shared/hooks/useDate';

export default function Event() {
  const [item, setItem] = useState({});
  const { useApiGetAxios } = useApiHooks();
  const params = useParams();

  const { useSetConvertEventDateR } = useDate()

  useEffect(() => {
    doApi();

  }, [params]);

  const doApi = async () => {
    try {
      const url = EVENT_SINGLE_URL__GET + '/' + params["id"];
      const data = await useApiGetAxios(url);
      setItem(data[0]);
    } catch (error) {
      console.log(error);
    }
  };




  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-col md:flex-row h-auto">
        <div className="event-info h-auto md:w-2/3 w-full mx-auto md:order-2 bg-t-white shadow-md rounded-md px-8 py-6 mb-4 md:mb-0 md:mr-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold mb-4">{item.title}</h1>
              <p className="">{item.city}</p>
            </div>
            <div>
              Event Date
              <h5 className="text-xl font-bold ">
                {useSetConvertEventDateR(item.event_date)}
              </h5>
            </div>
          </div>
          <p className="mt-4">{item.description}</p>
          <Link
            to={`/JoinToEvent/${item.event_id}`}
            href="#"
            className="inline-block mt-4 px-4 py-2 text-sm font-medium text-center rounded-lg bg-secondary hover:bg-btn-hover focus:ring-4 focus:outline-none focus:ring-blue-300 text-t-white"
          >
            Join
          </Link>
        </div>

        <MealCard />
      </div>
    </div>
  );
}
