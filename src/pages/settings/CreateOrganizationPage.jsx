import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import OrganizationForm from "../../components/forms/OrganizationForm";
import { addOrganization, } from "../../features/settings/settingsThunk";
import { IoArrowBack } from "react-icons/io5";

const CreateOrganizationPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleCreate = async (data) => {
        await dispatch(addOrganization(data)).unwrap();
        navigate("/edu/settings");
    };

    return (
        <div className="bg-white p-6 rounded-xl shadow">

            <Link
                to="/edu/settings"
                className="inline-flex items-center gap-2 text-gray-500 mb-4"
            >
                <IoArrowBack />
                Go back
            </Link>

            <h1 className="text-2xl font-bold mb-6">
                Create Organization
            </h1>

            <OrganizationForm
                onSubmit={handleCreate}
            />
        </div>
    );
};

export default CreateOrganizationPage;