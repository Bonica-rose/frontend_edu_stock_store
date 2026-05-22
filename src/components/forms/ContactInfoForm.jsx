import  { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "../../validation/profileSchema";

const ContactInfoForm = ({
    defaultValues,
    onSubmit,
}) => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(contactSchema),
        defaultValues: {
            contacts: [
                {
                    usage_type: "personal",
                    contact_type: "email",
                    value: "",
                    is_primary: true,
                },
                {
                    usage_type: "personal",
                    contact_type: "mobile",
                    value: "",
                    is_primary: true,
                },
                {
                    usage_type: "official",
                    contact_type: "email",
                    value: "",
                    is_primary: false,
                },
                {
                    usage_type: "official",
                    contact_type: "mobile",
                    value: "",
                    is_primary: false,
                },
            ],
        },
    });

    useEffect(() => {
        if (defaultValues?.contacts?.length) {
            reset({ contacts: defaultValues.contacts });
        }
    }, [defaultValues, reset]);

    return (
        <div className="bg-white rounded-xl shadow-sm p-6">

            <h2 className="text-2xl font-bold mb-5">
                Contact Information
            </h2>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
            >

                {/* Personal Contacts */}
                <div>

                    <h3 className="text-lg font-semibold mb-4">
                        Personal Contacts
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        {/* Personal Email */}
                        <div>
                            <label className="block mb-2 font-medium">
                                Personal Email
                            </label>

                            <input
                                type="email"
                                {...register("contacts.0.value")}
                                className="w-full border rounded-lg px-4 py-2"
                                placeholder="personal@email.com"
                            />
                        </div>

                        {/* Personal Mobile */}
                        <div>
                            <label className="block mb-2 font-medium">
                                Personal Mobile
                            </label>

                            <input
                                type="text"
                                {...register("contacts.1.value")}
                                className="w-full border rounded-lg px-4 py-2"
                                placeholder="+91 9876543210"
                            />
                        </div>
                    </div>
                </div>

                {/* Official Contacts */}
                <div>

                    <h3 className="text-lg font-semibold mb-4">
                        Official Contacts
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        {/* Official Email */}
                        <div>
                            <label className="block mb-2 font-medium">
                                Official Email
                            </label>

                            <input
                                type="email"
                                {...register("contacts.2.value")}
                                className="w-full border rounded-lg px-4 py-2"
                                placeholder="official@company.com"
                            />
                        </div>

                        {/* Official Mobile */}
                        <div>
                            <label className="block mb-2 font-medium">
                                Official Mobile
                            </label>

                            <input
                                type="text"
                                {...register("contacts.3.value")}
                                className="w-full border rounded-lg px-4 py-2"
                                placeholder="+91 9876543210"
                            />
                        </div>
                    </div>
                </div>

                <button
                    type="submit"
                    className="
                        bg-blue-900 hover:bg-blue-800
                        text-white px-4 py-2
                        rounded-lg
                    "
                >
                    Save Contacts
                </button>
            </form>
        </div>
    );
};

export default ContactInfoForm;