export const FavoriteType = {
    Shared: "shared",
    User: "user",
} as const;

/**
 * Enum indicating if this favorite definition is owned by a specific user or is shared between all users with access to the Application Insights component.
 */
export type FavoriteType = (typeof FavoriteType)[keyof typeof FavoriteType];

export const ItemScope = {
    Shared: "shared",
    User: "user",
} as const;

/**
 * Enum indicating if this item definition is owned by a specific user or is shared between all users with access to the Application Insights component.
 */
export type ItemScope = (typeof ItemScope)[keyof typeof ItemScope];

export const ItemType = {
    None: "none",
    Query: "query",
    Recent: "recent",
    Function: "function",
} as const;

/**
 * Enum indicating the type of the Analytics item.
 */
export type ItemType = (typeof ItemType)[keyof typeof ItemType];

export const SharedTypeKind = {
    Shared: "shared",
    User: "user",
} as const;

/**
 * Enum indicating if this workbook definition is owned by a specific user or is shared between all users with access to the Application Insights component.
 */
export type SharedTypeKind = (typeof SharedTypeKind)[keyof typeof SharedTypeKind];
