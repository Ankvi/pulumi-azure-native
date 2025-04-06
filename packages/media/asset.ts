import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An Asset.
 *
 * Uses Azure REST API version 2023-01-01. In version 2.x of the Azure Native provider, it used API version 2023-01-01.
 *
 * Other available API versions: 2018-03-30-preview, 2018-06-01-preview, 2018-07-01, 2020-05-01, 2021-06-01, 2021-11-01, 2022-08-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native media [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class Asset extends pulumi.CustomResource {
    /**
     * Get an existing Asset resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Asset {
        return new Asset(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:media:Asset';

    /**
     * Returns true if the given object is an instance of Asset.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Asset {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Asset.__pulumiType;
    }

    /**
     * The alternate ID of the Asset.
     */
    public readonly alternateId!: pulumi.Output<string | undefined>;
    /**
     * The Asset ID.
     */
    public /*out*/ readonly assetId!: pulumi.Output<string>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The name of the asset blob container.
     */
    public readonly container!: pulumi.Output<string | undefined>;
    /**
     * The creation date of the Asset.
     */
    public /*out*/ readonly created!: pulumi.Output<string>;
    /**
     * The Asset description.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The Asset container encryption scope in the storage account.
     */
    public readonly encryptionScope!: pulumi.Output<string | undefined>;
    /**
     * The last modified date of the Asset.
     */
    public /*out*/ readonly lastModified!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The name of the storage account.
     */
    public readonly storageAccountName!: pulumi.Output<string | undefined>;
    /**
     * The Asset encryption format. One of None or MediaStorageEncryption.
     */
    public /*out*/ readonly storageEncryptionFormat!: pulumi.Output<string>;
    /**
     * The system metadata relating to this resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Asset resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AssetArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["alternateId"] = args ? args.alternateId : undefined;
            resourceInputs["assetName"] = args ? args.assetName : undefined;
            resourceInputs["container"] = args ? args.container : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["encryptionScope"] = args ? args.encryptionScope : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["storageAccountName"] = args ? args.storageAccountName : undefined;
            resourceInputs["assetId"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["created"] = undefined /*out*/;
            resourceInputs["lastModified"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["storageEncryptionFormat"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["alternateId"] = undefined /*out*/;
            resourceInputs["assetId"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["container"] = undefined /*out*/;
            resourceInputs["created"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["encryptionScope"] = undefined /*out*/;
            resourceInputs["lastModified"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["storageAccountName"] = undefined /*out*/;
            resourceInputs["storageEncryptionFormat"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:media/v20180330preview:Asset" }, { type: "azure-native:media/v20180601preview:Asset" }, { type: "azure-native:media/v20180701:Asset" }, { type: "azure-native:media/v20200501:Asset" }, { type: "azure-native:media/v20210601:Asset" }, { type: "azure-native:media/v20211101:Asset" }, { type: "azure-native:media/v20220801:Asset" }, { type: "azure-native:media/v20230101:Asset" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Asset.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Asset resource.
 */
export interface AssetArgs {
    /**
     * The Media Services account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * The alternate ID of the Asset.
     */
    alternateId?: pulumi.Input<string>;
    /**
     * The Asset name.
     */
    assetName?: pulumi.Input<string>;
    /**
     * The name of the asset blob container.
     */
    container?: pulumi.Input<string>;
    /**
     * The Asset description.
     */
    description?: pulumi.Input<string>;
    /**
     * The Asset container encryption scope in the storage account.
     */
    encryptionScope?: pulumi.Input<string>;
    /**
     * The name of the resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the storage account.
     */
    storageAccountName?: pulumi.Input<string>;
}