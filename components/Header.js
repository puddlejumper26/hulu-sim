import Image from "next/image"
import Link from 'next/link'
import HeaderItem from "./HeaderItem";

function Header() {

    const picUrl = 'https://links.papareact.com/ua6';

    return (
        <header>
            <HeaderItem />
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