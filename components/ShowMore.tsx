"use client"
import { useRouter } from "next/navigation"

import { ShowMoreProps } from "@/types"
import { CustomButton } from "@/components"
import { updateSearchParams } from "@/utils"

const ShowMore = ({ pageNumber, isNext, setLimit }: ShowMoreProps ) => {
    const router = useRouter();

    const handleNavigation = () => {
        const newLimit = (pageNumber + 1) * 10;
        // const newPathname = updateSearchParams("limit", `${newLimit}`);
        // router.push(newPathname);
        setLimit(newLimit)
    } 

    return (
        <div className="w-fu ll flex-center gap-5 mt-10">
            {!isNext && (
                <CustomButton
                    title="Show more"
                    buttonType="button"
                    containerStyles="bg-primary-blue rounded-full text-white"
                    handleClick={handleNavigation}
                />
            )}

        </div>
    )
}

export default ShowMore