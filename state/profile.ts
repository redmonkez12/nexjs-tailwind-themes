import { create } from 'zustand'

type ProfileState = {
    profile: any;
    searchProfile: string;
    setProfile(profile: any): void;
    setSearchProfile(profile: string): void;
}

export const useProfileStore = create<ProfileState>((set) => ({
    profile: undefined,
    searchProfile: "",
    setProfile: (profile) => set(() => ({ profile })),
    setSearchProfile: (searchProfile) => set(() => ({ searchProfile })),
}))