export const Source = {
    Local_file: "Local file",
    Remote_storage: "Remote storage",
} as const;

export type Source = (typeof Source)[keyof typeof Source];

export const ThreatIntelligenceResourceInnerKind = {
    /**
     * Entity represents threat intelligence indicator in the system.
     */
    Indicator: "indicator",
} as const;

export type ThreatIntelligenceResourceInnerKind = (typeof ThreatIntelligenceResourceInnerKind)[keyof typeof ThreatIntelligenceResourceInnerKind];
