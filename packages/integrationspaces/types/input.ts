import * as pulumi from "@pulumi/pulumi";
/**
 * The properties of business process identifier.
 */
export interface BusinessProcessIdentifierArgs {
    /**
     * The property name of the business process identifier.
     */
    propertyName?: pulumi.Input<string | undefined>;
    /**
     * The property type of the business process identifier.
     */
    propertyType?: pulumi.Input<string | undefined>;
}

/**
 * The properties of business process mapping.
 */
export interface BusinessProcessMappingItemArgs {
    /**
     * The logic app resource id.
     */
    logicAppResourceId?: pulumi.Input<string | undefined>;
    /**
     * The operation name.
     */
    operationName?: pulumi.Input<string | undefined>;
    /**
     * The mapping item operation type of the business process.
     */
    operationType?: pulumi.Input<string | undefined>;
    /**
     * The workflow name within the logic app.
     */
    workflowName?: pulumi.Input<string | undefined>;
}

/**
 * The properties of business process stage.
 */
export interface BusinessProcessStageArgs {
    /**
     * The description of the business stage.
     */
    description?: pulumi.Input<string | undefined>;
    /**
     * The properties within the properties of the business process stage.
     */
    properties?: pulumi.Input<{[key: string]: pulumi.Input<string>} | undefined>;
    /**
     * The property to keep track of stages before current in the business process stage.
     */
    stagesBefore?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * The properties of tracking data store.
 */
export interface TrackingDataStoreArgs {
    /**
     * The data store ingestion URI.
     */
    dataStoreIngestionUri?: pulumi.Input<string | undefined>;
    /**
     * The data store resource id.
     */
    dataStoreResourceId?: pulumi.Input<string | undefined>;
    /**
     * The data store URI.
     */
    dataStoreUri?: pulumi.Input<string | undefined>;
    /**
     * The database name.
     */
    databaseName?: pulumi.Input<string | undefined>;
}
