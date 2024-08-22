type Ttitle = {
  title: string;
};

const CategoryTitle = ({ title }: Ttitle) => {
  return (
    <div className="">
      <h1 className="text-3xl text-primary mb-3 font-semibold">{title}</h1>
    </div>
  );
};

export default CategoryTitle;
