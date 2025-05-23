import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves information about a proximity placement group .
 *
 * Uses Azure REST API version 2024-11-01.
 *
 * Other available API versions: 2022-08-01, 2022-11-01, 2023-03-01, 2023-07-01, 2023-09-01, 2024-03-01, 2024-07-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native compute [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getProximityPlacementGroup(args: GetProximityPlacementGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetProximityPlacementGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:compute:getProximityPlacementGroup", {
        "includeColocationStatus": args.includeColocationStatus,
        "proximityPlacementGroupName": args.proximityPlacementGroupName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetProximityPlacementGroupArgs {
    /**
     * includeColocationStatus=true enables fetching the colocation status of all the resources in the proximity placement group.
     */
    includeColocationStatus?: string;
    /**
     * The name of the proximity placement group.
     */
    proximityPlacementGroupName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * Specifies information about the proximity placement group.
 */
export interface GetProximityPlacementGroupResult {
    /**
     * A list of references to all availability sets in the proximity placement group.
     */
    readonly availabilitySets: types.outputs.SubResourceWithColocationStatusResponse[];
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Describes colocation status of the Proximity Placement Group.
     */
    readonly colocationStatus?: types.outputs.InstanceViewStatusResponse;
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * Specifies the user intent of the proximity placement group.
     */
    readonly intent?: types.outputs.ProximityPlacementGroupPropertiesResponseIntent;
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * Specifies the type of the proximity placement group. Possible values are: **Standard** : Co-locate resources within an Azure region or Availability Zone. **Ultra** : For future use.
     */
    readonly proximityPlacementGroupType?: string;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type
     */
    readonly type: string;
    /**
     * A list of references to all virtual machine scale sets in the proximity placement group.
     */
    readonly virtualMachineScaleSets: types.outputs.SubResourceWithColocationStatusResponse[];
    /**
     * A list of references to all virtual machines in the proximity placement group.
     */
    readonly virtualMachines: types.outputs.SubResourceWithColocationStatusResponse[];
    /**
     * Specifies the Availability Zone where virtual machine, virtual machine scale set or availability set associated with the  proximity placement group can be created.
     */
    readonly zones?: string[];
}
/**
 * Retrieves information about a proximity placement group .
 *
 * Uses Azure REST API version 2024-11-01.
 *
 * Other available API versions: 2022-08-01, 2022-11-01, 2023-03-01, 2023-07-01, 2023-09-01, 2024-03-01, 2024-07-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native compute [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getProximityPlacementGroupOutput(args: GetProximityPlacementGroupOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetProximityPlacementGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:compute:getProximityPlacementGroup", {
        "includeColocationStatus": args.includeColocationStatus,
        "proximityPlacementGroupName": args.proximityPlacementGroupName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetProximityPlacementGroupOutputArgs {
    /**
     * includeColocationStatus=true enables fetching the colocation status of all the resources in the proximity placement group.
     */
    includeColocationStatus?: pulumi.Input<string>;
    /**
     * The name of the proximity placement group.
     */
    proximityPlacementGroupName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}