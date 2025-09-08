import { useGetCareSeekerById } from "../../hooks/CareSeekers/useGetCareSeekersById.tsx"
import {
  faUser,
  faAddressBook,
  faAt,
  faPhone,
  faPenToSquare,
  faLocationDot,
  faClockRotateLeft,
  faCircleUser,
  faCircleInfo
} from "@fortawesome/free-solid-svg-icons";
import PanelCard from "../Cards/Panel/PanelCards.tsx";
import PanelCardButtons from "../Cards/Panel/PanelButtons.tsx";
import PanelCardField from "../Cards/Panel/PanelCardsFields.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CareSeekerPanelProps {
  userId: string
}

export default function CareSeekerPanel({ userId }: CareSeekerPanelProps) {
  const endpoint: string = '/api/careseeker';
  const { careSeeker, isLoading, error } = useGetCareSeekerById(userId, endpoint);

  if (isLoading) {
    return <p>Chargement</p>
  }
  if (error) {
    return <p>Erreur: {error.message}</p>
  }
  if (!careSeeker?.user) {
    return <p>User not found</p>
  }

  return (
    <>
      <p className="w-full text-center text-purple-700 text-xl my-5">Bonjour <strong>{careSeeker.user.firstName}</strong>
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
              mainText={careSeeker.user.firstName}
              secondaryText={careSeeker.user.lastName}
            />
            <PanelCardField
              labelIcon={<FontAwesomeIcon icon={faAt} size="1x" className="text-purple-700" />}
              mainText={careSeeker.user.email}
            />
            <PanelCardField
              labelIcon={<FontAwesomeIcon icon={faPhone} size="1x" className="text-purple-700" />}
              mainText={careSeeker.user.phoneNumber?.toString() ?? "N/A"}
            />
            <PanelCardField
              labelIcon={<FontAwesomeIcon icon={faLocationDot} size="1x" className="text-purple-700" />}
              mainText={careSeeker.adress?.toString() ?? "N/A"}
            />
            <PanelCardButtons
              buttons={[
                {
                  icon: <FontAwesomeIcon icon={faPenToSquare} size="2x" className="text-white" />,
                  label: "Modifier",
                  onClick: () => console.log("Modifier profil")
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
                  onClick: () => console.log("Modifier profil")
                }
              ]}
            />
          </PanelCard>
        </div>
      </div>
    </>
  );
}
