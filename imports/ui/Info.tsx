import React, { useEffect, useState } from "react";
import { Link } from "../api/links";
import { getLinks } from "../methods/links";

export const Info = () => {
    const [links, setLinks] = useState<Array<Link>>([]);
    useEffect(() => {
        getLinks({}).then((links) => {
            setLinks(links);
        });
    });

    return (
        <div>
            <h2>Learn Meteor!</h2>
            <ul>
                {links.map((link) => (
                    <li key={link._id}>
                        <a href={link.url} target="_blank">
                            {link.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};
