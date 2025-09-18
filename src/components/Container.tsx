import { cn } from "@/utils/cn";

export default function Container(
  props: Readonly<React.HTMLProps<HTMLDivElement>>
) {
  return (
    <div
      {...props}
      className={cn(
        "w-full bg-[#272541] border border-[#3d3b5e] rounded-xl flex py-4 shadow-sm",
        props.className
      )}
    />
  );
}
