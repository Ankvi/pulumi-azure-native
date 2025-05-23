export const ResolutionPolicy = {
    Default: "Default",
    NxDomainRedirect: "NxDomainRedirect",
} as const;

/**
 * The resolution policy on the virtual network link. Only applicable for virtual network links to privatelink zones, and for A,AAAA,CNAME queries. When set to 'NxDomainRedirect', Azure DNS resolver falls back to public resolution if private dns query resolution results in non-existent domain response.
 */
export type ResolutionPolicy = (typeof ResolutionPolicy)[keyof typeof ResolutionPolicy];
