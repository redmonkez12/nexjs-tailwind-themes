import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { SearchForm } from "@/components/SearchForm";
import { Profile } from "@/components/Profile";

export default function Home() {
    return (
        <main
            className={`h-screen w-full px-6 py-8 flex md:w-[35.813rem] lg:w-[45.625rem] flex-col gap-4 mx-auto md:justify-center`}>
            <div className={"md:w-[35.813rem] lg:w-[45.625rem]"}>
                <ThemeSwitcher/>
                <SearchForm/>
            </div>

            <Profile/>
        </main>
    );
}
