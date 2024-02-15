'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const User = () => {

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const setToggleDropdown = () => {
        setDropdownOpen(prev => !prev);
    };
    
    return (
        <>
            <div className=" relative">
                <div className="flex">
                    <Image 
                        src="/avt.png"
                        width={37}
                        height={37}
                        className="rounded-full"
                        alt="profile"
                        onClick={setToggleDropdown} 
                    />

                    {dropdownOpen && (
                        <div className="dropdown ">
                            <Link
                                href="/"
                                className="dropdown_link"
                                onClick={() => setDropdownOpen(false)}
                            >
                                My Profile
                            </Link>
                            <Link
                                href="/"
                                className="dropdown_link"
                                onClick={() => setDropdownOpen(false)}
                            >
                                Apply certificate
                            </Link>
                            <Link
                                href="/"
                                className="dropdown_link"
                                onClick={() => setDropdownOpen(false)}
                            >
                                Log out
                            </Link>
                    
                    
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default User;
