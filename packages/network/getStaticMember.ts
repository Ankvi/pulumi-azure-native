import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified static member.
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2022-01-01, 2022-02-01-preview, 2022-04-01-preview, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01, 2024-07-01, 2024-10-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getStaticMember(args: GetStaticMemberArgs, opts?: pulumi.InvokeOptions): Promise<GetStaticMemberResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getStaticMember", {
        "networkGroupName": args.networkGroupName,
        "networkManagerName": args.networkManagerName,
        "resourceGroupName": args.resourceGroupName,
        "staticMemberName": args.staticMemberName,
    }, opts);
}

export interface GetStaticMemberArgs {
    /**
     * The name of the network group.
     */
    networkGroupName: string;
    /**
     * The name of the network manager.
     */
    networkManagerName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * The name of the static member.
     */
    staticMemberName: string;
}

/**
 * StaticMember Item.
 */
export interface GetStaticMemberResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The provisioning state of the scope assignment resource.
     */
    readonly provisioningState: string;
    /**
     * Resource region.
     */
    readonly region: string;
    /**
     * Resource Id.
     */
    readonly resourceId?: string;
    /**
     * The system metadata related to this resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets the specified static member.
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2022-01-01, 2022-02-01-preview, 2022-04-01-preview, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01, 2024-07-01, 2024-10-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getStaticMemberOutput(args: GetStaticMemberOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetStaticMemberResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getStaticMember", {
        "networkGroupName": args.networkGroupName,
        "networkManagerName": args.networkManagerName,
        "resourceGroupName": args.resourceGroupName,
        "staticMemberName": args.staticMemberName,
    }, opts);
}

export interface GetStaticMemberOutputArgs {
    /**
     * The name of the network group.
     */
    networkGroupName: pulumi.Input<string>;
    /**
     * The name of the network manager.
     */
    networkManagerName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the static member.
     */
    staticMemberName: pulumi.Input<string>;
}