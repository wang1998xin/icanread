export interface UserInfo {
    name: string;
    avatar: string;
    introduction: string;
    roles: string[]
}

export interface UserState extends UserInfo{
    token: string;
}