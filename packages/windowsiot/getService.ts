import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get the non-security related metadata of a Windows IoT Device Service.
 * Azure REST API version: 2019-06-01.
 *
 * Other available API versions: 2018-02-16-preview.
 */
export function getService(args: GetServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetServiceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:windowsiot:getService", {
        "deviceName": args.deviceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetServiceArgs {
    /**
     * The name of the Windows IoT Device Service.
     */
    deviceName: string;
    /**
     * The name of the resource group that contains the Windows IoT Device Service.
     */
    resourceGroupName: string;
}

/**
 * The description of the Windows IoT Device Service.
 */
export interface GetServiceResult {
    /**
     * Windows IoT Device Service OEM AAD domain
     */
    readonly adminDomainName?: string;
    /**
     * Windows IoT Device Service ODM AAD domain
     */
    readonly billingDomainName?: string;
    /**
     * The Etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal ETag convention.
     */
    readonly etag?: string;
    /**
     * Fully qualified resource Id for the resource
     */
    readonly id: string;
    /**
     * The Azure Region where the resource lives
     */
    readonly location?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Windows IoT Device Service notes.
     */
    readonly notes?: string;
    /**
     * Windows IoT Device Service device allocation,
     */
    readonly quantity?: number;
    /**
     * Windows IoT Device Service start date,
     */
    readonly startDate: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Get the non-security related metadata of a Windows IoT Device Service.
 * Azure REST API version: 2019-06-01.
 *
 * Other available API versions: 2018-02-16-preview.
 */
export function getServiceOutput(args: GetServiceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetServiceResult> {
    return pulumi.output(args).apply((a: any) => getService(a, opts))
}

export interface GetServiceOutputArgs {
    /**
     * The name of the Windows IoT Device Service.
     */
    deviceName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the Windows IoT Device Service.
     */
    resourceGroupName: pulumi.Input<string>;
}
