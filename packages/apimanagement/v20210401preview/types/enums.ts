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

export type SchemaType = (typeof SchemaType)[keyof typeof SchemaType];
