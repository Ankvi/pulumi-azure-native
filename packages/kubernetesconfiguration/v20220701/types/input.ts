import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Identity of the Extension resource in an AKS cluster
     */
    export interface ExtensionAksAssignedIdentityArgs {
        /**
         * The identity type.
         */
        type?: pulumi.Input<enums.AKSIdentityType>;
    }

    /**
     * Status from the extension.
     */
    export interface ExtensionStatusArgs {
        /**
         * Status code provided by the Extension
         */
        code?: pulumi.Input<string>;
        /**
         * Short description of status of the extension.
         */
        displayStatus?: pulumi.Input<string>;
        /**
         * Level of the status.
         */
        level?: pulumi.Input<string | enums.LevelType>;
        /**
         * Detailed message of the status from the Extension.
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
     * Identity for the resource.
     */
    export interface IdentityArgs {
        /**
         * The identity type.
         */
        type?: pulumi.Input<enums.ResourceIdentityType>;
    }

    /**
     * Scope of the extension. It can be either Cluster or Namespace; but not both.
     */
    export interface ScopeArgs {
        /**
         * Specifies that the scope of the extension is Cluster
         */
        cluster?: pulumi.Input<ScopeClusterArgs>;
        /**
         * Specifies that the scope of the extension is Namespace
         */
        namespace?: pulumi.Input<ScopeNamespaceArgs>;
    }

    /**
     * Specifies that the scope of the extension is Cluster
     */
    export interface ScopeClusterArgs {
        /**
         * Namespace where the extension Release must be placed, for a Cluster scoped extension.  If this namespace does not exist, it will be created
         */
        releaseNamespace?: pulumi.Input<string>;
    }

    /**
     * Specifies that the scope of the extension is Namespace
     */
    export interface ScopeNamespaceArgs {
        /**
         * Namespace where the extension will be created for an Namespace scoped extension.  If this namespace does not exist, it will be created
         */
        targetNamespace?: pulumi.Input<string>;
    }
