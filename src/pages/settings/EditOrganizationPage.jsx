import { useSelector, useDispatch } from "react-redux";
import { useNavigate,useParams, Link} from "react-router-dom";
import OrganizationForm from "../../components/forms/OrganizationForm";
import { updateOrganization, } from "../../features/settings/settingsThunk";
import { IoArrowBack } from "react-icons/io5";

const EditOrganizationPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const organization = useSelector((state) =>
        state.settings.organizations.find((org) => String(org.id) === String(id))
    );

    const handleUpdate = async (data) => {
        await dispatch(
            updateOrganization({id,data,})
        ).unwrap();

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
                Edit Organization
            </h1>

            <OrganizationForm
                onSubmit={handleUpdate}
                defaultValues={organization}
            />
        </div>
    );
};

export default EditOrganizationPage;