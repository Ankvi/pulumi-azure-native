import * as pulumi from "@pulumi/pulumi";
    /**
     * A dashboard lens.
     */
    export interface DashboardLensArgs {
        /**
         * The dashboard len's metadata.
         */
        metadata?: pulumi.Input<{[key: string]: any}>;
        /**
         * The lens order.
         */
        order: pulumi.Input<number>;
        /**
         * The dashboard parts.
         */
        parts: pulumi.Input<pulumi.Input<DashboardPartsArgs>[]>;
    }

    /**
     * A dashboard part.
     */
    export interface DashboardPartsArgs {
        /**
         * The dashboard part's metadata.
         */
        metadata?: pulumi.Input<MarkdownPartMetadataArgs>;
        /**
         * The dashboard's part position.
         */
        position: pulumi.Input<DashboardPartsPositionArgs>;
    }

    /**
     * The dashboard's part position.
     */
    export interface DashboardPartsPositionArgs {
        /**
         * The dashboard's part column span.
         */
        colSpan: pulumi.Input<number>;
        /**
         * The dashboard part's metadata.
         */
        metadata?: pulumi.Input<{[key: string]: any}>;
        /**
         * The dashboard's part row span.
         */
        rowSpan: pulumi.Input<number>;
        /**
         * The dashboard's part x coordinate.
         */
        x: pulumi.Input<number>;
        /**
         * The dashboard's part y coordinate.
         */
        y: pulumi.Input<number>;
    }

    /**
     * Markdown part metadata.
     */
    export interface MarkdownPartMetadataArgs {
        /**
         * Input to dashboard part.
         */
        inputs?: pulumi.Input<any[]>;
        /**
         * Markdown part settings.
         */
        settings?: pulumi.Input<MarkdownPartMetadataSettingsArgs>;
        /**
         * The type of dashboard part.
         * Expected value is 'Extension/HubsExtension/PartType/MarkdownPart'.
         */
        type: pulumi.Input<"Extension/HubsExtension/PartType/MarkdownPart">;
    }

    /**
     * The content of markdown part.
     */
    export interface MarkdownPartMetadataContentArgs {
        /**
         * The setting of the content of markdown part.
         */
        settings?: pulumi.Input<MarkdownPartMetadataSettingsSettingsArgs>;
    }

    /**
     * Markdown part settings.
     */
    export interface MarkdownPartMetadataSettingsArgs {
        /**
         * The content of markdown part.
         */
        content?: pulumi.Input<MarkdownPartMetadataContentArgs>;
    }

    /**
     * The setting of the content of markdown part.
     */
    export interface MarkdownPartMetadataSettingsSettingsArgs {
        /**
         * The content of the markdown part.
         */
        content?: pulumi.Input<string>;
        /**
         * The source of the content of the markdown part.
         */
        markdownSource?: pulumi.Input<number>;
        /**
         * The uri of markdown content.
         */
        markdownUri?: pulumi.Input<string>;
        /**
         * The subtitle of the markdown part.
         */
        subtitle?: pulumi.Input<string>;
        /**
         * The title of the markdown part.
         */
        title?: pulumi.Input<string>;
    }
