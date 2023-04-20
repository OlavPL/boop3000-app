import { Kommune } from '@/types/typKommune';
import { Tag } from '@/types/tag';
import AppUser from '@/types/AppUser';
import { LoginInfo } from '@/types/loginInfo';

export type SagnJSON = {
    _id: string
    title: string
    text: string;
    tags: Tag[];
    likes: LoginInfo[];
    dislikes: LoginInfo[];
    postedAt: number;
    happenedAt?: number;
    owner: AppUser;
    kommune: Kommune;
    stedsnavn: string;
}

// interface SagnI{
//     _id: string
//     title: string
//     text: string;
//     tags: Tag[];
//     likes: LoginInfo[];
//     dislikes: LoginInfo[];
//     postedAt?: number;
//     happenedAt?: number;
//     owner: AppUser;
//     kommune: Kommune;
//     stedsnavn?: string;
// }
class Sagn {
    _id: string
    title: string;
    text: string;
    tags: Tag[];
    likes: LoginInfo[];
    dislikes: LoginInfo[];
    postedAt: number;
    happenedAt?: number;
    owner: AppUser;
    kommune: Kommune;
    stedsnavn: string;


    constructor(_id: string, title: string, text: string, tags: Tag[], postedAt: number, kommune: Kommune, stedsnavn: string, owner: AppUser, 
                likes?: LoginInfo[], dislikes?: LoginInfo[], happenedAt?: number
    ){
        this._id = _id
        this.title = title
        this.text = text
        this.tags = tags
        this.likes = likes? likes : Array<LoginInfo>()
        this.dislikes = dislikes? dislikes : Array<LoginInfo>()
        this.postedAt = postedAt
        this.happenedAt = happenedAt
        this.owner = owner 
        this.kommune = kommune;
        this.stedsnavn = stedsnavn;
    }
}

export default Sagn
