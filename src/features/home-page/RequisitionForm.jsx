import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import 'react-gallery-carousel/dist/index.css';
import {
  Button, Typography
} from '@material-tailwind/react';
import { Label, TextInput, Textarea, Select } from 'flowbite-react';

import { PhoneNumberUtil } from 'google-libphonenumber';

import 'react-phone-number-input/style.css'
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { parsePhoneNumber } from 'react-phone-number-input';
import { countries } from 'countries-list';

import { requisitionMessageAsync } from '@state-management/messagesSlice';


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
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();
  const isValid = isPhoneValid(phone);
  const today = new Date().toISOString().split('T')[0]

  const sendMessageToFormSpree = (data) => {
    const countryName = phoneCountryName(phone)
    const formData = new FormData();
    formData.append('Full name', data.fullName);
    formData.append('Email', data.email);
    formData.append('Mobile number', phone);
    formData.append('Country', countryName.name)
    formData.append('Travel date', data.travelDate);
    formData.append('Number of adults', data.numberOfAdults)
    formData.append('Number of children', data.numberOfChildren)
    formData.append('Transportaion option', data.transportationOption);
    formData.append('Message', data.message)
    dispatch(requisitionMessageAsync(formData));
    reset();
  }


  return (
    <>
      <form
        className="mt-4 mb-2 w-full"
        onSubmit={handleSubmit(sendMessageToFormSpree)}
      >
        <div className="mb-4 flex flex-col gap-6">
          <div>
            <div className="mb-2 block">
              <Label value="Full Name" className="font-poppins" />
              <TextInput
                {...register("fullName", { required: true, maxLength: 100 })}
                placeholder="John Doe"
                type="text"
                className="font-poppins"
              />
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <Label value="Your email" className="font-poppins" />
              <TextInput
                {...register("email", { required: true })}
                placeholder="johndoe@gmail.com"
                type="email"
              />
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <Label value="Enter mobile number" className="font-poppins" />
              <PhoneInput
                placeholder="Enter phone number"
                defaultCountry='ke'
                value={phone}
                onChange={(value) => setPhone(value)}
                className="max-w-md"
              />
              {!isValid &&
                <div style={{ color: 'red' }}>
                  <Typography variant="small" className="font-poppins">
                    Phone number is not valid
                  </Typography>
                </div>
              }
            </div>
          </div>

          <div>
            <div className="mb-2 block">
              <Label value="Select travel Date" className="font-poppins" />
              <TextInput
                {...register("travelDate", { required: true })}
                type="date" min={today}
              />
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <Label value="Set the Number of adults(12+yrs)" className="font-poppins" />
              <TextInput
                {...register("numberOfAdults", { required: true })}
                type="number" min={1} max={100}
              />
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <Label className="font-poppins" value="Set the Number of children(3+yrs)" />
              <TextInput
                {...register("numberOfChildren", { required: true })}
                type="number" min={1} max={100}
              />
            </div>
          </div>
          <div className="max-w-md">
            <div className="mb-2 block">
              <Label className="font-poppins" value="Select mode of transport" />
            </div>
            <Select
              {...register("transportationOption", { required: true })}
              className="font-poppins"
            >
              <option value="" disabled selected>Select</option>
              <option value="Tour Van" className="font-poppins">Tour Van</option>
              <option value="Land Cruiser" className="font-poppins">Land Cruiser</option>
            </Select>
          </div>
          <div
            className="max-w-md"
            id="textarea"
          >
            <div className="mb-2 block">
              <Label
                htmlFor="message"
                value="Your message"
                className="font-poppins"
              />
            </div>
            <Textarea
              id="message"
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
          color="blue"
        >
          Send requisition
        </Button>
      </form >
    </>
  );
};

export default RequisitionForm;
