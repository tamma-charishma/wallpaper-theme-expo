
export interface Wallpaper {
    url: string;
    name: string;
}

export interface FullWallPaper extends Wallpaper {
    liked: boolean;
    suggested: boolean;
    library: boolean;
}

export function useSuggestedWallPapers(): FullWallPaper[] {
    const wallpapers = useWallpapers();
    return wallpapers.filter((wallpaper) => wallpaper.suggested)
}

export function useLibraryWallPapers(): FullWallPaper[] {
    const wallpapers = useWallpapers();
    return wallpapers.filter((wallpaper) => wallpaper.library)
}

export function useLikedWallPapers(): FullWallPaper[] {
    const wallpapers = useWallpapers();
    return wallpapers.filter((wallpaper) => wallpaper.liked)
}

export function useWallpapers(): FullWallPaper[] {
    return [{
        url: "https://ideogram.ai/assets/image/lossless/response/7Fa0u9-4SzG6we48jz7rGw",
        name: "Disney Girl",
        liked: true,
        suggested: false,
        library: false,
    }, {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/5zJO3qkaRoGqiQV1VtYoHw",
        name: "Disney Land",
        liked: true,
        suggested: false,
        library: true,
    }, {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/AucTJ8kaST2mYUPMdyXfng",
        name: "Selfie",
        liked: true,
        suggested: true,
        library: true,
    },
    {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/uHw6-mOZReOF8kVenT-A2w",
        name: "Point of view",
        liked: false,
        suggested: true,
        library: false,
    },
    {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/1eMQENCRTpi23P4H7-CXMQ",
        name: "Cutie cat",
        liked: true,
        suggested: false,
        library: false,
    },
    {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/2uRxJfunTcaP-LemaXQJOA",
        name: "Cat art",
        liked: true,
        suggested: true,
        library: true,
    },
    {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/5nZcevOuT2mfJLic_ADgtA",
        name: "Light art",
        liked: true,
        suggested: true,
        library: true,
    },
    {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/3zj7SpAQSdGQTFKbX72P9w",
        name: "Paper art",
        liked: true,
        suggested: true,
        library: false,
    },
    {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/Kv4hrk7CQ56fZRh8Czn7aw",
        name: "Sheep",
        liked: true,
        suggested: false,
        library: true,
    },
    {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/0zyR4nGQQQWMOCIWFezkgQ",
        name: "Thinking",
        liked: true,
        suggested: false,
        library: false,
    }
    ]
}
