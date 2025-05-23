import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about the specified attached data network.
 *
 * Uses Azure REST API version 2024-04-01.
 *
 * Other available API versions: 2022-04-01-preview, 2022-11-01, 2023-06-01, 2023-09-01, 2024-02-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native mobilenetwork [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getAttachedDataNetwork(args: GetAttachedDataNetworkArgs, opts?: pulumi.InvokeOptions): Promise<GetAttachedDataNetworkResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:mobilenetwork:getAttachedDataNetwork", {
        "attachedDataNetworkName": args.attachedDataNetworkName,
        "packetCoreControlPlaneName": args.packetCoreControlPlaneName,
        "packetCoreDataPlaneName": args.packetCoreDataPlaneName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAttachedDataNetworkArgs {
    /**
     * The name of the attached data network.
     */
    attachedDataNetworkName: string;
    /**
     * The name of the packet core control plane.
     */
    packetCoreControlPlaneName: string;
    /**
     * The name of the packet core data plane.
     */
    packetCoreDataPlaneName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Attached data network resource. Must be created in the same location as its parent packet core data plane.
 */
export interface GetAttachedDataNetworkResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The DNS servers to signal to UEs to use for this attached data network. This configuration is mandatory - if you don't want DNS servers, you must provide an empty array.
     */
    readonly dnsAddresses: string[];
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
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
     * The network address and port translation (NAPT) configuration.
     * If this is not specified, the attached data network will use a default NAPT configuration with NAPT enabled.
     */
    readonly naptConfiguration?: types.outputs.NaptConfigurationResponse;
    /**
     * The provisioning state of the attached data network resource.
     */
    readonly provisioningState: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * The user equipment (UE) address pool prefixes for the attached data network from which the packet core instance will dynamically assign IP addresses to UEs.
     * The packet core instance assigns an IP address to a UE when the UE sets up a PDU session.
     *  You must define at least one of userEquipmentAddressPoolPrefix and userEquipmentStaticAddressPoolPrefix. If you define both, they must be of the same size.
     */
    readonly userEquipmentAddressPoolPrefix?: string[];
    /**
     * The user equipment (UE) address pool prefixes for the attached data network from which the packet core instance will assign static IP addresses to UEs.
     * The packet core instance assigns an IP address to a UE when the UE sets up a PDU session. The static IP address for a specific UE is set in StaticIPConfiguration on the corresponding SIM resource.
     * At least one of userEquipmentAddressPoolPrefix and userEquipmentStaticAddressPoolPrefix must be defined. If both are defined, they must be of the same size.
     */
    readonly userEquipmentStaticAddressPoolPrefix?: string[];
    /**
     * The user plane interface on the data network. For 5G networks, this is the N6 interface. For 4G networks, this is the SGi interface.
     */
    readonly userPlaneDataInterface: types.outputs.InterfacePropertiesResponse;
}
/**
 * Gets information about the specified attached data network.
 *
 * Uses Azure REST API version 2024-04-01.
 *
 * Other available API versions: 2022-04-01-preview, 2022-11-01, 2023-06-01, 2023-09-01, 2024-02-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native mobilenetwork [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getAttachedDataNetworkOutput(args: GetAttachedDataNetworkOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAttachedDataNetworkResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:mobilenetwork:getAttachedDataNetwork", {
        "attachedDataNetworkName": args.attachedDataNetworkName,
        "packetCoreControlPlaneName": args.packetCoreControlPlaneName,
        "packetCoreDataPlaneName": args.packetCoreDataPlaneName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAttachedDataNetworkOutputArgs {
    /**
     * The name of the attached data network.
     */
    attachedDataNetworkName: pulumi.Input<string>;
    /**
     * The name of the packet core control plane.
     */
    packetCoreControlPlaneName: pulumi.Input<string>;
    /**
     * The name of the packet core data plane.
     */
    packetCoreDataPlaneName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}