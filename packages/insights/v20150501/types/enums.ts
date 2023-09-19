export const FavoriteType = {
    Shared: "shared",
    User: "user",
} as const;

export type FavoriteType = (typeof FavoriteType)[keyof typeof FavoriteType];

export const ItemScope = {
    Shared: "shared",
    User: "user",
} as const;

export type ItemScope = (typeof ItemScope)[keyof typeof ItemScope];

export const ItemType = {
    None: "none",
    Query: "query",
    Recent: "recent",
    Function: "function",
} as const;

export type ItemType = (typeof ItemType)[keyof typeof ItemType];

export const SharedTypeKind = {
    Shared: "shared",
    User: "user",
} as const;

export type SharedTypeKind = (typeof SharedTypeKind)[keyof typeof SharedTypeKind];
