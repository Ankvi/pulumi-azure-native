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
