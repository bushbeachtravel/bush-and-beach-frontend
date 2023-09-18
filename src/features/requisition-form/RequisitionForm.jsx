import { useState } from 'react';
import 'react-gallery-carousel/dist/index.css';
import {
  Button
} from '@material-tailwind/react';
import { useForm } from 'react-hook-form';
import { Label, Textarea } from 'flowbite-react';

import { PhoneNumberUtil } from 'google-libphonenumber';

import 'react-phone-number-input/style.css'
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { parsePhoneNumber } from 'react-phone-number-input';
import { countries } from 'countries-list';


const phoneUtil = PhoneNumberUtil.getInstance();

const isPhoneValid = (phone) => {
  try {
    return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone))
  } catch (error) {
    return false;
  }
}

const phoneCountryName = (phone) => {
  const name = parsePhoneNumber(phone)
  try {
    return countries[name.country]
  } catch (error) {
    return;
  }
}
const RequisitionForm = () => {
  const [phone, setPhone] = useState()
  const { register, handleSubmit, reset } = useForm();
  const isValid = isPhoneValid(phone);
  const today = new Date().toISOString().split('T')[0]

  const onSubmit = (data) => {
    const countryName = phoneCountryName(phone)
    console.log(data, phone, countryName.name);
    reset();
  }

  return (
    <>
      <form
        className="mt-4 mb-2 w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4 flex flex-col gap-6">
          <label className="font-poppins">Enter Your full name</label>
          <input
            {...register("FullName", { required: true, maxLength: 100 })}
            placeholder="John Doe"
            type="text"
            className="font-poppins"
             />
          <label className="font-poppins">Enter your email address</label>
          <input
            {...register("email", { required: true })}
            placeholder="johndoe@gmail.com"
            type="email"
          />
          <label className="font-poppins">Enter your mobile phone number</label>
          <PhoneInput
            placeholder="Enter phone number"
            defaultCountry='ke'
            value={phone}
            onChange={(value) => setPhone(value)}
          />
          {!isValid && <div style={{ color: 'red' }}>Phone number is not valid</div>}
          <label className="font-poppins">Set travel Date</label>
          <input {...register("travelDate", { required: true })} type="date" min={today} />
          <label className="font-poppins">Set the Number of adults(12+yrs)</label>
          <input {...register("numberOfAdults", { required: true })} type="number" min={1} max={100} />
          <label className="font-poppins">Set the Number of children(3+yrs)</label>
          <input {...register("numberOfChildren", { required: true })} type="number" min={1} max={100} />
          <label className="font-poppins">Select mode of Transpot</label>
          <select {...register("selectOption", { required: true })} className="font-poppins">
            <option value="" disabled>Select an option</option>
            <option value="Tour Van" className="font-poppins">Tour Van</option>
            <option value="Land Cruiser" className="font-poppins">Land Cruiser</option>
          </select>
          <div
            className="max-w-md"
            id="textarea"
          >
            <div className="mb-2 block">
              <Label
                htmlFor="comment"
                value="Your message"
                className="font-poppins"
              />
            </div>
            <Textarea
              id="comment"
              placeholder="Leave your message..."
              required
              rows={4}
              {...register("message", { required: true })}
              className="font-poppins"
            />
          </div>
        </div>
        <Button
          type="submit"
          disabled={!isValid}
        >
          Send enquiry
        </Button>
      </form>
    </>
  );
};

export default RequisitionForm;
