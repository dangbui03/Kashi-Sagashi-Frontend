type WordColor = {
    color: string,
    shadow_color: string,
}
type Quote = {
    quote: string,
    author: string
}
type Song = {
    Artist: string,
    Name: string,
    Link: string,
    Release_Date: string,
    Album: string,
    Lyrics: string
}
type User = {
    email?: string,
    password?: string,
    username?: string,
    loggedIn?: boolean
    roles?: {
        "User"?: number
        "Admin"?: number
    }
    verified?: boolean,
    refreshToken?: string,
    accessToken?: string
}
type Song = {
    _id: string,
    Name: string,
    Lyrics: string,
    Link?: string,
    Artist: string,
    Album?: string,
    Release_date?: string,
    Verified?: boolean
    Submit_by?: string
    createdAt?: string
    updatedAt?: string,
    __v?: number
}