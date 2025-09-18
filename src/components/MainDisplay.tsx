import { convertKelvinToCelsius } from "@/utils/convertKelvinToCelsius";

type Props = { readonly location?: string; readonly data?: any };

export default function MainDisplay({ location, data }: Props) {
  return (
    <section className="grid grid-cols-1 max-w-full">
      <h2 className="text-center text-3xl mb-4">{location}</h2>
      <span className="text-5xl text-center mb-4">
        {convertKelvinToCelsius(data?.main.temp ?? 0)}°C
      </span>
      <p className="text-sm space-x-1 whitespace-nowrap text-center">
        <span>Feels like</span>
        <span>
          {convertKelvinToCelsius(data?.main.feels_like ?? 0)}
          °C
        </span>
      </p>
      <p className="text-sm space-x-2 text-center">
        <span>
          Min: {convertKelvinToCelsius(data?.main.temp_min ?? 0)}
          °C{" "}
        </span>
        <span>
          {" "}
          Max: {convertKelvinToCelsius(data?.main.temp_max ?? 0)}
          °C
        </span>
      </p>
    </section>
  );
}
