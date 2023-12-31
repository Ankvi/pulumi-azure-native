import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The services resource is the top-level resource that represents the Azure Database Migration Service (classic). The GET method retrieves information about a service instance.
 */
export function getService(args: GetServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetServiceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datamigration/v20220330preview:getService", {
        "groupName": args.groupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetServiceArgs {
    /**
     * Name of the resource group
     */
    groupName: string;
    /**
     * Name of the service
     */
    serviceName: string;
}

/**
 * An Azure Database Migration Service (classic) resource
 */
export interface GetServiceResult {
    /**
     * The time delay before the service is auto-stopped when idle.
     */
    readonly autoStopDelay?: string;
    /**
     * Whether service resources should be deleted when stopped. (Turned on by default)
     */
    readonly deleteResourcesOnStop?: boolean;
    /**
     * HTTP strong entity tag value. Ignored if submitted
     */
    readonly etag?: string;
    readonly id: string;
    /**
     * The resource kind. Only 'vm' (the default) is supported.
     */
    readonly kind?: string;
    readonly location?: string;
    readonly name: string;
    /**
     * The resource's provisioning state
     */
    readonly provisioningState: string;
    /**
     * The public key of the service, used to encrypt secrets sent to the service
     */
    readonly publicKey?: string;
    /**
     * Service SKU
     */
    readonly sku?: types.outputs.ServiceSkuResponse;
    readonly systemData: types.outputs.SystemDataResponse;
    readonly tags?: {[key: string]: string};
    readonly type: string;
    /**
     * The ID of the Microsoft.Network/networkInterfaces resource which the service have
     */
    readonly virtualNicId?: string;
    /**
     * The ID of the Microsoft.Network/virtualNetworks/subnets resource to which the service should be joined
     */
    readonly virtualSubnetId?: string;
}
/**
 * The services resource is the top-level resource that represents the Azure Database Migration Service (classic). The GET method retrieves information about a service instance.
 */
export function getServiceOutput(args: GetServiceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetServiceResult> {
    return pulumi.output(args).apply((a: any) => getService(a, opts))
}

export interface GetServiceOutputArgs {
    /**
     * Name of the resource group
     */
    groupName: pulumi.Input<string>;
    /**
     * Name of the service
     */
    serviceName: pulumi.Input<string>;
}
