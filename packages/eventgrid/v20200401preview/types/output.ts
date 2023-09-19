import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * ConnectionState information.
     */
    export interface ConnectionStateResponse {
        /**
         * Actions required (if any).
         */
        actionsRequired?: string;
        /**
         * Description of the connection state.
         */
        description?: string;
        /**
         * Status of the connection.
         */
        status?: string;
    }

    /**
     * The identity information for the resource.
     */
    export interface IdentityInfoResponse {
        /**
         * The principal ID of resource identity.
         */
        principalId?: string;
        /**
         * The tenant ID of resource.
         */
        tenantId?: string;
        /**
         * The type of managed identity used. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user-assigned identities. The type 'None' will remove any identity.
         */
        type?: string;
        /**
         * The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form:
         * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
         * This property is currently not used and reserved for future usage.
         */
        userAssignedIdentities?: {[key: string]: UserIdentityPropertiesResponse};
    }

    export interface InboundIpRuleResponse {
        /**
         * Action to perform based on the match or no match of the IpMask.
         */
        action?: string;
        /**
         * IP Address in CIDR notation e.g., 10.0.0.0/8.
         */
        ipMask?: string;
    }

    /**
     * This is used to express the source of an input schema mapping for a single target field in the Event Grid Event schema. This is currently used in the mappings for the 'id', 'topic' and 'eventtime' properties. This represents a field in the input event schema.
     */
    export interface JsonFieldResponse {
        /**
         * Name of a field in the input event schema that's to be used as the source of a mapping.
         */
        sourceField?: string;
    }

    /**
     * This is used to express the source of an input schema mapping for a single target field
     * in the Event Grid Event schema. This is currently used in the mappings for the 'subject',
     * 'eventtype' and 'dataversion' properties. This represents a field in the input event schema
     * along with a default value to be used, and at least one of these two properties should be provided.
     */
    export interface JsonFieldWithDefaultResponse {
        /**
         * The default value to be used for mapping when a SourceField is not provided or if there's no property with the specified name in the published JSON event payload.
         */
        defaultValue?: string;
        /**
         * Name of a field in the input event schema that's to be used as the source of a mapping.
         */
        sourceField?: string;
    }

    /**
     * This enables publishing to Event Grid using a custom input schema. This can be used to map properties from a custom input JSON schema to the Event Grid event schema.
     */
    export interface JsonInputSchemaMappingResponse {
        /**
         * The mapping information for the DataVersion property of the Event Grid Event.
         */
        dataVersion?: JsonFieldWithDefaultResponse;
        /**
         * The mapping information for the EventTime property of the Event Grid Event.
         */
        eventTime?: JsonFieldResponse;
        /**
         * The mapping information for the EventType property of the Event Grid Event.
         */
        eventType?: JsonFieldWithDefaultResponse;
        /**
         * The mapping information for the Id property of the Event Grid Event.
         */
        id?: JsonFieldResponse;
        /**
         * Type of the custom mapping
         * Expected value is 'Json'.
         */
        inputSchemaMappingType: "Json";
        /**
         * The mapping information for the Subject property of the Event Grid Event.
         */
        subject?: JsonFieldWithDefaultResponse;
        /**
         * The mapping information for the Topic property of the Event Grid Event.
         */
        topic?: JsonFieldResponse;
    }

    export interface PrivateEndpointConnectionResponse {
        /**
         * GroupIds from the private link service resource.
         */
        groupIds?: string[];
        /**
         * Fully qualified identifier of the resource.
         */
        id: string;
        /**
         * Name of the resource.
         */
        name: string;
        /**
         * The Private Endpoint resource for this Connection.
         */
        privateEndpoint?: PrivateEndpointResponse;
        /**
         * Details about the state of the connection.
         */
        privateLinkServiceConnectionState?: ConnectionStateResponse;
        /**
         * Provisioning state of the Private Endpoint Connection.
         */
        provisioningState?: string;
        /**
         * Type of the resource.
         */
        type: string;
    }

    /**
     * PrivateEndpoint information.
     */
    export interface PrivateEndpointResponse {
        /**
         * The ARM identifier for Private Endpoint.
         */
        id?: string;
    }

    /**
     * Describes an EventGrid Resource Sku.
     */
    export interface ResourceSkuResponse {
        /**
         * The Sku name of the resource. The possible values are: Basic or Premium.
         */
        name?: string;
    }

    /**
     * The information about the user identity.
     */
    export interface UserIdentityPropertiesResponse {
        /**
         * The client id of user assigned identity.
         */
        clientId?: string;
        /**
         * The principal id of user assigned identity.
         */
        principalId?: string;
    }
