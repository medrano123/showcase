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
 
const SearchBar = ({ setManufacturer, setModel }) => {
    const [searchManufacturer, setSearchManufacturer] = useState('')
    const [searchModel, setSearchModel] = useState('')

    const router = useRouter();


    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (searchManufacturer.trim() === "" && searchModel.trim() === "") {
            return alert("Elements must not be empty");
        }
    
        setModel(searchModel);
        setManufacturer(searchManufacturer)
        // updateSearchParams(searchModel.toLowerCase(), searchManufacturer.toLowerCase());
    };

    // const updateSearchParams = (searchModel: string, manufacturer: string) => {
    //     const searchParams = new URLSearchParams(window.location.search)

    //     if(searchModel){
    //         searchParams.set('searchModel', searchModel)
    //     } else {
    //         searchParams.delete('searchModel')
    //     }

    //     if(searchModel){
    //         searchParams.set('manufacturer', manufacturer)
    //     } else {
    //         searchParams.delete('manufacturer')
    //     }    

    //     const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

    //     router.push(newPathname);
    // }
    
    return (
        <form 
            className='flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl'
            onSubmit={handleSearch}
        >
            <div className="flex-1 max-sm:w-full flex justify-start items-center relative">
                <SearchManufacturer
                    // manufacturer={searchManufacturer}
                    // setManufacturer={setSearchManufacturer}
                    selected={searchManufacturer}
                    setSelected={setSearchManufacturer}
                />
                <SearchButton otherClasses='sm:hidden' />
            </div>
            <div className="flex-1 max-sm:w-full flex justify-start items-center relative">
                <Image
                    src="/model-icon.png"
                    alt="car model"
                    height={25}
                    width={25}
                    className="absolute w-[20px] h-[20px] ml-4  "
                />
                <input
                    type='text'
                    name='model'
                    value={searchModel}
                    onChange={(e) => setSearchModel(e.target.value)}
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