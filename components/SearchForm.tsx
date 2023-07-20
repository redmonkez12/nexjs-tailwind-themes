"use client";

import Image from "next/image";

import { useLoadingStore } from "@/state/loading";
import { getUserProfile, getUsers } from "@/services/users";
import { useProfileStore } from "@/state/profile";
import { Profile } from "@/components/Profile";

export function SearchForm() {
    const { setLoading, loading } = useLoadingStore();
    const { searchProfile, setProfile, profile, setSearchProfile } = useProfileStore();

    async function onSubmit() {
        setLoading(true);
        const user = await getUsers(searchProfile);

        if (user) {
            const login = user.login;
            const profile = await getUserProfile(login);

            const date = new Date(profile.created_at);
            const options = { year: "numeric", month: "short", day: "numeric" };
            // @ts-ignore
            const formatter = new Intl.DateTimeFormat("en-US", options);

            const parts = formatter.formatToParts(date);
            const formattedDate = `Joined ${parts[2].value} ${parts[0].value} ${parts[4].value}`;

            setProfile({
                avatar: user.avatar_url,
                username: login,
                profileUrl: user.html_url,
                repos: profile.public_repos,
                followers: profile.followers,
                following: profile.following,
                name: profile.name,
                createdAt: formattedDate,
                bio: profile.bio,
                company: profile.company,
                twitter: profile.twitter_username,
                blog: profile.blog,
                location: profile.location,
            });
        } else {
            setProfile(null);
        }

        setLoading(false);
    }

    return (
        <div>
            <div
                className={"input-wrapper rounded-2xl bg-white dark:bg-darkBlue flex items-center pr-2 pl-4"}>
                <Image src={"/images/icon-search.svg"} width={20} height={20} alt={"Search"}/>
                <input
                    className={"py-4 px-2 md:px-4 md:py-6 text-sm flex-1 outline-none bg-white dark:bg-darkBlue"}
                    placeholder={"Search GitHub username…"} type="text"
                    onChange={(e) => {
                        setProfile(undefined);
                        setSearchProfile(e.target.value);
                    }}/>
                <div className={`${profile === null ? "" : "invisible"} text-red pr-6`}>No results</div>
                <button onClick={onSubmit}
                        disabled={loading}
                        className={"text-white rounded-xl text-sm bg-blue font-bold px-4 md:py-4 md:px-7 py-3 hover:bg-lightBlue"}>Search
                </button>
            </div>
        </div>
    );
}