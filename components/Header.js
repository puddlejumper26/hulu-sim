import {
    BadgeCheckIcon,
    CollectionIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
    HomeIcon
} from "@heroicons/react/outline"

import Image from "next/image"
import Link from 'next/link'
import HeaderItem from "./HeaderItem";

function Header() {

    const picUrl = 'https://links.papareact.com/ua6';

    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <HeaderItem title="HOME" Icon={HomeIcon} />
                <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
                <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
                <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
                <HeaderItem title="SEARCH" Icon={SearchIcon} />
                <HeaderItem title="USER" Icon={UserIcon} />
            </div>
            <Image
                className="object-contain"
                loader={() => picUrl}
                src={picUrl}
                width={200}
                height={100}
            />
        </header>
    )
}

export default Header