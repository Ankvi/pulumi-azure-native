export const TemplateSpecArtifactKind = {
    /**
     * The artifact represents an embedded Azure Resource Manager template.
     */
    Template: "template",
} as const;

/**
 * The kind of artifact.
 */
export type TemplateSpecArtifactKind = (typeof TemplateSpecArtifactKind)[keyof typeof TemplateSpecArtifactKind];
