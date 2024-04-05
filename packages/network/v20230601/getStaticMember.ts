import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified static member.
 */
export function getStaticMember(args: GetStaticMemberArgs, opts?: pulumi.InvokeOptions): Promise<GetStaticMemberResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20230601:getStaticMember", {
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
 */
export function getStaticMemberOutput(args: GetStaticMemberOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetStaticMemberResult> {
    return pulumi.output(args).apply((a: any) => getStaticMember(a, opts))
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