import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
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
 * A dashboard part metadata.
 */
export interface DashboardPartMetadataResponse {
    /**
     * Inputs to dashboard part.
     */
    inputs?: any[];
    /**
     * Settings of dashboard part.
     */
    settings?: {[key: string]: any};
    /**
     * The type of dashboard part.
     */
    type: string;
}

/**
 * A dashboard part.
 */
export interface DashboardPartsResponse {
    /**
     * The dashboard's part metadata.
     */
    metadata?: DashboardPartMetadataResponse;
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


