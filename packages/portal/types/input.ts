import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Tenant Configuration Properties with Provisioning state
 */
export interface ConfigurationPropertiesArgs {
    /**
     * When flag is set to true Markdown tile will require external storage configuration (URI). The inline content configuration will be prohibited.
     */
    enforcePrivateMarkdownStorage?: pulumi.Input<boolean>;
}

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
    metadata?: any;
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
 * A dashboard part metadata.
 */
export interface DashboardPartMetadataArgs {
    /**
     * Inputs to dashboard part.
     */
    inputs?: pulumi.Input<any[]>;
    /**
     * Settings of dashboard part.
     */
    settings?: pulumi.Input<{[key: string]: any}>;
    /**
     * The type of dashboard part.
     */
    type: pulumi.Input<string>;
}

/**
 * A dashboard part.
 */
export interface DashboardPartsArgs {
    /**
     * The dashboard's part metadata.
     */
    metadata?: pulumi.Input<DashboardPartMetadataArgs>;
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
    metadata?: any;
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
 * Dashboard Properties with Provisioning state
 */
export interface DashboardPropertiesWithProvisioningStateArgs {
    /**
     * The dashboard lenses.
     */
    lenses?: pulumi.Input<pulumi.Input<DashboardLensArgs>[]>;
    /**
     * The dashboard metadata.
     */
    metadata?: any;
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
