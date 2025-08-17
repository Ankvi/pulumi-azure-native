import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The project resource is a nested resource representing a stored migration project. The GET method retrieves information about a project.
 *
 * Uses Azure REST API version 2023-07-15-preview.
 *
 * Other available API versions: 2021-06-30, 2021-10-30-preview, 2022-01-30-preview, 2022-03-30-preview, 2025-03-15-preview, 2025-06-30. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native datamigration [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Field that defines the Azure active directory application info, used to connect to the target Azure resource
     */
    readonly azureAuthenticationInfo?: types.outputs.AzureActiveDirectoryAppResponse;
    /**
     * UTC Date and time when project was created
     */
    readonly creationTime: string;
    /**
     * List of DatabaseInfo
     */
    readonly databasesInfo?: types.outputs.DatabaseInfoResponse[];
    /**
     * HTTP strong entity tag value. This is ignored if submitted.
     */
    readonly etag?: string;
    readonly id: string;
    readonly location?: string;
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
    readonly systemData: types.outputs.SystemDataResponse;
    readonly tags?: {[key: string]: string};
    /**
     * Information for connecting to target
     */
    readonly targetConnectionInfo?: types.outputs.MiSqlConnectionInfoResponse | types.outputs.MongoDbConnectionInfoResponse | types.outputs.MySqlConnectionInfoResponse | types.outputs.OracleConnectionInfoResponse | types.outputs.PostgreSqlConnectionInfoResponse | types.outputs.SqlConnectionInfoResponse;
    /**
     * Target platform for the project
     */
    readonly targetPlatform: string;
    readonly type: string;
}
/**
 * The project resource is a nested resource representing a stored migration project. The GET method retrieves information about a project.
 *
 * Uses Azure REST API version 2023-07-15-preview.
 *
 * Other available API versions: 2021-06-30, 2021-10-30-preview, 2022-01-30-preview, 2022-03-30-preview, 2025-03-15-preview, 2025-06-30. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native datamigration [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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