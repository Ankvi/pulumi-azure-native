export const SchemaType = {
    /**
     * Xml schema type.
     */
    Xml: "xml",
    /**
     * Json schema type.
     */
    Json: "json",
} as const;

/**
 * Schema Type. Immutable.
 */
export type SchemaType = (typeof SchemaType)[keyof typeof SchemaType];
