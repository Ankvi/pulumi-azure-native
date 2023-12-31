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
     * Properties that define a Azure Arc PrivateLinkScope resource.
     */
    export interface KubernetesConfigurationPrivateLinkScopePropertiesArgs {
        /**
         * Managed Cluster ARM ID for the private link scope  (Required)
         */
        clusterResourceId: pulumi.Input<string>;
        /**
         * Indicates whether machines associated with the private link scope can also use public Azure Arc service endpoints.
         */
        publicNetworkAccess?: pulumi.Input<string | enums.PublicNetworkAccessType>;
    }

    /**
     * Plan for the resource.
     */
    export interface PlanArgs {
        /**
         * A user defined name of the 3rd Party Artifact that is being procured.
         */
        name: pulumi.Input<string>;
        /**
         * The 3rd Party artifact that is being procured. E.g. NewRelic. Product maps to the OfferID specified for the artifact at the time of Data Market onboarding. 
         */
        product: pulumi.Input<string>;
        /**
         * A publisher provided promotion code as provisioned in Data Market for the said product/artifact.
         */
        promotionCode?: pulumi.Input<string>;
        /**
         * The publisher of the 3rd Party Artifact that is being bought. E.g. NewRelic
         */
        publisher: pulumi.Input<string>;
        /**
         * The version of the desired product/artifact.
         */
        version?: pulumi.Input<string>;
    }

    /**
     * A collection of information about the state of the connection between service consumer and provider.
     */
    export interface PrivateLinkServiceConnectionStateArgs {
        /**
         * A message indicating if changes on the service provider require any updates on the consumer.
         */
        actionsRequired?: pulumi.Input<string>;
        /**
         * The reason for approval/rejection of the connection.
         */
        description?: pulumi.Input<string>;
        /**
         * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
         */
        status?: pulumi.Input<string | enums.PrivateEndpointServiceConnectionStatus>;
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
