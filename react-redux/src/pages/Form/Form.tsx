// import React, { useState, useContext, useEffect } from 'react';
// import { useForm, SubmitHandler } from 'react-hook-form';
// import { UserName } from 'components/UserName/UserName';
// import { Avatar } from 'components/Avatar/Avatar';
// import { Birthday } from 'components/Birthday/Birthday';
// import { Country } from 'components/Country/Country';
// import { Gender } from 'components/Gender/Gender';
// import { Agreement } from 'components/Agreement/Agreement';
// import { AppContext } from 'App';
// import './Form.css';

// type FormValues = {
//   fname: string;
//   lname: string;
//   dob: string;
//   country: string;
//   gender: string;
//   avatar: File[];
//   agreement: string;
// };

// export default function Form() {
//   const myContext = useContext(AppContext);
//   const { state, dispatch } = myContext;

//   const [showCreateCardMes, setShowCreateMes] = useState<boolean>(false);

//   const {
//     register,
//     handleSubmit,
//     reset,
//     getValues,
//     formState: { errors },
//     setValue,
//   } = useForm<FormValues>();

//   useEffect(() => {
//     if (!state.initialForm) {
//       setValue('fname', state.formValues.fname);
//       setValue('lname', state.formValues.lname);
//       setValue('dob', state.formValues.dob);
//       setValue('country', state.formValues.country);
//       setValue('gender', state.formValues.gender);
//       setValue('agreement', state.formValues.agreement);
//       if (state.formValues.avatar) {
//         setValue('avatar', [state.formValues.avatar[0]]);
//       }
//     }

//     return () => {
//       dispatch({
//         type: 'formValues',
//         payload: {
//           ...state,
//           formValues: getValues(),
//         },
//       });
//     };
//   }, []);

//   const onChange = () => {
//     if (state.initialForm) {
//       dispatch({
//         type: 'initialForm',
//         payload: {
//           ...state,
//           initialForm: false,
//         },
//       });
//     }
//   };

//   const onSubmit: SubmitHandler<FormValues> = (data) => {
//     const userAvatar = URL.createObjectURL(data.avatar[0]);
//     dispatch({
//       type: 'form-cards',
//       payload: {
//         ...state,
//         formCards: [
//           ...state.formCards,
//           {
//             firstName: data.fname,
//             lastName: data.lname,
//             birthday: data.dob,
//             country: data.country,
//             gender: data.gender ? 'Female' : 'Male',
//             avatar: userAvatar,
//           },
//         ],
//       },
//     });
//     setShowCreateMes(true);
//     dispatch({
//       type: 'initialForm',
//       payload: {
//         ...state,
//         initialForm: true,
//       },
//     });

//     setTimeout(() => {
//       setShowCreateMes(false);
//     }, 1500);

//     reset();
//   };

//   return (
//     <form id="createCardForm" onSubmit={handleSubmit(onSubmit)} onChange={onChange}>
//       <p className="createCardMes" style={{ opacity: showCreateCardMes ? '100%' : '0' }}>
//         The card was created.
//       </p>
//       <UserName
//         name="fname"
//         label="First Name"
//         register={register}
//         rules={{ required: true, minLength: 2 }}
//         errors={errors}
//         errorMessage="First Name schould contain more than 1 letter."
//       />
//       <UserName
//         name="lname"
//         label="Last Name"
//         register={register}
//         rules={{ required: true, minLength: 2 }}
//         errors={errors}
//         errorMessage="Last Name schould contain more than 1 letter."
//       />
//       <Birthday name="dob" register={register} rules={{ required: true }} errors={errors} />
//       <Country name="country" register={register} rules={{ required: true }} errors={errors} />
//       <Gender name="gender" register={register} errors={errors} />
//       <Avatar name="avatar" register={register} rules={{ required: true }} errors={errors} />
//       <Agreement name="agreement" register={register} rules={{ required: true }} errors={errors} />
//       <div className="panelButtons">
//         <input
//           type="submit"
//           value="Create Card"
//           disabled={state.initialForm || Object.entries(errors).length ? true : false}
//         />
//         <input type="reset" value="Reset" />
//       </div>
//     </form>
//   );
// }
