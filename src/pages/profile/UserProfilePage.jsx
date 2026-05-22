import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchProfile,
    updateUserDetails,
    updateUserContacts,
} from "../../features/profile/profileThunk";
import toast from "react-hot-toast";
import ProfileHeader from "../../components/profile/ProfileHeader";
import PersonalInfoForm from "../../components/forms/PersonalInfoForm";
import ContactInfoForm from "../../components/forms/ContactInfoForm";
import ProfessionalInfo from "../../components/profile/ProfessionalInfo";
import { splitComplexName } from '../../helpers/nameSplitting';

const UserProfilePage = () => {
    const dispatch = useDispatch();
    const {
        user_details,
        user_contacts,
        loading,
    } = useSelector(
        (state) => state.profile
        );
    
    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(fetchProfile());
    }, [dispatch]);

    // Personal
    const handlePersonalSubmit = async (data) => {
        try {
            const names = splitComplexName(data.full_name);
            await dispatch(updateUserDetails({
                id: crypto.randomUUID(),
                user_id: user.id,

                ...data,

                first_name: names.firstName,
                last_name: names.lastName,
                dob: data.dob
                    ? new Date(data.dob)
                        .toISOString()
                        .split("T")[0]
                    : "",

                joining_date: data.joining_date
                    ? new Date(data.joining_date)
                        .toISOString()
                        .split("T")[0]
                    : "",
            })).unwrap();
            toast.success("User profile updated");
        } catch (error) {
            toast.error(error?.message || "User profile updation failed");
        }
        
    };

    // Contacts
    const handleContactSubmit = async (data) => {
        try {
            const contacts = data.contacts.map((contact) => ({
                id: crypto.randomUUID(),
                user_id: user.id,
                user_detail_id: user_details?.id,
                ...contact,
            }));

            await dispatch(
                updateUserContacts(contacts)
            ).unwrap();

            toast.success("User contact added");
        } catch (error) {
            toast.error(error?.message || "User contact added failed");            
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">

            <div className="max-w-6xl mx-auto space-y-6">

                {/* Header */}
                <ProfileHeader />

                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* Left */}
                    <div className="lg:col-span-2 space-y-6">

                        <PersonalInfoForm
                            defaultValues={user_details}
                            onSubmit={handlePersonalSubmit}
                            loading={loading}
                        />

                        <ContactInfoForm
                            defaultValues={{
                                contacts: user_contacts,
                            }}
                            onSubmit={handleContactSubmit}
                        />

                    </div>

                    {/* Right */}
                    <div>

                        <ProfessionalInfo />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfilePage;