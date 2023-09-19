import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * ConnectionState information.
     */
    export interface ConnectionStateArgs {
        /**
         * Actions required (if any).
         */
        actionsRequired?: pulumi.Input<string>;
        /**
         * Description of the connection state.
         */
        description?: pulumi.Input<string>;
        /**
         * Status of the connection.
         */
        status?: pulumi.Input<string | enums.PersistedConnectionStatus>;
    }

    /**
     * The identity information for the resource.
     */
    export interface IdentityInfoArgs {
        /**
         * The principal ID of resource identity.
         */
        principalId?: pulumi.Input<string>;
        /**
         * The tenant ID of resource.
         */
        tenantId?: pulumi.Input<string>;
        /**
         * The type of managed identity used. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user-assigned identities. The type 'None' will remove any identity.
         */
        type?: pulumi.Input<string | enums.IdentityType>;
        /**
         * The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form:
         * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
         * This property is currently not used and reserved for future usage.
         */
        userAssignedIdentities?: pulumi.Input<{[key: string]: pulumi.Input<UserIdentityPropertiesArgs>}>;
    }

    export interface InboundIpRuleArgs {
        /**
         * Action to perform based on the match or no match of the IpMask.
         */
        action?: pulumi.Input<string | enums.IpActionType>;
        /**
         * IP Address in CIDR notation e.g., 10.0.0.0/8.
         */
        ipMask?: pulumi.Input<string>;
    }

    /**
     * This is used to express the source of an input schema mapping for a single target field in the Event Grid Event schema. This is currently used in the mappings for the 'id', 'topic' and 'eventtime' properties. This represents a field in the input event schema.
     */
    export interface JsonFieldArgs {
        /**
         * Name of a field in the input event schema that's to be used as the source of a mapping.
         */
        sourceField?: pulumi.Input<string>;
    }

    /**
     * This is used to express the source of an input schema mapping for a single target field
     * in the Event Grid Event schema. This is currently used in the mappings for the 'subject',
     * 'eventtype' and 'dataversion' properties. This represents a field in the input event schema
     * along with a default value to be used, and at least one of these two properties should be provided.
     */
    export interface JsonFieldWithDefaultArgs {
        /**
         * The default value to be used for mapping when a SourceField is not provided or if there's no property with the specified name in the published JSON event payload.
         */
        defaultValue?: pulumi.Input<string>;
        /**
         * Name of a field in the input event schema that's to be used as the source of a mapping.
         */
        sourceField?: pulumi.Input<string>;
    }

    /**
     * This enables publishing to Event Grid using a custom input schema. This can be used to map properties from a custom input JSON schema to the Event Grid event schema.
     */
    export interface JsonInputSchemaMappingArgs {
        /**
         * The mapping information for the DataVersion property of the Event Grid Event.
         */
        dataVersion?: pulumi.Input<JsonFieldWithDefaultArgs>;
        /**
         * The mapping information for the EventTime property of the Event Grid Event.
         */
        eventTime?: pulumi.Input<JsonFieldArgs>;
        /**
         * The mapping information for the EventType property of the Event Grid Event.
         */
        eventType?: pulumi.Input<JsonFieldWithDefaultArgs>;
        /**
         * The mapping information for the Id property of the Event Grid Event.
         */
        id?: pulumi.Input<JsonFieldArgs>;
        /**
         * Type of the custom mapping
         * Expected value is 'Json'.
         */
        inputSchemaMappingType: pulumi.Input<"Json">;
        /**
         * The mapping information for the Subject property of the Event Grid Event.
         */
        subject?: pulumi.Input<JsonFieldWithDefaultArgs>;
        /**
         * The mapping information for the Topic property of the Event Grid Event.
         */
        topic?: pulumi.Input<JsonFieldArgs>;
    }

    /**
     * PrivateEndpoint information.
     */
    export interface PrivateEndpointArgs {
        /**
         * The ARM identifier for Private Endpoint.
         */
        id?: pulumi.Input<string>;
    }

    export interface PrivateEndpointConnectionArgs {
        /**
         * GroupIds from the private link service resource.
         */
        groupIds?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The Private Endpoint resource for this Connection.
         */
        privateEndpoint?: pulumi.Input<PrivateEndpointArgs>;
        /**
         * Details about the state of the connection.
         */
        privateLinkServiceConnectionState?: pulumi.Input<ConnectionStateArgs>;
        /**
         * Provisioning state of the Private Endpoint Connection.
         */
        provisioningState?: pulumi.Input<string | enums.ResourceProvisioningState>;
    }

    /**
     * Describes an EventGrid Resource Sku.
     */
    export interface ResourceSkuArgs {
        /**
         * The Sku name of the resource. The possible values are: Basic or Premium.
         */
        name?: pulumi.Input<string | enums.Sku>;
    }

    /**
     * The information about the user identity.
     */
    export interface UserIdentityPropertiesArgs {
        /**
         * The client id of user assigned identity.
         */
        clientId?: pulumi.Input<string>;
        /**
         * The principal id of user assigned identity.
         */
        principalId?: pulumi.Input<string>;
    }
