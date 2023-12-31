import * as pulumi from "@pulumi/pulumi";
    /**
     * A dashboard lens.
     */
    export interface DashboardLensResponse {
        /**
         * The dashboard len's metadata.
         */
        metadata?: {[key: string]: any};
        /**
         * The lens order.
         */
        order: number;
        /**
         * The dashboard parts.
         */
        parts: DashboardPartsResponse[];
    }

    /**
     * A dashboard part.
     */
    export interface DashboardPartsResponse {
        /**
         * The dashboard part's metadata.
         */
        metadata?: MarkdownPartMetadataResponse;
        /**
         * The dashboard's part position.
         */
        position: DashboardPartsResponsePosition;
    }

    /**
     * The dashboard's part position.
     */
    export interface DashboardPartsResponsePosition {
        /**
         * The dashboard's part column span.
         */
        colSpan: number;
        /**
         * The dashboard part's metadata.
         */
        metadata?: {[key: string]: any};
        /**
         * The dashboard's part row span.
         */
        rowSpan: number;
        /**
         * The dashboard's part x coordinate.
         */
        x: number;
        /**
         * The dashboard's part y coordinate.
         */
        y: number;
    }

    /**
     * Markdown part metadata.
     */
    export interface MarkdownPartMetadataResponse {
        /**
         * Input to dashboard part.
         */
        inputs?: any[];
        /**
         * Markdown part settings.
         */
        settings?: MarkdownPartMetadataResponseSettings;
        /**
         * The type of dashboard part.
         * Expected value is 'Extension/HubsExtension/PartType/MarkdownPart'.
         */
        type: "Extension/HubsExtension/PartType/MarkdownPart";
    }

    /**
     * The content of markdown part.
     */
    export interface MarkdownPartMetadataResponseContent {
        /**
         * The setting of the content of markdown part.
         */
        settings?: MarkdownPartMetadataResponseSettingsSettings;
    }

    /**
     * Markdown part settings.
     */
    export interface MarkdownPartMetadataResponseSettings {
        /**
         * The content of markdown part.
         */
        content?: MarkdownPartMetadataResponseContent;
    }

    /**
     * The setting of the content of markdown part.
     */
    export interface MarkdownPartMetadataResponseSettingsSettings {
        /**
         * The content of the markdown part.
         */
        content?: string;
        /**
         * The source of the content of the markdown part.
         */
        markdownSource?: number;
        /**
         * The uri of markdown content.
         */
        markdownUri?: string;
        /**
         * The subtitle of the markdown part.
         */
        subtitle?: string;
        /**
         * The title of the markdown part.
         */
        title?: string;
    }

    /**
     * Violation information.
     */
    export interface ViolationResponse {
        /**
         * Error message.
         */
        errorMessage: string;
        /**
         * Id of the item that violates tenant configuration.
         */
        id: string;
        /**
         * Id of the user who owns violated item.
         */
        userId: string;
    }
