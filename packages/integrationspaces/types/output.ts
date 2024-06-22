import * as pulumi from "@pulumi/pulumi";
/**
 * The properties of business process development artifact.
 */
export interface BusinessProcessDevelopmentArtifactPropertiesResponse {
    /**
     * The business process mapping.
     */
    businessProcessMapping?: {[key: string]: BusinessProcessMappingItemResponse};
    /**
     * The business process stages.
     */
    businessProcessStages?: {[key: string]: BusinessProcessStageResponse};
    /**
     * The description of the business process.
     */
    description?: string;
    /**
     * The business process identifier.
     */
    identifier?: BusinessProcessIdentifierResponse;
    /**
     * The tracking profile for the business process.
     */
    trackingProfiles?: {[key: string]: TrackingProfileDefinitionResponse};
}

/**
 * The properties of business process identifier.
 */
export interface BusinessProcessIdentifierResponse {
    /**
     * The property name of the business process identifier.
     */
    propertyName?: string;
    /**
     * The property type of the business process identifier.
     */
    propertyType?: string;
}

/**
 * The properties of business process mapping.
 */
export interface BusinessProcessMappingItemResponse {
    /**
     * The logic app resource id.
     */
    logicAppResourceId?: string;
    /**
     * The operation name.
     */
    operationName?: string;
    /**
     * The mapping item operation type of the business process.
     */
    operationType?: string;
    /**
     * The workflow name within the logic app.
     */
    workflowName?: string;
}

/**
 * The business process reference.
 */
export interface BusinessProcessReferenceResponse {
    /**
     * The business process name.
     */
    name?: string;
    /**
     * The business process version.
     */
    version?: string;
}

/**
 * The properties of business process stage.
 */
export interface BusinessProcessStageResponse {
    /**
     * The description of the business stage.
     */
    description?: string;
    /**
     * The properties within the properties of the business process stage.
     */
    properties?: {[key: string]: string};
    /**
     * The property to keep track of stages before current in the business process stage.
     */
    stagesBefore?: string[];
}

/**
 * The workflow tracking definition.
 */
export interface FlowTrackingDefinitionResponse {
    /**
     * The tracking correlation context.
     */
    correlationContext?: TrackingCorrelationContextResponse;
    /**
     * The tracking events.
     */
    events?: {[key: string]: TrackingEventDefinitionResponse};
}

/**
 * The business process development artifact save or get response.
 */
export interface SaveOrGetBusinessProcessDevelopmentArtifactResponseResponse {
    /**
     * The name of the business process development artifact.
     */
    name: string;
    /**
     * The properties of the business process development artifact.
     */
    properties?: BusinessProcessDevelopmentArtifactPropertiesResponse;
    /**
     * The system data of the business process development artifact.
     */
    systemData: SystemDataResponse;
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
 * The tracking correlation context.
 */
export interface TrackingCorrelationContextResponse {
    /**
     * The operation name for correlation context.
     */
    operationName?: string;
    /**
     * The operation type for correlation context.
     */
    operationType?: string;
    /**
     * The name of the correlation property.
     */
    propertyName?: string;
    /**
     * The template expression for correlation context property value.
     */
    value?: string;
}

/**
 * The properties of tracking data store.
 */
export interface TrackingDataStoreResponse {
    /**
     * The data store ingestion URI.
     */
    dataStoreIngestionUri?: string;
    /**
     * The data store resource id.
     */
    dataStoreResourceId?: string;
    /**
     * The data store URI.
     */
    dataStoreUri?: string;
    /**
     * The database name.
     */
    databaseName?: string;
}

/**
 * The tracking event definition.
 */
export interface TrackingEventDefinitionResponse {
    /**
     * The operation name.
     */
    operationName?: string;
    /**
     * The operation type.
     */
    operationType?: string;
    /**
     * The properties to be collected for event.
     */
    properties?: {[key: string]: any};
}

/**
 * The tracking profile for the business process
 */
export interface TrackingProfileDefinitionResponse {
    /**
     * The business process reference.
     */
    businessProcess?: BusinessProcessReferenceResponse;
    /**
     * The tracking definition schema uri.
     */
    schema?: string;
    /**
     * The tracking definitions.
     */
    trackingDefinitions?: {[key: string]: FlowTrackingDefinitionResponse};
}
