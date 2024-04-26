import { useEffect } from "react";
import {
    GiAbstract020,
    GiAbstract024,
    GiAbstract041,
    GiAbstract104,
} from "react-icons/gi";
import { usePage } from "@inertiajs/react";
import DatePickerComponent from "./DatePickerComponent";
import { BallTriangle } from "react-loader-spinner";
import { useLoadingStore } from "@/store/loadingStore";

function Card1({ heading, description, icon, className }) {
    return (
        <div className={`flex gap-4 rounded-xl shadow-sm p-6 ${className}`}>
            <div className="min-w-max text-4xl">{icon}</div>
            <div className="space-y-2">
                <h3 className="text-[22px] font-semibold">{heading}</h3>
                <p className="leading-8 text-gray-500 font-normal">
                    {description}
                </p>
            </div>
        </div>
    );
}

function ReadingDetails() {
    const { payment, userDetails, auth } = usePage().props;
    const loading = useLoadingStore((state) => state.loading);

    const loadingStateChange = (val) => {
        useLoadingStore.setState({ loading: val });
    };

    const paymentMsg = payment?.payment;

    // Update loading state when userDetails is null
    useEffect(() => {
        if (userDetails === null) {
            loadingStateChange(true);
        } else {
            loadingStateChange(false);
        }
    }, [userDetails]);

    return (
        <div className="flex justify-center items-center flex-col ">
            {paymentMsg ? (
                <div className="mb-4 p-3 bg-green-200 text-green-800 rounded-md">
                    {paymentMsg} {/* Display the payment success message */}
                </div>
            ) : null}

            {/* {!loading ? <DatePickerComponent /> : null} */}
            {(!loading && auth.user && auth.user.credits > 0) ||
            (!loading && auth.user && auth.user.is_admin) ? (
                <>
                    <div className="text-center mt-4 mb-2">
                        <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-2 rounded-lg">
                            Credits:{" "}
                            {auth.user.is_admin ? "Admin" : auth.user.credits}
                        </span>
                    </div>
                    <DatePickerComponent />
                </>
            ) : (
                <div className="text-center mt-4 mb-2">
                    {!loading ? <DatePickerComponent /> : null}
                </div>
            )}

            {/* Show loading indicator only when loading is true */}
            {loading && <BallTriangle height={80} width={80} />}

            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 p-3 sm:p-8">
                {/* Numerology Cards */}
                {userDetails && !loading ? (
                    <>
                        <Card1
                            className="bg-green-100"
                            heading={`Lifepath Number ${userDetails.lifepath}`}
                            description={userDetails.reading.Lifepath}
                            icon={userDetails.lifepathEmoji}
                        />
                        <Card1
                            className="bg-[#fefaf0]"
                            heading={`Bornday Number ${userDetails.bornday}`}
                            description={userDetails.reading.Bornday}
                            icon={userDetails.borndayEmoji}
                        />
                        <Card1
                            className="bg-[#fefaf0]"
                            heading={`Chinese Zodiac: ${userDetails.zodiac}`}
                            description={userDetails.reading.ChineseZodiac}
                            icon={userDetails.zodiacEmoji}
                        />
                        {/* <Card1
                            className="bg-green-100"
                            heading={`Western Zodiac: ${userDetails.westernZodiac}`}
                            description={userDetails.todaysHoroscope}
                            icon={userDetails.westZodiacEmoji}
                        /> */}
                    </>
                ) : null}
            </div>

            {userDetails && !loading && (
                <div className="bg-blue-200 text-blue-900 text-center p-4 rounded-lg mt-4 max-w-4xl">
                    <p>
                        <span>
                            <GiAbstract041
                                size="2.5rem"
                                className="text-[#269FFF] my-4"
                            />
                        </span>
                        For a deeper reading where you can learn how to manifest
                        the fullest potential of your energy and avoid pitfalls
                        and obstacles in both your personal, professional, and
                        social life, contact one of the GG33 readers from the
                        {"   "}
                        <a
                            href="https://gg33-now.company.site/GG33-Expert-Readings-c151596812"
                            className="underline text-blue-600 hover:text-blue-800"
                            target="_blank"
                        >
                            GG33 Official Reader List
                        </a>
                        .
                    </p>
                </div>
            )}
        </div>
    );
}

export default ReadingDetails;
