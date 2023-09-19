export const TemplateSpecArtifactKind = {
    /**
     * The artifact represents an embedded Azure Resource Manager template.
     */
    Template: "template",
} as const;

export type TemplateSpecArtifactKind = (typeof TemplateSpecArtifactKind)[keyof typeof TemplateSpecArtifactKind];
