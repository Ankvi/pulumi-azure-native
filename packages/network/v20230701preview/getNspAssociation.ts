import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified NSP association by name.
 */
export function getNspAssociation(args: GetNspAssociationArgs, opts?: pulumi.InvokeOptions): Promise<GetNspAssociationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20230701preview:getNspAssociation", {
        "associationName": args.associationName,
        "networkSecurityPerimeterName": args.networkSecurityPerimeterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNspAssociationArgs {
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
export interface GetNspAssociationResult {
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
 */
export function getNspAssociationOutput(args: GetNspAssociationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNspAssociationResult> {
    return pulumi.output(args).apply((a: any) => getNspAssociation(a, opts))
}

export interface GetNspAssociationOutputArgs {
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