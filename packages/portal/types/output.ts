import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace portal {
    /**
     * Cloud shell console properties.
     */
    export interface ConsolePropertiesResponse {
        /**
         * The operating system type of the cloud shell.
         */
        osType: string;
        /**
         * Provisioning state of the console.
         */
        provisioningState: string;
        /**
         * Uri of the console.
         */
        uri: string;
    }

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
     * The storage profile of the user settings.
     */
    export interface StorageProfileResponse {
        /**
         * Size of file share
         */
        diskSizeInGB?: number;
        /**
         * Name of the mounted file share. 63 characters or less, lowercase alphabet, numbers, and -
         */
        fileShareName?: string;
        /**
         * Full resource ID of storage account.
         */
        storageAccountResourceId?: string;
    }

    /**
     * Settings for terminal appearance.
     */
    export interface TerminalSettingsResponse {
        /**
         * Size of terminal font.
         */
        fontSize?: string;
        /**
         * Style of terminal font.
         */
        fontStyle?: string;
    }

    /**
     * The cloud shell user settings properties.
     */
    export interface UserPropertiesResponse {
        /**
         * The preferred location of the cloud shell.
         */
        preferredLocation: string;
        /**
         * The operating system type of the cloud shell. Deprecated, use preferredShellType.
         */
        preferredOsType: string;
        /**
         * The shell type of the cloud shell.
         */
        preferredShellType: string;
        /**
         * The storage profile of the user settings.
         */
        storageProfile: StorageProfileResponse;
        /**
         * Settings for terminal appearance.
         */
        terminalSettings: TerminalSettingsResponse;
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

    export namespace v20181001 {
        /**
         * Cloud shell console properties.
         */
        export interface ConsolePropertiesResponse {
            /**
             * The operating system type of the cloud shell.
             */
            osType: string;
            /**
             * Provisioning state of the console.
             */
            provisioningState: string;
            /**
             * Uri of the console.
             */
            uri: string;
        }

        /**
         * The storage profile of the user settings.
         */
        export interface StorageProfileResponse {
            /**
             * Size of file share
             */
            diskSizeInGB?: number;
            /**
             * Name of the mounted file share. 63 characters or less, lowercase alphabet, numbers, and -
             */
            fileShareName?: string;
            /**
             * Full resource ID of storage account.
             */
            storageAccountResourceId?: string;
        }

        /**
         * Settings for terminal appearance.
         */
        export interface TerminalSettingsResponse {
            /**
             * Size of terminal font.
             */
            fontSize?: string;
            /**
             * Style of terminal font.
             */
            fontStyle?: string;
        }

        /**
         * The cloud shell user settings properties.
         */
        export interface UserPropertiesResponse {
            /**
             * The preferred location of the cloud shell.
             */
            preferredLocation: string;
            /**
             * The operating system type of the cloud shell. Deprecated, use preferredShellType.
             */
            preferredOsType: string;
            /**
             * The shell type of the cloud shell.
             */
            preferredShellType: string;
            /**
             * The storage profile of the user settings.
             */
            storageProfile: v20181001.StorageProfileResponse;
            /**
             * Settings for terminal appearance.
             */
            terminalSettings: v20181001.TerminalSettingsResponse;
        }

    }

    export namespace v20190101preview {
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
            parts: {[key: string]: v20190101preview.DashboardPartsResponse};
        }

        /**
         * A dashboard part.
         */
        export interface DashboardPartsResponse {
            /**
             * A dashboard part metadata.
             */
            metadata?: any;
            /**
             * The dashboard's part position.
             */
            position: v20190101preview.DashboardPartsResponsePosition;
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

    }

    export namespace v20200901preview {
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
            parts: v20200901preview.DashboardPartsResponse[];
        }

        /**
         * A dashboard part.
         */
        export interface DashboardPartsResponse {
            /**
             * The dashboard part's metadata.
             */
            metadata?: v20200901preview.MarkdownPartMetadataResponse;
            /**
             * The dashboard's part position.
             */
            position: v20200901preview.DashboardPartsResponsePosition;
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
            settings?: v20200901preview.MarkdownPartMetadataResponseSettings;
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
            settings?: v20200901preview.MarkdownPartMetadataResponseSettingsSettings;
        }

        /**
         * Markdown part settings.
         */
        export interface MarkdownPartMetadataResponseSettings {
            /**
             * The content of markdown part.
             */
            content?: v20200901preview.MarkdownPartMetadataResponseContent;
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

    }
}
