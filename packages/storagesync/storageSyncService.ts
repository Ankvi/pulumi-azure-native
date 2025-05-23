import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Storage Sync Service object.
 *
 * Uses Azure REST API version 2022-09-01. In version 2.x of the Azure Native provider, it used API version 2022-06-01.
 *
 * Other available API versions: 2022-06-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native storagesync [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class StorageSyncService extends pulumi.CustomResource {
    /**
     * Get an existing StorageSyncService resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): StorageSyncService {
        return new StorageSyncService(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:storagesync:StorageSyncService';

    /**
     * Returns true if the given object is an instance of StorageSyncService.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is StorageSyncService {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === StorageSyncService.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * managed identities for the Storage Sync service to interact with other Azure services without maintaining any secrets or credentials in code.
     */
    public readonly identity!: pulumi.Output<types.outputs.ManagedServiceIdentityResponse | undefined>;
    /**
     * Incoming Traffic Policy
     */
    public readonly incomingTrafficPolicy!: pulumi.Output<string | undefined>;
    /**
     * Resource Last Operation Name
     */
    public /*out*/ readonly lastOperationName!: pulumi.Output<string>;
    /**
     * StorageSyncService lastWorkflowId
     */
    public /*out*/ readonly lastWorkflowId!: pulumi.Output<string>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * List of private endpoint connection associated with the specified storage sync service
     */
    public /*out*/ readonly privateEndpointConnections!: pulumi.Output<types.outputs.PrivateEndpointConnectionResponse[]>;
    /**
     * StorageSyncService Provisioning State
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Storage Sync service status.
     */
    public /*out*/ readonly storageSyncServiceStatus!: pulumi.Output<number>;
    /**
     * Storage Sync service Uid
     */
    public /*out*/ readonly storageSyncServiceUid!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Use Identity authorization when customer have finished setup RBAC permissions.
     */
    public readonly useIdentity!: pulumi.Output<boolean>;

    /**
     * Create a StorageSyncService resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StorageSyncServiceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["incomingTrafficPolicy"] = args ? args.incomingTrafficPolicy : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["storageSyncServiceName"] = args ? args.storageSyncServiceName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["useIdentity"] = args ? args.useIdentity : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["lastOperationName"] = undefined /*out*/;
            resourceInputs["lastWorkflowId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateEndpointConnections"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["storageSyncServiceStatus"] = undefined /*out*/;
            resourceInputs["storageSyncServiceUid"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["incomingTrafficPolicy"] = undefined /*out*/;
            resourceInputs["lastOperationName"] = undefined /*out*/;
            resourceInputs["lastWorkflowId"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateEndpointConnections"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["storageSyncServiceStatus"] = undefined /*out*/;
            resourceInputs["storageSyncServiceUid"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["useIdentity"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:storagesync/v20170605preview:StorageSyncService" }, { type: "azure-native:storagesync/v20180402:StorageSyncService" }, { type: "azure-native:storagesync/v20180701:StorageSyncService" }, { type: "azure-native:storagesync/v20181001:StorageSyncService" }, { type: "azure-native:storagesync/v20190201:StorageSyncService" }, { type: "azure-native:storagesync/v20190301:StorageSyncService" }, { type: "azure-native:storagesync/v20190601:StorageSyncService" }, { type: "azure-native:storagesync/v20191001:StorageSyncService" }, { type: "azure-native:storagesync/v20200301:StorageSyncService" }, { type: "azure-native:storagesync/v20200901:StorageSyncService" }, { type: "azure-native:storagesync/v20220601:StorageSyncService" }, { type: "azure-native:storagesync/v20220901:StorageSyncService" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(StorageSyncService.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a StorageSyncService resource.
 */
export interface StorageSyncServiceArgs {
    /**
     * managed identities for the Storage Sync to interact with other Azure services without maintaining any secrets or credentials in code.
     */
    identity?: pulumi.Input<types.inputs.ManagedServiceIdentityArgs>;
    /**
     * Incoming Traffic Policy
     */
    incomingTrafficPolicy?: pulumi.Input<string | types.enums.IncomingTrafficPolicy>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of Storage Sync Service resource.
     */
    storageSyncServiceName?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Use Identity authorization when customer have finished setup RBAC permissions.
     */
    useIdentity?: pulumi.Input<boolean>;
}