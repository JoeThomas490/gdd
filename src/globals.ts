import { PaintbrushIcon, PuzzleIcon, WrenchIcon, type AstroComponent } from "@lucide/astro";

export const roles = ["art", "design", "engineer"] as const;
export type Role = typeof roles[number];

export const colourDesign = '#F37303'
export const colourArtist = '#DFF303' 
export const colourEngineer = '#03F3EF'


export const GetRoleIcon = (role : Role) : { Icon : AstroComponent, iconBg : string, dest:string, rotation : string } => {
    switch(role) {
        case "art":
            return { Icon: PaintbrushIcon,  iconBg: colourArtist, dest: '?role=art', rotation: '2deg' };
        case "design":
            return { Icon: PuzzleIcon,  iconBg: colourDesign, dest: '?role=design',rotation: '-2deg' };
        case 'engineer':
            return { Icon: WrenchIcon,  iconBg: colourEngineer, dest: '?role=engineer',rotation: '-1deg' };
    }
}
