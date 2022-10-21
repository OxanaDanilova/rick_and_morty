// import React, { useState } from 'react';
// import { useForm, SubmitHandler } from 'react-hook-form';
// import './FormTest.css';
// type FormValues = {
//   fname: string;
//   lname: string;
//   dob: string;
//   country: string;
//   gender: string;
//   avatar: File;
//   agreement: string;
// };
// interface Card {
//   firstName: string;
//   lastName: string;
//   birthday: string;
//   country: string;
//   avatar: string;
//   gender: string;
// }
// type MyProps = {
//   createCard: (card: Card) => void;
// };

// export default function FormTest({ createCard }: MyProps) {
//   const [showCreateCardMes, setShowCreateMes] = useState<boolean>(false);
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<FormValues>();
//   const onSubmit: SubmitHandler<FormValues> = (data) => {
//     console.log(Object.entries(errors));
//     console.log(data);
//     const userAvatar = URL.createObjectURL(data.avatar.files[0]);
//     createCard({
//       firstName: data.fname,
//       lastName: data.lname,
//       birthday: data.dob,
//       country: data.country,
//       gender: data.gender ? 'Female' : 'Male',
//       avatar: userAvatar,
//     });
//     setShowCreateMes(true);

//     setTimeout(() => {
//       setShowCreateMes(false);
//     }, 1500);
//   };

//   return (
//     <form id="createCardForm" onSubmit={handleSubmit(onSubmit)}>
//       <p className="createCardMes" style={{ opacity: showCreateCardMes ? '100%' : '0' }}>
//         The card was created.
//       </p>
//       <div className="nameWrapper">
//         <label>First name</label>
//         <div className="input-wrapper">
//           <input
//             data-testid="formusername"
//             type="text"
//             id="fname"
//             {...register('fname', { required: true, minLength: 2 })}
//           />
//           {errors.fname && errors.fname.type === 'required' && (
//             <p className="er-mes">This is required</p>
//           )}
//           {errors.fname && errors.fname.type === 'minLength' && (
//             <p className="er-mes">First name should be more than 1 letter</p>
//           )}
//         </div>
//       </div>
//       <div className="nameWrapper">
//         <label>Last name</label>
//         <div className="input-wrapper">
//           <input
//             data-testid="formusername"
//             type="text"
//             id="lname"
//             {...register('lname', { required: true, minLength: 2 })}
//           />
//           {errors.lname && errors.lname.type === 'required' && (
//             <p className="er-mes">This is required</p>
//           )}
//           {errors.lname && errors.lname.type === 'minLength' && (
//             <p className="er-mes">Last name should be more than 1 letter</p>
//           )}
//         </div>
//       </div>

//       <div className="birthdayWrapper">
//         <label>Birthday</label>
//         <div className="bday-wrapper">
//           <input
//             type="date"
//             id="dob"
//             {...register('dob', {
//               required: true,
//               /* validate: new Date(value) > new Date(), */
//             })}
//           />

//           {errors.dob && errors.dob.type === 'required' && (
//             <p className="er-mes">This is required</p>
//           )}
//         </div>
//       </div>
//       <div className="countryWrapper">
//         <label>Country</label>
//         <div className="select-wrapper">
//           <select {...register('country', { required: true })}>
//             <option></option>
//             <option>Germany</option>
//             <option>Kasachstan</option>
//             <option>Russia</option>
//             <option>China</option>
//             <option>Spain</option>
//           </select>
//           {errors.lname && errors.lname.type === 'required' && (
//             <p className="er-mes">This is required</p>
//           )}
//         </div>
//       </div>

//       <div className="genderWrapper">
//         <label className="switch">
//           <input data-testid="gender" type="checkbox" id="gender" {...register('gender')} />
//           <span className="slider round"></span>
//           <label id="male">Male</label>
//           <label id="female">Female</label>
//         </label>
//       </div>
//       <div className="avatar-wrapper">
//         <input
//           data-testid="avatar"
//           type="file"
//           id="avatar"
//           {...register('avatar', { required: true })}
//         />
//         {errors.avatar && errors.avatar.type === 'required' && (
//           <p className="er-mes">This is required</p>
//         )}
//       </div>
//       <div className="agreemWrapper">
//         <label htmlFor="user-agreement">I consent to my personal data</label>
//         <input
//           data-testid="agreement"
//           type="checkbox"
//           id="user-agreement"
//           {...register('agreement', { required: true })}
//         />
//         {errors.agreement && errors.agreement.type === 'required' && (
//           <p className="er-mes">This is required</p>
//         )}
//       </div>

//       <div className="panelButtons">
//         <input
//           type="submit"
//           value="Create Card"
//           disabled={Object.entries(errors).length ? true : false}
//         />
//         <input type="reset" value="Reset" />
//       </div>
//     </form>
//   );
// }
