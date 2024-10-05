import Link from "next/link";
import React, { FC } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

type Props = {
    containerStyles?: any;
    linkStyles?: any;
    underlineStyles?: any;
    onLinkClick?: () => void;
};

const links = [
    { path: "/", name: "home" },
    { path: "/market", name: "market" },
    { path: "/company", name: "company" },
    { path: "/support", name: "support" },
];

const Nav: FC<Props> = ({ containerStyles, linkStyles, underlineStyles, onLinkClick, }) =>
{
    const path = usePathname();
    return (
        <nav className={`${containerStyles}`}>
            {links.map((link, index) =>
            {
                return (
                    <Link
                        href={link.path}
                        key={index}
                        className={` capitalize ${linkStyles}`}
                        onClick={onLinkClick}
                    >
                        {link.path === path && (
                            <motion.span
                                initial={{ y: "-100%" }}
                                animate={{ y: 0 }}
                                transition={{ type: "tween" }}
                                layoutId="underline"
                                className={`${underlineStyles}`}
                            />
                        )}
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    );
};

export default Nav;
