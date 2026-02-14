'use client'
import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrorMsg from '../error-msg';

type FormData = {
  name: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
};

const schema = yup.object({
  name: yup.string().required().label("Name / Surname"),
  company: yup.string().required().label("Company Name"),
  projectType: yup.string().required().label("Project Type"),
  budget: yup.string().required().label("Estimated Budget"),
  message: yup.string().required().label("Message"),
}).required();

// prop type 
type IProps = {
  btnCls?: string;
}
export default function ContactForm({ btnCls = '' }: IProps) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = handleSubmit((data: FormData) => {
    alert(JSON.stringify(data))
    reset()
  });
  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="col-md-6">
          <div className="cn-contactform-input mb-25">
            <label>Name / Surname</label>
            <input id='name' {...register("name")} type="text" placeholder="Your full name" />
            <ErrorMsg msg={errors.name?.message!} />
          </div>
        </div>
        <div className="col-md-6">
          <div className="cn-contactform-input mb-25">
            <label>Company Name</label>
            <input id='company' {...register("company")} type="text" placeholder="B2B / Architecture Firm / Entity" />
            <ErrorMsg msg={errors.company?.message!} />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="cn-contactform-input mb-25">
            <label>Project Type</label>
            <select id='projectType' {...register("projectType")} style={{ width: '100%', padding: '15px', borderRadius: '4px', border: '1px solid #ddd' }}>
              <option value="">Select Project Type</option>
              <option value="Hotel / Hospitality">Hotel / Hospitality</option>
              <option value="Restaurant / Cafe">Restaurant / Cafe</option>
              <option value="Residential Project (Villa/Apartment)">Residential Project (Villa/Apartment)</option>
              <option value="Retail / Store">Retail / Store</option>
            </select>
            <ErrorMsg msg={errors.projectType?.message!} />
          </div>
        </div>
        <div className="col-md-6">
          <div className="cn-contactform-input mb-25">
            <label>Estimated Budget (Optional)</label>
            <input id='budget' {...register("budget")} type="text" placeholder="Approximate budget in EUR" />
            <ErrorMsg msg={errors.budget?.message!} />
          </div>
        </div>
      </div>

      <div className="cn-contactform-input mb-25">
        <label>Message</label>
        <textarea id='message' {...register("message")} placeholder="Tell us about your vision..."></textarea>
        <ErrorMsg msg={errors.message?.message!} />
      </div>
      <div className="cn-contactform-btn">
        <button className={`tp-btn-black-md ${btnCls} w-100`} type="submit">
          Send Message
        </button>
      </div>
    </form>
  );
}
