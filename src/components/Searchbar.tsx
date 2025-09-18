import { cn } from "@/utils/cn";
import { IoSearch } from "react-icons/io5";

type Props = {
  readonly className?: string;
  readonly value: string;
  readonly onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  readonly onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
};

export default function Searchbar(props: Props) {
  return (
    <form
      onSubmit={props.onSubmit}
      className={cn(
        "flex relative items-center justify-center h-10",
        props.className
      )}
    >
      <input
        type="text"
        value={props.value}
        onChange={props.onChange}
        placeholder="Search for a place"
        className="px-4 py-2 w-[230px] rounded-xl bg-[#272541] focus:outline-none focus:border-white focus:border h-full mr-4 ml-2"
      />
      <button className="px-4 py-[9px] bg-[#4455da] text-white rounded-xl focus:outline-none hover:bg-blue-600 h-full cursor-pointer">
        <IoSearch />
      </button>
    </form>
  );
}
