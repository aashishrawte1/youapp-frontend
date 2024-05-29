import useBackNavigation from "../hooks/useBackNavigation";
import LeftArrowIcon from "./LeftArrowIcon"

export const BackButton = () => {
    const handleBack = useBackNavigation();
    return (
        <div onClick={handleBack} style={{display: 'flex', flexDirection: 'row'}}>
                    <LeftArrowIcon size="20px"/>
                    <span className="text-lg mb-4 ml-2">Back</span>
                </div>
    )
}