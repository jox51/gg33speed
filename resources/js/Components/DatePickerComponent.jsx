import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { router, usePage } from "@inertiajs/react";
import { useLoadingStore } from "@/store/loadingStore";

const DatePickerComponent = () => {
    const [value, setValue] = useState({
        startDate: new Date(),
        endDate: new Date().setMonth(11),
    });
    const loading = useLoadingStore((state) => state.loading);
    const { auth } = usePage().props;

    const handleValueChange = (newValue) => {
        setValue(newValue);
    };

    const handleDateSubmit = () => {
        router.post("/date", {
            value: value.startDate,
        });
        useLoadingStore.setState({ loading: true });
    };

    if (!auth.user || (auth.user.credits < 1 && !auth.user.is_admin)) {
        return (
            <div className="flex flex-col justify-center items-center">
                <button
                    type="button"
                    onClick={() => router.replace("/pay")}
                    className="inline-block bg-red-100 text-red-800 text-sm font-semibold px-4 py-2 rounded-lg"
                >
                    Purchase More Credits
                </button>
            </div>
        );
    }

    return (
        <div className="flex flex-col">
            <div className="flex flex-col justify-center space-between w-full h-lg text-slate-500">
                <Datepicker
                    asSingle={true}
                    useRange={false}
                    displayFormat={"MM/DD/YYYY"}
                    value={value}
                    onChange={handleValueChange}
                />
            </div>
            <button
                type="button"
                onClick={handleDateSubmit}
                className="rounded-md bg-green-600 px-6 py-2 my-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
                Submit
            </button>
        </div>
    );
};

export default DatePickerComponent;
