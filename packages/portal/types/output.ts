import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Tenant Configuration Properties with Provisioning state
 */
export interface ConfigurationPropertiesResponse {
    /**
     * When flag is set to true Markdown tile will require external storage configuration (URI). The inline content configuration will be prohibited.
     */
    enforcePrivateMarkdownStorage?: boolean;
    /**
     * The status of the last operation.
     */
    provisioningState: string;
}

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
    metadata?: any;
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
 * The dashboard's part position.
 */
export interface DashboardPartsPositionResponse {
    /**
     * The dashboard's part column span.
     */
    colSpan: number;
    /**
     * The dashboard part's metadata.
     */
    metadata?: any;
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
    position: DashboardPartsPositionResponse;
}

/**
 * Dashboard Properties with Provisioning state
 */
export interface DashboardPropertiesWithProvisioningStateResponse {
    /**
     * The dashboard lenses.
     */
    lenses?: DashboardLensResponse[];
    /**
     * The dashboard metadata.
     */
    metadata?: any;
    /**
     * The status of the last operation.
     */
    provisioningState: string;
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
    settings?: MarkdownPartMetadataSettingsResponse;
    /**
     * The dashboard part metadata type.
     * Expected value is 'Extension/HubsExtension/PartType/MarkdownPart'.
     */
    type: "Extension/HubsExtension/PartType/MarkdownPart";
}

/**
 * The content of markdown part.
 */
export interface MarkdownPartMetadataSettingsContentResponse {
    /**
     * The setting of the content of markdown part.
     */
    settings?: MarkdownPartMetadataSettingsContentSettingsResponse;
}

/**
 * The setting of the content of markdown part.
 */
export interface MarkdownPartMetadataSettingsContentSettingsResponse {
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
 * Markdown part settings.
 */
export interface MarkdownPartMetadataSettingsResponse {
    /**
     * The content of markdown part.
     */
    content?: MarkdownPartMetadataSettingsContentResponse;
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
 * Metadata pertaining to creation and last modification of the resource.
 */
export interface SystemDataResponse {
    /**
     * The timestamp of resource creation (UTC).
     */
    createdAt?: string;
    /**
     * The identity that created the resource.
     */
    createdBy?: string;
    /**
     * The type of identity that created the resource.
     */
    createdByType?: string;
    /**
     * The timestamp of resource last modification (UTC)
     */
    lastModifiedAt?: string;
    /**
     * The identity that last modified the resource.
     */
    lastModifiedBy?: string;
    /**
     * The type of identity that last modified the resource.
     */
    lastModifiedByType?: string;
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


