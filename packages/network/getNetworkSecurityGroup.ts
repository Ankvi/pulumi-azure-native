import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified network security group.
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2018-06-01, 2018-07-01, 2018-08-01, 2018-10-01, 2018-11-01, 2018-12-01, 2019-02-01, 2019-04-01, 2019-06-01, 2019-07-01, 2019-08-01, 2019-09-01, 2019-11-01, 2019-12-01, 2020-03-01, 2020-04-01, 2020-05-01, 2020-06-01, 2020-07-01, 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01, 2024-07-01, 2024-10-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getNetworkSecurityGroup(args: GetNetworkSecurityGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkSecurityGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getNetworkSecurityGroup", {
        "expand": args.expand,
        "networkSecurityGroupName": args.networkSecurityGroupName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNetworkSecurityGroupArgs {
    /**
     * Expands referenced resources.
     */
    expand?: string;
    /**
     * The name of the network security group.
     */
    networkSecurityGroupName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * NetworkSecurityGroup resource.
 */
export interface GetNetworkSecurityGroupResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The default security rules of network security group.
     */
    readonly defaultSecurityRules: types.outputs.SecurityRuleResponse[];
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * A collection of references to flow log resources.
     */
    readonly flowLogs: types.outputs.FlowLogResponse[];
    /**
     * When enabled, flows created from Network Security Group connections will be re-evaluated when rules are updates. Initial enablement will trigger re-evaluation.
     */
    readonly flushConnection?: boolean;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * A collection of references to network interfaces.
     */
    readonly networkInterfaces: types.outputs.NetworkInterfaceResponse[];
    /**
     * The provisioning state of the network security group resource.
     */
    readonly provisioningState: string;
    /**
     * The resource GUID property of the network security group resource.
     */
    readonly resourceGuid: string;
    /**
     * A collection of security rules of the network security group.
     */
    readonly securityRules?: types.outputs.SecurityRuleResponse[];
    /**
     * A collection of references to subnets.
     */
    readonly subnets: types.outputs.SubnetResponse[];
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
 * Gets the specified network security group.
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2018-06-01, 2018-07-01, 2018-08-01, 2018-10-01, 2018-11-01, 2018-12-01, 2019-02-01, 2019-04-01, 2019-06-01, 2019-07-01, 2019-08-01, 2019-09-01, 2019-11-01, 2019-12-01, 2020-03-01, 2020-04-01, 2020-05-01, 2020-06-01, 2020-07-01, 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01, 2024-07-01, 2024-10-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getNetworkSecurityGroupOutput(args: GetNetworkSecurityGroupOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetNetworkSecurityGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getNetworkSecurityGroup", {
        "expand": args.expand,
        "networkSecurityGroupName": args.networkSecurityGroupName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNetworkSecurityGroupOutputArgs {
    /**
     * Expands referenced resources.
     */
    expand?: pulumi.Input<string>;
    /**
     * The name of the network security group.
     */
    networkSecurityGroupName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}