"use client";

import Image from "next/image";
import { useProfileStore } from "@/state/profile";

export function Profile() {
    let { profile } = useProfileStore();

    profile = profile || {};

    return (
        <article
            className={`md:w-[35.813rem] lg:w-[45.625rem] px-6 md:px-10 lg:px-12
                pt-8 md:pt-10 md:pb-10 pb-12 bg-white dark:bg-darkBlue rounded-2xl w-full flex flex-col items-end ${profile.avatar ? "" : "invisible"}`}>
            <div className={"flex gap-4 md:gap-10 w-full"}>
                <div className={"relative h-[4.375rem] w-[4.375rem] md:h-[7.313rem] md:w-[7.313rem]"}>
                    {profile.avatar && <Image className={"rounded-full"} src={profile.avatar} fill alt={"Images"}/>}
                </div>
                <div className={"flex flex-col justify-between md:py-3"}>
                    <div className={"text-midBlack dark:text-white md:text-2xl"}>{profile.name}</div>
                    <a href={profile.profileUrl}
                       className={"text-blue text-[0.813rem] md:text-base"}>@{profile.username}</a>
                    <div
                        className={"text-[0.813rem] text-lightGray dark:text-white md:text-[0.938rem]"}>{profile.createdAt}</div>
                </div>
            </div>

            <div className={"text-[0.813rem] leading-6 mt-8 max-w-[30rem] w-full"}>
                {profile.bio || "No bio"}
            </div>

            <div
                className={"bg-midGray dark:bg-background p-4 my-6 md:my-9 font-bold flex justify-between rounded-lg max-w-[30rem] w-full"}>
                <div className={"flex-1 flex flex-col items-center gap-2"}>
                    <div className={"text-xs font-normal text-darkGray dark:text-white"}>Repos</div>
                    <div className={"text-midBlack dark:text-white"}>{profile.repos}</div>
                </div>

                <div className={"flex-1 flex flex-col items-center gap-2"}>
                    <div className={"text-xs font-normal text-darkGray dark:text-white"}>Followers</div>
                    <div className={"text-midBlack dark:text-white"}>{profile.followers}</div>
                </div>

                <div className={"flex-1 flex flex-col items-center gap-2"}>
                    <div className={"text-xs font-normal text-darkGray dark:text-white"}>Following</div>
                    <div className={"text-midBlack dark:text-white"}>{profile.following}</div>
                </div>
            </div>

            <div
                className={"user-info text-sm leading-5 gap-y-4 grid text-darkGray dark:text-white max-w-[30rem] w-full"}>
                <Image src={"/images/icon-location.svg"} width={14} height={20} alt={"location"}/>
                <div>{profile.location || "Not Available"}</div>

                <Image src={"/images/icon-website.svg"} width={20} height={20} alt={"location"}/>
                <a className={"hover:underline"} href={profile.blog}>{profile.blog || "Not Available"}</a>

                <Image src={"/images/icon-twitter.svg"} width={20} height={16} alt={"location"}/>
                <div>{profile.twitter || "Not Available"}</div>

                <div className="relative w-[1.25rem] h-[1.25rem]">
                    <Image src={"/images/icon-company.svg"} fill alt={"location"}/>
                </div>
                <div>{profile.company || "Not Available"}</div>
            </div>
        </article>
    );
}