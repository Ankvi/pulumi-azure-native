import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Cloud Endpoint object.
 *
 * Uses Azure REST API version 2022-09-01. In version 2.x of the Azure Native provider, it used API version 2022-06-01.
 *
 * Other available API versions: 2022-06-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native storagesync [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class CloudEndpoint extends pulumi.CustomResource {
    /**
     * Get an existing CloudEndpoint resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): CloudEndpoint {
        return new CloudEndpoint(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:storagesync:CloudEndpoint';

    /**
     * Returns true if the given object is an instance of CloudEndpoint.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CloudEndpoint {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CloudEndpoint.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Azure file share name
     */
    public readonly azureFileShareName!: pulumi.Output<string | undefined>;
    /**
     * Backup Enabled
     */
    public /*out*/ readonly backupEnabled!: pulumi.Output<string>;
    /**
     * Cloud endpoint change enumeration status
     */
    public /*out*/ readonly changeEnumerationStatus!: pulumi.Output<types.outputs.CloudEndpointChangeEnumerationStatusResponse>;
    /**
     * Friendly Name
     */
    public readonly friendlyName!: pulumi.Output<string | undefined>;
    /**
     * Resource Last Operation Name
     */
    public /*out*/ readonly lastOperationName!: pulumi.Output<string | undefined>;
    /**
     * CloudEndpoint lastWorkflowId
     */
    public /*out*/ readonly lastWorkflowId!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Partnership Id
     */
    public /*out*/ readonly partnershipId!: pulumi.Output<string | undefined>;
    /**
     * CloudEndpoint Provisioning State
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string | undefined>;
    /**
     * Storage Account Resource Id
     */
    public readonly storageAccountResourceId!: pulumi.Output<string | undefined>;
    /**
     * Storage Account Tenant Id
     */
    public readonly storageAccountTenantId!: pulumi.Output<string | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a CloudEndpoint resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CloudEndpointArgs, opts?: pulumi.CustomResourceOptions) {
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
            resourceInputs["azureFileShareName"] = args ? args.azureFileShareName : undefined;
            resourceInputs["cloudEndpointName"] = args ? args.cloudEndpointName : undefined;
            resourceInputs["friendlyName"] = args ? args.friendlyName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["storageAccountResourceId"] = args ? args.storageAccountResourceId : undefined;
            resourceInputs["storageAccountTenantId"] = args ? args.storageAccountTenantId : undefined;
            resourceInputs["storageSyncServiceName"] = args ? args.storageSyncServiceName : undefined;
            resourceInputs["syncGroupName"] = args ? args.syncGroupName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["backupEnabled"] = undefined /*out*/;
            resourceInputs["changeEnumerationStatus"] = undefined /*out*/;
            resourceInputs["lastOperationName"] = undefined /*out*/;
            resourceInputs["lastWorkflowId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["partnershipId"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["azureFileShareName"] = undefined /*out*/;
            resourceInputs["backupEnabled"] = undefined /*out*/;
            resourceInputs["changeEnumerationStatus"] = undefined /*out*/;
            resourceInputs["friendlyName"] = undefined /*out*/;
            resourceInputs["lastOperationName"] = undefined /*out*/;
            resourceInputs["lastWorkflowId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["partnershipId"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["storageAccountResourceId"] = undefined /*out*/;
            resourceInputs["storageAccountTenantId"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:storagesync/v20170605preview:CloudEndpoint" }, { type: "azure-native:storagesync/v20180402:CloudEndpoint" }, { type: "azure-native:storagesync/v20180701:CloudEndpoint" }, { type: "azure-native:storagesync/v20181001:CloudEndpoint" }, { type: "azure-native:storagesync/v20190201:CloudEndpoint" }, { type: "azure-native:storagesync/v20190301:CloudEndpoint" }, { type: "azure-native:storagesync/v20190601:CloudEndpoint" }, { type: "azure-native:storagesync/v20191001:CloudEndpoint" }, { type: "azure-native:storagesync/v20200301:CloudEndpoint" }, { type: "azure-native:storagesync/v20200901:CloudEndpoint" }, { type: "azure-native:storagesync/v20220601:CloudEndpoint" }, { type: "azure-native:storagesync/v20220901:CloudEndpoint" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(CloudEndpoint.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a CloudEndpoint resource.
 */
export interface CloudEndpointArgs {
    /**
     * Azure file share name
     */
    azureFileShareName?: pulumi.Input<string>;
    /**
     * Name of Cloud Endpoint object.
     */
    cloudEndpointName?: pulumi.Input<string>;
    /**
     * Friendly Name
     */
    friendlyName?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Storage Account Resource Id
     */
    storageAccountResourceId?: pulumi.Input<string>;
    /**
     * Storage Account Tenant Id
     */
    storageAccountTenantId?: pulumi.Input<string>;
    /**
     * Name of Storage Sync Service resource.
     */
    storageSyncServiceName: pulumi.Input<string>;
    /**
     * Name of Sync Group resource.
     */
    syncGroupName: pulumi.Input<string>;
}