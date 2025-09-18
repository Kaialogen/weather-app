import { FiDroplet } from "react-icons/fi";
import { LuSunrise, LuSunset } from "react-icons/lu";
import { MdAir } from "react-icons/md";
import { ImMeter } from "react-icons/im";

export interface WeatherDetailProps {
  readonly humidity: string;
  readonly windSpeed: string;
  readonly airPressure: string;
  readonly sunrise: string;
  readonly sunset: string;
}

export default function WeatherDetails(props: WeatherDetailProps) {
  const {
    humidity = "Error",
    windSpeed = "Error",
    airPressure = "Error",
    sunrise = "Error",
    sunset = "Error",
  } = props;

  return (
    <>
      <SingleWeatherDetail
        icon={<FiDroplet />}
        information="Humidity"
        value={humidity}
      />
      <SingleWeatherDetail
        icon={<MdAir />}
        information="Wind Speed"
        value={windSpeed}
      />
      <SingleWeatherDetail
        icon={<ImMeter />}
        information="Air Pressure"
        value={airPressure}
      />
      <SingleWeatherDetail
        icon={<LuSunrise />}
        information="Sunrise"
        value={sunrise}
      />
      <SingleWeatherDetail
        icon={<LuSunset />}
        information="Sunset"
        value={sunset}
      />
    </>
  );
}

export interface SingleWeatherDetailProps {
  information: string;
  icon: React.ReactNode;
  value: string;
}

function SingleWeatherDetail(props: Readonly<SingleWeatherDetailProps>) {
  return (
    <div className="flex flex-col justify-between gap-2 items-center text-sm font-semibold">
      <p className="whitespace-nowrap">{props.information}</p>
      <div className="text-3xl">{props.icon}</div>
      <p>{props.value}</p>
    </div>
  );
}
