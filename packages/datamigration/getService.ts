import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The services resource is the top-level resource that represents the Azure Database Migration Service (classic). The GET method retrieves information about a service instance.
 *
 * Uses Azure REST API version 2023-07-15-preview.
 *
 * Other available API versions: 2021-06-30, 2021-10-30-preview, 2022-01-30-preview, 2022-03-30-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native datamigration [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getService(args: GetServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetServiceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datamigration:getService", {
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
 *
 * Uses Azure REST API version 2023-07-15-preview.
 *
 * Other available API versions: 2021-06-30, 2021-10-30-preview, 2022-01-30-preview, 2022-03-30-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native datamigration [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getServiceOutput(args: GetServiceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetServiceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:datamigration:getService", {
        "groupName": args.groupName,
        "serviceName": args.serviceName,
    }, opts);
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