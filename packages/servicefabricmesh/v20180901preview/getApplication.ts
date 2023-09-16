import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets the information about the application resource with the given name. The information include the description and other properties of the application.
 */
export function getApplication(args: GetApplicationArgs, opts?: pulumi.InvokeOptions): Promise<GetApplicationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:servicefabricmesh/v20180901preview:getApplication", {
        "applicationResourceName": args.applicationResourceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetApplicationArgs {
    /**
     * The identity of the application.
     */
    applicationResourceName: string;
    /**
     * Azure resource group name
     */
    resourceGroupName: string;
}

/**
 * This type describes an application resource.
 */
export interface GetApplicationResult {
    /**
     * Internal - used by Visual Studio to setup the debugging session on the local development environment.
     */
    readonly debugParams?: string;
    /**
     * User readable description of the application.
     */
    readonly description?: string;
    /**
     * Describes the diagnostics definition and usage for an application resource.
     */
    readonly diagnostics?: types.outputs.servicefabricmesh.v20180901preview.DiagnosticsDescriptionResponse;
    /**
     * Describes the health state of an application resource.
     */
    readonly healthState: string;
    /**
     * Fully qualified identifier for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * State of the resource.
     */
    readonly provisioningState: string;
    /**
     * Names of the services in the application.
     */
    readonly serviceNames: string[];
    /**
     * Describes the services in the application. This property is used to create or modify services of the application. On get only the name of the service is returned. The service description can be obtained by querying for the service resource.
     */
    readonly services?: types.outputs.servicefabricmesh.v20180901preview.ServiceResourceDescriptionResponse[];
    /**
     * Status of the application.
     */
    readonly status: string;
    /**
     * Gives additional information about the current status of the application.
     */
    readonly statusDetails: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: string;
    /**
     * When the application's health state is not 'Ok', this additional details from service fabric Health Manager for the user to know why the application is marked unhealthy.
     */
    readonly unhealthyEvaluation: string;
}
/**
 * Gets the information about the application resource with the given name. The information include the description and other properties of the application.
 */
export function getApplicationOutput(args: GetApplicationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetApplicationResult> {
    return pulumi.output(args).apply((a: any) => getApplication(a, opts))
}

export interface GetApplicationOutputArgs {
    /**
     * The identity of the application.
     */
    applicationResourceName: pulumi.Input<string>;
    /**
     * Azure resource group name
     */
    resourceGroupName: pulumi.Input<string>;
}
