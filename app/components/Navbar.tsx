"use client";

import { Button } from "@/components/ui/button"
import { 
    faDollar, 
    faEuroSign, 
    faYenSign
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import { faPoundSign } from "@fortawesome/free-solid-svg-icons/faPoundSign"
import { faCediSign } from "@fortawesome/free-solid-svg-icons/faCediSign"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons/faCaretDown"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping"
import { UserButton } from "@clerk/nextjs"
import { ModeToggle } from "@/components/mode-toggle"
import { CartNumber } from "./CartItems"

export const Navbar = () => {
    return (
        <div className="border border-b-white rounded-md">
            <div className="flex justify-evenly items-center py-5">
                <h2 className="font-bold text-3xl">Nii&apos;s Shop</h2>
                <div className="flex justify-between items-center">
                    <ModeToggle />
                    <div className="mx-3">
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <Button variant={"outline"}>
                                    <FontAwesomeIcon 
                                        icon={faDollar}
                                        size="lg"
                                        className="mx-2"
                                    />
                                    <p>Dollars</p>
                                    <FontAwesomeIcon
                                        icon={faCaretDown}
                                        size="lg"
                                        className="mx-2"
                                    />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>
                                    <FontAwesomeIcon 
                                        icon={faDollar}
                                        size="lg"
                                        className="mx-2"
                                    />
                                    <p>Dollars</p>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <FontAwesomeIcon 
                                        icon={faEuroSign}
                                        size="lg"
                                        className="mx-2"
                                    />
                                    <p>Euro</p>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <FontAwesomeIcon 
                                        icon={faPoundSign}
                                        size="lg"
                                        className="mx-2"
                                    />
                                    <p>Pound</p>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <FontAwesomeIcon 
                                        icon={faYenSign}
                                        size="lg"
                                        className="mx-2"
                                    />
                                    <p>Yen</p>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <FontAwesomeIcon 
                                        icon={faCediSign}
                                        size="lg"
                                        className="mx-2"
                                    />
                                    <p>Cedi</p>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <FontAwesomeIcon 
                        icon={faCartShopping}
                        size="xl"
                        className="mx-3"
                    />
                    <UserButton afterSignOutUrl="/" />
                </div>
            </div>
            <CartNumber />
        </div>
    )
}