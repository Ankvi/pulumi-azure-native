import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified NSP association by name.
 *
 * Uses Azure REST API version 2024-06-01-preview.
 */
export function getNetworkSecurityPerimeterAssociation(args: GetNetworkSecurityPerimeterAssociationArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkSecurityPerimeterAssociationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getNetworkSecurityPerimeterAssociation", {
        "associationName": args.associationName,
        "networkSecurityPerimeterName": args.networkSecurityPerimeterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNetworkSecurityPerimeterAssociationArgs {
    /**
     * The name of the NSP association.
     */
    associationName: string;
    /**
     * The name of the network security perimeter.
     */
    networkSecurityPerimeterName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * The NSP resource association resource
 */
export interface GetNetworkSecurityPerimeterAssociationResult {
    /**
     * Access mode on the association.
     */
    readonly accessMode?: string;
    /**
     * Specifies if there are provisioning issues
     */
    readonly hasProvisioningIssues: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The PaaS resource to be associated.
     */
    readonly privateLinkResource?: types.outputs.SubResourceResponse;
    /**
     * Profile id to which the PaaS resource is associated.
     */
    readonly profile?: types.outputs.SubResourceResponse;
    /**
     * The provisioning state of the resource  association resource.
     */
    readonly provisioningState: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets the specified NSP association by name.
 *
 * Uses Azure REST API version 2024-06-01-preview.
 */
export function getNetworkSecurityPerimeterAssociationOutput(args: GetNetworkSecurityPerimeterAssociationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetNetworkSecurityPerimeterAssociationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getNetworkSecurityPerimeterAssociation", {
        "associationName": args.associationName,
        "networkSecurityPerimeterName": args.networkSecurityPerimeterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNetworkSecurityPerimeterAssociationOutputArgs {
    /**
     * The name of the NSP association.
     */
    associationName: pulumi.Input<string>;
    /**
     * The name of the network security perimeter.
     */
    networkSecurityPerimeterName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}