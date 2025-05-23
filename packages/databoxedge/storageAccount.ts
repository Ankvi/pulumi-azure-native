import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents a Storage Account on the  Data Box Edge/Gateway device.
 *
 * Uses Azure REST API version 2023-07-01. In version 2.x of the Azure Native provider, it used API version 2022-03-01.
 *
 * Other available API versions: 2022-03-01, 2022-04-01-preview, 2022-12-01-preview, 2023-01-01-preview, 2023-12-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native databoxedge [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class StorageAccount extends pulumi.CustomResource {
    /**
     * Get an existing StorageAccount resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): StorageAccount {
        return new StorageAccount(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:databoxedge:StorageAccount';

    /**
     * Returns true if the given object is an instance of StorageAccount.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is StorageAccount {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === StorageAccount.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * BlobEndpoint of Storage Account
     */
    public /*out*/ readonly blobEndpoint!: pulumi.Output<string>;
    /**
     * The Container Count. Present only for Storage Accounts with DataPolicy set to Cloud.
     */
    public /*out*/ readonly containerCount!: pulumi.Output<number>;
    /**
     * Data policy of the storage Account.
     */
    public readonly dataPolicy!: pulumi.Output<string>;
    /**
     * Description for the storage Account.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The object name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Storage Account Credential Id
     */
    public readonly storageAccountCredentialId!: pulumi.Output<string | undefined>;
    /**
     * Current status of the storage account
     */
    public readonly storageAccountStatus!: pulumi.Output<string | undefined>;
    /**
     * Metadata pertaining to creation and last modification of StorageAccount
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The hierarchical type of the object.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a StorageAccount resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StorageAccountArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.dataPolicy === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dataPolicy'");
            }
            if ((!args || args.deviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'deviceName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["dataPolicy"] = args ? args.dataPolicy : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["deviceName"] = args ? args.deviceName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["storageAccountCredentialId"] = args ? args.storageAccountCredentialId : undefined;
            resourceInputs["storageAccountName"] = args ? args.storageAccountName : undefined;
            resourceInputs["storageAccountStatus"] = args ? args.storageAccountStatus : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["blobEndpoint"] = undefined /*out*/;
            resourceInputs["containerCount"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["blobEndpoint"] = undefined /*out*/;
            resourceInputs["containerCount"] = undefined /*out*/;
            resourceInputs["dataPolicy"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["storageAccountCredentialId"] = undefined /*out*/;
            resourceInputs["storageAccountStatus"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:databoxedge/v20190801:StorageAccount" }, { type: "azure-native:databoxedge/v20200501preview:StorageAccount" }, { type: "azure-native:databoxedge/v20200901:StorageAccount" }, { type: "azure-native:databoxedge/v20200901preview:StorageAccount" }, { type: "azure-native:databoxedge/v20201201:StorageAccount" }, { type: "azure-native:databoxedge/v20210201:StorageAccount" }, { type: "azure-native:databoxedge/v20210201preview:StorageAccount" }, { type: "azure-native:databoxedge/v20210601:StorageAccount" }, { type: "azure-native:databoxedge/v20210601preview:StorageAccount" }, { type: "azure-native:databoxedge/v20220301:StorageAccount" }, { type: "azure-native:databoxedge/v20220401preview:StorageAccount" }, { type: "azure-native:databoxedge/v20221201preview:StorageAccount" }, { type: "azure-native:databoxedge/v20230101preview:StorageAccount" }, { type: "azure-native:databoxedge/v20230701:StorageAccount" }, { type: "azure-native:databoxedge/v20231201:StorageAccount" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(StorageAccount.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a StorageAccount resource.
 */
export interface StorageAccountArgs {
    /**
     * Data policy of the storage Account.
     */
    dataPolicy: pulumi.Input<string | types.enums.DataPolicy>;
    /**
     * Description for the storage Account.
     */
    description?: pulumi.Input<string>;
    /**
     * The device name.
     */
    deviceName: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Storage Account Credential Id
     */
    storageAccountCredentialId?: pulumi.Input<string>;
    /**
     * The StorageAccount name.
     */
    storageAccountName?: pulumi.Input<string>;
    /**
     * Current status of the storage account
     */
    storageAccountStatus?: pulumi.Input<string | types.enums.StorageAccountStatus>;
}