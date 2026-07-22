"use client";

import { useForm } from "react-hook-form";
import { createClient } from "@/lib/supabase/client";
import {type RegistrationFormData} from "@/workshop-dashboard/types/workshop";
import { registerWorkshop } from "@/actions/workshop";

export default function RegistrationForm() {

    const inputStyles =
  "w-full rounded-xl border border-slate-700 bg-transparent px-4 py-3 outline-none transition focus:border-blue-500";
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormData>();

const onSubmit = async (data: RegistrationFormData) => {
  try {
    await registerWorkshop(data);

    console.log("Registration saved!");
  } catch (error) {
    console.error(error);
  }
};

  return (
    <section
      id="registration"
      className="py-32 px-6 border-t border-slate-800"
    >
      <div className="max-w-3xl mx-auto">

        {/* Section Label */}

        <p className="uppercase tracking-[0.3em] text-blue-400 font-semibold text-center mb-8">
          Registration
        </p>

        {/* Heading */}

        <h2 className="text-center font-bold leading-tight text-[clamp(2rem,4.5vw,3.5rem)]">
          Register your interest.
        </h2>

        {/* Intro */}

        <p className="mt-10 text-center text-lg md:text-xl text-slate-300 leading-relaxed">
          Complete the form below to register your interest in an upcoming
          CookieSensei workshop. Payment instructions will be shared after we
          receive your registration.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-20 space-y-16"
        >

          {/* We'll build this next */}
          <div>

            <h3 className="text-xl font-semibold mb-6">
                Personal Information
            </h3>

            <section className="space-y-6">

                <div>
                <label htmlFor="fullName" className="block mb-2">
                    Full Name
                </label>

                <input
                    {...register("fullName", {
                        required: "Full name is required.",
                        })}
                    type="text"
                    className={inputStyles}
                    placeholder="John Doe"
                />
                {errors.fullName && (
                    <p className="mt-2 text-sm text-red-400">
                        {errors.fullName.message}
                    </p>
                    )}
                </div>

                <div>
                <label htmlFor="email" className="block mb-2">
                    Email Address
                </label>

                <input
                    {...register("email", {
                        required: "Email address is required.",
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Enter a valid email address.",
                        },
                        })}
                    type="email"
                    className={inputStyles}
                    placeholder="john@email.com"
                />

                {errors.email && (
                    <p className="mt-2 text-sm text-red-400">
                        {errors.email.message}
                    </p>
                    )}
                </div>

            </section>

            </div>

            <section>

            <h3 className="text-xl font-semibold mb-6">
                GitHub
            </h3>

            <label htmlFor="githubUsername" className="block mb-2">
                GitHub Username
            </label>

            <input
                {...register("githubUsername", {
                    required: "GitHub username is required.",
                    })}
                type="text"
                className={inputStyles}
                placeholder="johndoe"
            />

            {errors.githubUsername && (
                <p className="mt-2 text-sm text-red-400">
                    {errors.githubUsername.message}
                </p>
                )}

            <p className="mt-3 mb-10 text-sm text-slate-400 leading-relaxed">
                This account will be invited to the CookieSensei Workshop GitHub
                Organization after payment confirmation, giving you access to workshop
                resources and our cloud development labs.
            </p>

            </section>

            <section>

            <h3 className="text-xl font-semibold mb-6">
                Workshop
            </h3>

            <select
            {...register("workshopId", {
                required: "Please select a workshop.",
            })}
            className={inputStyles}
            >
            <option value="">
                Select Workshop
            </option>
            

            
            <option
                value="1"
                className="bg-slate-900 text-white"
                >
                From Idea to a Live Website
                </option>
            </select>

            {errors.workshopId && (
                <p className="mt-2 text-sm text-red-400">
                    {errors.workshopId.message}
                </p>
            )}

            </section>

            <section className="border-t border-slate-800 pt-10">
            <div className="flex gap-3">

                <input
                    id="agreement"
                    type="checkbox"
                    {...register("agreement", {
                        required:
                            "Please confirm that you understand the workshop requirements.",
                    })}
                    className="mt-1 shrink-0"
                />

                <div>

                    <label
                        htmlFor="agreement"
                        className="text-slate-300 cursor-pointer"
                    >
                        I understand that workshop participation requires payment
                        confirmation and a GitHub account.
                    </label>

                    {errors.agreement && (
                        <p className="mt-2 text-sm text-red-400">
                            {errors.agreement.message}
                        </p>
                    )}

                </div>

            </div>
            </section>
            <div className="pt-4">
                <button
                type="submit"
                className="w-full rounded-xl bg-blue-500 px-8 py-4 font-semibold text-white transition hover:bg-blue-600"
                >
                Continue to Registration
                </button>
            </div>
        </form>

      </div>
    </section>
  );
}