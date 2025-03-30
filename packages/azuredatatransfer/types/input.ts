import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Properties of connection
 */
export interface ConnectionPropertiesArgs {
    /**
     * Direction of data movement
     */
    direction?: pulumi.Input<string | enums.Direction>;
    /**
     * The flow types being requested for this connection
     */
    flowTypes?: pulumi.Input<pulumi.Input<string | enums.FlowType>[]>;
    /**
     * Justification for the connection request
     */
    justification?: pulumi.Input<string>;
    /**
     * PIN to link requests together
     */
    pin?: pulumi.Input<string>;
    /**
     * Pipeline to use to transfer data
     */
    pipeline: pulumi.Input<string>;
    /**
     * The policies for this connection
     */
    policies?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The primary contact for this connection request
     */
    primaryContact?: pulumi.Input<string>;
    /**
     * Subscription ID to link cloud subscriptions together
     */
    remoteSubscriptionId?: pulumi.Input<string>;
    /**
     * Requirement ID of the connection
     */
    requirementId?: pulumi.Input<string>;
    /**
     * The schemas for this connection
     */
    schemas?: pulumi.Input<pulumi.Input<SchemaArgs>[]>;
    /**
     * The secondary contacts for this connection request
     */
    secondaryContacts?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Properties of flow
 */
export interface FlowPropertiesArgs {
    /**
     * The connection associated with this flow
     */
    connection?: pulumi.Input<SelectedResourceArgs>;
    /**
     * Transfer Storage Blobs or Tables
     */
    dataType?: pulumi.Input<string | enums.DataType>;
    /**
     * The flow type for this flow
     */
    flowType?: pulumi.Input<string | enums.FlowType>;
    /**
     * AME, PME, or TORUS only! AKV Chain Containing SAS Token
     */
    keyVaultUri?: pulumi.Input<string>;
    /**
     * The policies for this flow
     */
    policies?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The selected schema for this flow
     */
    schema?: pulumi.Input<SchemaArgs>;
    /**
     * Service Bus Queue ID
     */
    serviceBusQueueId?: pulumi.Input<string>;
    /**
     * Status of the current flow
     */
    status?: pulumi.Input<string | enums.FlowStatus>;
    /**
     * Storage Account ID
     */
    storageAccountId?: pulumi.Input<string>;
    /**
     * Storage Account
     */
    storageAccountName?: pulumi.Input<string>;
    /**
     * Storage Container Name
     */
    storageContainerName?: pulumi.Input<string>;
}

/**
 * Managed service identity (system assigned and/or user assigned identities)
 */
export interface ManagedServiceIdentityArgs {
    /**
     * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
     */
    type: pulumi.Input<string | enums.ManagedServiceIdentityType>;
    /**
     * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Properties of pipeline
 */
export interface PipelinePropertiesArgs {
    /**
     * Display name of this pipeline
     */
    displayName?: pulumi.Input<string>;
    /**
     * The flow types allowed for this pipeline
     */
    flowTypes?: pulumi.Input<pulumi.Input<string | enums.FlowType>[]>;
    /**
     * The policies for this pipeline
     */
    policies?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Remote cloud of the data to be transferred or received
     */
    remoteCloud: pulumi.Input<string>;
    /**
     * Subscribers of this resource
     */
    subscribers?: pulumi.Input<pulumi.Input<SubscriberArgs>[]>;
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
 * The schema object.
 */
export interface SchemaArgs {
    /**
     * Connection ID associated with this schema
     */
    connectionId?: pulumi.Input<string>;
    /**
     * Content of the schema
     */
    content?: pulumi.Input<string>;
    /**
     * ID associated with this schema
     */
    id?: pulumi.Input<string>;
    /**
     * Name of the schema
     */
    name?: pulumi.Input<string>;
    /**
     * Status of the schema
     */
    status?: pulumi.Input<string | enums.SchemaStatus>;
}

/**
 * A resource selected from ARM
 */
export interface SelectedResourceArgs {
    /**
     * Id of the connection
     */
    id: pulumi.Input<string>;
    /**
     * Location of the connection
     */
    location?: pulumi.Input<string>;
    /**
     * Name of the connection
     */
    name?: pulumi.Input<string>;
    /**
     * Name of the subscription with the connection
     */
    subscriptionName?: pulumi.Input<string>;
}

export interface SubscriberArgs {
    /**
     * Email of the subscriber
     */
    email?: pulumi.Input<string>;
    /**
     * Number specifying what notifications to receive
     */
    notifications?: pulumi.Input<number>;
}





