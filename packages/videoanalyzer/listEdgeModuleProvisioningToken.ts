import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Creates a new provisioning token. A provisioning token allows for a single instance of Azure Video analyzer IoT edge module to be initialized and authorized to the cloud account. The provisioning token itself is short lived and it is only used for the initial handshake between IoT edge module and the cloud. After the initial handshake, the IoT edge module will agree on a set of authentication keys which will be auto-rotated as long as the module is able to periodically connect to the cloud. A new provisioning token can be generated for the same IoT edge module in case the module state lost or reset.
 *
 * Uses Azure REST API version 2021-11-01-preview.
 */
export function listEdgeModuleProvisioningToken(args: ListEdgeModuleProvisioningTokenArgs, opts?: pulumi.InvokeOptions): Promise<ListEdgeModuleProvisioningTokenResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:videoanalyzer:listEdgeModuleProvisioningToken", {
        "accountName": args.accountName,
        "edgeModuleName": args.edgeModuleName,
        "expirationDate": args.expirationDate,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListEdgeModuleProvisioningTokenArgs {
    /**
     * The Azure Video Analyzer account name.
     */
    accountName: string;
    /**
     * The Edge Module name.
     */
    edgeModuleName: string;
    /**
     * The desired expiration date of the registration token. The Azure Video Analyzer IoT edge module must be initialized and connected to the Internet prior to the token expiration date.
     */
    expirationDate: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Provisioning token properties. A provisioning token allows for a single instance of Azure Video analyzer IoT edge module to be initialized and authorized to the cloud account. The provisioning token itself is short lived and it is only used for the initial handshake between IoT edge module and the cloud. After the initial handshake, the IoT edge module will agree on a set of authentication keys which will be auto-rotated as long as the module is able to periodically connect to the cloud. A new provisioning token can be generated for the same IoT edge module in case the module state lost or reset.
 */
export interface ListEdgeModuleProvisioningTokenResult {
    /**
     * The expiration date of the registration token. The Azure Video Analyzer IoT edge module must be initialized and connected to the Internet prior to the token expiration date.
     */
    readonly expirationDate: string;
    /**
     * The token blob to be provided to the Azure Video Analyzer IoT edge module through the Azure IoT Edge module twin properties.
     */
    readonly token: string;
}
/**
 * Creates a new provisioning token. A provisioning token allows for a single instance of Azure Video analyzer IoT edge module to be initialized and authorized to the cloud account. The provisioning token itself is short lived and it is only used for the initial handshake between IoT edge module and the cloud. After the initial handshake, the IoT edge module will agree on a set of authentication keys which will be auto-rotated as long as the module is able to periodically connect to the cloud. A new provisioning token can be generated for the same IoT edge module in case the module state lost or reset.
 *
 * Uses Azure REST API version 2021-11-01-preview.
 */
export function listEdgeModuleProvisioningTokenOutput(args: ListEdgeModuleProvisioningTokenOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListEdgeModuleProvisioningTokenResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:videoanalyzer:listEdgeModuleProvisioningToken", {
        "accountName": args.accountName,
        "edgeModuleName": args.edgeModuleName,
        "expirationDate": args.expirationDate,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListEdgeModuleProvisioningTokenOutputArgs {
    /**
     * The Azure Video Analyzer account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * The Edge Module name.
     */
    edgeModuleName: pulumi.Input<string>;
    /**
     * The desired expiration date of the registration token. The Azure Video Analyzer IoT edge module must be initialized and connected to the Internet prior to the token expiration date.
     */
    expirationDate: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}