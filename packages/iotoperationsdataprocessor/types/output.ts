import * as pulumi from "@pulumi/pulumi";
/**
 * Key that can be used for joining on enrich.
 */
export interface DatasetPropertyKeyResponse {
    /**
     * Path to the input value from the message.
     */
    path: string;
    /**
     * If true the property will be used as a primary key. At most one primary key can exists.
     */
    primaryKey?: boolean;
}

/**
 * Extended location is an extension of Azure locations. They provide a way to use their Azure ARC enabled Kubernetes clusters as target locations for deploying Azure services instances.
 */
export interface ExtendedLocationResponse {
    /**
     * The name of the extended location.
     */
    name: string;
    /**
     * The type of the extended location.
     */
    type: string;
}

/**
 * Stage configuration for Pipeline input stage.
 */
export interface PipelineInputResponse {
    /**
     * Description for stage.
     */
    description?: string;
    /**
     * Next stage in the pipeline.
     */
    next: string[];
    /**
     * ARM resource type.
     */
    type: string;
}

/**
 * Stage configurations for all Pipeline processing and output stages.
 */
export interface PipelineStageResponse {
    /**
     * Description for stage.
     */
    description?: string;
    /**
     * Next stage in the pipeline. Not required if output stage.
     */
    next?: string[];
    /**
     * ARM resource type.
     */
    type: string;
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
