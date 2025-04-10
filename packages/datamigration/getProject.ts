import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The project resource is a nested resource representing a stored migration project. The GET method retrieves information about a project.
 *
 * Uses Azure REST API version 2021-06-30.
 *
 * Other available API versions: 2021-10-30-preview, 2022-03-30-preview, 2023-07-15-preview.
 */
export function getProject(args: GetProjectArgs, opts?: pulumi.InvokeOptions): Promise<GetProjectResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datamigration:getProject", {
        "groupName": args.groupName,
        "projectName": args.projectName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetProjectArgs {
    /**
     * Name of the resource group
     */
    groupName: string;
    /**
     * Name of the project
     */
    projectName: string;
    /**
     * Name of the service
     */
    serviceName: string;
}

/**
 * A project resource
 */
export interface GetProjectResult {
    /**
     * UTC Date and time when project was created
     */
    readonly creationTime: string;
    /**
     * List of DatabaseInfo
     */
    readonly databasesInfo?: types.outputs.DatabaseInfoResponse[];
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource location.
     */
    readonly location: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The project's provisioning state
     */
    readonly provisioningState: string;
    /**
     * Information for connecting to source
     */
    readonly sourceConnectionInfo?: types.outputs.MiSqlConnectionInfoResponse | types.outputs.MongoDbConnectionInfoResponse | types.outputs.MySqlConnectionInfoResponse | types.outputs.OracleConnectionInfoResponse | types.outputs.PostgreSqlConnectionInfoResponse | types.outputs.SqlConnectionInfoResponse;
    /**
     * Source platform for the project
     */
    readonly sourcePlatform: string;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Information for connecting to target
     */
    readonly targetConnectionInfo?: types.outputs.MiSqlConnectionInfoResponse | types.outputs.MongoDbConnectionInfoResponse | types.outputs.MySqlConnectionInfoResponse | types.outputs.OracleConnectionInfoResponse | types.outputs.PostgreSqlConnectionInfoResponse | types.outputs.SqlConnectionInfoResponse;
    /**
     * Target platform for the project
     */
    readonly targetPlatform: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * The project resource is a nested resource representing a stored migration project. The GET method retrieves information about a project.
 *
 * Uses Azure REST API version 2021-06-30.
 *
 * Other available API versions: 2021-10-30-preview, 2022-03-30-preview, 2023-07-15-preview.
 */
export function getProjectOutput(args: GetProjectOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetProjectResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:datamigration:getProject", {
        "groupName": args.groupName,
        "projectName": args.projectName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetProjectOutputArgs {
    /**
     * Name of the resource group
     */
    groupName: pulumi.Input<string>;
    /**
     * Name of the project
     */
    projectName: pulumi.Input<string>;
    /**
     * Name of the service
     */
    serviceName: pulumi.Input<string>;
}