import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
export namespace portal {
    /**
     * Cloud shell properties for creating a console.
     */
    export interface ConsoleCreatePropertiesArgs {
        /**
         * The operating system type of the cloud shell.
         */
        osType: pulumi.Input<string | enums.OsType>;
        /**
         * Provisioning state of the console.
         */
        provisioningState?: pulumi.Input<string | enums.ProvisioningState>;
        /**
         * Uri of the console.
         */
        uri?: pulumi.Input<string>;
    }

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

    /**
     * The storage profile of the user settings.
     */
    export interface StorageProfileArgs {
        /**
         * Size of file share
         */
        diskSizeInGB?: pulumi.Input<number>;
        /**
         * Name of the mounted file share. 63 characters or less, lowercase alphabet, numbers, and -
         */
        fileShareName?: pulumi.Input<string>;
        /**
         * Full resource ID of storage account.
         */
        storageAccountResourceId?: pulumi.Input<string>;
    }

    /**
     * Settings for terminal appearance.
     */
    export interface TerminalSettingsArgs {
        /**
         * Size of terminal font.
         */
        fontSize?: pulumi.Input<string | enums.FontSize>;
        /**
         * Style of terminal font.
         */
        fontStyle?: pulumi.Input<string | enums.FontStyle>;
    }

    /**
     * The cloud shell user settings properties.
     */
    export interface UserPropertiesArgs {
        /**
         * The preferred location of the cloud shell.
         */
        preferredLocation: pulumi.Input<string>;
        /**
         * The operating system type of the cloud shell. Deprecated, use preferredShellType.
         */
        preferredOsType: pulumi.Input<string | enums.OsType>;
        /**
         * The shell type of the cloud shell.
         */
        preferredShellType: pulumi.Input<string | enums.ShellType>;
        /**
         * The storage profile of the user settings.
         */
        storageProfile: pulumi.Input<StorageProfileArgs>;
        /**
         * Settings for terminal appearance.
         */
        terminalSettings: pulumi.Input<TerminalSettingsArgs>;
    }

    export namespace v20181001 {
        /**
         * Cloud shell properties for creating a console.
         */
        export interface ConsoleCreatePropertiesArgs {
            /**
             * The operating system type of the cloud shell.
             */
            osType: pulumi.Input<string | enums.v20181001.OsType>;
            /**
             * Provisioning state of the console.
             */
            provisioningState?: pulumi.Input<string | enums.v20181001.ProvisioningState>;
            /**
             * Uri of the console.
             */
            uri?: pulumi.Input<string>;
        }

        /**
         * The storage profile of the user settings.
         */
        export interface StorageProfileArgs {
            /**
             * Size of file share
             */
            diskSizeInGB?: pulumi.Input<number>;
            /**
             * Name of the mounted file share. 63 characters or less, lowercase alphabet, numbers, and -
             */
            fileShareName?: pulumi.Input<string>;
            /**
             * Full resource ID of storage account.
             */
            storageAccountResourceId?: pulumi.Input<string>;
        }

        /**
         * Settings for terminal appearance.
         */
        export interface TerminalSettingsArgs {
            /**
             * Size of terminal font.
             */
            fontSize?: pulumi.Input<string | enums.v20181001.FontSize>;
            /**
             * Style of terminal font.
             */
            fontStyle?: pulumi.Input<string | enums.v20181001.FontStyle>;
        }

        /**
         * The cloud shell user settings properties.
         */
        export interface UserPropertiesArgs {
            /**
             * The preferred location of the cloud shell.
             */
            preferredLocation: pulumi.Input<string>;
            /**
             * The operating system type of the cloud shell. Deprecated, use preferredShellType.
             */
            preferredOsType: pulumi.Input<string | enums.v20181001.OsType>;
            /**
             * The shell type of the cloud shell.
             */
            preferredShellType: pulumi.Input<string | enums.v20181001.ShellType>;
            /**
             * The storage profile of the user settings.
             */
            storageProfile: pulumi.Input<v20181001.StorageProfileArgs>;
            /**
             * Settings for terminal appearance.
             */
            terminalSettings: pulumi.Input<v20181001.TerminalSettingsArgs>;
        }

    }

    export namespace v20190101preview {
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
            parts: pulumi.Input<{[key: string]: pulumi.Input<v20190101preview.DashboardPartsArgs>}>;
        }

        /**
         * A dashboard part.
         */
        export interface DashboardPartsArgs {
            /**
             * A dashboard part metadata.
             */
            metadata?: any;
            /**
             * The dashboard's part position.
             */
            position: pulumi.Input<v20190101preview.DashboardPartsPositionArgs>;
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

    }

    export namespace v20200901preview {
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
            parts: pulumi.Input<pulumi.Input<v20200901preview.DashboardPartsArgs>[]>;
        }

        /**
         * A dashboard part.
         */
        export interface DashboardPartsArgs {
            /**
             * The dashboard part's metadata.
             */
            metadata?: pulumi.Input<v20200901preview.MarkdownPartMetadataArgs>;
            /**
             * The dashboard's part position.
             */
            position: pulumi.Input<v20200901preview.DashboardPartsPositionArgs>;
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
            settings?: pulumi.Input<v20200901preview.MarkdownPartMetadataSettingsArgs>;
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
            settings?: pulumi.Input<v20200901preview.MarkdownPartMetadataSettingsSettingsArgs>;
        }

        /**
         * Markdown part settings.
         */
        export interface MarkdownPartMetadataSettingsArgs {
            /**
             * The content of markdown part.
             */
            content?: pulumi.Input<v20200901preview.MarkdownPartMetadataContentArgs>;
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

    }
}
