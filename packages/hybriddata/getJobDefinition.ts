import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * This method gets job definition object by name.
 *
 * Uses Azure REST API version 2019-06-01.
 */
export function getJobDefinition(args: GetJobDefinitionArgs, opts?: pulumi.InvokeOptions): Promise<GetJobDefinitionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hybriddata:getJobDefinition", {
        "dataManagerName": args.dataManagerName,
        "dataServiceName": args.dataServiceName,
        "jobDefinitionName": args.jobDefinitionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetJobDefinitionArgs {
    /**
     * The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
     */
    dataManagerName: string;
    /**
     * The data service name of the job definition
     */
    dataServiceName: string;
    /**
     * The job definition name that is being queried.
     */
    jobDefinitionName: string;
    /**
     * The Resource Group Name
     */
    resourceGroupName: string;
}

/**
 * Job Definition.
 */
export interface GetJobDefinitionResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * List of customer secrets containing a key identifier and key value. The key identifier is a way for the specific data source to understand the key. Value contains customer secret encrypted by the encryptionKeys.
     */
    readonly customerSecrets?: types.outputs.CustomerSecretResponse[];
    /**
     * A generic json used differently by each data service type.
     */
    readonly dataServiceInput?: any;
    /**
     * Data Sink Id associated to the job definition.
     */
    readonly dataSinkId: string;
    /**
     * Data Source Id associated to the job definition.
     */
    readonly dataSourceId: string;
    /**
     * Id of the object.
     */
    readonly id: string;
    /**
     * Last modified time of the job definition.
     */
    readonly lastModifiedTime?: string;
    /**
     * Name of the object.
     */
    readonly name: string;
    /**
     * This is the preferred geo location for the job to run.
     */
    readonly runLocation?: string;
    /**
     * Schedule for running the job definition
     */
    readonly schedules?: types.outputs.ScheduleResponse[];
    /**
     * State of the job definition.
     */
    readonly state: string;
    /**
     * Type of the object.
     */
    readonly type: string;
    /**
     * Enum to detect if user confirmation is required. If not passed will default to NotRequired.
     */
    readonly userConfirmation?: string;
}
/**
 * This method gets job definition object by name.
 *
 * Uses Azure REST API version 2019-06-01.
 */
export function getJobDefinitionOutput(args: GetJobDefinitionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetJobDefinitionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:hybriddata:getJobDefinition", {
        "dataManagerName": args.dataManagerName,
        "dataServiceName": args.dataServiceName,
        "jobDefinitionName": args.jobDefinitionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetJobDefinitionOutputArgs {
    /**
     * The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
     */
    dataManagerName: pulumi.Input<string>;
    /**
     * The data service name of the job definition
     */
    dataServiceName: pulumi.Input<string>;
    /**
     * The job definition name that is being queried.
     */
    jobDefinitionName: pulumi.Input<string>;
    /**
     * The Resource Group Name
     */
    resourceGroupName: pulumi.Input<string>;
}