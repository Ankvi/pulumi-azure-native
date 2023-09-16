import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The files resource is a nested, proxy-only resource representing a file stored under the project resource. This method retrieves information about a file.
 * Azure REST API version: 2021-06-30.
 */
export function getFile(args: GetFileArgs, opts?: pulumi.InvokeOptions): Promise<GetFileResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datamigration:getFile", {
        "fileName": args.fileName,
        "groupName": args.groupName,
        "projectName": args.projectName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetFileArgs {
    /**
     * Name of the File
     */
    fileName: string;
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
 * A file resource
 */
export interface GetFileResult {
    /**
     * HTTP strong entity tag value. This is ignored if submitted.
     */
    readonly etag?: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Custom file properties
     */
    readonly properties: types.outputs.datamigration.ProjectFilePropertiesResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.datamigration.SystemDataResponse;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * The files resource is a nested, proxy-only resource representing a file stored under the project resource. This method retrieves information about a file.
 * Azure REST API version: 2021-06-30.
 */
export function getFileOutput(args: GetFileOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFileResult> {
    return pulumi.output(args).apply((a: any) => getFile(a, opts))
}

export interface GetFileOutputArgs {
    /**
     * Name of the File
     */
    fileName: pulumi.Input<string>;
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
