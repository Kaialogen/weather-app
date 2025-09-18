import ForecastWeatherDetail from "@/components/ForecastWeatherDetail";
import { format, fromUnixTime, parseISO } from "date-fns";
import { convertWindSpeed } from "@/utils/convertWindSpeed";

export default function ThreeDayTable({ data }) {
  const uniqueDates = [
    ...new Set(
      data?.list.map(
        (entry) => new Date(entry.dt * 1000).toISOString().split("T")[0]
      )
    ),
  ];

  const firstDateForEachDate = uniqueDates.map((date) => {
    return data?.list.find((entry) => {
      const entryDate = new Date(entry.dt * 1000).toISOString().split("T")[0];
      const entryTime = new Date(entry.dt * 1000).getHours();
      return entryDate === date && entryTime >= 6;
    });
  });
  return (
    <section className="flex w-full flex-col gap-4">
      <p className="text-2xl">Next 3 days</p>
      {firstDateForEachDate.map((d, index) => (
        <ForecastWeatherDetail
          key={index}
          description={d?.weather[0].description ?? ""}
          weatherIcon={d?.weather[0].icon ?? "01d"}
          date={d ? format(parseISO(d?.dt_txt), "dd.MM") : ""}
          day={d ? format(parseISO(d.dt_txt), "EEEE") : ""}
          feels_like={d?.main.feels_like ?? 0}
          temp={d?.main.temp ?? 0}
          temp_max={d?.main.temp_max ?? 0}
          temp_min={d?.main.temp_min ?? 0}
          airPressure={`${d?.main.pressure} hPa`}
          humidity={`${d?.main.humidity}%`}
          sunrise={format(
            fromUnixTime(data?.city.sunrise ?? 1702517657),
            "H:mm"
          )}
          sunset={format(fromUnixTime(data?.city.sunset ?? 1702517657), "H:mm")}
          windSpeed={convertWindSpeed(d?.wind.speed ?? 1.64)}
        />
      ))}
    </section>
  );
}
