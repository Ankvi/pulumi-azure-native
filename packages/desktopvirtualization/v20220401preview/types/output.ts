import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The session host configuration for updating agent, monitoring agent, and stack component.
     */
    export interface AgentUpdatePropertiesResponse {
        /**
         * Time zone for maintenance as defined in https://docs.microsoft.com/en-us/dotnet/api/system.timezoneinfo.findsystemtimezonebyid?view=net-5.0. Must be set if useLocalTime is true.
         */
        maintenanceWindowTimeZone?: string;
        /**
         * List of maintenance windows. Maintenance windows are 2 hours long.
         */
        maintenanceWindows?: MaintenanceWindowPropertiesResponse[];
        /**
         * The type of maintenance for session host components.
         */
        type?: string;
        /**
         * Whether to use localTime of the virtual machine.
         */
        useSessionHostLocalTime?: boolean;
    }

    /**
     * Maintenance window starting hour and day of week.
     */
    export interface MaintenanceWindowPropertiesResponse {
        /**
         * Day of the week.
         */
        dayOfWeek?: string;
        /**
         * The update start hour of the day. (0 - 23)
         */
        hour?: number;
    }

    /**
     * Properties for arm migration.
     */
    export interface MigrationRequestPropertiesResponse {
        /**
         * The path to the legacy object to migrate.
         */
        migrationPath?: string;
        /**
         * The type of operation for migration.
         */
        operation?: string;
    }

    /**
     * The Private Endpoint Connection resource.
     */
    export interface PrivateEndpointConnectionResponse {
        /**
         * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
         */
        id: string;
        /**
         * The name of the resource
         */
        name: string;
        /**
         * The resource of private end point.
         */
        privateEndpoint?: PrivateEndpointResponse;
        /**
         * A collection of information about the state of the connection between service consumer and provider.
         */
        privateLinkServiceConnectionState: PrivateLinkServiceConnectionStateResponse;
        /**
         * The provisioning state of the private endpoint connection resource.
         */
        provisioningState: string;
        /**
         * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
         */
        type: string;
    }

    /**
     * The Private Endpoint resource.
     */
    export interface PrivateEndpointResponse {
        /**
         * The ARM identifier for Private Endpoint
         */
        id: string;
    }

    /**
     * A collection of information about the state of the connection between service consumer and provider.
     */
    export interface PrivateLinkServiceConnectionStateResponse {
        /**
         * A message indicating if changes on the service provider require any updates on the consumer.
         */
        actionsRequired?: string;
        /**
         * The reason for approval/rejection of the connection.
         */
        description?: string;
        /**
         * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
         */
        status?: string;
    }

    /**
     * Represents a RegistrationInfo definition.
     */
    export interface RegistrationInfoResponse {
        /**
         * Expiration time of registration token.
         */
        expirationTime?: string;
        /**
         * The type of resetting the token.
         */
        registrationTokenOperation?: string;
        /**
         * The registration token base64 encoded string.
         */
        token?: string;
    }

    export interface ResourceModelWithAllowedPropertySetResponseIdentity {
        /**
         * The principal ID of resource identity.
         */
        principalId: string;
        /**
         * The tenant ID of resource.
         */
        tenantId: string;
        /**
         * The identity type.
         */
        type?: string;
    }

    export interface ResourceModelWithAllowedPropertySetResponsePlan {
        /**
         * A user defined name of the 3rd Party Artifact that is being procured.
         */
        name: string;
        /**
         * The 3rd Party artifact that is being procured. E.g. NewRelic. Product maps to the OfferID specified for the artifact at the time of Data Market onboarding. 
         */
        product: string;
        /**
         * A publisher provided promotion code as provisioned in Data Market for the said product/artifact.
         */
        promotionCode?: string;
        /**
         * The publisher of the 3rd Party Artifact that is being bought. E.g. NewRelic
         */
        publisher: string;
        /**
         * The version of the desired product/artifact.
         */
        version?: string;
    }

    export interface ResourceModelWithAllowedPropertySetResponseSku {
        /**
         * If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
         */
        capacity?: number;
        /**
         * If the service has different generations of hardware, for the same SKU, then that can be captured here.
         */
        family?: string;
        /**
         * The name of the SKU. Ex - P3. It is typically a letter+number code
         */
        name: string;
        /**
         * The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. 
         */
        size?: string;
        /**
         * This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.
         */
        tier?: string;
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
