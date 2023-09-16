import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Get the metadata of a privateLinkServicesForM365ComplianceCenter resource.
 */
export function getPrivateLinkServicesForM365ComplianceCenter(args: GetPrivateLinkServicesForM365ComplianceCenterArgs, opts?: pulumi.InvokeOptions): Promise<GetPrivateLinkServicesForM365ComplianceCenterResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securityandcompliance/v20210308:getPrivateLinkServicesForM365ComplianceCenter", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetPrivateLinkServicesForM365ComplianceCenterArgs {
    /**
     * The name of the resource group that contains the service instance.
     */
    resourceGroupName: string;
    /**
     * The name of the service instance.
     */
    resourceName: string;
}

/**
 * The description of the service.
 */
export interface GetPrivateLinkServicesForM365ComplianceCenterResult {
    /**
     * An etag associated with the resource, used for optimistic concurrency when editing it.
     */
    readonly etag?: string;
    /**
     * The resource identifier.
     */
    readonly id: string;
    /**
     * Setting indicating whether the service has a managed identity associated with it.
     */
    readonly identity?: types.outputs.securityandcompliance.v20210308.ServicesResourceResponseIdentity;
    /**
     * The kind of the service.
     */
    readonly kind: string;
    /**
     * The resource location.
     */
    readonly location: string;
    /**
     * The resource name.
     */
    readonly name: string;
    /**
     * The common properties of a service.
     */
    readonly properties: types.outputs.securityandcompliance.v20210308.ServicesPropertiesResponse;
    /**
     * Required property for system data
     */
    readonly systemData: types.outputs.securityandcompliance.v20210308.SystemDataResponse;
    /**
     * The resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The resource type.
     */
    readonly type: string;
}
/**
 * Get the metadata of a privateLinkServicesForM365ComplianceCenter resource.
 */
export function getPrivateLinkServicesForM365ComplianceCenterOutput(args: GetPrivateLinkServicesForM365ComplianceCenterOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPrivateLinkServicesForM365ComplianceCenterResult> {
    return pulumi.output(args).apply((a: any) => getPrivateLinkServicesForM365ComplianceCenter(a, opts))
}

export interface GetPrivateLinkServicesForM365ComplianceCenterOutputArgs {
    /**
     * The name of the resource group that contains the service instance.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the service instance.
     */
    resourceName: pulumi.Input<string>;
}
