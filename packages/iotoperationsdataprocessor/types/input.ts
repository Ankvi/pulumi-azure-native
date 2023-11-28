import * as pulumi from "@pulumi/pulumi";
/**
 * Key that can be used for joining on enrich.
 */
export interface DatasetPropertyKeyArgs {
    /**
     * Path to the input value from the message.
     */
    path: pulumi.Input<string>;
    /**
     * If true the property will be used as a primary key. At most one primary key can exists.
     */
    primaryKey?: pulumi.Input<boolean>;
}

/**
 * Extended location is an extension of Azure locations. They provide a way to use their Azure ARC enabled Kubernetes clusters as target locations for deploying Azure services instances.
 */
export interface ExtendedLocationArgs {
    /**
     * The name of the extended location.
     */
    name: pulumi.Input<string>;
    /**
     * The type of the extended location.
     */
    type: pulumi.Input<string>;
}

/**
 * Stage configuration for Pipeline input stage.
 */
export interface PipelineInputArgs {
    /**
     * Description for stage.
     */
    description?: pulumi.Input<string>;
    /**
     * Next stage in the pipeline.
     */
    next: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * ARM resource type.
     */
    type: pulumi.Input<string>;
}

/**
 * Stage configurations for all Pipeline processing and output stages.
 */
export interface PipelineStageArgs {
    /**
     * Description for stage.
     */
    description?: pulumi.Input<string>;
    /**
     * Next stage in the pipeline. Not required if output stage.
     */
    next?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * ARM resource type.
     */
    type: pulumi.Input<string>;
}
