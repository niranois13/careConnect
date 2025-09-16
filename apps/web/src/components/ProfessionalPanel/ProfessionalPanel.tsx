import {
  faAddressBook,
  faAt,
  faCircleInfo,
  faCircleUser,
  faClockRotateLeft,
  faPenToSquare,
  faPhone,
  faUser,
  faLocationDot
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useGetProfessionalById } from "../../hooks/Professionals/useGetProfessionalsById.tsx"
import PanelCardButtons from "../Cards/Panel/PanelButtons.tsx";
import PanelCard from "../Cards/Panel/PanelCards.tsx";
import PanelCardField from "../Cards/Panel/PanelCardsFields.tsx";

interface ProfessionalPanelProps {
  userId: string
}

export default function ProfessionalPanel({ userId }: ProfessionalPanelProps) {
  const endpoint: string = '/api/professional';
  const { professional, isLoading, error } = useGetProfessionalById(userId, endpoint);

  if (isLoading) {
    return <p>Chargement</p>
  }
  if (error) {
    return <p>Erreur: {error.message}</p>
  }
  if (!professional?.user) {
    return <p>User not found</p>
  }

  return (
    <>
      <p className="w-full text-center text-purple-700 text-xl my-5">Bonjour <strong>{professional.user.firstName}</strong>
      </p>

      <div className="flex justify-center flex-wrap gap-x-10 gap-y-5">
        {/* Profile Card */}
        <div className="min-w-[25%]">
          <PanelCard
            icon={<FontAwesomeIcon icon={faAddressBook} size="2x" className="text-purple-700" />}
            title="Profil"
          >
            <PanelCardField
              labelIcon={<FontAwesomeIcon icon={faUser} size="1x" className="text-purple-700" />}
              mainText={professional.user.firstName}
              secondaryText={professional.user.lastName}
            />
            <PanelCardField
              labelIcon={<FontAwesomeIcon icon={faAt} size="1x" className="text-purple-700" />}
              mainText={professional.user.email}
            />
            <PanelCardField
              labelIcon={<FontAwesomeIcon icon={faPhone} size="1x" className="text-purple-700" />}
              mainText={professional.user.phoneNumber?.toString() ?? "N/A"}
            />
            <PanelCardField
              labelIcon={<FontAwesomeIcon icon={faLocationDot} size="1x" className="text-purple-700" />}
              mainText={(professional.user.address[0].street ?? "") && (professional.user.address[0].postalCode ?? "")}
              secondaryText={professional.user.address[0].city}
            />
            <PanelCardButtons
              buttons={[
                {
                  icon: <FontAwesomeIcon icon={faPenToSquare} size="2x" className="text-white" />,
                  label: "Modifier",
                  onClick: () => { console.log("Modifier profil"); }
                }
              ]}
            />
          </PanelCard>
        </div>

        {/* Appointment History Card */}
        <div className="min-w-[25%]">
          <PanelCard
            icon={<FontAwesomeIcon icon={faClockRotateLeft} size="2x" className="text-purple-700" />}
            title="Anciens RDV"
          >
            <PanelCardField
              labelIcon={<FontAwesomeIcon icon={faCircleUser} size="1x" className="text-purple-700" />}
              mainText="Place"
              secondaryText="Holder"
              optionIcons={[<FontAwesomeIcon icon={faCircleInfo} size="1x" className="text-purple-700" />]}
            />
            <PanelCardButtons
              buttons={[
                {
                  icon: <FontAwesomeIcon icon={faPenToSquare} size="2x" className="text-white" />,
                  label: "Voir plus",
                  onClick: () => { console.log("Modifier profil"); }
                }
              ]}
            />
          </PanelCard>
        </div>
      </div>
    </>
  );
}
