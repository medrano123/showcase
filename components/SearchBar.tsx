"use client"
import react, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { SearchManufacturer } from "./"

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
    <button type='submit' className={` z-10 ${otherClasses}`}>
        <Image
            src="/magnifying-glass.svg"
            alt="magnigying glass"
            width={40}
            height={40}
            className="object-contain"
        /> 
    </button>
)
 
const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState('')
    const [model, setModel] = useState('')

    const router = useRouter();


    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (manufacturer.trim() === "" && model.trim() === "") {
            return alert("Elements must not be empty");
        }
    
        updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
    };

    const updateSearchParams = (model: string, manufacturer: string) => {
        const searchParams = new URLSearchParams(window.location.search)

        if(model){
            searchParams.set('model', model)
        } else {
            searchParams.delete('model')
        }

        if(model){
            searchParams.set('manufacturer', manufacturer)
        } else {
            searchParams.delete('manufacturer')
        }    

        const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

        router.push(newPathname);
    }
    
    return (
        <form 
            className='flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl'
            onSubmit={handleSearch}
        >
            <div className="flex-1 max-sm:w-full flex justify-start items-center relative">
                <SearchManufacturer
                    manufacturer={manufacturer}
                    setManufacturer={setManufacturer}
                />
                <SearchButton otherClasses='sm:hidden' />
            </div>
            <div className="flex-1 max-sm:w-full flex justify-start items-center relative">
                <Image
                    src="/model-icon.png"
                    alt="car moddel"
                    height={25}
                    width={25}
                    className="absolute w-[20px] h-[20px] ml-4  "
                />
                <input
                    type='text'
                    name='model'
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    placeholder='Tiguan...'
                    className='w-full h-[48px] pl-12 p-4 bg-light-white rounded-r-full max-sm:rounded-full outline-none cursor-pointer text-sm'
                />
                <SearchButton otherClasses="sm:hidden"/>
            </div>
            <SearchButton otherClasses="max-sm:hidden"/>

        </form>
    )
}

export default SearchBar