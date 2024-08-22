import { UseFormRegister } from "react-hook-form";

type TAppFormTextareaProps = {
  label: string;
  placeholder?: string;
  name: string;
  required?: true | false;
  register: UseFormRegister<any>;
  error?: any;
  defaultValue?: string | number;
  readOnly?: boolean;
};

const AppFormTextarea = ({
  label,
  defaultValue,
  readOnly,
  error,
  placeholder,
  required,
  name,
  register,
}: TAppFormTextareaProps) => {
  return (
    <>
      {readOnly ? (
        <div className="bg-[#f9f8f8] rounded select-none border border-[#D0D2D5] h-11 2xl:h-12 w-full flex items-center min-w-[200px] px-3 2xl:px-4 py-2.5 font-sans text-base 2xl:text-lg font-normal text-textBlack/50">
          {defaultValue}
        </div>
      ) : (
        <>
          <div className="relative float-label-input w-full min-w-[200px]">
            <label className="text-[20px] text-[#475569]" htmlFor={name}>
              {label}
              {required ? "*" : ""}
            </label>
            <textarea
              id={name}
              rows={5}
              {...register(name, { ...(required && { required: true }) })}
              // className="peer min-h-[140px] 2xl:min-h-[160px] resize-none overflow-auto w-full rounded border border-[#D0D2D5] border-t-transparent bg-transparent px-3 2xl:px-4 py-2.5 font-sans text-base 2xl:text-lg font-normal text-textBlack outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-[#D0D2D5] placeholder-shown:border-t-[#D0D2D5] focus:border-2 focus:border-primary focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100 caret-primary"
              className={`outline-none border   p-3 rounded-lg w-full text-[16px] ${
                error ? "border-red-500" : "border-borderColor"
              }`}
              placeholder={placeholder}
            />
            {error && (
              <p className="text-sm text-red-500 text-left">
                {label || name} is required
              </p>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default AppFormTextarea;
