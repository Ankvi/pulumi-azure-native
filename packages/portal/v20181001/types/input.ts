import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
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
