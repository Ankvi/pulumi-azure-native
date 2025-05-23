import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves the user ManagementAssociation.
 *
 * Uses Azure REST API version 2015-11-01-preview.
 */
export function getManagementAssociation(args: GetManagementAssociationArgs, opts?: pulumi.InvokeOptions): Promise<GetManagementAssociationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:operationsmanagement:getManagementAssociation", {
        "managementAssociationName": args.managementAssociationName,
        "providerName": args.providerName,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
        "resourceType": args.resourceType,
    }, opts);
}

export interface GetManagementAssociationArgs {
    /**
     * User ManagementAssociation Name.
     */
    managementAssociationName: string;
    /**
     * Provider name for the parent resource.
     */
    providerName: string;
    /**
     * The name of the resource group to get. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Parent resource name.
     */
    resourceName: string;
    /**
     * Resource type for the parent resource
     */
    resourceType: string;
}

/**
 * The container for solution.
 */
export interface GetManagementAssociationResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource location
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Properties for ManagementAssociation object supported by the OperationsManagement resource provider.
     */
    readonly properties: types.outputs.ManagementAssociationPropertiesResponse;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Retrieves the user ManagementAssociation.
 *
 * Uses Azure REST API version 2015-11-01-preview.
 */
export function getManagementAssociationOutput(args: GetManagementAssociationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetManagementAssociationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:operationsmanagement:getManagementAssociation", {
        "managementAssociationName": args.managementAssociationName,
        "providerName": args.providerName,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
        "resourceType": args.resourceType,
    }, opts);
}

export interface GetManagementAssociationOutputArgs {
    /**
     * User ManagementAssociation Name.
     */
    managementAssociationName: pulumi.Input<string>;
    /**
     * Provider name for the parent resource.
     */
    providerName: pulumi.Input<string>;
    /**
     * The name of the resource group to get. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Parent resource name.
     */
    resourceName: pulumi.Input<string>;
    /**
     * Resource type for the parent resource
     */
    resourceType: pulumi.Input<string>;
}