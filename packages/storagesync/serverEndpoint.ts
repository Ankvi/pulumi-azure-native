import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Server Endpoint object.
 *
 * Uses Azure REST API version 2022-09-01. In version 2.x of the Azure Native provider, it used API version 2022-06-01.
 *
 * Other available API versions: 2022-06-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native storagesync [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class ServerEndpoint extends pulumi.CustomResource {
    /**
     * Get an existing ServerEndpoint resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ServerEndpoint {
        return new ServerEndpoint(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:storagesync:ServerEndpoint';

    /**
     * Returns true if the given object is an instance of ServerEndpoint.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ServerEndpoint {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ServerEndpoint.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Cloud Tiering.
     */
    public readonly cloudTiering!: pulumi.Output<string | undefined>;
    /**
     * Cloud tiering status. Only populated if cloud tiering is enabled.
     */
    public /*out*/ readonly cloudTieringStatus!: pulumi.Output<types.outputs.ServerEndpointCloudTieringStatusResponse>;
    /**
     * Friendly Name
     */
    public readonly friendlyName!: pulumi.Output<string | undefined>;
    /**
     * Policy for how namespace and files are recalled during FastDr.
     */
    public readonly initialDownloadPolicy!: pulumi.Output<string | undefined>;
    /**
     * Policy for how the initial upload sync session is performed.
     */
    public readonly initialUploadPolicy!: pulumi.Output<string | undefined>;
    /**
     * Resource Last Operation Name
     */
    public /*out*/ readonly lastOperationName!: pulumi.Output<string>;
    /**
     * ServerEndpoint lastWorkflowId
     */
    public /*out*/ readonly lastWorkflowId!: pulumi.Output<string>;
    /**
     * Policy for enabling follow-the-sun business models: link local cache to cloud behavior to pre-populate before local access.
     */
    public readonly localCacheMode!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Offline data transfer
     */
    public readonly offlineDataTransfer!: pulumi.Output<string | undefined>;
    /**
     * Offline data transfer share name
     */
    public readonly offlineDataTransferShareName!: pulumi.Output<string | undefined>;
    /**
     * Offline data transfer storage account resource ID
     */
    public /*out*/ readonly offlineDataTransferStorageAccountResourceId!: pulumi.Output<string>;
    /**
     * Offline data transfer storage account tenant ID
     */
    public /*out*/ readonly offlineDataTransferStorageAccountTenantId!: pulumi.Output<string>;
    /**
     * ServerEndpoint Provisioning State
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Recall status. Only populated if cloud tiering is enabled.
     */
    public /*out*/ readonly recallStatus!: pulumi.Output<types.outputs.ServerEndpointRecallStatusResponse>;
    /**
     * Server Endpoint provisioning status
     */
    public /*out*/ readonly serverEndpointProvisioningStatus!: pulumi.Output<types.outputs.ServerEndpointProvisioningStatusResponse | undefined>;
    /**
     * Server Local path.
     */
    public readonly serverLocalPath!: pulumi.Output<string | undefined>;
    /**
     * Server name
     */
    public /*out*/ readonly serverName!: pulumi.Output<string>;
    /**
     * Server Resource Id.
     */
    public readonly serverResourceId!: pulumi.Output<string | undefined>;
    /**
     * Server Endpoint sync status
     */
    public /*out*/ readonly syncStatus!: pulumi.Output<types.outputs.ServerEndpointSyncStatusResponse>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Tier files older than days.
     */
    public readonly tierFilesOlderThanDays!: pulumi.Output<number | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Level of free space to be maintained by Cloud Tiering if it is enabled.
     */
    public readonly volumeFreeSpacePercent!: pulumi.Output<number | undefined>;

    /**
     * Create a ServerEndpoint resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServerEndpointArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.storageSyncServiceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'storageSyncServiceName'");
            }
            if ((!args || args.syncGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'syncGroupName'");
            }
            resourceInputs["cloudTiering"] = args ? args.cloudTiering : undefined;
            resourceInputs["friendlyName"] = args ? args.friendlyName : undefined;
            resourceInputs["initialDownloadPolicy"] = args ? args.initialDownloadPolicy : undefined;
            resourceInputs["initialUploadPolicy"] = args ? args.initialUploadPolicy : undefined;
            resourceInputs["localCacheMode"] = args ? args.localCacheMode : undefined;
            resourceInputs["offlineDataTransfer"] = args ? args.offlineDataTransfer : undefined;
            resourceInputs["offlineDataTransferShareName"] = args ? args.offlineDataTransferShareName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serverEndpointName"] = args ? args.serverEndpointName : undefined;
            resourceInputs["serverLocalPath"] = args ? args.serverLocalPath : undefined;
            resourceInputs["serverResourceId"] = args ? args.serverResourceId : undefined;
            resourceInputs["storageSyncServiceName"] = args ? args.storageSyncServiceName : undefined;
            resourceInputs["syncGroupName"] = args ? args.syncGroupName : undefined;
            resourceInputs["tierFilesOlderThanDays"] = (args ? args.tierFilesOlderThanDays : undefined) ?? 0;
            resourceInputs["volumeFreeSpacePercent"] = (args ? args.volumeFreeSpacePercent : undefined) ?? 20;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["cloudTieringStatus"] = undefined /*out*/;
            resourceInputs["lastOperationName"] = undefined /*out*/;
            resourceInputs["lastWorkflowId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["offlineDataTransferStorageAccountResourceId"] = undefined /*out*/;
            resourceInputs["offlineDataTransferStorageAccountTenantId"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["recallStatus"] = undefined /*out*/;
            resourceInputs["serverEndpointProvisioningStatus"] = undefined /*out*/;
            resourceInputs["serverName"] = undefined /*out*/;
            resourceInputs["syncStatus"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["cloudTiering"] = undefined /*out*/;
            resourceInputs["cloudTieringStatus"] = undefined /*out*/;
            resourceInputs["friendlyName"] = undefined /*out*/;
            resourceInputs["initialDownloadPolicy"] = undefined /*out*/;
            resourceInputs["initialUploadPolicy"] = undefined /*out*/;
            resourceInputs["lastOperationName"] = undefined /*out*/;
            resourceInputs["lastWorkflowId"] = undefined /*out*/;
            resourceInputs["localCacheMode"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["offlineDataTransfer"] = undefined /*out*/;
            resourceInputs["offlineDataTransferShareName"] = undefined /*out*/;
            resourceInputs["offlineDataTransferStorageAccountResourceId"] = undefined /*out*/;
            resourceInputs["offlineDataTransferStorageAccountTenantId"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["recallStatus"] = undefined /*out*/;
            resourceInputs["serverEndpointProvisioningStatus"] = undefined /*out*/;
            resourceInputs["serverLocalPath"] = undefined /*out*/;
            resourceInputs["serverName"] = undefined /*out*/;
            resourceInputs["serverResourceId"] = undefined /*out*/;
            resourceInputs["syncStatus"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tierFilesOlderThanDays"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["volumeFreeSpacePercent"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:storagesync/v20170605preview:ServerEndpoint" }, { type: "azure-native:storagesync/v20180402:ServerEndpoint" }, { type: "azure-native:storagesync/v20180701:ServerEndpoint" }, { type: "azure-native:storagesync/v20181001:ServerEndpoint" }, { type: "azure-native:storagesync/v20190201:ServerEndpoint" }, { type: "azure-native:storagesync/v20190301:ServerEndpoint" }, { type: "azure-native:storagesync/v20190601:ServerEndpoint" }, { type: "azure-native:storagesync/v20191001:ServerEndpoint" }, { type: "azure-native:storagesync/v20200301:ServerEndpoint" }, { type: "azure-native:storagesync/v20200901:ServerEndpoint" }, { type: "azure-native:storagesync/v20220601:ServerEndpoint" }, { type: "azure-native:storagesync/v20220901:ServerEndpoint" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ServerEndpoint.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ServerEndpoint resource.
 */
export interface ServerEndpointArgs {
    /**
     * Cloud Tiering.
     */
    cloudTiering?: pulumi.Input<string | types.enums.FeatureStatus>;
    /**
     * Friendly Name
     */
    friendlyName?: pulumi.Input<string>;
    /**
     * Policy for how namespace and files are recalled during FastDr.
     */
    initialDownloadPolicy?: pulumi.Input<string | types.enums.InitialDownloadPolicy>;
    /**
     * Policy for how the initial upload sync session is performed.
     */
    initialUploadPolicy?: pulumi.Input<string | types.enums.InitialUploadPolicy>;
    /**
     * Policy for enabling follow-the-sun business models: link local cache to cloud behavior to pre-populate before local access.
     */
    localCacheMode?: pulumi.Input<string | types.enums.LocalCacheMode>;
    /**
     * Offline data transfer
     */
    offlineDataTransfer?: pulumi.Input<string | types.enums.FeatureStatus>;
    /**
     * Offline data transfer share name
     */
    offlineDataTransferShareName?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of Server Endpoint object.
     */
    serverEndpointName?: pulumi.Input<string>;
    /**
     * Server Local path.
     */
    serverLocalPath?: pulumi.Input<string>;
    /**
     * Server Resource Id.
     */
    serverResourceId?: pulumi.Input<string>;
    /**
     * Name of Storage Sync Service resource.
     */
    storageSyncServiceName: pulumi.Input<string>;
    /**
     * Name of Sync Group resource.
     */
    syncGroupName: pulumi.Input<string>;
    /**
     * Tier files older than days.
     */
    tierFilesOlderThanDays?: pulumi.Input<number>;
    /**
     * Level of free space to be maintained by Cloud Tiering if it is enabled.
     */
    volumeFreeSpacePercent?: pulumi.Input<number>;
}