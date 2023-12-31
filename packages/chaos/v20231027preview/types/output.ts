import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Model that represents a branch in the step.
     */
    export interface BranchResponse {
        /**
         * List of actions.
         */
        actions: (ContinuousActionResponse | DelayActionResponse | DiscreteActionResponse)[];
        /**
         * String of the branch name.
         */
        name: string;
    }

    /**
     * Model that represents the Capability properties model.
     */
    export interface CapabilityPropertiesResponse {
        /**
         * Localized string of the description.
         */
        description: string;
        /**
         * URL to retrieve JSON schema of the Capability parameters.
         */
        parametersSchema: string;
        /**
         * String of the Publisher that this Capability extends.
         */
        publisher: string;
        /**
         * String of the Target Type that this Capability extends.
         */
        targetType: string;
        /**
         * String of the URN for this Capability Type.
         */
        urn: string;
    }

    /**
     * Model that represents a continuous action.
     */
    export interface ContinuousActionResponse {
        /**
         * ISO8601 formatted string that represents a duration.
         */
        duration: string;
        /**
         * String that represents a Capability URN.
         */
        name: string;
        /**
         * List of key value pairs.
         */
        parameters: KeyValuePairResponse[];
        /**
         * String that represents a selector.
         */
        selectorId: string;
        /**
         * Enum that discriminates between action models.
         * Expected value is 'continuous'.
         */
        type: "continuous";
    }

    /**
     * Model that represents the Customer Managed Storage for an Experiment.
     */
    export interface CustomerDataStoragePropertiesResponse {
        /**
         * Name of the Azure Blob Storage container to use or create.
         */
        blobContainerName?: string;
        /**
         * ARM Resource ID of the Storage account to use for Customer Data storage.
         */
        storageAccountResourceId?: string;
    }

    /**
     * Model that represents a delay action.
     */
    export interface DelayActionResponse {
        /**
         * ISO8601 formatted string that represents a duration.
         */
        duration: string;
        /**
         * String that represents a Capability URN.
         */
        name: string;
        /**
         * Enum that discriminates between action models.
         * Expected value is 'delay'.
         */
        type: "delay";
    }

    /**
     * Model that represents a discrete action.
     */
    export interface DiscreteActionResponse {
        /**
         * String that represents a Capability URN.
         */
        name: string;
        /**
         * List of key value pairs.
         */
        parameters: KeyValuePairResponse[];
        /**
         * String that represents a selector.
         */
        selectorId: string;
        /**
         * Enum that discriminates between action models.
         * Expected value is 'discrete'.
         */
        type: "discrete";
    }

    /**
     * Model that represents the Experiment properties model.
     */
    export interface ExperimentPropertiesResponse {
        /**
         * Optional customer-managed Storage account where Experiment schema will be stored.
         */
        customerDataStorage?: CustomerDataStoragePropertiesResponse;
        /**
         * Most recent provisioning state for the given experiment resource.
         */
        provisioningState: string;
        /**
         * List of selectors.
         */
        selectors: (ListSelectorResponse | QuerySelectorResponse)[];
        /**
         * List of steps.
         */
        steps: StepResponse[];
    }

    /**
     * A map to describe the settings of an action.
     */
    export interface KeyValuePairResponse {
        /**
         * The name of the setting for the action.
         */
        key: string;
        /**
         * The value of the setting for the action.
         */
        value: string;
    }

    /**
     * Model that represents a list selector.
     */
    export interface ListSelectorResponse {
        /**
         * Model that represents available filter types that can be applied to a targets list.
         */
        filter?: SimpleFilterResponse;
        /**
         * String of the selector ID.
         */
        id: string;
        /**
         * List of Target references.
         */
        targets: TargetReferenceResponse[];
        /**
         * Enum of the selector type.
         * Expected value is 'List'.
         */
        type: "List";
    }

    /**
     * The private endpoint connection resource.
     */
    export interface PrivateEndpointConnectionResponse {
        /**
         * The group ids for the private endpoint resource.
         */
        groupIds: string[];
        /**
         * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
         */
        id: string;
        /**
         * The name of the resource
         */
        name: string;
        /**
         * The private endpoint resource.
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
         * Azure Resource Manager metadata containing createdBy and modifiedBy information.
         */
        systemData: SystemDataResponse;
        /**
         * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
         */
        type: string;
    }

    /**
     * The private endpoint resource.
     */
    export interface PrivateEndpointResponse {
        /**
         * The ARM identifier for private endpoint.
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
     * Model that represents a query selector.
     */
    export interface QuerySelectorResponse {
        /**
         * Model that represents available filter types that can be applied to a targets list.
         */
        filter?: SimpleFilterResponse;
        /**
         * String of the selector ID.
         */
        id: string;
        /**
         * Azure Resource Graph (ARG) Query Language query for target resources.
         */
        queryString: string;
        /**
         * Subscription id list to scope resource query.
         */
        subscriptionIds: string[];
        /**
         * Enum of the selector type.
         * Expected value is 'Query'.
         */
        type: "Query";
    }

    /**
     * The identity of a resource.
     */
    export interface ResourceIdentityResponse {
        /**
         * GUID that represents the principal ID of this resource identity.
         */
        principalId: string;
        /**
         * GUID that represents the tenant ID of this resource identity.
         */
        tenantId: string;
        /**
         * String of the resource identity type.
         */
        type: string;
        /**
         * The list of user identities associated with the Experiment. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
         */
        userAssignedIdentities?: {[key: string]: UserAssignedIdentityResponse};
    }

    /**
     * Model that represents the Simple filter parameters.
     */
    export interface SimpleFilterParametersResponse {
        /**
         * List of Azure availability zones to filter targets by.
         */
        zones?: string[];
    }

    /**
     * Model that represents a simple target filter.
     */
    export interface SimpleFilterResponse {
        /**
         * Model that represents the Simple filter parameters.
         */
        parameters?: SimpleFilterParametersResponse;
        /**
         * Enum that discriminates between filter types. Currently only `Simple` type is supported.
         * Expected value is 'Simple'.
         */
        type: "Simple";
    }

    /**
     * Model that represents a step in the Experiment resource.
     */
    export interface StepResponse {
        /**
         * List of branches.
         */
        branches: BranchResponse[];
        /**
         * String of the step name.
         */
        name: string;
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
     * Model that represents a reference to a Target in the selector.
     */
    export interface TargetReferenceResponse {
        /**
         * String of the resource ID of a Target resource.
         */
        id: string;
        /**
         * Enum of the Target reference type.
         */
        type: string;
    }

    /**
     * User assigned identity properties
     */
    export interface UserAssignedIdentityResponse {
        /**
         * The client ID of the assigned identity.
         */
        clientId: string;
        /**
         * The principal ID of the assigned identity.
         */
        principalId: string;
    }
