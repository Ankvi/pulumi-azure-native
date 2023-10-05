import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Properties of a migrate project.
     */
    export interface MigrateProjectPropertiesArgs {
        /**
         * Gets or sets the state of public network access.
         */
        publicNetworkAccess?: pulumi.Input<string | enums.PublicNetworkAccess>;
        /**
         * Service endpoint.
         */
        serviceEndpoint?: pulumi.Input<string>;
        /**
         * Utility storage account id.
         */
        utilityStorageAccountId?: pulumi.Input<string>;
    }

    /**
     * Properties of a private endpoint connection.
     */
    export interface PrivateEndpointConnectionPropertiesArgs {
        /**
         * Gets the properties of the object.
         */
        privateLinkServiceConnectionState?: pulumi.Input<PrivateLinkServiceConnectionStateArgs>;
    }

    /**
     * Private endpoint connection state.
     */
    export interface PrivateLinkServiceConnectionStateArgs {
        /**
         * Action required.
         */
        actionsRequired?: pulumi.Input<string>;
        /**
         * Description of the object.
         */
        description?: pulumi.Input<string>;
        /**
         * Private link connection state.
         */
        status?: pulumi.Input<string | enums.PrivateLinkServiceConnectionStateStatus>;
    }

    /**
     * Class representing the details of the solution.
     */
    export interface SolutionDetailsArgs {
        /**
         * Gets or sets the count of assessments reported by the solution.
         */
        assessmentCount?: pulumi.Input<number>;
        /**
         * Gets or sets the extended details reported by the solution.
         */
        extendedDetails?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * Gets or sets the count of groups reported by the solution.
         */
        groupCount?: pulumi.Input<number>;
    }

    /**
     * Class for solution properties.
     */
    export interface SolutionPropertiesArgs {
        /**
         * Gets or sets the cleanup state of the solution.
         */
        cleanupState?: pulumi.Input<string | enums.CleanupState>;
        /**
         * Gets or sets the details of the solution.
         */
        details?: pulumi.Input<SolutionDetailsArgs>;
        /**
         * Gets or sets the goal of the solution.
         */
        goal?: pulumi.Input<string | enums.Goal>;
        /**
         * Gets or sets the purpose of the solution.
         */
        purpose?: pulumi.Input<string | enums.Purpose>;
        /**
         * Gets or sets the current status of the solution.
         */
        status?: pulumi.Input<string | enums.Status>;
        /**
         * Gets or sets the tool being used in the solution.
         */
        tool?: pulumi.Input<string | enums.Tool>;
    }
