// "use client";

// import { useOrganizerLoginMutation } from "@/redux/features/auth/authApi";
// import AppFormInput from "../ui/AppFormInput";
// import { useAppDispatch } from "@/redux/hook";
// import { useRouter, useSearchParams } from "next/navigation";
// import { SubmitHandler, useForm } from "react-hook-form";
// import { toast } from "react-toastify";
// import { verifyToken } from "@/utils/verifyToken";
// import { setOrganizer } from "@/redux/features/auth/authSlice";
// import AppButton from "../ui/AppButton";

// type Inputs = {
//   name: string;
//   password: string;
//   orgType: string;
//   confirmPassword: string;
//   email: string;
// };

// const OrganizerLoginForm = () => {
//   const [organizerLogin] = useOrganizerLoginMutation();
//   const dispatch = useAppDispatch();
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const from = searchParams.get("from");
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<Inputs>();

//   const onSubmit: SubmitHandler<Inputs> = async (data) => {
//     console.log(data);
//     await organizerLogin(data)
//       .unwrap()
//       .then((res: any) => {
//         toast.success("Organizer log in successful!", {
//           toastId: 1,
//         });
//         const organizer = verifyToken(res?.data?.accessToken);
//         dispatch(
//           setOrganizer({ organizer, accessToken: res?.data?.accessToken })
//         );
//         if (from) {
//           router.push(from);
//         } else {
//           router.push("/");
//         }
//       })
//       .catch((res: any) => {
//         console.log(res);
//         toast.error(res?.data?.message || "Something went wrong", {
//           toastId: 1,
//         });
//       });
//   };
//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className=" space-y-3 ">
//       <AppFormInput
//         name="email"
//         label="Email"
//         type="email"
//         register={register}
//         placeholder="Enter your email"
//         error={errors.email}
//         required
//       />
//       <AppFormInput
//         name="password"
//         label="Password"
//         type="password"
//         register={register}
//         placeholder="Enter your password"
//         error={errors.password}
//         required
//       />

//       <div className="pt-4 w-full">
//         <AppButton type="submit" label="Sign In" className="w-full" />
//       </div>
//     </form>
//   );
// };

// export default OrganizerLoginForm;
