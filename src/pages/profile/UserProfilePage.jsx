import ProfileHeader from "../../components/profile/ProfileHeader";
import PersonalInfoForm from "../../components/profile/PersonalInfoForm";
import ProfessionalInfo from "../../components/profile/ProfessionalInfo";

const UserProfilePage = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-5xl mx-auto space-y-6">

                {/* Header */}
                <ProfileHeader />

                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* Left */}
                    <div className="lg:col-span-2">
                        <PersonalInfoForm />
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