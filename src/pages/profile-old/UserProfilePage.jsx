import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import ProfileForm from '../../components/forms/ProfileForm';
import ContactForm from '../../components/forms/ContactForm';

const UserProfilePage = () => {

    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth);
    const profile = useSelector(state => state.profile);

    const handleProfileSave = (data) => {
        // dispatch(updateProfile(data));
    };

    const handleContactsSave = (data) => {
        // dispatch(updateContacts(data));
    };

    return (
        <div className="p-6 space-y-6">

            <h1 className="text-2xl font-bold">
                My Profile
            </h1>

            <ProfileForm
                defaultValues={profile?.details}
                onSubmit={handleProfileSave}
            />

            {/* <ContactForm
                defaultValues={profile}
                onSubmit={handleContactsSave}
            /> */}
        </div>
    );
};

export default UserProfilePage;