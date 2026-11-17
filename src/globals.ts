export const roles = ["art", "design", "engineer"] as const;
export type Role = typeof roles[number];

export const colourDesign = '#F37303'
export const colourArtist = '#DFF303' 
export const colourEngineer = '#03F3EF'


// export const types = {colourDesign, colourArtist, colourEngineer}