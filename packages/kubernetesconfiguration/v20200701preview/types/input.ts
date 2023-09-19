import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Identity for the managed cluster.
     */
    export interface ConfigurationIdentityArgs {
        /**
         * The type of identity used for the configuration. Type 'SystemAssigned' will use an implicitly created identity. Type 'None' will not use Managed Identity for the configuration.
         */
        type?: pulumi.Input<enums.ResourceIdentityType>;
    }

    /**
     * Status from this instance of the extension.
     */
    export interface ExtensionStatusArgs {
        /**
         * Status code provided by the Extension
         */
        code?: pulumi.Input<string>;
        /**
         * Short description of status of this instance of the extension.
         */
        displayStatus?: pulumi.Input<string>;
        /**
         * Level of the status.
         */
        level?: pulumi.Input<string | enums.LevelType>;
        /**
         * Detailed message of the status from the Extension instance.
         */
        message?: pulumi.Input<string>;
        /**
         * DateLiteral (per ISO8601) noting the time of installation status.
         */
        time?: pulumi.Input<string>;
    }
    /**
     * extensionStatusArgsProvideDefaults sets the appropriate defaults for ExtensionStatusArgs
     */
    export function extensionStatusArgsProvideDefaults(val: ExtensionStatusArgs): ExtensionStatusArgs {
        return {
            ...val,
            level: (val.level) ?? "Information",
        };
    }

    /**
     * Scope of the extensionInstance. It can be either Cluster or Namespace; but not both.
     */
    export interface ScopeArgs {
        /**
         * Specifies that the scope of the extensionInstance is Cluster
         */
        cluster?: pulumi.Input<ScopeClusterArgs>;
        /**
         * Specifies that the scope of the extensionInstance is Namespace
         */
        namespace?: pulumi.Input<ScopeNamespaceArgs>;
    }

    /**
     * Specifies that the scope of the extensionInstance is Cluster
     */
    export interface ScopeClusterArgs {
        /**
         * Namespace where the extension Release must be placed, for a Cluster scoped extensionInstance.  If this namespace does not exist, it will be created
         */
        releaseNamespace?: pulumi.Input<string>;
    }

    /**
     * Specifies that the scope of the extensionInstance is Namespace
     */
    export interface ScopeNamespaceArgs {
        /**
         * Namespace where the extensionInstance will be created for an Namespace scoped extensionInstance.  If this namespace does not exist, it will be created
         */
        targetNamespace?: pulumi.Input<string>;
    }
