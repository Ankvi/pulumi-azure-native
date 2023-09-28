export const Source = {
    Local_file: "Local file",
    Remote_storage: "Remote storage",
} as const;

/**
 * The source of the watchlist
 */
export type Source = (typeof Source)[keyof typeof Source];

export const ThreatIntelligenceResourceInnerKind = {
    /**
     * Entity represents threat intelligence indicator in the system.
     */
    Indicator: "indicator",
} as const;

/**
 * The kind of the entity.
 */
export type ThreatIntelligenceResourceInnerKind = (typeof ThreatIntelligenceResourceInnerKind)[keyof typeof ThreatIntelligenceResourceInnerKind];
