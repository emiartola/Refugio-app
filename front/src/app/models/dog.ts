import { Title } from '@angular/platform-browser';

export interface Dog{
    id?: number;
    name?: string;
    age?: string;
    description?: string;
    location?:string;
    image?: string;
    created_at?: Date;
}