type appAppTitle = {
  head: string;
  paragraph?: string;
};
export const AppTitle = ({ head, paragraph }: appAppTitle) => {
  return (
    <div className="my-10 container mx-auto">
      <div className="text-black text-[40px] font-bold ">{head}</div>
      <div className="text-[16px] text-[#64748B]"> {paragraph}</div>
    </div>
  );
};
